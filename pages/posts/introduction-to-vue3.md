---
layout: post
title: Vue3基础学习
date: 2023-04-16 11:48:58
categories: 
    - 前端开发
    - Vue3
tags:
  - Vue3
  - 笔记
---

## 项目搭建

初始化项目，有两种方式

* 方式一：vue-cli脚手架初始化Vue3项目

官方文档：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

```bash
#	查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version

#	安装或者升级你的@vue/cSli
npm install -g @vue/cli

#	 创建项目
vue create vue_test

# 启动
cd vue_test
npm run serve
```


* 方式二：vite初始化Vue3项目

vite官网：https://vitejs.cn/
```bash
#	 创建工程
npm init vite-app <project-name>
#	进入工程目录
cd <project-name>
#	 安装依赖
npm install
#	运行
npm run dev
```


文章来源于 https://www.cnblogs.com/jjgw/p/15767238.html


## 生命周期

创建时 beforeCreate  created
渲染时 beforeMount   mounted
更新时 beforeUpdate  updated
卸载时 beforeUnmount Unmounted