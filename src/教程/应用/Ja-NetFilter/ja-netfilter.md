# ja-netfiler\_使用方法

> **提示**：若没有正常显示，请先安装浏览器插件之后再浏览。推荐 [Markdown Viewer](https://github.com/simov/markdown-viewer "simov/markdown-viewer: Markdown Viewer / Browser Extension")，其[在 Edge 外接程序的下载地址](https://microsoftedge.microsoft.com/addons/detail/markdown-viewer/cgfmehpekedojlmjepoimbfcafopimdg?hl=zh-CN "Markdown Viewer - Microsoft Edge Addons")，此地址的扩展程序 **Chromium 内核浏览器**应该都可以用。使用方法本初不赘述，详情请见 [Github 仓库](https://github.com/simov/markdown-viewer#advanced-options "Advanced Options")。
>
> **注意**：以下**仅以** [JetBrains](https://jetbrains.com "JetBrains: Essential tools for software developers and teams") 下的 [InteliJ IDEA](https://www.jetbrains.com/idea/ "IntelliJ IDEA: The Capable & Ergonomic Java IDE by JetBrains") _2021.3.2_ 版本**举例**。

## 下载\_ja-netfilter

1. 前往 [ja-netfilter](https://github.com/ja-netfilter/ja-netfilter "ja-netfilter/ja-netfilter: A javaagent framework") 项目地址下载[软件](https://github.com/ja-netfilter/ja-netfilter/releases/download/2022.1.0/ja-netfilter-2022.1.0.zip "ja-netfilter-2022.1.0.zip")。

2. 将 _ja-netifilter_ 解压至任意你想放置它的目录。

## 配置\_IntelliJ_IDEA

1. 首先安装 _IntelliJ IDEA_，使用以下激活码激活：

   PM0HXXLQR6-eyJsaWNlbnNlSWQiOiJQTTBIWFhMUVI2IiwibGljZW5zZWVOYW1lIjoi5rC45LmF5r+A5rS7IHd3d8K3YWppaHVvwrdjb20iLCJhc3NpZ25lZU5hbWUiOiIiLCJhc3NpZ25lZUVtYWlsIjoiIiwibGljZW5zZVJlc3RyaWN0aW9uIjoiIiwiY2hlY2tDb25jdXJyZW50VXNlIjpmYWxzZSwicHJvZHVjdHMiOlt7ImNvZGUiOiJEUE4iLCJwYWlkVXBUbyI6IjIwMjItMDMtMjUiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IkRCIiwicGFpZFVwVG8iOiIyMDIyLTAzLTI1IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJQUyIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiSUkiLCJwYWlkVXBUbyI6IjIwMjItMDMtMjUiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJTQyIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJHTyIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiRE0iLCJwYWlkVXBUbyI6IjIwMjItMDMtMjUiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJTRiIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJEUyIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUEMiLCJwYWlkVXBUbyI6IjIwMjItMDMtMjUiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJDIiwicGFpZFVwVG8iOiIyMDIyLTAzLTI1IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJDTCIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiV1MiLCJwYWlkVXBUbyI6IjIwMjItMDMtMjUiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJEIiwicGFpZFVwVG8iOiIyMDIyLTAzLTI1IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSUzAiLCJwYWlkVXBUbyI6IjIwMjItMDMtMjUiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJNIiwicGFpZFVwVG8iOiIyMDIyLTAzLTI1IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJBQyIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUlNWIiwicGFpZFVwVG8iOiIyMDIyLTAzLTI1IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IkRDIiwicGFpZFVwVG8iOiIyMDIyLTAzLTI1IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSU1UiLCJwYWlkVXBUbyI6IjIwMjItMDMtMjUiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IkRQIiwicGFpZFVwVG8iOiIyMDIyLTAzLTI1IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBEQiIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQV1MiLCJwYWlkVXBUbyI6IjIwMjItMDMtMjUiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUFNJIiwicGFpZFVwVG8iOiIyMDIyLTAzLTI1IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBQUyIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQQ1dNUCIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQR08iLCJwYWlkVXBUbyI6IjIwMjItMDMtMjUiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUFBDIiwicGFpZFVwVG8iOiIyMDIyLTAzLTI1IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBSQiIsInBhaWRVcFRvIjoiMjAyMi0wMy0yNSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQU1ciLCJwYWlkVXBUbyI6IjIw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

   > **注意**：**登录账号**不知道有无影响，没试过，谁有时间可以试下，没有的话此处**建议现不登录**。
   >
   > **提示**：若以上激活码无效，可以在大佬提供的[激活码网站](jetbra.in "Some keys for testing - jetbra.in")查找相应激活码并使用。

2. 激活后退出软件，打开 `%appdata%/JetBrains/IntelliJIdea2021.3/idea64.exe.vmoptions` 文件，添加 `-javaagent:/path/to/ja-netfilter/ja-netfilter.jar=jetbrians` 参数。配置完成后如下所示：

   ```bat
   -Xmx2034m
   -javaagent:/path/to/ja-netfilter/ja-netfilter.jar=jetbrians
   ```

   > **注意**：此处文件内内容仅作参考，配置文件中的 `ja-netfilter.jar` 位置一定不同。

## 配置\_ja-netifilter

1. 打开 `/path/to/ja-netfilter/config/dns.conf`，添加行 `EQUAL,jetbrains.com`。后如下所示：

   ```sh
   [DNS]
   ; put dns filter rules here

   ; JetBrains
   EQUAL,jetbrains.com
   ```

2. 打开 `/path/to/ja-netfilter/config/url.conf`，添加行 `PREFIX,https://account.jetbrains.com/lservice/rpc/validateKey.action`。后如下所示：

   ```sh
   [URL]
   ; put url filter rules here

   ; JetBrains
   PREFIX,https://account.jetbrains.com/lservice/rpc/validateKey.action
   ```

## 打开\_IntelliJ_IDEA

打开 _IntelliJ IDEA_ 查看**管理许可证**看看是否激活至 _2023 年_。

## 推广

- 大佬的[教程网址](https://zhile.io/2021/11/29/ja-netfilter-javaagent-lib.html "介绍一个“牛逼闪闪”的开源库：ja-netfilter | 知了")。
- Jetbra.in 的[地址](https://jetbra.in "Jetbra.in")。

---

> **提示**：_恭喜_！看到这里意味着你发现了最简单的方法！

## 使用\_ja-netfilter-all

1. 下载大佬提供的 [ja-netfilter-all.zip](https://jetbra.in/files/ja-netfilter-all-fdfe73eaad926391cedbf0689809ecacdbcced5c.zip "Jetbra.in")。
2. 解压至喜欢的文件夹。
3. _Windows_ 运行 `/path/to/ja-netfilter-all/scripts/install-current-user.vbs` 或 `install-all-users.vbs`。_\*nix_ 系统运行 `install.sh`。

> **提示**：具体方法可以查看 _readme.txt_。

## 插件的激活

1. 打开**许可证管理**。
2. 选中**插件**。
3. 选中**许可证服务器**。
4. 填写 <https://jetbra.in>
5. 点击**激活**。
6. 等待**激活**。
