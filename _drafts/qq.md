# QQ 登录提示存在安全风险解决方法

## 以下提供几种方法

### 在 WSL 上登录

可以尝试先在 WSL 上登录账号。

::: info
**提示**：该方法也可以使用其他的 Linux 虚拟机。如果有能力的话，也可以直接在本地 Windows 或是安卓上进行以下操作。
:::

成功以后进行以下操作。

#### **WSL** 上操作

1. 进入 `Yunzai-Bot` 文件夹。

   ```sh
   cd /path/to/Yunzai-Bot
   ```

2. 使用 `tar` 命令打包上的 `Yunzai-Bot/data` 文件夹。

   ```sh
   tar -cf data.tar data
   ```

3. 将 `data.tar` 从 **WSL** 上传至**服务器**。

   ```sh
   scp data.tar user@server.ip:/path/to/Yunzai-Bot/
   ```

#### **服务器**上操作

1. 进入 `Yunzai-Bot` 文件夹。

   ```sh
   cd /path/to/Yunzai-Bot
   ```

2. 删除**服务器**上的 `Yunzai-Bot/data` 文件夹。

   ```sh
   rm -rf data
   ```

3. 解压 `data.tar` 至 `Yunzai-Bot` 文件夹。

   ```sh
   tar -xf data.tar -C data
   ```

4. 使用 `node app` 启动项目。

   ```sh
   node app
   ```

### 使用 VPN 进行登录

你可以在服务器端搭建 VPN（_PPTP_、_v2ray_ 什么的），之后手机上以**全局模式**连接此 VPN，再进行扫码登录的操作。

具体操作比较麻烦，可以百度以下。

### 在服务端使用 Windows

> **注意**：该灵感来自[这里](https://github.com/Le-niao/Yunzai-Bot/issues/106#issuecomment-1120669801 "Github/Yunzai-Bot/Issue-106")。

先使用 Windows 系统登录 QQ 挂几天，再将服务器改为 Linux 系统使用云崽。
