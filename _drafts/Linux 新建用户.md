---
layout: post
title: Linux 新建用户
date: 2022-10-07 11:54:47 +0800
categories: 系统 Linux
tags: 教程 Linux
---

# Linux 新建用户

## Debian 新建用户

- 利用 `useradd`

```sh
useradd -m /home/username -s /bin/bash username
```

- 利用 `adduser`

```sh
adduser username
```

## 设置为 sudo 组

### Debian

```sh
usermod -aG groupname username
```

### Arch

```sh
usermod -aG wheel username
```

```sh
vim /etc/sudoers
```

/wheel

取消注释
