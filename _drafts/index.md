# 安装插件（可选）

## 安装喵喵插件

```sh
cd ~/Yunzai-Bot
git clone --depth=1 https://github.com/yoimiya-kokomi/miao-plugin ./plugins/miao-plugin
npm install moment
```

::: tip
若 `git clone` 命令执行太慢或失败，可切换为 [miao-plugin@Gitee](https://gitee.com/yoimiya-kokomi/miao-plugin.git "Gitee/miao-plugin（可右击选择复制）")。
:::

## 安装 Py 插件

::: warning
此插件需要[安装 Python 3.X](#安装 Python3（可选） "安装 Python3（可选）")。
:::

```sh
cd ~/Yunzai-Bot
git clone https://github.com/lcwf/python-plugin.git ./plugins/python-plugin
npm install node-schedule
python -m venv venv
source venv/bin/activate
cd ~/Yunzai-Bot/plugins/python-plugin
pip install -r requirement.txt
```

::: tip

1. 若 `git clone` 命令执行太慢或失败，可切换为 [python-plugin@Gitee](https://gitee.com/linglinglingling-python/python-plugin.git "Gitee/python-plugin（可右击选择复制）")。

2. 若 `pip install` 命令执行太慢或失败，可在命令后添加参数 `-i https://mirrors.aliyun.com/pypi/simple`。

:::

::: warning

1. 若未使用 `python -m venv venv` 命令创建 Python 虚拟环境，安装依赖后（即运行 `pip install -r requirement.txt`）后，可能需要运行以下命令更改环境变量以使得某些依赖得以正常运行。

   ```sh
   echo export PATH="~/.local/bin:$PATH"  ~/.bashrc
   source ~/.bashrc
   ```

2. 使用虚拟环境之后，在运行项目前可能需要先进入虚拟环境中，即运行 `npm start` 之类的命令时，可能需要先运行 `source ~/Yunzai-Bot/venv/bin/activate` 命令。

3. 更多插件可前往[Yunzai-Bot-Plugins-index@Github](https://github.com/yhArcadia/Yunzai-Bot-plugins-index "yhArcadia/Yunzai-Bot-plugins-index: Yunzai-Bot云崽QQ机器人插件索引")（（国内[Yunzai-Bot-plugins-index@Gitee](https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index "Yunzai-Bot-plugins-index: Yunzai-Bot云崽QQ机器人插件索引")） 查看。

:::
