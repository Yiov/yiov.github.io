import{_ as i,r as c,o as r,c as l,a,b as n,d as e,w as o,e as p}from"./app-c1d53bdf.js";const d="/assets/Favicon-01-f3e2a829.png",h="/assets/Favicon-02-122e1cc3.png",u="/assets/Favicon-03-3241d74c.png",v="/assets/Favicon-04-5ee603ff.png",_="/assets/Favicon-05-0b196804.png",m="/assets/Favicon-06-df77653a.png",f="/assets/Favicon-07-845d4556.png",g="/assets/Favicon-08-6c89105b.png",k="/assets/Favicon-09-d16e5268.png",w={},b=p('<h1 id="搭建favicon图标api" tabindex="-1"><a class="header-anchor" href="#搭建favicon图标api" aria-hidden="true">#</a> 搭建Favicon图标API</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-2-23</p></div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>Favicon图标就是浏览器标题栏上显示的小图标，也可以是缩小版的LOGO</p>',4),x={href:"https://github.com/owen0o0/getFavicon",target:"_blank",rel:"noopener noreferrer"},F=p('<p>现在就按他的教程，尝试自己搭建一个</p><h2 id="常见获取方式" tabindex="-1"><a class="header-anchor" href="#常见获取方式" aria-hidden="true">#</a> 常见获取方式</h2><h3 id="_1-域名-favicon-ico" tabindex="-1"><a class="header-anchor" href="#_1-域名-favicon-ico" aria-hidden="true">#</a> 1.域名+/favicon.ico</h3><p>比如：https://github.com/favicon.ico</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>一定要是在主域名下 <code>/favicon.ico</code> 一般都放在主目录里</p></div><p><img src="'+d+'" alt=""></p><h3 id="_2-查看原代码" tabindex="-1"><a class="header-anchor" href="#_2-查看原代码" aria-hidden="true">#</a> 2.查看原代码</h3><p>比如：https://www.iowen.cn/</p><p>网页右键-查看源代码(ctrl+u)，这里就很明显能看到 <code>.ico</code> 结尾的文件</p><p><img src="'+h+'" alt=""></p><h2 id="_3-谷歌链接获取" tabindex="-1"><a class="header-anchor" href="#_3-谷歌链接获取" aria-hidden="true">#</a> 3.谷歌链接获取</h2><p>格式：http://www.google.com/s2/favicons?domain=网站地址</p><p>获取：http://www.google.com/s2/favicons?domain=baidu.com</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>默认查看的尺寸是16*16，我们把后面的size=的值改成想要的大小即可，如果没有该尺寸，会返回默认16</p><p>常见的尺寸：16 / 32 / 48 / 64 / 128 / 256 / 512</p></div><p><img src="'+u+'" alt=""></p><h2 id="_4-一为api获取" tabindex="-1"><a class="header-anchor" href="#_4-一为api获取" aria-hidden="true">#</a> 4.一为API获取</h2>',16),E={href:"https://api.iowen.cn/doc/favicon.html",target:"_blank",rel:"noopener noreferrer"},I=a("p",null,"根据文档，我们得知格式如下",-1),L=a("p",null,"格式：https://api.iowen.cn/favicon/网址.png",-1),C=a("p",null,"获取：https://api.iowen.cn/favicon/www.iowen.cn.png",-1),N=a("h2",{id:"准备工作",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),n(" 准备工作")],-1),R=a("h2",{id:"开始搭建",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#开始搭建","aria-hidden":"true"},"#"),n(" 开始搭建")],-1),y=a("p",null,"我们先进仓库，将代码下载到桌面",-1),B={href:"https://github.com/owen0o0/getFavicon",target:"_blank",rel:"noopener noreferrer"},O=p('<p><img src="'+v+'" alt=""></p><p>登录宝塔，新建添加一个站点，进目录-上传压缩包-解压，并将文件名改成 <code>favicon</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>改名是为了和下面的连接对上</p></div><p><img src="'+_+'" alt=""></p><p>cache 文件夹给 755 权限</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>宝塔直接上传的一般都是755</p></div><p><img src="'+m+'" alt=""></p><p>访问：<code>http://你的网站/favicon/get.php?url=https://目标网站</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如果出现获取不了的情况，<code>ctrl+F5</code> 强制刷新缓存再试一次</p><p>比如：http://api.yiov.com/favicon/get.php?url=https://www.iowen.cn</p></div><p><img src="'+f+`" alt=""></p><p>方便cdn缓存，伪静态规则 <code>二选一</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>域名-伪静态，粘贴保存</p></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment"># Nginx规则</span>
rewrite <span class="token operator">^</span><span class="token operator">/</span>favicon<span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">.</span><span class="token operator">*</span><span class="token punctuation">)</span>\\<span class="token operator">.</span><span class="token class-name type-declaration">png</span>$ <span class="token operator">/</span>favicon<span class="token operator">/</span>get<span class="token operator">.</span>php<span class="token operator">?</span>url<span class="token operator">=</span><span class="token variable">$1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment"># Apache 规则</span>
<span class="token operator">&lt;</span>IfModule mod_rewrite<span class="token operator">.</span>c<span class="token operator">&gt;</span>
RewriteEngine On
RewriteRule <span class="token operator">^</span>favicon<span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">.</span><span class="token operator">*</span><span class="token punctuation">)</span>\\<span class="token operator">.</span><span class="token class-name type-declaration">png</span>$ favicon<span class="token operator">/</span>get<span class="token operator">.</span>php<span class="token operator">?</span>url<span class="token operator">=</span><span class="token variable">$1</span> <span class="token punctuation">[</span><span class="token constant">L</span><span class="token punctuation">]</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>IfModule<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+'" alt=""></p><p>调用方法：<code>http://你的网站/favicon/目标网址.png</code></p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>目标网址不能有 <code>http(s)://</code>，且结尾必须填 <code>.png</code></p><p>以后亦可都用这种方式</p><p>比如：http://api.yiov.com/favicon/www.iowen.cn.png</p></div><p><img src="'+k+'" alt=""></p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-访问出现404" tabindex="-1"><a class="header-anchor" href="#_1-访问出现404" aria-hidden="true">#</a> 1.访问出现404</h4><p>域名是否需解析 / 链接路径是否和文件名一致 / 链接是否正确</p><h4 id="_2-自己的网站如何制作favicon-ico图标" tabindex="-1"><a class="header-anchor" href="#_2-自己的网站如何制作favicon-ico图标" aria-hidden="true">#</a> 2.自己的网站如何制作favicon.ico图标</h4><p>图片在线转ico格式</p>',23),S={href:"http://www.ico51.cn/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.bitbug.net/?rsv_upd=1",target:"_blank",rel:"noopener noreferrer"};function $(A,M){const s=c("ExternalLinkIcon"),t=c("RouterLink");return r(),l("div",null,[b,a("p",null,[n("之前搭建WebStack的时候，完全依赖的 "),a("a",x,[n("@owen0o0"),e(s)]),n(" 的api来获取Favicon图标")]),F,a("p",null,[n("文档："),a("a",E,[n("https://api.iowen.cn/doc/favicon.html"),e(s)])]),I,L,C,N,a("ul",null,[a("li",null,[a("p",null,[e(t,{to:"/website/ECS/"},{default:o(()=>[n("服务器1台")]),_:1})])]),a("li",null,[a("p",null,[e(t,{to:"/website/ECS/#%E5%9F%9F%E5%90%8D"},{default:o(()=>[n("域名1个")]),_:1})])]),a("li",null,[a("p",null,[e(t,{to:"/website/Xshell/"},{default:o(()=>[n("安装Xshell工具")]),_:1})])]),a("li",null,[a("p",null,[e(t,{to:"/website/BT/"},{default:o(()=>[n("安装宝塔面板")]),_:1})])])]),R,y,a("p",null,[n("仓库："),a("a",B,[n("https://github.com/owen0o0/getFavicon"),e(s)])]),O,a("ul",null,[a("li",null,[a("p",null,[a("a",S,[n("在线生成透明ICO图标"),e(s)])])]),a("li",null,[a("p",null,[a("a",V,[n("比特虫"),e(s)])])])])])}const T=i(w,[["render",$],["__file","index.html.vue"]]);export{T as default};