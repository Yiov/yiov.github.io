import{_ as o,r,o as l,c,a as s,b as a,d as e,w as p,e as n}from"./app-b523d2b2.js";const d="/assets/Alist-01-88d1e508.png",h="/assets/Alist-02-3f28fa98.png",m="/assets/Alist-03-46be2442.png",_="/assets/Alist-04-ac5a4213.png",u="/assets/Alist-05-dc31dfcc.png",b="/assets/Alist-06-2c6f7b3e.png",g="/assets/Alist-07-bfb8ced9.png",v="/assets/Alist-08-3e8f0d5d.png",f="/assets/Alist-09-5a54d68b.png",k="/assets/Alist-10-7fd46101.png",A="/assets/Alist-11-14369450.png",x="/assets/Alist-12-8547d84f.png",w="/assets/Alist-13-d9c100f7.png",I="/assets/Alist-14-d1300925.png",E="/assets/Alist-15-82f0329b.png",L="/assets/Alist-16-a170da32.png",D="/assets/Alist-17-47dea714.png",S="/assets/Alist-18-8921a27d.png",V="/assets/Alist-19-8af4d785.png",q="/assets/Alist-20-6a1f4e7a.png",y="/assets/Alist-21-faa3af27.png",z="/assets/Alist-22-67291bbf.png",C="/assets/Alist-23-3cb02b65.png",F="/assets/Alist-24-9b9d5709.png",N="/assets/Alist-25-a3d9c90c.png",B="/assets/Alist-26-38589457.png",P="/assets/Alist-27-9fe6287d.png",X="/assets/Alist-28-8b379854.png",R="/assets/Alist-29-3281202a.png",U="/assets/Alist-30-1ebe51bf.png",T="/assets/Alist-31-eb4eff44.png",M="/assets/Alist-32-a7f1c220.png",Q="/assets/Alist-33-bfda1856.png",W="/assets/Alist-34-dea4fd7b.png",j="/assets/Alist-35-e6d11437.png",G="/assets/Alist-36-46175a81.png",H={},J=n('<h1 id="alist网盘搭建" tabindex="-1"><a class="header-anchor" href="#alist网盘搭建" aria-hidden="true">#</a> Alist网盘搭建</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2022-12-10</p><p>本次版本为V3.6.0</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Alist是一个网盘文件列表程序，支持的网盘谷歌、pikpak、阿里、百度、夸克、蓝奏等等</p><p>现在的V3界面简洁，列表分明</p>',5),K={href:"https://pan.nn.ci/",target:"_blank",rel:"noopener noreferrer"},O=s("p",null,[s("img",{src:d,alt:""})],-1),Y={href:"https://alist.nn.ci/",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://github.com/alist-org/alist",target:"_blank",rel:"noopener noreferrer"},$={href:"https://hub.docker.com/r/xhofe/alist",target:"_blank",rel:"noopener noreferrer"},ss={href:"https://alist.nn.ci/zh/guide/",target:"_blank",rel:"noopener noreferrer"},as={href:"https://alist-doc.nn.ci/docs/intro/",target:"_blank",rel:"noopener noreferrer"},es={href:"https://space.bilibili.com/36411485/channel/collectiondetail?sid=686340",target:"_blank",rel:"noopener noreferrer"},ts=s("h2",{id:"准备条件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#准备条件","aria-hidden":"true"},"#"),a(" 准备条件")],-1),ns=s("p",null,"本次仅演示docker安装，其他安装请参考文档",-1),is=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"说明"),s("p",null,"如果想安装在指定域名目录，可以使用Curl一键脚本，安装的时候指定目录")],-1),ps=n('<h2 id="_1-安装alist" tabindex="-1"><a class="header-anchor" href="#_1-安装alist" aria-hidden="true">#</a> 1.安装Alist</h2><p>使用Docker安装，点击复制发行版的安装命令</p><p><img src="'+h+`" alt=""></p><p>用Xshell登录服务器，粘贴，回车</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>说明第一个 <code>5244</code> 监听端口可以自己改，第二个5244不要动，怕出错的默认</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-v</span> /etc/alist:/opt/alist/data <span class="token parameter variable">-p</span> <span class="token number">5244</span>:5244 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;alist&quot;</span> xhofe/alist:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+`" alt=""></p><p>安装完成，我们还需要放行 <code>5244</code> 端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">5244</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+_+'" alt=""></p><p>服务器的端口也是需要放行的，以腾讯为例，防火墙 - 添加规则 - 端口：5244 - 确定</p><p><img src="'+u+'" alt=""></p><p><img src="'+b+'" alt=""></p><p><img src="'+g+'" alt=""></p><p>现在就可以用IP+端口访问了，点击底部的登录</p>',15),rs={class:"custom-container tip"},os=s("p",{class:"custom-container-title"},"说明",-1),ls={href:"http://198.124.1.1:5244",target:"_blank",rel:"noopener noreferrer"},cs=n('<p><img src="'+v+'" alt=""></p><p>初始默认账号是 <code>admin</code> ，密码我们按文档的命令查看</p><p><img src="'+f+`" alt=""></p><p>密码查看命令，二选一</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs alist

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> alist ./alist <span class="token parameter variable">-password</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+'" alt=""></p><p>登录成功后，依然点击这里，管理</p><p><img src="'+A+'" alt=""></p><p>改一下账号和密码，保存了重新登一次</p><p><img src="'+x+'" alt=""></p><h2 id="_2-反向代理" tabindex="-1"><a class="header-anchor" href="#_2-反向代理" aria-hidden="true">#</a> 2.反向代理</h2><p>开反代的目的就是隐藏端口和IP，不然你公网IP暴露了，服务器就等着被捶打吧</p><p>登录宝塔 - 网站 - 添加站点 - 域名输入你的域名 或者 二级域名 ，其他不用改，提交</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>我这里用的是二级域名，如：pan.baidu.com</p></div><p><img src="'+w+'" alt=""></p><p>点击刚创建的站点 - SSL - Let&#39;s Encrypt - 勾选域名 申请</p><div class="custom-container warning"><p class="custom-container-title">建议</p><p>申请是免费的，建议还是在自己服务器的域名下去申请，本次只是演示</p></div><p><img src="'+I+'" alt=""></p><p>等待一下就成功了，保存，并打开 <code>强制https开关</code></p><p><img src="'+E+`" alt=""></p><p>点反向代理 - 目标URL <code>127.0.0.1:5244</code> - 启用反向代理，其他不用填</p><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token scheme">http<span class="token scheme-delimiter">:</span></span><span class="token authority"><span class="token authority-delimiter">//</span><span class="token host"><span class="token ipv4-address">127.0.0.1</span></span><span class="token port-segment"><span class="token port-delimiter">:</span><span class="token port">5244</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+L+'" alt=""></p><p>现在用域名访问网站，就有了绿色的小锁</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>域名网页仅供预览，后台登录还是需要公网IP+端口登录！</p></div><p><img src="'+D+'" alt=""></p><h2 id="_3-网盘挂载" tabindex="-1"><a class="header-anchor" href="#_3-网盘挂载" aria-hidden="true">#</a> 3.网盘挂载</h2><p>网盘太多就不一一展示了，我就列举两个</p><h3 id="_3-1-阿里云盘" tabindex="-1"><a class="header-anchor" href="#_3-1-阿里云盘" aria-hidden="true">#</a> 3.1 阿里云盘</h3><p>我们打开文档，两个文档都行</p>',30),ds={class:"custom-container tip"},hs=s("p",{class:"custom-container-title"},"说明",-1),ms={href:"https://alist.nn.ci/zh/guide/",target:"_blank",rel:"noopener noreferrer"},_s={href:"https://alist-doc.nn.ci/docs/intro/",target:"_blank",rel:"noopener noreferrer"},us=n('<p><img src="'+S+'" alt=""></p><p>生成的二维码，我们用手机应用 <code>阿里云盘app</code> 扫描，登录</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如果加载不出来，可以换文档2获取</p></div><p><img src="'+V+'" alt=""></p><p>扫描后再次点击这里，得到一个token，一会要用</p><p><img src="'+q+'" alt=""></p><p>打开阿里云盘新建一个文件夹，自己命名，然后进入文件夹</p><p><img src="'+y+'" alt=""></p><p>这里得到一个文件夹ID，一会要用</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>比如：https://www.aliyundrive.com/drive/folder/63413592352dec9935f948468d6a7cb9b8575be3</p><p>说明folder/ 后面就是文件夹ID</p></div><p><img src="'+z+'" alt=""></p><p>登录Alist后台 - 存储 - 添加 - 阿里网盘</p><p><img src="'+C+'" alt=""></p><p><img src="'+F+'" alt=""></p><p>挂载路径 - 文件夹名字</p><p>根文件夹ID - folder</p><p>刷新令牌 - refresh_token</p><p>其他不用动，保存</p><p><img src="'+N+'" alt=""></p><p>这样就挂载成功了，我们刷新下网页看看</p><p><img src="'+B+'" alt=""></p><p><img src="'+P+'" alt=""></p><h3 id="_3-2-蓝奏网盘" tabindex="-1"><a class="header-anchor" href="#_3-2-蓝奏网盘" aria-hidden="true">#</a> 3.2 蓝奏网盘</h3><p>这个稍微复杂一丢丢，也不难，看文档</p><p><img src="'+X+'" alt=""></p><p>所说的开发者工具，我们浏览器F12键就可以了，打开网址 - <code>F12</code> - 登录账号</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>有登录状态的先退出</p></div>',27),bs={href:"https://pc.woozooo.com/",target:"_blank",rel:"noopener noreferrer"},gs=n('<p>登录后，有文件夹的进文件</p><p>开发者工具 - 网络 - 找到 <code>doupload.php</code> 文件 - 标头下有一个cookie，复制出来</p><p><img src="'+R+'" alt=""></p><p>底部还有一个 <code>folder_id</code> ，也复制出来</p><p><img src="'+U+'" alt=""></p><p>回到Alist - 存储 - 添加 - 蓝奏云</p><p>除了添加 <code>cookie</code> 和 <code>folder_id</code> ，还要填写一下分享的文件夹及其密码</p><p><img src="'+T+'" alt=""></p><h2 id="_4-美化" tabindex="-1"><a class="header-anchor" href="#_4-美化" aria-hidden="true">#</a> 4.美化</h2><p>关闭站点公告：设置 - 站点 - 站点公告，再次打开就不会弹了</p><p><img src="'+M+'" alt=""></p><p>元信息 - 路径(在哪个文件夹下显示) - 说明，支持Markdown</p><p><img src="'+Q+'" alt=""></p><p>这样一个网站就大工告成啦！</p><p><img src="'+W+`" alt=""></p><h2 id="_5-webdav" tabindex="-1"><a class="header-anchor" href="#_5-webdav" aria-hidden="true">#</a> 5.WebDAV</h2><p>可以挂载到本地当硬盘一样用，也可以在线看电影，但是由于阿里盘对流量有限制，就不演示了</p><p>文档也很详细，参照着来就行</p><h2 id="_6-如何更新" tabindex="-1"><a class="header-anchor" href="#_6-如何更新" aria-hidden="true">#</a> 6.如何更新</h2><p>需要删除容器和镜像，重新拉取，Xshell登录，删除容器</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>容器运行中，先停止后才可删除</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token comment">#查看容器</span>

<span class="token function">docker</span> stop alist <span class="token comment">#暂停alist容器</span>

<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> alist <span class="token comment">#删除alist容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+j+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images <span class="token comment">#查看镜像</span>

<span class="token function">docker</span> rmi 镜像ID <span class="token comment">#删除镜像</span>

或者
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> xhofe/alist:latest <span class="token comment">#删除镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+G+`" alt=""></p><p>重新起容器即可，由于系统文件都还在，所有内容无需重新设置</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如果想彻底删除，就需要删除安装目录了</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-v</span> /etc/alist:/opt/alist/data <span class="token parameter variable">-p</span> <span class="token number">5244</span>:5244 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;alist&quot;</span> xhofe/alist:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-添加目录时报错" tabindex="-1"><a class="header-anchor" href="#_1-添加目录时报错" aria-hidden="true">#</a> 1.添加目录时报错</h4><blockquote><p>Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path</p></blockquote><p>文件夹重名了，即便网盘不同，挂载到Alist也不能重名</p><h4 id="_2-如何去掉底部的-由-alist-驱动" tabindex="-1"><a class="header-anchor" href="#_2-如何去掉底部的-由-alist-驱动" aria-hidden="true">#</a> 2.如何去掉底部的 <code>由 AList 驱动</code></h4><p>请尊重开发者的劳动，谢谢。如果你真的想删除它，你可以使用自定义 CSS 来隐藏它</p><h4 id="_3-搜索功能不能用" tabindex="-1"><a class="header-anchor" href="#_3-搜索功能不能用" aria-hidden="true">#</a> 3.搜索功能不能用</h4><p>确保你是v3.6.0及以上版本，如果不是请更新；已经是的，在后台-索引-数据库-保存，然后点击构建索引，等数据读取完成刷新即可</p><h4 id="_4-站点转移" tabindex="-1"><a class="header-anchor" href="#_4-站点转移" aria-hidden="true">#</a> 4.站点转移</h4><p>登录后台备份，将备份下载到桌面，部署好新站点后，导入即可</p><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>`,39),vs={href:"https://github.com/alist-org/alist",target:"_blank",rel:"noopener noreferrer"};function fs(ks,As){const t=r("ExternalLinkIcon"),i=r("RouterLink");return l(),c("div",null,[J,s("ul",null,[s("li",null,[a("演示："),s("a",K,[a("https://pan.nn.ci/"),e(t)])])]),O,s("ul",null,[s("li",null,[s("p",null,[s("a",Y,[a("官网"),e(t)]),a(" 丨 "),s("a",Z,[a("仓库"),e(t)]),a(" 丨 "),s("a",$,[a("镜像"),e(t)])])]),s("li",null,[s("p",null,[s("a",ss,[a("文档教程1"),e(t)]),a(" 丨 "),s("a",as,[a("文档教程2"),e(t)]),a(" 丨 "),s("a",es,[a("美化教程"),e(t)])])])]),ts,ns,is,s("ul",null,[s("li",null,[s("p",null,[e(i,{to:"/website/ECS/"},{default:p(()=>[a("服务器1台")]),_:1})])]),s("li",null,[s("p",null,[e(i,{to:"/website/BT/"},{default:p(()=>[a("搭建好宝塔面板")]),_:1})])]),s("li",null,[s("p",null,[e(i,{to:"/website/ECS/#%E5%9F%9F%E5%90%8D"},{default:p(()=>[a("域名 或 二级域名")]),_:1}),a(" (可选)")])]),s("li",null,[s("p",null,[e(i,{to:"/website/Xshell/"},{default:p(()=>[a("Xshell工具")]),_:1}),a(" (或服务器自带)")])])]),ps,s("div",rs,[os,s("p",null,[a("比如："),s("a",ls,[a("http://198.124.1.1:5244"),e(t)])])]),cs,s("div",ds,[hs,s("p",null,[a("文档教程1："),s("a",ms,[a("https://alist.nn.ci/zh/guide/"),e(t)])]),s("p",null,[a("文档教程2："),s("a",_s,[a("https://alist-doc.nn.ci/docs/intro/"),e(t)])])]),us,s("p",null,[a("官网登录："),s("a",bs,[a("https://pc.woozooo.com/"),e(t)])]),gs,s("ul",null,[s("li",null,[s("a",vs,[a("Alist"),e(t)])])])])}const ws=o(H,[["render",fs],["__file","index.html.vue"]]);export{ws as default};
