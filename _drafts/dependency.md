# 安装依赖

## 安装 Redis

```sh
sudo apt install redis redis-server -y
```

## 安装 Chrome Binary（可选）

::: warning
若是 Aarch64 架构不可跳过，若是其他架构云崽运行时报错 `puppeteer 启动失败` 可再来安装
:::

::: tip
可使用 `uname -a` 查看系统架构。
:::

```sh
sudo apt install chromium-browser -y
```

## 安装其他依赖

```sh
sudo apt install libgbm-dev libasound2-dev libatk1.0-0 libcups2 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libpango-1.0-0 libcairo2 libatk-bridge2.0-0 -y
```

## 安装字体

```sh
sudo apt install -y --force-yes --no-install-recommends fonts-wqy-microhei
```

::: tip

1. 若云崽发送的图片中会出现`？`或者`□`等符号，则可尝试安装其他中文字体解决。

2. 自定义安装中文字体：

   1. 安装字体管理软件（可选）

      ::: warning
      某些精简系统可能没有字体管理软件，可通过 `fc-list` 命令查看，若提示 `Command not found`，则此步不可跳过。
      :::

      ```sh
      sudo apt install xfonts-utils -y
      sudo apt install fontconfig -y
      ```

   2. 安装中文字体

      ::: info
      此处以原神字体为例。
      :::

      ```sh
      sudo mkdir -p /usr/share/fonts/truetype/mihoyo && cd /usr/share/fonts/truetype/mihoyo
      sudo wget https://file.letsshareall.com/others/fonts/汉仪文黑-85W_Heavy.ttf -O HanyiWenhei85W-Heavy.ttf
      sudo fc-cache -fv
      ```

      ::: tip
      安装完成后可运行 `fc-list :lang=zh` 查看是否安装成功。若显示 `SDK_SC_Web,汉仪文黑,汉仪文黑\-85W:style=85W,Heavy` 即安装成功。
      :::

:::

## 安装 FFmpeg（可选）

::: danger
若要使用语言功能插件，则一定得安装 FFmpeg。
:::

1. 安装编译工具

   ```sh
   sudo apt install gcc g++ make yasm -y
   ```

2. 下载、编译并安装 `opencore-amr`

   ```sh
   cd /usr/local/src
   sudo wget https://sourceforge.net/projects/opencore-amr/files/opencore-amr/opencore-amr-0.1.5.tar.gz/download
   sudo tar -xf download -C .
   sudo mkdir opencore-amr-0.1.5/build && cd opencore-amr-0.1.5/build
   sudo ../configure
   sudo make && sudo make install
   ```

3. 克隆、编译并安装 `ffmpeg`

   ```sh
   cd /usr/local/src
   sudo git clone --depth=1 https://git.ffmpeg.org/ffmpeg.git ffmpeg
   sudo mkdir ffmpeg/build && cd ffmpeg/build
   sudo ../configure --enable-gpl --enable-version3 --enable-nonfree --disable-ffplay --disable-ffprobe --enable-libopencore-amrnb --enable-libopencore-amrwb
   sudo make && sudo make install
   ```

::: tip

1. 若运行 `git clone` 命令时提示 `Command not found`，可通过运行以下命令解决：

   ```sh
   sudo add-apt-repository ppa:git-core/ppa
   sudo apt update && sudo apt install git -y
   ```

2. 若在运行 `../configure` 命令时提示 `WARNING: pkg-config not found, library detection may fail.`，可通过运行 `sudo apt install pkg-config -y` 解决，之后再运行 `../configure`。
3. 以上在 `/usr/local/src` 中的文件在安装成功之后都可以选择删除，若以后需要重新编译，可再把源码下载下来进行操作。
4. 安装完 FFmpeg 后运行时出现 `ffmpeg: error while loading shared libraries: *.so.0: cannot open shared object file: No such file or directory` 这类的消息，可尝试运行以下命令解决：

   ```sh
   sudo sh -c "echo '/usr/local/lib'  /etc/ld.so.conf"
   sudo ldconfig
   ```

:::

## 安装 Python3（可选）

::: warning
若要使用黄历等需要 Python 3.8 或以上的插件，则此步不可跳过
:::

::: tip

1. 可使用 `python3 --version` 查看 Python 版本，若在 `3.8` 以上即可跳过这步。
2. 若想使用 `python3` 来代替 `python`，可以运行 `sudo apt install python-is-python3` 命令更改 `python` 使其指向 `python3`。

:::

1. 安装编译环境

   ```sh
   sudo apt install -y zlib1g zlib1g-dev libffi-dev openssl libssl-dev
   ```

2. 下载、编译并安装 `python3`

   ```sh
   cd /usr/local/src
   sudo wget https://www.python.org/ftp/python/3.10.7/Python-3.10.7.tar.xz
   sudo tar -xf Python-3.10.7.tar.xz
   sudo mkdir Python-3.10.7/build && cd Python-3.10.7/build
   sudo ../configure
   sudo make && sudo make install
   ```

::: tip

1. 若使用 `python3` 命令时提示 `Command not found`，请使用以下命令修复：

   ```sh
   sudo rm -rf /usr/bin/python3
   sudo ln -s /usr/bin/python3.10 /usr/bin/python3
   ```

2. 若想保持黄历使用 `python` 命令，可使用以下命令更改 `python` 的使用版本：

   ```sh
   sudo rm -rf /usr/bin/python
   sudo ln -s /usr/bin/python3.10 /usr/bin/python
   sudo rm -rf /usr/bin/pip
   sudo ln -s /usr/bin/pip3.10 /usr/bin/pip
   ```

3. 若使用 `pip` 命令时提示 `Command not found`，可使用 `sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install python3-pip -y` 修复。

:::

::: warning

1. 黄历插件调用 Python 时使用的是 `python` 而不是 `python3`，可将其改为 `python3`。

2. 使用 `python3` 命令时，安装模块的命令为 `pip3` 而非 `pip`。

3. 将 `python` 指向 `python3` 后，可能会导致 Cent OS 等系统使用 `yum` 命令出错，请使用 `vim /usr/bin/yum` 命令编辑 yum 文件并将文件开头 `#!/usr/bin/python` 改为 `#!/usr/bin/python2`。

:::
