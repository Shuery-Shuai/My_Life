# 安装 QEMU

```sh
 pkg install qemu-utils qemu-common qemu-system-x86_64-headless
```

## 下载 Linux 镜像

```sh
 mkdir alpine && cd $_
 wget http://dl-cdn.alpinelinux.org/alpine/v3.16/releases/x86_64/alpine-virt-3.16.2-x86_64.iso
```

:::tip
Ubuntu 镜像：<https://releases.ubuntu.com/22.04.1/ubuntu-22.04.1-live-server-amd64.iso>
:::

## 创建磁盘

```sh
 qemu-img create -f qcow2 alpine.img 16G
```

## Boot it up

```sh
qemu-system-x86_64 -machine q35 -m 4G -smp cpus=8 -cpu qemu64 \
  -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
  -netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
  -cdrom alpine-virt-3.16.2-x86_64.iso \
  -nographic alpine.img
```

## Login with user root (no password)

## Setup network (press Enter to use defaults)

```sh
 localhost:~# setup-interfaces
 Available interfaces are: eth0.
 Enter '?' for help on bridges, bonding and vlans.
 Which one do you want to initialize? (or '?' or 'done') [eth0]
 Ip address for eth0? (or 'dhcp', 'none', '?') [dhcp]
 Do you want to do any manual network configuration? [no]
 localhost:~# ifup eth0
```

## Create an answerfile to speed up installation:

```sh
localhost:~# wget https://gist.githubusercontent.com/oofnikj/e79aef095cd08756f7f26ed244355d62/raw/answerfile
```

## Patch setup-disk to enable serial console output on boot

```sh
localhost:~# sed -i -E 's/(local kernel_opts)=.*/\1="console=ttyS0"/' /sbin/setup-disk
```

## Run setup to install to disk

```sh
localhost:~# setup-alpine -f answerfile
```

## Changing password for root

```sh
New password:
Retype password:
Passwords don't match
passwd: password for root is unchanged
Please retry.
Changing password for root
New password:
Retype password:
passwd: password for root changed by root
Setup a user? (enter a lower-case loginname, or 'no') [no] shuery
Full name for user shuery [shuery] Shuery Shuai
Changing password for shuery
New password:
Retype password:
passwd: password for shuery changed by root
Enter ssh key or URL for shuery (or 'none') [none]
WARNING: The following disk(s) will be erased:
  sda   (4.3 GB ATA      QEMU HARDDISK   )
WARNING: Erase the above disk(s) and continue? (y/n) [n] y
```

## Once installation is complete, power off the VM (command poweroff) and boot again without cdrom

```sh
qemu-system-x86_64 -machine q35 -m 4G -smp cpus=8 -cpu qemu64 \
  -drive if=pflash,format=raw,read-only=on,file=$PREFIX/share/qemu/edk2-x86_64-code.fd \
  -netdev user,id=n1,hostfwd=tcp::2222-:22 -device virtio-net,netdev=n1 \
  -nographic alpine.img
```

## Install docker and enable on boot:

```sh
alpine:~# apk update && apk add docker
alpine:~# service docker start
alpine:~# rc-update add docker

```

:::tip
Useful keys:

Ctrl+a x: quit emulation
Ctrl+a h: toggle QEMU console
:::

```sh
Setup a user? (enter a lower-case loginname, or 'no') [no] shuery
Full name for user shuery [shuery] Shuery Shuai
Changing password for shuery
New password:
Retype password:
passwd: password for shuery changed by root
Enter ssh key or URL for shuery (or 'none') [none]
```

```sh
apk add vim sudo
```
