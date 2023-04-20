---
layout: post
title: Ubuntu 22.04 下 安装配置 mysql-8.0
date: 2023-04-13 04:05:44
categories: 
    - 数据库
    - mysql
tags:
  - mysql
  - linux
  - ubuntu
  - 数据库
---

## 安装MYSQL
```bash
shell>  apt install mysql-server-8.0 mysql-client-8.0
```

## 配置可远程访问

修改 /etc/mysql/mysql.conf.d/mysqld.conf中
```
bind-address = 0.0.0.0
```
## 查看debian-sys-maint用户信息
```bash
shell> cat /etc/mysql/debian.cnf #查看密码
```

## 修改root可远程访问，修改root密码
```bash
shell> mysql -u debian-sys-maint -p
mysql> update mysql.user set host='%' where user='root'; #第一行用来修改 root 可远程访问
mysql> select user,host from mysql.user; #查看是否修改成功
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password'; #修改密码
mysql> flush privileges; #刷新启用新配置
```

## 重启MYSQL
```bash
root@ubuntu:~# systemctl restart mysql
```

## 无法使用Root登录及密码修改问题解决方案

首先使用MySQL在Ubuntu等系统下的一个特殊用户身份进入MySQL环境

1. 查看debian-sys-maint用户信息
```bash
shell> cat /etc/mysql/debian.cnf
```

2. 使用debian-sys-maint用户登录MySQL ，密码为debian.cnf中的密码
```bash
shell> mysql -u debian-sys-maint -p
```

3. 删除原来的Root/普通用户
```bash
mysql> use mysql;
mysql> delete from user where user = 'root';
```

4. 新建Root/普通用户
```bash
mysql> create user 'root'@'%' identified by 'password';
权限授予
mysql> grant all privileges on . to 'root'@'%' with grant option;
刷新权限
mysql> flush privileges;
```
5. 使用Root登录
``` bash
mysql> exit;
shell> mysql -u root -p
```
