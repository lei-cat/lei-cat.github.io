---
layout: post
title: OCWMS Server生产环境配置信息
date: 2023-04-13 07:30:00
categories: 
    - linux
    - centos
tags:
  - server
---


## apache静态页面存放路径
```
html -> /var/www/html/
```

## ocwms jar存放路径
```
jar -> /usr/local/jar
```

## startspring.sh 启动脚本
```bash
nohup /usr/lib/jvm/jdk-11.0.12/bin/java -jar ocwms.jar -Ddruid.mysql.usePingMethod=false >> springboot.log 2>&1 &
```

## down.sh 停止脚本
```bash
kill -9 $(ps aux | grep ocwms |grep -v 'grep'| tr -s ' '| cut -d ' ' -f 2)
```

## jar包拷贝
```bash
rm -f ocwms.jar
cp ~/ocwms-0.0.3-SNAPSHOT.jar ocwms.jar
chmod +x ocwms.jar
```


