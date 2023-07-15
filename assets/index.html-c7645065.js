import{_ as l,r as i,o as p,c,a as e,b as n,d as s,w as o,e as r}from"./app-3acf8c5f.js";const d="/assets/onesav-c3ad0c15.png",h="/assets/baisu-cb3e96cf.png",_="/assets/onesav-01-5e0b7524.png",u="/assets/onesav-02-6c2ef1c8.png",m="/assets/onesav-03-f8d561d7.png",f="/assets/onesav-04-02fcbd2a.png",g="/assets/onesav-05-c260bb28.png",v="/assets/onesav-06-4d0dde4f.png",b="/assets/onesav-07-02e92863.png",x="/assets/onesav-08-3f3bd6e2.png",w="/assets/onesav-09-9838d727.png",k="/assets/onesav-10-aeb726a9.png",E="/assets/onesav-11-17755a14.png",z={},T=r('<h1 id="onenav导航网页的搭建" tabindex="-1"><a class="header-anchor" href="#onenav导航网页的搭建" aria-hidden="true">#</a> Onenav导航网页的搭建</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2022-3-9</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',3),L={href:"https://blog.xiaoz.org/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.onenav.top/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/helloxz/onenav",target:"_blank",rel:"noopener noreferrer"},S={href:"https://doc.xiaoz.me/books/onenav",target:"_blank",rel:"noopener noreferrer"},B={href:"https://nav.rss.ink/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://123.baisu58.com/",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,[e("img",{src:d,alt:""})],-1),H=e("p",null,[e("img",{src:h,alt:""})],-1),M=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),n(" 准备工作")],-1),A=r('<h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1.安装</h2><p>登录宝塔面板，根据环境要求，需要5.6 &lt;= PHP &lt;= 7.4，那我们就选最新的7.2，然后极速安装套件</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>已安装的无视，未安装成功的可以在宝塔-软件管理里面找到安装</p></div><p><img src="'+_+'" alt=""></p><p>新建站点，输入我们的域名，选择数据库MySQL，核对下PHP版本后提交</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>数据库的名称和密码是自动生成的，自己记一下就行</p></div><p><img src="'+u+'" alt=""></p><p><img src="'+m+'" alt=""></p><p>我们访问域名，就会提示站点创建完成</p><p><img src="'+f+'" alt=""></p><p>我们进 <strong>根目录</strong> <code>/www/wwwroot</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这里有其他文件请先全部删掉！</p></div>',12),F={href:"https://github.com/helloxz/onenav/",target:"_blank",rel:"noopener noreferrer"},I=r('<p><img src="'+g+'" alt=""></p><p>下载完成后，上传到服务器解压</p><p>然后再删除这个压缩包，进文件夹把里面所有文件剪切到域名目录下</p><p><img src="'+v+'" alt=""></p><p>将文件类的 <code>config.simple.php</code>，更名为 <code>config.php</code>，然后移动到date目录下</p><p><img src="'+b+`" alt=""></p><p>鼠标右键编辑打开文件，修改站点信息，画圈的位置都是可以改的，其他不要动</p><p>这里推荐使用 <code>baisuTwo</code> 的主题</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> define(&#39;TEMPLATE&#39;,&#39;default&#39;);
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> define(&#39;TEMPLATE&#39;,&#39;baisuTwo&#39;);
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+x+'" alt=""></p><h2 id="_2-登录" tabindex="-1"><a class="header-anchor" href="#_2-登录" aria-hidden="true">#</a> 2.登录</h2><p>刷新我们的网站，即可登录后台，域名访问也有了页面</p><div class="custom-container tip"><p class="custom-container-title">后台</p><p>http://域名/index.php?c=login</p></div><p><img src="'+w+'" alt=""></p><p><img src="'+k+'" alt=""></p><p><img src="'+E+'" alt=""></p><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>',17),O={href:"https://github.com/helloxz/onenav/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://www.xiaoz.me/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://gitee.com/baisucode/baisu-two",target:"_blank",rel:"noopener noreferrer"};function X(y,D){const t=i("ExternalLinkIcon"),a=i("RouterLink");return p(),c("div",null,[T,e("p",null,[n("OneNav是一款开源免费的书签（导航）管理程序，由 "),e("a",L,[n("@xiaoz"),s(t)]),n(" 使用使用PHP + SQLite 3开发")]),e("p",null,[n("官网："),e("a",P,[n("https://www.onenav.top/"),s(t)])]),e("p",null,[e("a",N,[n("项目"),s(t)]),n(" 丨 "),e("a",S,[n("文档"),s(t)]),n(" 丨 "),e("a",B,[n("演示1"),s(t)]),n(" 丨 "),e("a",C,[n("演示2"),s(t)])]),V,H,M,e("ul",null,[e("li",null,[e("p",null,[s(a,{to:"/website/ECS/"},{default:o(()=>[n("服务器1台")]),_:1})])]),e("li",null,[e("p",null,[s(a,{to:"/website/ECS/#%E5%9F%9F%E5%90%8D"},{default:o(()=>[n("域名1个")]),_:1})])]),e("li",null,[e("p",null,[s(a,{to:"/website/Xshell/"},{default:o(()=>[n("安装Xshell工具")]),_:1})])]),e("li",null,[e("p",null,[s(a,{to:"/website/BT/"},{default:o(()=>[n("安装宝塔面板")]),_:1})])])]),A,e("p",null,[n("下载源码："),e("a",F,[n("https://github.com/helloxz/onenav/"),s(t)])]),I,e("ul",null,[e("li",null,[e("p",null,[e("a",O,[n("helloxz"),s(t)])])]),e("li",null,[e("p",null,[e("a",Q,[n("小z博客"),s(t)])])]),e("li",null,[e("p",null,[e("a",R,[n("baisuTwo"),s(t)])])])])])}const q=l(z,[["render",X],["__file","index.html.vue"]]);export{q as default};
