# Vultr Ubuntu 初始化

## 连接服务器

1. 用 `ssh` 连接服务器

   ```sh
   ssh root@your.ip.or.domain
   ```

   ```sh
   The authenticity of host 'your.ip.or.domain (ipv4/ipv6)' can't be established.
   ED25519 key fingerprint is SHA256:alonghash.
   This key is not known by any other names
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```

2. 输入 `yes`

   ```sh
   Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
   Warning: Permanently added 'your.ip.or.domain' (ED25519) to the list of known hosts.
   root@your.ip.or.domain's password:
   ```

3. 输入 `password_from_vultr`

   ```sh
   root@your.ip.or.domain's password:
   Welcome to Ubuntu 21.10 (GNU/Linux 5.13.0-28-generic x86_64)

   - Documentation: https://help.ubuntu.com
   - Management: https://landscape.canonical.com
   - Support: https://ubuntu.com/advantage

   System information as of Mon Feb 28 08:01:47 AM UTC 2022

   System load: 2.4
   Usage of /: 6.9% of 639.41GB
   Memory usage: 3%
   Swap usage: 0%
   Processes: 214
   Users logged in: 0
   IPv4 address for enp1s0: ipv4
   IPv6 address for enp1s0: ipv6

   39 updates can be applied immediately.
   33 of these updates are standard security updates.
   To see these additional updates run: apt list --upgradable

   The programs included with the Ubuntu system are free software;
   the exact distribution terms for each program are described in the
   individual files in /usr/share/doc/\*/copyright.

   Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
   applicable law.

   root@HostName:~#
   ```

## 更新系统

```sh
apt update && apt upgrade -y
```

```sh
Hit:1 http://us.clouds.archive.ubuntu.com/ubuntu impish InRelease
Hit:2 http://security.ubuntu.com/ubuntu impish-security InRelease
Hit:3 http://us.clouds.archive.ubuntu.com/ubuntu impish-updates InRelease
Hit:4 http://us.clouds.archive.ubuntu.com/ubuntu impish-backports InRelease
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
All packages are up to date.
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Calculating upgrade... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@HostName:~#
```

## 设置用户

1. 为 `root` 用户添加密码

   ```sh
   passwd
   ```

   ```sh
   New password:
   ```

2. 输入 `password_by_yourself`

   ```sh
   New password:
   Retype new password:
   passwd: password updated successfully
   ```

3. 用 `adduser` 新建用户

   ```sh
   adduser user
   ```

   ```sh
   Adding user `user' ...
   Adding new group `user' (1001) ...
   Adding new user `user' (1001) with group `user' ...
   Creating home directory `/home/user' ...
   Copying files from `/etc/skel' ...
   New password:
   ```

4. 输入 `password_by_yourself`

   ```sh
   New password:
   Retype new password:
   passwd: password updated successfully
   Changing the user information for user
   Enter the new value, or press ENTER for the default
           Full Name []:
   ```

5. 输入 `your_information`

   ```sh
           Full Name []: First Last
           Room Number []: 000
           Work Phone []: 12345678
           Home Phone []: 12345678911
           Other []: ...
   Is the information correct? [Y/n]
   ```

6. 输入 `y`

   ```sh
   Is the information correct? [Y/n] y
   ```

7. 使创建的 `user` 加入 `sudo` 组

   ```sh
   usermod -aG sudo user
   ```

   ```sh
   root@HostName:~#
   ```

## 设置密钥连接

1. 本地创建 `ssh` 密钥

   ```bat
   ssh-keygen -t rsa
   ```

   ```bat
   Generating public/private rsa key pair.
   Enter file in which to save the key (C:\Users\User/.ssh/id_rsa):
   ```

2. 输入`/path/to/id_rsa`

   ```bat
   Enter file in which to save the key (C:\Users\User/.ssh/id_rsa):
   Created directory 'C:\Users\User/.ssh'.
   Enter passphrase (empty for no passphrase):
   ```

3. 输入 `passphrase_by_yourself`

   ```bat
   Enter passphrase (empty for no passphrase):
   Enter same passphrase again:
   Your identification has been saved in C:\Users\User/.ssh/id_rsa
   Your public key has been saved in C:\Users\User/.ssh/id_rsa.pub
   The key fingerprint is:
   SHA256:alonghash user@HostName
   The key's randomart image is:
   +---[RSA 3072]----+
   |              o  |
   |           . + + |
   |            = = .|
   |       .   E B + |
   |    . S     . = .|
   |     . .  .    o.|
   |    o = o .o ...o|
   |   o *.=..+.+.+oo|
   |  . oo=+..oB==+==|
   +----[SHA256]-----+
   ```

4. 上传 `id_rsa`

   ```bat
   scp ~/.ssh/id_rsa.pub user@your.ip.or.domain:~
   ```

   ```bat
   user@HostName.letsshareall.com's password:
   ```

5. 输入 `password_by_yourself`

   ```bat
   user@HostName.letsshareall.com's password:
   id_rsa.pub                                             100%  572     2.3KB/s   00:00
   ```

6. 服务器端切换用户

   ```sh
   su user
   ```

   ```sh
   To run a command as administrator (user "root"), use "sudo <command>".
   See "man sudo_root" for details.
   ```

7. 将 `id_rsa.pub` 添入 `authorized_keys`

   ```sh
   cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
   ```

8. 试验是否能通过密钥登录

   ```bat
   ssh -i ~/.ssh/id_rsa user@your.ip.or.domain
   ```

   ```bat
   Enter passphrase for key 'C:\Users\user\.ssh\id_rsa':
   ```

9. 输入 `passphrase_by_yourself`

   ```bat
   Enter passphrase for key 'C:\Users\user\.ssh\id_rsa':
   Welcome to Ubuntu 21.10 (GNU/Linux 5.13.0-28-generic x86_64)

    * Documentation:  https://help.ubuntu.com
    * Management:     https://landscape.canonical.com
    * Support:        https://ubuntu.com/advantage

     System information as of Mon Feb 28 08:52:50 AM UTC 2022

     System load:             0.0
     Usage of /:              8.0% of 639.41GB
     Memory usage:            2%
     Swap usage:              0%
     Processes:               205
     Users logged in:         1
     IPv4 address for enp1s0: ipv4
     IPv6 address for enp1s0: ipv6


   0 updates can be applied immediately.


   *** System restart required ***
   To run a command as administrator (user "root"), use "sudo <command>".
   See "man sudo_root" for details.

   user@HostName:~$
   ```

10. 编辑 `sshd_config` 关闭**密码登录**及 **ROOT 用户**登录

    ```sh
    sudo vim /etc/ssh/sshd_config
    [sudo] password for user:
    ```

11. 输入 `password_by_yourself`

    ```sh
    [sudo] password for user:

    "/etc/ssh/sshd_config"
    #TCPKeepAlive yes
    #PermitUserEnvironment no
    #Compression delayed
    #ClientAliveInterval 0
    #ClientAliveCountMax 3
    #UseDNS no
    #PidFile /var/run/sshd.pid
    #MaxStartups 10:30:100
    #PermitTunnel no
    #ChrootDirectory none
    #VersionAddendum none
    ```

12. 使用 `Shift` + `G` 跳至行尾

    ```sh
    PasswordAuthentication yes
    PermitRootLogin yes
    ```

13. 使用 `I` 进入 **Insert** 模式

14. 将 `yes` 改为 `no`

    ```sh
    PasswordAuthentication no
    PermitRootLogin no
    ```

15. 重启 `sshd` 服务

    ```sh
    sudo service sshd restart
    ```

16. 本地添加 `config` 文件以方便后续登录

    ```bat
    echo "HostName_by-yourself" >> ~/.ssh/config
    echo "  Port 22" >> ~/.ssh/config
    echo "  HostName your.ip.or.domain" >> ~/.ssh/config
    echo "  User user" >> ~/.ssh/config
    echo "  IdentityFile ~/.ssh/id_rsa" >> ~/.ssh/config
    echo "  IdentitiesOnly yes" >> ~/.ssh/config
    ```

17. 将 `.ssh` 添入 `path`

18. 试验快捷登录

    ```bat
    ssh HostName_by_yourself
    ```

## 安装 `lnmpa`

```sh
wget http://soft.vpser.net/lnmp/lnmp1.9beta.tar.gz -cO lnmp1.9beta.tar.gz && tar zxf lnmp1.9beta.tar.gz && cd lnmp1.9 && ./install.sh lnmpa
```
