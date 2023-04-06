---
layout: post
title: github基本用法
date: 2023-04-07 04:31:04
updated: 2023-04-7 05:48:05
categories: github 笔记
tags:
  - github
  - 笔记
---

介绍github相关配置操作，包括初始化、密钥生成和代码提交等。

## 初始化仓库

在工作目录中创建新的git仓库。

```bash
git init
```

如果已经创建git仓库，检查用户名邮箱是否配置。

```bash
git config --global --list
```

如果没有配置，需要进行配置。

```shell
# your name 表示自己的用户名
git config --global user.name "your name"
# your email 表示自己的邮箱
git config --global user.email "your email"
```

连接远程仓库。
```shell
# your address 表示自己的仓库地址
git remote add origin git@github.com:your address
```

至此，git仓库的初始化完成。

## 生成密钥
为了向远程仓库提交代码，需要生成密钥，并在github上进行配置。
切换到~/.ssh文件夹。
```shell
# your email 表示自己的邮箱
ssh-keygen -t rsa -C "your email"
```

参数-t表示加密方式，rsa表示使用的加密方式为ras，-C表示备注。此时~/.ssh下生成两个文件，id_rsa和id_rsa.pub，其中id_rsa.pub为公钥，打开并复制文件中所有内容。

登录github在setting中的SSH and GPG keys中，创建新的SSH key，将复制的id_rsa.pub内容添加到对应位置。

至此，密钥生成和配置完成。

## 代码获取
从远程获取代码并合并本地的版本。
```shell
# remote 表示远程主机名，remote_branch 表示远程分支名，local_branch 表示本地分支名
git pull "remote" "remote_branch":"local_branch"
```

一般情况下，用到的命令如下所示。
```shell
# remote_branch 表示远程分支名，local_branch 表示本地分支名
git pull origin "remote_branch":"local_branch"
```

## 代码提交
添加代码到本地缓存区。
```shell
git add .
```

提交代码到本地仓库。
```shell
# description 表示自己对此次提交的描述信息
git commit -m "description"
```

推送代码到远程仓库。
```shell
# branch 表示提交的远程分支，一般为main
git push origin branch
```

## 版本回退
代码回退到指定版本。
```shell
# commit 表示想要回退到的版本号
git reset --hard commit
```

## 新建分支

创建新分支。
```shell
# new_branch 表示新分支名
git checkout -b new_branch
```

提交新分支至远程仓库。
```shell
# new_branch 表示新分支名
git push origin new_branch
```

合并分支代码到主分支上。
```shell
# 切换回主分支，这里的主分支为main
git checkout main
# 查看当前所在分支
git branch
# 合并到主分支上，这里的新创建分支为new_branch
git merge new_branch
```
