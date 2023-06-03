import{_ as c,r as i,o as l,c as r,a as s,b as a,d as e,w as p,e as o}from"./app-76b13e4a.js";const d="/assets/westack-01-a143489f.png",u="/assets/westack-02-b2930532.png",h="/assets/westack-03-1bcd0dce.png",m="/assets/westack-04-120258d7.png",g="/assets/westack-05-865dd938.png",k="/assets/westack-06-7bc24ee6.png",v="/assets/westack-07-23e5dada.png",b="/assets/westack-08-8a379f5e.png",_="/assets/westack-09-aab80288.png",f="/assets/westack-10-c94de9fb.png",w="/assets/westack-11-cc6727b0.png",x="/assets/westack-12-eccabad6.png",q="/assets/westack-13-64a098d7.png",S="/assets/westack-14-d1a44497.png",y="/assets/westack-15-574ff120.png",T="/assets/westack-16-f93a3173.png",E="/assets/westack-17-10e712b8.png",W="/assets/westack-18-ef1c39ce.png",L="/assets/westack-19-e63ab4b4.png",R="/assets/westack-20-80f9eefd.png",P="/assets/westack-21-f71e29af.png",C="/assets/westack-22-63da1e5b.png",F="/assets/westack-23-afad57cc.png",A="/assets/westack-24-2f4f1d30.png",H="/assets/westack-25-222a2159.png",N="/assets/westack-26-c4d3a8d1.png",$="/assets/westack-27-79e29a09.png",I="/assets/westack-28-c37df00c.png",M="/assets/westack-29-e5056d2d.png",V="/assets/westack-30-ba57b75d.png",z="/assets/westack-31-89f80a5e.png",B="/assets/westack-32-38f02ab3.png",O={},G=o('<h1 id="webstack导航从零搭建" tabindex="-1"><a class="header-anchor" href="#webstack导航从零搭建" aria-hidden="true">#</a> Webstack导航从零搭建</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2022-8-2</p></div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>一般情况下个人是不能做导航的，可以考虑国外服务器，毕竟免备案，不过价格就高点</p>',4),U={href:"https://github.com/WebStackPage/WebStackPage.github.io",target:"_blank",rel:"noopener noreferrer"},D={href:"https://webstack.cc/",target:"_blank",rel:"noopener noreferrer"},Q=o('<div class="custom-container tip"><p class="custom-container-title">说明</p><p>好看的都收费，虽然模板已经停更了，不过这个已经很棒了</p></div><p><img src="'+d+'" alt=""></p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>',3),X=s("h2",{id:"_1-上传主题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-上传主题","aria-hidden":"true"},"#"),a(" 1.上传主题")],-1),Y=s("code",null,"WordPress",-1),j={href:"https://github.com/owen0o0/WebStack",target:"_blank",rel:"noopener noreferrer"},J=o('<div class="custom-container tip"><p class="custom-container-title">说明</p><p>本次仅演示wordpress，教程也按照这个仓库的来</p></div><p><img src="'+u+'" alt=""></p><p>登录 <code>wordpress</code> 的后台，外观-主题-上传主题-选择文件-安装，直到完成，然后 <code>启用</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>或者在 <code>/wp-content/themes</code> 文件夹新建webstack文件夹，并上传所有文件</p></div><p>WP后台：<code>http://域名.com/wp-admin/</code></p><p><img src="'+h+'" alt=""></p><p><img src="'+m+'" alt=""></p><p>其他主题怎么删掉呢，主题详情-右下有个删除</p><p><img src="'+g+'" alt=""></p><p><img src="'+k+`" alt=""></p><h2 id="_2-设置伪静态" tabindex="-1"><a class="header-anchor" href="#_2-设置伪静态" aria-hidden="true">#</a> 2.设置伪静态</h2><p>登录宝塔，添加站点后，设置伪静态</p><p>根据自己服务器环境 <code>二选一</code> ，我就用Nginx，保存</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Nginx规则</span>
location /
<span class="token punctuation">{</span>
    try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.php?<span class="token variable">$args</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
rewrite /wp-admin$ <span class="token variable">$scheme</span>://<span class="token variable">$host</span><span class="token variable">$uri</span>/ permanent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Apache 规则</span>
<span class="token operator">&lt;</span>IfModule mod_rewrite.c<span class="token operator">&gt;</span>
RewriteEngine On
RewriteBase /
RewriteRule ^index<span class="token punctuation">\\</span>.php$ - <span class="token punctuation">[</span>L<span class="token punctuation">]</span>
RewriteCond %<span class="token punctuation">{</span>REQUEST_FILENAME<span class="token punctuation">}</span> <span class="token operator">!</span>-f
RewriteCond %<span class="token punctuation">{</span>REQUEST_FILENAME<span class="token punctuation">}</span> <span class="token operator">!</span>-d
RewriteRule <span class="token builtin class-name">.</span> /index.php <span class="token punctuation">[</span>L<span class="token punctuation">]</span>
<span class="token operator">&lt;</span>/IfModule<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+'" alt=""></p><h2 id="_3-美化网页内容" tabindex="-1"><a class="header-anchor" href="#_3-美化网页内容" aria-hidden="true">#</a> 3.美化网页内容</h2><p>我们访问域名，看到的主页无比干净，我们挨个添加</p><p><img src="'+b+'" alt=""></p><h3 id="_3-1-一级菜单" tabindex="-1"><a class="header-anchor" href="#_3-1-一级菜单" aria-hidden="true">#</a> 3.1 一级菜单</h3><p>网址-网址分类-名称自己取，父级无</p><p><img src="'+_+'" alt=""></p><p>这里图标，自己选一个， <code>添加新网址目录</code></p><p><img src="'+f+'" alt=""></p><p>回到网页刷新看看，就有了新增的菜单目录</p><p><img src="'+w+'" alt=""></p><h3 id="_3-2-二级菜单" tabindex="-1"><a class="header-anchor" href="#_3-2-二级菜单" aria-hidden="true">#</a> 3.2 二级菜单</h3><p>网址-网址分类-名称自己取，父级选已创建好的一级目录</p><p><img src="'+x+'" alt=""></p><p>这里子级的图标不用选，因为不显示 ，<code>添加新网址目录</code> ，回到网页刷新看看</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>有二级菜单存在的情况，主页面有二级菜单就不显示一级菜单</p></div><p><img src="'+q+'" alt=""></p><h3 id="_3-3-侧栏底部菜单" tabindex="-1"><a class="header-anchor" href="#_3-3-侧栏底部菜单" aria-hidden="true">#</a> 3.3 侧栏底部菜单</h3><p>非必须，看自己喜好吧</p><p>外观-菜单，菜单名称自己取，自定义链接-添加至菜单，然后导航标签写一下，勾选 <code>侧栏底部菜单</code> ，保存菜单</p><p><img src="'+S+'" alt=""></p><p>其他的就依次添加即可，菜单前也想加图标的话，右上方，<code>显示选项</code></p><p><img src="'+y+'" alt=""></p><p>勾选 <code>css类</code></p><p><img src="'+T+'" alt=""></p><p>这样菜单里就多了一个css类，我们找自己喜欢的fa图标即可</p>',41),K={href:"http://www.fontawesome.com.cn/icons-ui/",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://fontawesome.dashgame.com/",target:"_blank",rel:"noopener noreferrer"},ss=o('<div class="custom-container tip"><p class="custom-container-title">说明</p><p>使用前记得前面还要加一个 <code>fa</code></p><p>比如wordpress是 <code>fa-wordpress</code>，那么css就是 <code>fa fa-wordpress</code></p></div><p><img src="'+E+'" alt=""></p><p>回到网页刷新看看效果</p><p><img src="'+W+'" alt=""></p><p>如果不喜欢后面的小星星，修改<code>wp-content/themes/WebStack-1.1620/inc/inc.php</code>文件，第473行的星星删掉即可</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>📢 修改文件前，请先备份！</p></div><p><img src="'+L+'" alt=""></p><h3 id="_3-4-添加网页" tabindex="-1"><a class="header-anchor" href="#_3-4-添加网页" aria-hidden="true">#</a> 3.4 添加网页</h3><p>网址-所有网址-添加网址</p><p><img src="'+R+'" alt=""></p><p>网站名字，段落这里自己写，到时候详情页能看到的</p><p><img src="'+P+'" alt=""></p><p>填入网站的网址，描述，滑上去点 <strong>发布</strong> 即可</p><p><img src="'+C+'" alt=""></p><p>回到网页刷新看看，这里的网站没有自动获取图标，我们去设置一下</p><p><img src="'+F+'" alt=""></p><p>主题设置-常规设置-图标源</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这次设置好了，下次就不用管了</p></div><p><img src="'+A+'" alt=""></p>',19),as={href:"https://api.iowen.cn/doc/favicon.html",target:"_blank",rel:"noopener noreferrer"},es=s("code",null,".png",-1),ns=s("strong",null,"保存",-1),ts=o(`<div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token scheme">https<span class="token scheme-delimiter">:</span></span><span class="token authority"><span class="token authority-delimiter">//</span><span class="token host">api.iowen.cn</span></span><span class="token path"><span class="token path-separator">/</span>favicon<span class="token path-separator">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+H+'" alt=""></p><p>回到网页刷新看看，可以按步骤依次添加其他</p><p><img src="'+N+'" alt=""></p><h3 id="_3-5-添加详情页" tabindex="-1"><a class="header-anchor" href="#_3-5-添加详情页" aria-hidden="true">#</a> 3.5 添加详情页</h3><p>主题设置-常规设置-详情页开关(开启)，已开的无视</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如果想直接跳转网页，不需要详情页，关闭即可</p></div><p><img src="'+$+'" alt=""></p><p>我们随便点一个网站进去</p><p><img src="'+I+'" alt=""></p><p>这个就是详情页</p><p><img src="'+M+'" alt=""></p><p>如果不喜欢下方的 <code>相关导航</code> ，修改文件<code>wp-content/themes/WebStack-1.1620/single-sites.php</code>，删掉第111-146行，这样下面就干净了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>📢 修改文件前，请先备份！</p></div><p><img src="'+V+'" alt=""></p><h2 id="_4-其他设置" tabindex="-1"><a class="header-anchor" href="#_4-其他设置" aria-hidden="true">#</a> 4.其他设置</h2><p>大部分都是有开关的，自己看下即可，我就说几个难点的</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>📢 修改文件前，请先备份！</p></div><h3 id="_4-1-删除天气" tabindex="-1"><a class="header-anchor" href="#_4-1-删除天气" aria-hidden="true">#</a> 4.1 删除天气</h3><p>修改文件<code>wp-content/themes/WebStack-1.1620/templates/header-banner.php</code>，删除第23-27行即可</p><p><img src="'+z+`" alt=""></p><p>若想替换成国旗，将第22-28行换成下面代码</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 国旗 <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li style<span class="token operator">=</span><span class="token string double-quoted-string">&quot;min-height: 75px;&quot;</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string double-quoted-string">&quot;&quot;</span><span class="token operator">&gt;</span>
                            <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string double-quoted-string">&quot;https://webstack.cc/assets/images/flags/flag-cn.png&quot;</span> alt<span class="token operator">=</span><span class="token string double-quoted-string">&quot;flag-cn&quot;</span><span class="token operator">&gt;</span> Chinese
                        <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 国旗 end <span class="token operator">--</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-删除fork-me-on-github" tabindex="-1"><a class="header-anchor" href="#_4-2-删除fork-me-on-github" aria-hidden="true">#</a> 4.2 删除Fork me on GitHub</h3><p>修改文件<code>wp-content/themes/WebStack-1.1620/templates/header-banner.php</code>，删除第31行即可</p><h3 id="_4-3-关掉搜索框" tabindex="-1"><a class="header-anchor" href="#_4-3-关掉搜索框" aria-hidden="true">#</a> 4.3 关掉搜索框</h3><p>主题设置-常规设置-搜索（关闭）</p><p><img src="`+B+`" alt=""></p><p>觉得搜索框复杂，可以自己改文件<code>wp-content/themes/WebStack-1.1620/search-tool.php</code></p><h3 id="_4-4-底部信息栏" tabindex="-1"><a class="header-anchor" href="#_4-4-底部信息栏" aria-hidden="true">#</a> 4.4 底部信息栏</h3><p>修改文件<code>wp-content/themes/WebStack-1.1620/footer.php</code>，修改第22或者23行即可</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Copyright © <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y&#39;</span><span class="token punctuation">)</span> <span class="token delimiter important">?&gt;</span></span>  <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">io_get_option</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;icp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;a href=&quot;https://beian.miit.gov.cn/&quot; target=&quot;_blank&quot; rel=&quot;link noopener&quot;&gt;&#39;</span> <span class="token operator">.</span> <span class="token function">io_get_option</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;icp&#39;</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;/a&gt;&#39;</span><span class="token delimiter important">?&gt;</span></span>
<span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span>Design by <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://github.com/WebStackPage/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Webstack<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-公告" tabindex="-1"><a class="header-anchor" href="#_4-5-公告" aria-hidden="true">#</a> 4.5 公告</h3><p>主题-常规设置-显示公告（开启/关闭），这里的公告在wp后台的公告里添加</p><h3 id="_4-6-图标logo设置" tabindex="-1"><a class="header-anchor" href="#_4-6-图标logo设置" aria-hidden="true">#</a> 4.6 图标LOGO设置</h3><p>主题-图标设置，根据尺寸要求来就好了，制作完成上传到image文件夹并在设置中修改</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code-snippet code keyword">\`logo@2x.png\`</span> 左上角Logo：建议高度80px，原图尺寸178px*40px

<span class="token code-snippet code keyword">\`logo_dark@2x.png\`</span> 左上角Logo：暗黑模式，原图尺寸178px*40px

<span class="token code-snippet code keyword">\`logo-collapsed@2x.png\`</span> 左上角收起菜单栏Logo：建议80px*80px

<span class="token code-snippet code keyword">\`favicon.png\`</span> 本网站的fa图标，原图尺寸64px*64px

<span class="token code-snippet code keyword">\`app-ico.png\`</span> 添加的网站fa图标，开启了api自动获取这个就不用管，原图尺寸180px*180px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-7-部署sll证书不是绿锁" tabindex="-1"><a class="header-anchor" href="#_4-7-部署sll证书不是绿锁" aria-hidden="true">#</a> 4.7 部署SLL证书不是绿锁</h3><p>一般正常部署了证书后，就是绿锁，如果出现灰锁，并提示如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>您与***.com之间的连接采用新型加密套件进行了加密。
此外，此页中包含其他不安全的资源。他人能在这些资源传输过程中进行查看，攻击者也可以修改这些资源，从而改变此页的外观。
该连接使用TLS 1.2。
该连接使用AES_ 128 _GCM和
ECDHE_ RSA进行加密和身份验证。
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们按F12审查元素-安全可以查看到原因，就是因为有的图片用的是http，而不是https</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>此页面不安全。
资源 - 混合内容
此页面包含 HTTP 资源。
Reload the page to record requests for HTTP resources.
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>F12审查元素-控制台下方就看得到，黄色的就是问题所在，自己上传了图片或者LOGO引用的链接</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>某些消息已移动到“问题”面板。

Mixed Content: The page at &#39;&lt;URL&gt;&#39; was loaded over HTTPS, but requested an insecure image &#39;&lt;URL&gt;&#39;. This content should also be served over HTTPS.
(index):557 Mixed Content: The page at &#39;https://***.com/&#39; was loaded over HTTPS, but requested an insecure image 
&#39;http://***.com/wp-content/uploads/2022/08/zqyy.png&#39;. 
This content should also be served over HTTPS.
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们根据报错的，在WP后台逐个修改网址的fa图标和logo地址，即 <code>http后加一个s</code></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code>#修改前
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> http://***.com/wp-content/uploads/2022/08/zqyy.png
</span></span>
#修改后
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> https://***.com/wp-content/uploads/2022/08/zqyy.png
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>`,47),ps={href:"https://github.com/WebStackPage/",target:"_blank",rel:"noopener noreferrer"},os={href:"https://github.com/owen0o0/WebStack",target:"_blank",rel:"noopener noreferrer"},is={href:"https://fontawesome.dashgame.com/",target:"_blank",rel:"noopener noreferrer"},cs={href:"http://www.fontawesome.com.cn/icons-ui/",target:"_blank",rel:"noopener noreferrer"},ls={href:"https://api.iowen.cn/doc/favicon.html",target:"_blank",rel:"noopener noreferrer"};function rs(ds,us){const n=i("ExternalLinkIcon"),t=i("RouterLink");return l(),r("div",null,[G,s("p",null,[a("这里我使用的是 "),s("a",U,[a("@Viggoz 大佬的 Webstack 导航"),e(n)])]),s("p",null,[a("演示："),s("a",D,[a("https://webstack.cc/"),e(n)])]),Q,s("ul",null,[s("li",null,[s("p",null,[e(t,{to:"/website/ECS/"},{default:p(()=>[a("服务器1台")]),_:1})])]),s("li",null,[s("p",null,[e(t,{to:"/website/ECS/#%E5%9F%9F%E5%90%8D"},{default:p(()=>[a("域名1个")]),_:1})])]),s("li",null,[s("p",null,[e(t,{to:"/website/Xshell/"},{default:p(()=>[a("安装Xshell工具")]),_:1})])]),s("li",null,[s("p",null,[e(t,{to:"/website/BT/"},{default:p(()=>[a("安装宝塔面板")]),_:1})])]),s("li",null,[s("p",null,[e(t,{to:"/website/wordpress/"},{default:p(()=>[a("搭建WordPress")]),_:1})])])]),X,s("p",null,[a("根据文档说明，使用 "),Y,a(" 搭建，需进入"),s("a",j,[a("@owen0o0 仓库"),e(n)]),a(" 下载")]),J,s("p",null,[s("a",K,[a("fa图标-Fontawesome中文网"),e(n)]),a(" 丨"),s("a",Z,[a("fa图标-Font Awesome"),e(n)])]),ss,s("p",null,[a("这里我们直接用 "),s("a",as,[a("一为的api"),e(n)]),a(" ，或者"),e(t,{to:"/website/Favicon/"},{default:p(()=>[a("自己按他的源码搭建")]),_:1}),a("，图标源api后缀填"),es,a("，"),ns]),ts,s("ul",null,[s("li",null,[s("p",null,[s("a",ps,[a("@Viggoz"),e(n)])])]),s("li",null,[s("p",null,[s("a",os,[a("@owen0o0"),e(n)])])]),s("li",null,[s("p",null,[s("a",is,[a("@Font Awesome"),e(n)])])]),s("li",null,[s("p",null,[s("a",cs,[a("@Font Awesome中文网"),e(n)])])]),s("li",null,[s("p",null,[s("a",ls,[a("@一为API"),e(n)])])])])])}const ms=c(O,[["render",rs],["__file","index.html.vue"]]);export{ms as default};
