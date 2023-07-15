import{_ as r,r as a,o as p,c as l,a as t,b as e,d as s,w as i,e as c}from"./app-2494679a.js";const d="/assets/cloudflare-01-66f00d15.png",_="/assets/cloudflare-02-68d675fa.png",u="/assets/cloudflare-03-f55fe326.png",h="/assets/cloudflare-04-0cb99d51.png",m="/assets/cloudflare-05-26b1283e.png",f="/assets/cloudflare-06-5eec6bc0.png",g="/assets/cloudflare-07-2750a61f.png",b="/assets/cloudflare-08-42856f0a.png",v="/assets/cloudflare-09-7b3c610d.png",N="/assets/cloudflare-10-97977818.png",w="/assets/cloudflare-11-f29c33ba.png",D="/assets/cloudflare-12-08d8f89a.png",k="/assets/cloudflare-13-8dd9f96d.png",S="/assets/cloudflare-14-041b77b8.png",E="/assets/cloudflare-15-132914aa.png",x="/assets/cloudflare-16-bcff95ef.png",C="/assets/cloudflare-17-0808de01.png",A="/assets/cloudflare-18-173e2cf8.png",y="/assets/cloudflare-19-ce5328c2.png",F="/assets/cloudflare-20-3cdb14c6.png",L="/assets/cloudflare-21-6a396e8a.png",T={},B=c('<h1 id="cloudflare注册使用" tabindex="-1"><a class="header-anchor" href="#cloudflare注册使用" aria-hidden="true">#</a> cloudflare注册使用</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-6-3</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>我们常说的 <code>套个CF</code> ，其实就是说的cloudflare，因为他其中最特色的功能就是免费的CDN</p>',4),V={class:"custom-container tip"},q=t("p",{class:"custom-container-title"},"关于CDN",-1),P=t("p",null,"CDN 的全称是 Content Delivery Network，即内容分发网络",-1),H=t("ul",null,[t("li",null,[t("p",null,"比方：北京到广东的快递包裹，时长要3天；但如果北京在广东有货物仓储，直接广东发货，时长就仅需1天")]),t("li",null,[t("p",null,"作用：CDN就是这个作用，将我们的网站临时存储在服务器中，谁访问就分配距离他最近的节点连接，从而大大加快网页访问速度")])],-1),I={href:"https://www.upyun.com/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.qiniu.com/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://cloud.tencent.com/act/pro/cos",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.aliyun.com/product/oss",target:"_blank",rel:"noopener noreferrer"},z=t("h2",{id:"注册",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#注册","aria-hidden":"true"},"#"),e(" 注册")],-1),j={href:"https://www.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},G=c('<p><img src="'+d+'" alt=""></p><p>注册好账号</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>虽然有了中国站点，但访问还是要挂梯子</p></div><p><img src="'+_+'" alt=""></p><p><img src="'+u+'" alt=""></p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>',6),J={href:"https://pages.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},K=t("h3",{id:"cdn加速",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#cdn加速","aria-hidden":"true"},"#"),e(" CDN加速")],-1),Q=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"说明"),t("p",null,"仅演示下步骤，自己的服务器网站也是一样的步骤"),t("p",null,"由于github基本处于半墙状态，也可以借助cloudflare进行加速")],-1),U={href:"https://yiov.github.io/",target:"_blank",rel:"noopener noreferrer"},W={class:"custom-container warning"},X=t("p",{class:"custom-container-title"},"注意",-1),Y=t("p",null,"需要自己先购买一个域名，github pages不能修改DNS",-1),Z=c('<p>我是腾讯云买的域名，进控制台，添加记录</p><p>主机记录<code>@</code>或者自定义其他二级域名，记录类型为<code>CNAME</code>，记录值填github页面 <code>yiov.github.io</code></p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果你是自己的服务器，直接快速解析好就可以了，不需要添加CNAME别名解析</p></div><p><img src="'+h+'" alt=""></p><p>然后在仓库设置 - pages - 自定义域名 填入 我们购买的域名，保存</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>等待解析完成，用域名可以访问即可</p></div><p><img src="'+m+'" alt=""></p><p>回到 cloudflare 添加站点</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>不需要填https，直接填域名</p></div><p><img src="'+f+'" alt=""></p><p>拉倒最下面，选择 Free 免费的方案，继续</p><p><img src="'+g+'" alt=""></p><p>它会自动扫描我们原本的DNS</p><p><img src="'+b+'" alt=""></p><p>我只解析了一个<code>@</code>，竟然没扫描过来，那就手动添加一下吧，和DNSPod那里一样的</p><p><img src="'+v+'" alt=""></p><p>添加好后点 继续</p><div class="custom-container tip"><p class="custom-container-title">建议</p><p>这里最好将小云朵代理状态关掉，否则网站不可访问</p><p>代理走的是美国节点</p></div><p><img src="'+N+'" alt=""></p><p>最后要求我们修改DNS服务器</p><p><img src="'+w+'" alt=""></p><p>以腾讯云为例进入域名后台，勾选域名 - 更多操作 - 修改DNS服务器</p><p><img src="'+D+'" alt=""></p><p>自定义DNS，将cloudflare提供的2个DNS填上去</p><p><img src="'+k+'" alt=""></p><p>完成后，会显示其他，且可以进域名里看到变更了</p><p><img src="'+S+'" alt=""></p><p><img src="'+E+'" alt=""></p><p>点击检查服务器即可，等10分钟左右就会激活成功了</p><p><img src="'+x+'" alt=""></p><p><img src="'+C+'" alt=""></p><p>这里的快速入门，我也是一顿骚操作默认点完了，最后网站不能访问</p><blockquote><p>提示：too many HTTP</p></blockquote><p>需要将 <code>SSL/TLS - 边缘证书 - 始终使用HTTPS</code> 关闭</p><p><img src="'+A+'" alt=""></p><p><img src="'+y+'" alt=""></p><p>还是无法访问，最后发现是小云朵没关</p><p>DNS - 记录 - 将小云朵关掉，仅DNS即可</p><p><img src="'+F+'" alt=""></p>',39),$={href:"https://ping.chinaz.com/",target:"_blank",rel:"noopener noreferrer"},tt=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"说明"),t("p",null,"事实证明免费的也就这样，还是付费的好用")],-1),et=t("p",null,[t("img",{src:L,alt:""})],-1);function st(ot,ct){const o=a("ExternalLinkIcon"),n=a("RouterLink");return p(),l("div",null,[B,t("div",V,[q,P,H,t("p",null,[e("另：常见的CDN服务商还有 "),t("a",I,[e("又拍云"),s(o)]),e("、"),t("a",M,[e("七牛云"),s(o)]),e("、"),t("a",O,[e("腾讯云COS"),s(o)]),e("、"),t("a",R,[e("阿里云OSS"),s(o)]),e("等")])]),z,t("p",null,[e("官网："),t("a",j,[e("https://www.cloudflare.com/"),s(o)])]),G,t("p",null,[e("cloudflare除了可以使用CDN还可以创建 "),t("a",J,[e("cloudflare page"),s(o)]),e(" ，我这里先不说")]),K,Q,t("p",null,[e("演示网站："),t("a",U,[e("https://yiov.github.io/"),s(o)])]),t("div",W,[X,Y,t("p",null,[s(n,{to:"/website/githubpage/#_3-%E8%AE%BF%E9%97%AE%E5%8F%8A%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D"},{default:i(()=>[e("域名使用 点我 ☛ 查看教程")]),_:1})])]),Z,t("p",null,[e("刷新访问就可以了，我们用 "),t("a",$,[e("站长工具"),s(o)]),e(" ping一下前后")]),tt,et])}const nt=r(T,[["render",st],["__file","index.html.vue"]]);export{nt as default};