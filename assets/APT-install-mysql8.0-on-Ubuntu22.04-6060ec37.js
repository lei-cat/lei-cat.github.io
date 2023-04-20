import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-34380ed4.js";import{_ as y,c as C,w as o,o as D,a as s,b as l,d as n,r as a,e as d,p as A}from"./app-b0a134cd.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-41d8e1f7.js";import"./YunCard.vue_vue_type_style_index_0_lang-de4154c2.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-5b8be7c1.js";const z=JSON.parse('{"title":"Ubuntu 22.04 下 安装配置 mysql-8.0","description":"","frontmatter":{"layout":"post","title":"Ubuntu 22.04 下 安装配置 mysql-8.0","date":"2023-04-13T04:05:44.000Z","categories":["数据库","mysql"],"tags":["mysql","linux","ubuntu","数据库"]},"headers":[{"level":2,"title":"安装MYSQL","slug":"安装mysql","link":"#安装mysql","children":[]},{"level":2,"title":"配置可远程访问","slug":"配置可远程访问","link":"#配置可远程访问","children":[]},{"level":2,"title":"查看debian-sys-maint用户信息","slug":"查看debian-sys-maint用户信息","link":"#查看debian-sys-maint用户信息","children":[]},{"level":2,"title":"修改root可远程访问，修改root密码","slug":"修改root可远程访问，修改root密码","link":"#修改root可远程访问，修改root密码","children":[]},{"level":2,"title":"重启MYSQL","slug":"重启mysql","link":"#重启mysql","children":[]},{"level":2,"title":"无法使用Root登录及密码修改问题解决方案","slug":"无法使用root登录及密码修改问题解决方案","link":"#无法使用root登录及密码修改问题解决方案","children":[]}],"relativePath":"pages/posts/APT-install-mysql8.0-on-Ubuntu22.04.md","path":"/home/runner/work/lei-cat.github.io/lei-cat.github.io/pages/posts/APT-install-mysql8.0-on-Ubuntu22.04.md","lastUpdated":1682022664000}'),r=JSON.parse('{"title":"Ubuntu 22.04 下 安装配置 mysql-8.0","description":"","frontmatter":{"layout":"post","title":"Ubuntu 22.04 下 安装配置 mysql-8.0","date":"2023-04-13T04:05:44.000Z","categories":["数据库","mysql"],"tags":["mysql","linux","ubuntu","数据库"]},"headers":[{"level":2,"title":"安装MYSQL","slug":"安装mysql","link":"#安装mysql","children":[]},{"level":2,"title":"配置可远程访问","slug":"配置可远程访问","link":"#配置可远程访问","children":[]},{"level":2,"title":"查看debian-sys-maint用户信息","slug":"查看debian-sys-maint用户信息","link":"#查看debian-sys-maint用户信息","children":[]},{"level":2,"title":"修改root可远程访问，修改root密码","slug":"修改root可远程访问，修改root密码","link":"#修改root可远程访问，修改root密码","children":[]},{"level":2,"title":"重启MYSQL","slug":"重启mysql","link":"#重启mysql","children":[]},{"level":2,"title":"无法使用Root登录及密码修改问题解决方案","slug":"无法使用root登录及密码修改问题解决方案","link":"#无法使用root登录及密码修改问题解决方案","children":[]}],"relativePath":"pages/posts/APT-install-mysql8.0-on-Ubuntu22.04.md","path":"/home/runner/work/lei-cat.github.io/lei-cat.github.io/pages/posts/APT-install-mysql8.0-on-Ubuntu22.04.md","lastUpdated":1682022664000}'),h={name:"pages/posts/APT-install-mysql8.0-on-Ubuntu22.04.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){A("pageData",r)}},m={id:"安装mysql",tabindex:"-1"},u=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"shell>"),s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C3E88D"}},"apt"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"install"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"mysql-server-"),s("span",{style:{color:"#F78C6C"}},"8.0"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"mysql-client-"),s("span",{style:{color:"#F78C6C"}},"8.0")]),l(`
`),s("span",{class:"line"})])])],-1),F={id:"配置可远程访问",tabindex:"-1"},E=s("p",null,"修改 /etc/mysql/mysql.conf.d/mysqld.conf中",-1),_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bind-address = 0.0.0.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),b={id:"查看debian-sys-maint用户信息",tabindex:"-1"},g=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"shell>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"cat"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/etc/mysql/debian.cnf"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#676E95","font-style":"italic"}},"#查看密码")]),l(`
`),s("span",{class:"line"})])])],-1),f={id:"修改root可远程访问，修改root密码",tabindex:"-1"},q=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"shell>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"mysql"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-u"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"debian-sys-maint"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-p")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"mysql>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"update"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"mysql.user"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"set"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"host="),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"%"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"where"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"user="),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"root"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#676E95","font-style":"italic"}},"#第一行用来修改 root 可远程访问")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"mysql>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"select"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"user,host"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"mysql.user"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#676E95","font-style":"italic"}},"#查看是否修改成功")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"mysql>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"ALTER"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"USER"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"root"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"@"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"%"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"IDENTIFIED"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"WITH"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"mysql_native_password"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"BY"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"password"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#676E95","font-style":"italic"}},"#修改密码")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"mysql>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"flush"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"privileges"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#676E95","font-style":"italic"}},"#刷新启用新配置")]),l(`
`),s("span",{class:"line"})])])],-1),B={id:"重启mysql",tabindex:"-1"},v=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"root@ubuntu:~"),s("span",{style:{color:"#A6ACCD"}},"# systemctl restart mysql")]),l(`
`),s("span",{class:"line"})])])],-1),k={id:"无法使用root登录及密码修改问题解决方案",tabindex:"-1"},$=s("p",null,"首先使用MySQL在Ubuntu等系统下的一个特殊用户身份进入MySQL环境",-1),U=s("ol",null,[s("li",null,"查看debian-sys-maint用户信息")],-1),x=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"shell>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"cat"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"/etc/mysql/debian.cnf")]),l(`
`),s("span",{class:"line"})])])],-1),S=s("ol",{start:"2"},[s("li",null,"使用debian-sys-maint用户登录MySQL ，密码为debian.cnf中的密码")],-1),T=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"shell>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"mysql"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-u"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"debian-sys-maint"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-p")]),l(`
`),s("span",{class:"line"})])])],-1),L=s("ol",{start:"3"},[s("li",null,"删除原来的Root/普通用户")],-1),M=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"mysql>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"use"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"mysql"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"mysql>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"delete"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"user"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"where"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"user"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"root"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),w=s("ol",{start:"4"},[s("li",null,"新建Root/普通用户")],-1),Q=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"mysql>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"create"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"user"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"root"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"@"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"%"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"identified"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"by"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"password"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"权限授予")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"mysql>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"grant"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"all"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"privileges"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"on"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"to"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"root"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"@"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"%"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"with"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"grant"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"option"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"刷新权限")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"mysql>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"flush"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"privileges"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),P=s("ol",{start:"5"},[s("li",null,"使用Root登录")],-1),R=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"mysql>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"exit"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"shell>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"mysql"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-u"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"root"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-p")]),l(`
`),s("span",{class:"line"})])])],-1);function Y(e,N,I,V,c,O){const t=d,p=i;return D(),C(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":o(()=>[s("h2",m,[l("安装MYSQL "),n(t,{class:"header-anchor",href:"#安装mysql","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),u,s("h2",F,[l("配置可远程访问 "),n(t,{class:"header-anchor",href:"#配置可远程访问","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),E,_,s("h2",b,[l("查看debian-sys-maint用户信息 "),n(t,{class:"header-anchor",href:"#查看debian-sys-maint用户信息","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),g,s("h2",f,[l("修改root可远程访问，修改root密码 "),n(t,{class:"header-anchor",href:"#修改root可远程访问，修改root密码","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),q,s("h2",B,[l("重启MYSQL "),n(t,{class:"header-anchor",href:"#重启mysql","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),v,s("h2",k,[l("无法使用Root登录及密码修改问题解决方案 "),n(t,{class:"header-anchor",href:"#无法使用root登录及密码修改问题解决方案","aria-hidden":"true"},{default:o(()=>[l("#")]),_:1})]),$,U,x,S,T,L,M,w,Q,P,R]),"main-header":o(()=>[a(e.$slots,"main-header")]),"main-header-after":o(()=>[a(e.$slots,"main-header-after")]),"main-nav":o(()=>[a(e.$slots,"main-nav")]),"main-content":o(()=>[a(e.$slots,"main-content")]),"main-content-after":o(()=>[a(e.$slots,"main-content-after")]),"main-nav-before":o(()=>[a(e.$slots,"main-nav-before")]),"main-nav-after":o(()=>[a(e.$slots,"main-nav-after")]),comment:o(()=>[a(e.$slots,"comment")]),footer:o(()=>[a(e.$slots,"footer")]),aside:o(()=>[a(e.$slots,"aside")]),"aside-custom":o(()=>[a(e.$slots,"aside-custom")]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const G=y(h,[["render",Y]]);export{z as __pageData,G as default};
