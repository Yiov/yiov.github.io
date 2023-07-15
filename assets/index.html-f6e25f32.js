import{_ as n,r as a,o as r,c as l,a as e,b as s,d as t,w as p,e as i}from"./app-3acf8c5f.js";const d="/assets/vercel-01-1d035272.png",m="/assets/vercel-02-b3b055a6.png",_="/assets/vercel-03-c152db1e.png",h="/assets/vercel-04-2fee0850.png",g="/assets/vercel-05-10477c72.png",u="/assets/vercel-06-a3d2eac4.png",v="/assets/vercel-07-9a1b811b.png",b="/assets/vercel-08-3159d464.png",f="/assets/vercel-09-2968c00e.png",w="/assets/vercel-10-1dad5a5d.png",x="/assets/vercel-11-488792cf.png",G="/assets/vercel-12-1b69a99a.png",k="/assets/vercel-13-6ad90739.png",y="/assets/vercel-14-9c696795.png",V="/assets/vercel-15-ea12c87c.png",E="/assets/vercel-16-1e7450e5.png",C="/assets/vercel-17-072fa5ea.png",N="/assets/vercel-18-10a3fe9c.png",D="/assets/vercel-19-ff460e89.png",P="/assets/vercel-20-db1393e5.png",A="/assets/vercel-21-7a0932da.png",L="/assets/vercel-22-d0a22179.png",B="/assets/vercel-23-2ec19eb4.png",I="/assets/vercel-24-97953905.png",S="/assets/vercel-25-b994fc45.png",F="/assets/vercel-26-4926f430.png",H={},R=i('<h1 id="vercel静态部署网站" tabindex="-1"><a class="header-anchor" href="#vercel静态部署网站" aria-hidden="true">#</a> Vercel静态部署网站</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-7-15</p></div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>',3),j=e("p",null,"Vercel 就完全不用担心，国内顺滑访问，并且还能一键部署",-1),z=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),s(" 准备工作")],-1),K=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"注意"),e("p",null,"必须要准备，否则无法访问")],-1),O=e("h2",{id:"注册vercel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#注册vercel","aria-hidden":"true"},"#"),s(" 注册Vercel")],-1),T={href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer"},U=i('<p><img src="'+d+'" alt=""></p><p>点击 <code>Sign UP</code> 注册，选择 <code>Hobby</code> 个人爱好者，再取一个昵称，点继续</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这里为什么不直接用Github关联登录呢，因为登录不了</p><p>至少我是，没关系自己注册后再关联一样的</p></div><p><img src="'+m+'" alt=""></p><p>这里选择 <code>Continue With Email</code> 邮箱注册，一会再来关联Github</p><p><img src="'+_+'" alt=""></p><p>输入邮箱后会发邮件，我们再邮箱点击验证，成功即可</p><p><img src="'+h+'" alt=""></p><p><img src="'+g+'" alt=""></p><p><img src="'+u+'" alt=""></p><p>验证成功，我们去重新登录账号，会要手机验证码，选 Chinese <code>+86</code></p><p><img src="'+v+'" alt=""></p><p>输完验证码，我们就注册完成了</p><p><img src="'+b+'" alt=""></p><h2 id="导入仓库" tabindex="-1"><a class="header-anchor" href="#导入仓库" aria-hidden="true">#</a> 导入仓库</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请确保你 GitHub 仓库已经上传好代码</p></div><p>点击 <code>Add a New Project</code> 新增一个项目</p><p><img src="'+f+'" alt=""></p><p>我们再选择 Github ，跳出关联确认</p><p><img src="'+w+'" alt=""></p><p><img src="'+x+'" alt=""></p><p>这里还是没有加载出仓库，我们选择底部 导入第三方仓库</p><p><img src="'+G+'" alt=""></p><p>粘贴我们的仓库地址，并授权对Giithub仓库进行修改</p><p><img src="'+k+'" alt=""></p><p><img src="'+y+'" alt=""></p><p>我们先返回去看，仓库就都有了，我们选择想要的仓库 <code>import</code> 导入</p><p><img src="'+V+'" alt=""></p><p>这里一般都默认不用改，会自动识别框架</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如果你是源文件还未构建，需要打开下方按键并填入</p><p>已经是静态文件了，不用打开按钮</p></div><p><img src="'+E+'" alt=""></p><p>我是VitePress，根据文档命令改正确，然后 <code>Deploy</code> 发布</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>依赖、构建命令和静态文件保证都是对的</p><p>否则会失败</p></div><p><img src="'+C+'" alt=""></p><p>耐心等待一会就自动部署完成啦，还能看到我们的首页</p><p><img src="'+N+'" alt=""></p><p>点击 <code>Continue to Dashboard</code> 进入面板， <code>Domains</code> 就是我们的访问链接</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>是不是发现访问不了，因为还没有完</p></div><p><img src="'+D+'" alt=""></p><h2 id="域名解析" tabindex="-1"><a class="header-anchor" href="#域名解析" aria-hidden="true">#</a> 域名解析</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>因为 <code>vercel.app</code> 的域名被墙了，所以我们需要自己准备 一个域名 来解析</p></div><p>点击 <code>Domains</code> 进入域名管理，这里输入我们自己的域名 <code>Add</code> 添加</p><p><img src="'+P+'" alt=""></p><p>这里我只选择新增一个一级域名，不喜欢用<code>www</code>，可以根据自己的需求</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>前两个实际就是一个重定向的区别</p><p>第一个：输入 <code>www.yiov.top</code> ，实际访问 <code>yiov.top</code></p><p>第二个：输入 <code>yiov.top</code> ，实际访问 <code>www.yiov.top</code></p><p>第三个：就只访问 <code>yiov.top</code></p></div><p><img src="'+A+'" alt=""></p><p>现在他要求我们去解析域名，添加A记录</p><p><img src="'+L+'" alt=""></p><p>我以腾讯云为例，添加域名解析 <code>@</code> ，记录值为 <code>76.76.21.21</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>官方的另一个解析值</p><p>A记录：<code>@</code> <code>76.223.126.88</code></p><p>cname记录： <code>@</code> <code>cname-china.vercel-dns.com</code></p></div><p><img src="'+B+'" alt=""></p><p>等一会它解析完成就可以了，能访问就是行了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>好了应该也会发邮件给你</p></div><p><img src="'+I+'" alt=""></p><h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h2><p>我们访问看看，完全OK</p><p><img src="'+S+'" alt=""></p>',57),W={href:"https://ping.chinaz.com/",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,[e("img",{src:F,alt:""})],-1);function J(M,Q){const c=a("RouterLink"),o=a("ExternalLinkIcon");return r(),l("div",null,[R,e("p",null,[s("之前我们讲过 "),t(c,{to:"/website/githubpage/"},{default:p(()=>[s("Github Page 静态部署")]),_:1}),s("，但是Github这半墙状态就很烦人")]),j,z,e("ul",null,[e("li",null,[e("p",null,[t(c,{to:"/website/ECS/#%E5%9F%9F%E5%90%8D"},{default:p(()=>[s("域名一个")]),_:1})])]),e("li",null,[e("p",null,[t(c,{to:"/daily/github/"},{default:p(()=>[s("Github注册使用及上传代码")]),_:1})])])]),K,O,e("p",null,[s("官网："),e("a",T,[s("https://vercel.com/"),t(o)])]),U,e("p",null,[s("我们 "),e("a",W,[s("站长工具"),t(o)]),s(" 跑一下PING，看看延迟")]),q])}const Y=n(H,[["render",J],["__file","index.html.vue"]]);export{Y as default};