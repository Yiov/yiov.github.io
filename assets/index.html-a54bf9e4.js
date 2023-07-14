import{_ as o,r,o as c,c as l,a as s,b as a,d as e,e as t}from"./app-c1d53bdf.js";const i="/assets/boxjs-de9f06a5.png",d="/assets/boxjs-1-3da03c0c.png",p="/assets/boxjs-2-bd6b4348.png",u="/assets/boxjs-3-e1ef4cf7.png",k="/assets/boxjs-4-0fb56689.png",h="/assets/boxjs-5-c31e525a.png",m="/assets/boxjs-6-94e6f244.png",b="/assets/boxjs-7-6e20384f.png",v="/assets/boxjs-8-ea69dda0.png",_="/assets/boxjs-9-30cc6fbe.png",g={},x=s("h1",{id:"boxjs安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#boxjs安装","aria-hidden":"true"},"#"),a(" BoxJs安装")],-1),f=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"更新时间"),s("p",null,"最近更新：2022-1-25")],-1),j={href:"https://docs.boxjs.app/",target:"_blank",rel:"noopener noreferrer"},y=t('<p><img src="'+i+'" alt=""></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>我这里只有圈X，就只演示圈X了，其他的按照它的步骤即可</p></div><p>圈X的安装有3个方式，我们按推荐的来</p><p><img src="'+d+'" alt=""></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>打开圈X开关，连接好一个节点，然后打开开关，不然进不去</p><p>风车 &gt; 工具&amp;分析&gt; HTTP Backend &gt; 添加</p><p><img src="'+p+'" alt=""></p><p><img src="'+u+`" alt=""></p><p>添加脚本信息</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">标签</span><span class="token operator">:</span> boxjs

<span class="token literal-property property">处理请求的路径</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token operator">/</span>

<span class="token function">脚本路径</span> <span class="token punctuation">(</span>稳定版<span class="token punctuation">)</span>

<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>chavyleung<span class="token operator">/</span>scripts<span class="token operator">/</span>master<span class="token operator">/</span>chavy<span class="token punctuation">.</span>box<span class="token punctuation">.</span>js

<span class="token function">脚本路径</span> <span class="token punctuation">(</span>测试版<span class="token punctuation">)</span>

<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>chavyleung<span class="token operator">/</span>scripts<span class="token operator">/</span>master<span class="token operator">/</span>box<span class="token operator">/</span>chavy<span class="token punctuation">.</span>boxjs<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们就用稳定版即可，填完信息保存并打开HTTP Backend开关，最后更新一下</p><p><img src="`+k+'" alt=""></p><p>安装完成后，访问地址即可</p>',14),B={href:"http://127.0.0.1:9999",target:"_blank",rel:"noopener noreferrer"},w=s("h2",{id:"域名访问",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#域名访问","aria-hidden":"true"},"#"),a(" 域名访问")],-1),T=s("p",null,"如果不喜欢这种IP+端口的方式，可以用第三种安装方式，用域名访问",-1),J={href:"http://boxjs.com/",target:"_blank",rel:"noopener noreferrer"},P=t('<p>风车 &gt; 重写 &gt; 引用</p><p><img src="'+p+'" alt=""></p><p><img src="'+h+`" alt=""></p><p>填写脚本信息</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>BoxJs 稳定版

<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>chavyleung<span class="token operator">/</span>scripts<span class="token operator">/</span>master<span class="token operator">/</span>box<span class="token operator">/</span>rewrite<span class="token operator">/</span>boxjs<span class="token punctuation">.</span>rewrite<span class="token punctuation">.</span>quanx<span class="token punctuation">.</span>conf

BoxJs 测试版

<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>chavyleung<span class="token operator">/</span>scripts<span class="token operator">/</span>master<span class="token operator">/</span>box<span class="token operator">/</span>rewrite<span class="token operator">/</span>boxjs<span class="token punctuation">.</span>rewrite<span class="token punctuation">.</span>quanx<span class="token punctuation">.</span>tf<span class="token punctuation">.</span>conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们就用稳定版即可，填完信息保存，最后更新一下</p><p><img src="`+m+`" alt=""></p><p>BoxJs &gt; 应用(底栏) &gt; 内置应用 &gt; 偏好设置</p><p>在<code>HTTP Backend (Quantumult X)</code> 中填入 HTTP Backend 的地址即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://127.0.0.1:9999
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+b+'" alt=""></p><h2 id="桌面快捷" tabindex="-1"><a class="header-anchor" href="#桌面快捷" aria-hidden="true">#</a> 桌面快捷</h2><p>网页进入BoxJs-底部分享-添加到主屏幕即可</p><p><img src="'+v+'" alt=""></p><p><img src="'+_+'" alt=""></p><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>',16),X={href:"https://docs.boxjs.app/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/chavyleung/scripts",target:"_blank",rel:"noopener noreferrer"};function N(V,E){const n=r("ExternalLinkIcon");return c(),l("div",null,[x,f,s("p",null,[a("BoxJs官网："),s("a",j,[a("https://docs.boxjs.app/"),e(n)])]),y,s("p",null,[s("a",B,[a("http://127.0.0.1:9999"),e(n)])]),w,T,s("p",null,[s("a",J,[a("http://boxjs.com/"),e(n)])]),P,s("ul",null,[s("li",null,[s("p",null,[s("a",X,[a("BoxJs"),e(n)])])]),s("li",null,[s("p",null,[s("a",H,[a("chavyleung"),e(n)])])])])])}const q=o(g,[["render",N],["__file","index.html.vue"]]);export{q as default};
