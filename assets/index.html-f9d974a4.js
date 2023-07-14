import{_ as c,r as o,o as r,c as p,a as e,b as t,d as s,w as d,e as n}from"./app-c1d53bdf.js";const h="/assets/ish-01-902f2302.png",l="/assets/ish-02-ef924de9.png",_="/assets/ish-03-ee0acc90.png",u="/assets/ish-04-ba90f25d.png",m="/assets/ish-05-a09bd583.png",g="/assets/ish-06-7655fc4e.png",v="/assets/ish-07-a695c79a.png",f="/assets/ish-08-84c0a098.png",b={},x=n('<h1 id="闲置iphone搭建静态网站" tabindex="-1"><a class="header-anchor" href="#闲置iphone搭建静态网站" aria-hidden="true">#</a> 闲置iPhone搭建静态网站</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-4-19</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>闲置苹果机卖掉不值钱，那就发挥一下余热</p><p>做一个 <strong>仅可本地可以访问</strong> 的web服务器</p><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>',6),k=e("li",null,[e("p",null,"闲置苹果机一部 (IOS 11及以上)")],-1),I={href:"https://apps.apple.com/cn/app/ish-shell/id1436902243",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"安装python3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装python3","aria-hidden":"true"},"#"),t(" 安装Python3")],-1),w=e("p",null,[t("苹果商店下载 "),e("code",null,"ISH shell"),t(" ，安装好打开")],-1),P=e("p",null,[e("img",{src:h,alt:""})],-1),S=e("p",null,"安装python3",-1),R={class:"custom-container warning"},E=e("p",{class:"custom-container-title"},"注意",-1),H=e("code",null,"ERROR",-1),L=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apk <span class="token function">add</span> python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""></p><h2 id="启动http服务" tabindex="-1"><a class="header-anchor" href="#启动http服务" aria-hidden="true">#</a> 启动http服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 <span class="token parameter variable">-m</span> http.server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">科普</p><p><code>-m</code> 表示将模块当脚本运行</p></div><p>启动成功，我们就开启了一个本地IP+<code>端口8000</code> 的页面</p><p><img src="`+_+'" alt=""></p><h2 id="访问页面" tabindex="-1"><a class="header-anchor" href="#访问页面" aria-hidden="true">#</a> 访问页面</h2><p>手机设置-无线局域网-查看自己的内网IP地址</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>根据自己的IP地址来</p><p>8000是端口，必加</p></div>',10),N={href:"http://192.168.2.215:8000",target:"_blank",rel:"noopener noreferrer"},V=n('<p>访问后，ISH也会显示哪个IP的人在访问</p><p><img src="'+u+'" alt=""></p><h2 id="上传网站代码" tabindex="-1"><a class="header-anchor" href="#上传网站代码" aria-hidden="true">#</a> 上传网站代码</h2><p>进入文件-右上角 编辑</p><p><img src="'+m+'" alt=""></p><p>将 <code>ISH</code> 开关打开，完成，进入root目录</p><p><img src="'+g+'" alt=""></p><p>我这里放了一个静态网页测试一下</p>',8),B={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"说明",-1),O={href:"https://github.com/Yiov/static-nav",target:"_blank",rel:"noopener noreferrer"},Y={href:"http://192.168.2.215:8000",target:"_blank",rel:"noopener noreferrer"},T=n('<p>首次进入有点慢，但是没问题的</p><p><img src="'+v+'" alt=""></p><h2 id="终止" tabindex="-1"><a class="header-anchor" href="#终止" aria-hidden="true">#</a> 终止</h2><p>手动终止服务，按 <code>∧</code>+<code>Z</code> 键即可</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>划掉后台或者关机都可以</p></div><p><img src="'+f+'" alt=""></p>',6);function Z(j,q){const a=o("ExternalLinkIcon"),i=o("RouterLink");return r(),p("div",null,[x,e("ul",null,[k,e("li",null,[e("p",null,[e("a",I,[t("下载ISH工具"),s(a)])])])]),y,w,P,S,e("div",R,[E,e("p",null,[t("报错 "),H,t(" 的话，"),s(i,{to:"/gfw/proxy/"},{default:d(()=>[t("挂一个梯子翻墙")]),_:1}),t(" 再运行就行了")])]),L,e("p",null,[t("如下图，我的地址："),e("a",N,[t("http://192.168.2.215:8000"),s(a)])]),V,e("div",B,[C,e("p",null,[t("仓库："),e("a",O,[t("https://github.com/Yiov/static-nav"),s(a)])])]),e("p",null,[t("访问："),e("a",Y,[t("http://192.168.2.215:8000"),s(a)])]),T])}const A=c(b,[["render",Z],["__file","index.html.vue"]]);export{A as default};
