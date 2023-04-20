---
layout: post
title: 在Mac上关闭和启用SIP
date: 2023-04-21 03:37:07
categories: 
    - MacOS
---

在sip系统完整性关闭前，我们先检查是否启用了SIP系统完整性保护?

方法一、使用终端

打开终端
输入以下命令并回车csrutil status

![status](https://pic60.mac89.com/orsoon/pic/202111/08135329_0dd1852991.jpeg)

你会看到以下信息中的一个，指示SIP状态

已打开 System Integrity Protection status: enabled.

已关闭 System Integrity Protection status: disabled

![](https://pic60.mac89.com/orsoon/pic/202111/08135329_0dd1852991.jpeg)

方法二、使用系统信息工具

单击-->关于本机

![](https://pic60.mac89.com/orsoon/pic/202111/08135209_8e29633e1e.jpeg)


点击【系统报告...】

![](https://pic60.mac89.com/orsoon/pic/202111/08135222_7648f1b021.jpeg)


左侧列表选择「软件」即可查看！


![](https://pic60.mac89.com/orsoon/pic/202111/08135234_eed52c06d2.jpeg)


> Mac进入恢复模式方法： \
> Apple M1和M2的笔记本， 开启启动时长按电源电源键十秒左右。直到界面跳出选项图标 \
> Intel 芯片的苹果笔记本， 开机启动长看Command + R 或 Shift + Command + R




Mac上 sip系统完整性关闭方法具体操作步骤如下：

1、关机，然后重新启动你的Mac电脑，在开机时一直按住Command+R迸入Recovery模式。

2、Recovery模式后打开终端，如图：

![](https://pic60.mac89.com/orsoon/pic/201810/23173117_4e10573788.jpg)


3、在终端上输入命令 csrutil disable然后回车。

![](https://pic60.mac89.com/orsoon/pic/201810/23173128_1b64a7710b.jpg)


4、跳出下图提示，表示成功关闭SIP！
![](https://pic60.mac89.com/orsoon/pic/201810/23173139_42380a1caa.jpg)

5、然后我们重启电脑。

![](https://pic60.mac89.com/orsoon/pic/201810/23173144_63768c0007.jpg)