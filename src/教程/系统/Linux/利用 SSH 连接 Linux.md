---
title: 利用 SSH 连接 Termux
date: 2022-10-07 11:58:46
category: 系统 Linux
tag: 教程 SSH Linux
---

1. 安装 OpenSSH
   - Debian/Ubuntu
     sudo apt install openssh-server
   - RHEL/CentOS
     sudo yum install openssh-server
   - Arch
     sudo pacman -S openssh
2. 修改 SSH 端口
   若为 WSL，此项一定要修改。
   sudo vim /etc/ssh/sshd_config
   找到以下项并将其配置为以下值：
   Port 2222
3. 启用 OpenSSH 服务
   sudo systemctl enable sshd && \
   sudo systemctl start sshd
4. 生成密钥对
   一般在本地进行
   ssh-keygen -t rsa
5. 添加 SSH 配置
   一般在本地执行
   touch ~/.ssh/config
   - \*Unix
     vim ~/.ssh/config
   - Windows
     notepad ~/.ssh/config
     在 Windows 上使用带有“~”的路径时请在输入完后使用“Tab”建进行自动补全。
     填入以下配置
     HostName <HostName>
     Host <server.address>
     Port 22
     User <username>
     IdentifyFile ~/.ssh/id_rsa
6. 上传私钥
   scp ~/.ssh/id_rsa.pub <HostName>:~
   此时应该会要求输入服务端密码。
7. 添加公钥
   cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
   公钥添加完毕后可删除
   rm -rf ~/id_rsa.pub
   若提示无此文件，请手动创建并赋予正确权限。
   mkdir ~/.ssh && \
   chmod 700 ~/.ssh && \
   touch ~/.ssh/authorized_keys && \
   chmod 600 ~/.ssh/authorized_keys
8. 测试是否能够正确连接
   一般在本地执行
   ssh <HostName>
   若连接时无需输入密码则成功。
9. 配置 SSH
   一般在服务端执行
   sudo vim /etc/ssh/sshd_config
   找到并更改如下项的配置
   PermitRootLogin no
   PasswordAuthentication no
10. 重启 SSH
    sudo systemctl restart sshd
