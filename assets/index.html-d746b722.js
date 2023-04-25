import{_ as a,M as r,p as c,q as l,R as t,t as s,N as n,a1 as o}from"./framework-e03faf0e.js";const i="/assets/NAT-01-7c56a41c.png",p="/assets/NAT-02-8b9b005c.png",_="/assets/NAT-03-07baec20.png",h="/assets/NAT-04-c2ce47fe.png",d="/assets/NAT-05-c2e21b58.png",m="/assets/NAT-06-0ca66036.png",u="/assets/NAT-07-7d8d6d0c.png",g="/assets/NAT-08-cedfdc42.png",f="/assets/NAT-09-241c1b19.png",w="/assets/NAT-10-db51624a.png",b="/assets/NAT-11-cb098442.png",k="/assets/NAT-12-576b7073.png",y="/assets/NAT-13-f31d2246.png",N="/assets/NAT-14-1133c631.png",T="/assets/NAT-15-8ea71582.png",A="/assets/NAT-16-6e970040.png",v="/assets/NAT-17-a548f688.png",x="/assets/NAT-18-047abc0c.png",z="/assets/NAT-19-a615e900.png",I={},q=o('<h1 id="浅谈内网穿透" tabindex="-1"><a class="header-anchor" href="#浅谈内网穿透" aria-hidden="true">#</a> 浅谈内网穿透</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2021-9-25</p></div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>实话讲我个人是不太喜欢的，之前家里有闲置电脑，于是用内网穿透当做服务器使用，结果电费还挺高，几百块一年的服务器不香吗</p><h3 id="_1-为什么要内网穿透" tabindex="-1"><a class="header-anchor" href="#_1-为什么要内网穿透" aria-hidden="true">#</a> 1.为什么要内网穿透</h3><p>因为不知道公网IP，只能这样选择这样的方式</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>公网：所有人可访问</p><p>内网：仅限局域网内用户访问</p><p>内网穿透：所有人可访问内网</p></div><h3 id="_2-怎么获得公网ip" tabindex="-1"><a class="header-anchor" href="#_2-怎么获得公网ip" aria-hidden="true">#</a> 2.怎么获得公网IP</h3><p>联通或者电信：直接打电话给运营商开通，就说要装摄像头</p><p>移动的：emm，有点难</p><p>当然也不排除，三大运营商都不给开</p><h3 id="_3-公网ip可以用来做什么" tabindex="-1"><a class="header-anchor" href="#_3-公网ip可以用来做什么" aria-hidden="true">#</a> 3.公网IP可以用来做什么</h3><p>搭建服务器、远程访问等等</p><h2 id="常用的穿透工具" tabindex="-1"><a class="header-anchor" href="#常用的穿透工具" aria-hidden="true">#</a> 常用的穿透工具</h2><p>免费内网穿透工具还是挺多的，基本都罗列出来了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>关于网速：免费基本都是1M，网速在128K</p><p>日常用倒是没啥问题</p></div>',16),P={class:"custom-container details"},G=t("summary",null,"神卓互联",-1),S={href:"https://www.shenzhuohl.com/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.shenzhuohl.com/article/1/shenzhuo/show/6",target:"_blank",rel:"noopener noreferrer"},B=t("p",null,"优劣：两个映射，不限流量，稳定程度中等",-1),E=t("p",null,[t("img",{src:i,alt:""})],-1),L={class:"custom-container details"},M=t("summary",null,"花生壳",-1),F={href:"https://hsk.oray.com/",target:"_blank",rel:"noopener noreferrer"},W={href:"http://service.oray.com/question/8146.html",target:"_blank",rel:"noopener noreferrer"},C=t("p",null,[s("优劣："),t("strong",null,"需6元"),s("开通使用，赠送一个域名，两个映射，每月1G流量")],-1),K=t("p",null,[t("img",{src:p,alt:""})],-1),R={class:"custom-container details"},j=t("summary",null,"Sunny-Ngrok",-1),D={href:"https://www.ngrok.cc/",target:"_blank",rel:"noopener noreferrer"},H=t("p",null,"说明：下拉到底有免费服务器，注册账号，开通隧道即可",-1),J={href:"https://www.ngrok.cc/_book/start/ngrok_windows.html",target:"_blank",rel:"noopener noreferrer"},O=t("p",null,[t("img",{src:_,alt:""})],-1),Q={class:"custom-container details"},U=t("summary",null,"Natapp",-1),X={href:"https://natapp.cn/",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://natapp.cn/article/natapp_newbie",target:"_blank",rel:"noopener noreferrer"},Z=t("p",null,"优劣：两条免费隧道，不定时强制更换域名",-1),$=t("p",null,[t("img",{src:h,alt:""})],-1),tt={class:"custom-container details"},st=t("summary",null,"大象(原WeNAT)",-1),et={href:"https://nat.72wo.com/",target:"_blank",rel:"noopener noreferrer"},nt=t("p",null,"说明：下载即可使用，现已改为付费",-1),ot=t("p",null,[t("img",{src:d,alt:""})],-1),at={class:"custom-container details"},rt=t("summary",null,"闪库",-1),ct={href:"http://www.ipyingshe.com/",target:"_blank",rel:"noopener noreferrer"},lt=t("p",null,"说明：开通免费隧道即可，据说是2M网速",-1),it=t("p",null,[t("img",{src:m,alt:""})],-1),pt={class:"custom-container details"},_t=t("summary",null,"小蝴蝶",-1),ht={href:"https://www.npsvip.com/",target:"_blank",rel:"noopener noreferrer"},dt=t("p",null,"说明：说有免费方案的，我没找到",-1),mt=t("p",null,[t("img",{src:u,alt:""})],-1),ut={class:"custom-container details"},gt=t("summary",null,"nat123",-1),ft={href:"http://www.nat123.com/",target:"_blank",rel:"noopener noreferrer"},wt=t("p",null,"说明：最右侧软件下载使用即可",-1),bt=t("p",null,[t("img",{src:g,alt:""})],-1),kt={class:"custom-container details"},yt=t("summary",null,"Ngrok·搭建类",-1),Nt={href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"},Tt={href:"https://yangqiang.im/?p=750",target:"_blank",rel:"noopener noreferrer"},At=t("p",null,[t("img",{src:f,alt:""})],-1),vt={class:"custom-container details"},xt=t("summary",null,"Ssh+autossh·搭建类",-1),zt={href:"http://www.harding.motd.ca/autossh/",target:"_blank",rel:"noopener noreferrer"},It={href:"https://yangqiang.im/?p=698",target:"_blank",rel:"noopener noreferrer"},qt=t("p",null,[t("img",{src:w,alt:""})],-1),Pt={class:"custom-container details"},Gt=t("summary",null,"Frp·搭建类",-1),St={href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"},Vt=t("p",null,[t("img",{src:b,alt:""})],-1),Bt={class:"custom-container details"},Et=t("summary",null,"Spike·搭建类",-1),Lt={href:"https://github.com/slince/spike",target:"_blank",rel:"noopener noreferrer"},Mt=t("p",null,[t("img",{src:k,alt:""})],-1),Ft={class:"custom-container details"},Wt=t("summary",null,"Lanproxy·搭建类",-1),Ct={href:"https://github.com/ffay/lanproxy",target:"_blank",rel:"noopener noreferrer"},Kt=t("p",null,[t("img",{src:y,alt:""})],-1),Rt={class:"custom-container details"},jt=t("summary",null,"smarGate·搭建类",-1),Dt={href:"https://github.com/lazy-luo/smarGate",target:"_blank",rel:"noopener noreferrer"},Ht=t("p",null,[t("img",{src:N,alt:""})],-1),Jt=t("h2",{id:"演示",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),s(" 演示")],-1),Ot=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"说明"),t("p",null,[s("本次演示"),t("code",null,"神卓互联"),s("的使用，实际体验并不是很顺滑")])],-1),Qt=t("p",null,"适用于：服务器搭建在虚拟机中，也不知道公网IP，人不在电脑旁，但想远程访问",-1),Ut={href:"https://www.shenzhuohl.com/",target:"_blank",rel:"noopener noreferrer"},Xt=o('<p><img src="'+T+'" alt=""></p><p>安装好后，注册一个账号并登录-左下 <code>添加映射</code></p><p><img src="'+A+'" alt=""></p><p>填好后保存，返回点刷新，卡退了的重新打开软件</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>应用名称：随便写</p><p>内网主机：填内网IP，就是我们访问青龙或者宝塔的IP</p><p>内网端口：青龙填5700；宝塔填8888</p></div><p><img src="'+v+'" alt=""></p><p>复制地址就可以了，手机断开WIFI了，用数据也可以访问</p><p><img src="'+x+'" alt=""></p><p>然后你不能退出软件，一整天都要挂着，否则会断开映射，最糟心的是这个</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>你可以考虑其他映射（都差不多），或者付费，或者买轻量服务器</p></div><p><img src="'+z+'" alt=""></p>',11);function Yt(Zt,$t){const e=r("ExternalLinkIcon");return c(),l("div",null,[q,t("details",P,[G,t("p",null,[s("官网："),t("a",S,[s("https://www.shenzhuohl.com/"),n(e)])]),t("p",null,[s("官方教程："),t("a",V,[s("https://www.shenzhuohl.com/article/1/shenzhuo/show/6"),n(e)])]),B,E]),t("details",L,[M,t("p",null,[s("官网："),t("a",F,[s("https://hsk.oray.com/"),n(e)])]),t("p",null,[s("官方教程："),t("a",W,[s("http://service.oray.com/question/8146.html"),n(e)])]),C,K]),t("details",R,[j,t("p",null,[s("官网："),t("a",D,[s("https://www.ngrok.cc/"),n(e)])]),H,t("p",null,[s("官方教程："),t("a",J,[s("https://www.ngrok.cc/_book/start/ngrok_windows.html"),n(e)])]),O]),t("details",Q,[U,t("p",null,[s("官网："),t("a",X,[s("https://natapp.cn/"),n(e)])]),t("p",null,[s("官方教程："),t("a",Y,[s("https://natapp.cn/article/natapp_newbie"),n(e)])]),Z,$]),t("details",tt,[st,t("p",null,[s("官网："),t("a",et,[s("https://nat.72wo.com/"),n(e)])]),nt,ot]),t("details",at,[rt,t("p",null,[s("官网："),t("a",ct,[s("http://www.ipyingshe.com/"),n(e)])]),lt,it]),t("details",pt,[_t,t("p",null,[s("官网："),t("a",ht,[s("https://www.npsvip.com/"),n(e)])]),dt,mt]),t("details",ut,[gt,t("p",null,[s("官网："),t("a",ft,[s("http://www.nat123.com/"),n(e)])]),wt,bt]),t("details",kt,[yt,t("p",null,[s("官网："),t("a",Nt,[s("https://ngrok.com/"),n(e)])]),t("p",null,[s("搭建教程："),t("a",Tt,[s("https://yangqiang.im/?p=750"),n(e)])]),At]),t("details",vt,[xt,t("p",null,[s("官网："),t("a",zt,[s("http://www.harding.motd.ca/autossh/"),n(e)])]),t("p",null,[s("搭建教程："),t("a",It,[s("https://yangqiang.im/?p=698"),n(e)])]),qt]),t("details",Pt,[Gt,t("p",null,[s("项目地址："),t("a",St,[s("https://github.com/fatedier/frp"),n(e)])]),Vt]),t("details",Bt,[Et,t("p",null,[s("项目地址："),t("a",Lt,[s("https://github.com/slince/spike"),n(e)])]),Mt]),t("details",Ft,[Wt,t("p",null,[s("项目地址："),t("a",Ct,[s("https://github.com/ffay/lanproxy"),n(e)])]),Kt]),t("details",Rt,[jt,t("p",null,[s("项目地址："),t("a",Dt,[s("https://github.com/lazy-luo/smarGate"),n(e)])]),Ht]),Jt,Ot,Qt,t("p",null,[s("神卓互联官网："),t("a",Ut,[s("https://www.shenzhuohl.com/"),n(e)])]),Xt])}const ss=a(I,[["render",Yt],["__file","index.html.vue"]]);export{ss as default};
