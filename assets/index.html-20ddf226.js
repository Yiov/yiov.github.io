import{_ as i,r as n,o,c as p,a as s,b as e,d as a,w as d,e as t}from"./app-53b3c66d.js";const l="/assets/crx-01-8f52d2f2.png",h="/assets/crx-02-569d1924.png",_="/assets/crx-03-2f90c0ae.png",m="/assets/crx-04-224813cc.png",g="/assets/crx-05-a30b0c58.png",u="/assets/crx-06-4442eb40.png",x="/assets/crx-07-9e13a13f.png",f="/assets/crx-08-d7dfde36.png",b="/assets/crx-09-e9252ade.png",v="/assets/crx-10-c75924df.png",k="/assets/crx-11-c2e06565.png",D="/assets/crx-12-3b501e45.png",w="/assets/crx-13-d2d86bd2.png",E={},I=t('<h1 id="crx浏览器插件导出" tabindex="-1"><a class="header-anchor" href="#crx浏览器插件导出" aria-hidden="true">#</a> crx浏览器插件导出</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2022-9-3</p></div><p>下载安装插件后，时间久了下载地址忘了，又如何导出分享给好友呢</p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>',4),y=t('<h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2><p>言归正传，开始导出</p><p>打开浏览器插件拓展管理，我这里用360演示</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>快捷进入<code>se://plugin-manager/</code></p></div><p><img src="'+l+'" alt=""></p><p>右上角 <code>高级管理</code>，比如我想导出 DuckDuckGo，这个ID就是对应的插件</p><p><img src="'+h+'" alt=""></p><p><img src="'+_+'" alt=""></p><p>那怎么找到这个ID呢，我们回到桌面，鼠标右键360浏览器-属性-打开文件所在位置</p><p><img src="'+m+`" alt=""></p><p>我是安装在D盘的，其他盘根据这个目录找到目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\Program Files (x86)\\360se\\360se6\\User Data\\Default\\Extensions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+'" alt=""></p><p>我要导出的DuckDuckGo的ID是：<code>bkdgflcldnnnapblkhphbgpggdiikppg</code> ，把相对应文件夹打开</p><p><img src="'+u+'" alt=""></p><p><img src="'+x+`" alt=""></p><p>地址复制出来，点击 <code>打包扩展程序</code>，把地址粘贴进去，打包即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\Program Files (x86)\\360se\\360se6\\User Data\\Default\\Extensions\\bkdgflcldnnnapblkhphbgpggdiikppg\\2022.8.25_0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+f+'" alt=""></p><p><img src="'+b+'" alt=""></p><p>在同目录下会生成crx文件，我们把拖入浏览器，验证是否正确</p><blockquote><p>pem是证书文件，一般用不上，删掉就好了</p></blockquote><p><img src="'+v+'" alt=""></p><p><img src="'+k+'" alt=""></p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-找不到浏览器的文件夹" tabindex="-1"><a class="header-anchor" href="#_1-找不到浏览器的文件夹" aria-hidden="true">#</a> 1.找不到浏览器的文件夹</h4>',26),L=s("code",null,"电脑自带的搜索功能",-1),N={href:"https://www.voidtools.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"},V=t('<p><img src="'+D+'" alt=""></p><h4 id="_2-油猴里的插件可以导出么" tabindex="-1"><a class="header-anchor" href="#_2-油猴里的插件可以导出么" aria-hidden="true">#</a> 2.油猴里的插件可以导出么</h4><p>油猴管理面板-实用工具-导出</p><p><img src="'+w+'" alt=""></p><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>',5),B={href:"https://www.voidtools.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"};function q(z,C){const c=n("RouterLink"),r=n("ExternalLinkIcon");return o(),p("div",null,[I,s("p",null,[e("油猴插件都会用吧，不知道的看 ☛ "),a(c,{to:"/daily/tampermonkey/"},{default:d(()=>[e("油猴安装及使用教程")]),_:1})]),y,s("p",null,[e("可以用 "),L,e(" ，觉得慢可以也使用 "),s("a",N,[e("Everything"),a(r)]),e(" 本地文件快速查找")]),V,s("ul",null,[s("li",null,[s("a",B,[e("Everything"),a(r)]),e("「快速查找本地文件」")])])])}const G=i(E,[["render",q],["__file","index.html.vue"]]);export{G as default};
