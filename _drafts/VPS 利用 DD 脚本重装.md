wget --no-check-certificate -O AutoReinstall.sh https://git.io/AutoReinstall.sh && bash AutoReinstall.sh
Default:
username: root
password: Pwd@Linux

passwd

hostnamectl set-hostname HostName

dpkg-reconfigure dash
No

useradd -m username -s /bin/bash
usermod -aG sudo username

passwd username

apt update && apt upgrade -y
apt install sudo wget curl vim -y

su username

sudo vim /etc/passwd
username:x:1000:1000::/home/username:/bin/sh

cd ~
mkdir .ssh && chmod 700 .ssh
vim .ssh/authorized_keys
chmod 600 .ssh/authorized_keys

sudo vim /etc/ssh/sshd_config
PermitRootLogin yes -> no
PasswordAuthentication yes -> no
sudo service sshd restart