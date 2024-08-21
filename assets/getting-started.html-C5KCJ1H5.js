import{_ as o,r,c,b as s,a as e,w as n,e as t,d as l,o as d}from"./app-fhCrW_NW.js";const p="/getting-started/01.png",u="/getting-started/02.png",m="/getting-started/03.png",b="/getting-started/04.png",h="/getting-started/05.png",v="/getting-started/06.png",g="/getting-started/07.png",y="/getting-started/08.png",_="/getting-started/09.png",f="/getting-started/10.png",k="/getting-started/11.png",F="/getting-started/12.png",C="/getting-started/13.png",B="/getting-started/14.png",A="/getting-started/15.png",E="/getting-started/16.png",x="/getting-started/17.png",j="/getting-started/18.png",D="/getting-started/19.png",w="/getting-started/20.png",q="/getting-started/21.png",V="/getting-started/22.png",N="/getting-started/23.png",z="/getting-started/24.png",G="/getting-started/25.png",S="/getting-started/26.png",R="/getting-started/27.png",T={},I=t('<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h1><blockquote><p>最近更新：2024-7-29</p></blockquote><div class="custom-container danger"><p class="custom-container-title">注意</p><p>本人已转用 <a href="https://vitepress.yiov.top/" target="_blank" rel="noopener noreferrer">Vitepress</a> ，可能不会再更新了</p></div><h2 id="在线体验" tabindex="-1"><a class="header-anchor" href="#在线体验"><span>在线体验</span></a></h2><p>免安装体验及调试 StackBlitz：<a href="https://stackblitz.com/fork/vuepress" target="_blank" rel="noopener noreferrer">https://stackblitz.com/fork/vuepress</a></p><h2 id="前期工作" tabindex="-1"><a class="header-anchor" href="#前期工作"><span>前期工作</span></a></h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>已经安装 或者 熟练了，可以不用看此步骤</p></div><details class="custom-container details"><summary>必备工具</summary><ul><li><p>必装：<a href="https://yiov.top/website/nodejs.html" target="_blank" rel="noopener noreferrer">nodejs</a></p></li><li><p>建议安装：<a href="https://yiov.top/website/VSCode.html" target="_blank" rel="noopener noreferrer">VScode</a></p></li><li><p>可选安装：<a href="https://yiov.top/website/pages/git.html" target="_blank" rel="noopener noreferrer">git</a></p></li></ul></details>',8),P={class:"custom-container details"},M=s("summary",null,"pnpm",-1),U=s("p",null,[l("安装好nodejs后，通过 npm 安装 "),s("a",{href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},"pnpm"),l(" 或 "),s("a",{href:"https://www.yarnpkg.cn/",target:"_blank",rel:"noopener noreferrer"},"yarn")],-1),H=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"#安装pnpm")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npm"),s("span",{style:{color:"#98C379"}}," install"),s("span",{style:{color:"#D19A66"}}," -g"),s("span",{style:{color:"#98C379"}}," pnpm")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"#查看版本号")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"pnpm"),s("span",{style:{color:"#D19A66"}}," -v")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),J=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"#安装yarn")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npm"),s("span",{style:{color:"#98C379"}}," install"),s("span",{style:{color:"#D19A66"}}," -g"),s("span",{style:{color:"#98C379"}}," yarn")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"#查看版本号")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"yarn"),s("span",{style:{color:"#D19A66"}}," -v")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),O=s("p",null,[s("img",{src:p,alt:""})],-1),W=t('<details class="custom-container details"><summary>创建文件目录</summary><p>win键+R键，调出命令运行框，输入 <code>cmd</code></p><p><img src="'+u+`" alt=""></p><p>先进入任意盘符，比如 F 盘</p><div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-bash;"><code><span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">#盘符可以自定义 回车进入</span></span></span>
<span class="line"><span class="line"><span style="color:#61AFEF;">f:</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt=""></p><p>再创建文件夹名</p><div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-bash;"><code><span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">#创建目录并进入，也可以自定义目录名</span></span></span>
<span class="line"><span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#98C379;"> vuepress</span><span style="color:#ABB2BF;"> &amp;&amp; </span><span style="color:#56B6C2;">cd</span><span style="color:#98C379;"> vuepress</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这样我的目录路径为 <code>F:\\vuepress</code></p><p>不习惯的，也可以直接电脑创建</p></div><p><img src="`+b+'" alt=""></p></details><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如果你是首次接触，推荐你使用 <a href="#%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85">一键安装</a></p><p>你已经够熟练了，直接使用 <a href="#%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85">手动安装</a></p></div><h2 id="一键安装" tabindex="-1"><a class="header-anchor" href="#一键安装"><span>一键安装</span></a></h2><p>通过 <a href="https://www.npmjs.com/package/create-vuepress" target="_blank" rel="noopener noreferrer">create-vuepress</a> 直接创建项目模板</p>',5),K=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"pnpm"),s("span",{style:{color:"#98C379"}}," create"),s("span",{style:{color:"#98C379"}}," vuepress"),s("span",{style:{color:"#98C379"}}," vuepress-starter")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),L=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"yarn"),s("span",{style:{color:"#98C379"}}," create"),s("span",{style:{color:"#98C379"}}," vuepress"),s("span",{style:{color:"#98C379"}}," vuepress-starter")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),Q=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npm"),s("span",{style:{color:"#98C379"}}," init"),s("span",{style:{color:"#98C379"}}," vuepress"),s("span",{style:{color:"#98C379"}}," vuepress-starter")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),X=t('<p>用键盘 <code>方向键↓</code> 选择 简体中文，回车</p><p><img src="'+h+'" alt=""></p><p>包管理器就选择你安装时的包，我是pnpm，回车</p><p><img src="'+v+'" alt=""></p><p>打包器用默认的vite即可，回车</p><p><img src="'+g+'" alt=""></p><p>项目类型，我用文档演示，用键盘 <code>方向键↓</code> 选择 <code>docs</code></p><p><img src="'+y+'" alt=""></p><p>应用名称、版本号、描述也可以之后再改，直接回车</p><p>默认协议MIT，默认创建工作流，回车</p><p><img src="'+_+'" alt=""></p><p>等下载安装完成，问是否启动，输入 <code>y</code> 回车</p><details class="custom-container details"><summary>WARN  Issues with peer dependencies found</summary><p>这里提示依赖关系需要不对等，不急，我们等会处理</p></details><p><img src="'+f+'" alt=""></p><p>这里自动生成了一个本地8080端口的网页，复制到浏览器打开</p><p><img src="'+k+'" alt=""></p>',16),Y={class:"custom-container details"},Z=t('<summary>打开网页一片空白，什么都没有</summary><p>这就是刚才提示依赖不对等造成的，我们<code>ctrl+c</code> ，输入 <code>y</code> 回车结束终端</p><p><img src="'+F+'" alt=""></p><p>进入自动创建的vuepress-starter文件夹</p><div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-bash;"><code><span class="line"><span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#98C379;"> vuepress-starter</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用 pnpm dlx 升级vuepress</p>',6),$=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"pnpm"),s("span",{style:{color:"#98C379"}}," dlx"),s("span",{style:{color:"#98C379"}}," vp-update")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),ss=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"yarn"),s("span",{style:{color:"#98C379"}}," dlx"),s("span",{style:{color:"#98C379"}}," vp-update")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),es=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npx"),s("span",{style:{color:"#98C379"}}," vp-update")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),ns=s("p",null,[s("img",{src:C,alt:""})],-1),as=s("p",null,"最后手动启动看看，已经可以查看网页了",-1),ls=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"pnpm"),s("span",{style:{color:"#98C379"}}," docs:dev")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),is=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"yarn"),s("span",{style:{color:"#98C379"}}," dlx"),s("span",{style:{color:"#98C379"}}," vp-update")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),ts=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npx"),s("span",{style:{color:"#98C379"}}," vp-update")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),rs=s("p",null,[s("img",{src:B,alt:""})],-1),os=t('<p><img src="'+A+'" alt=""></p><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装"><span>手动安装</span></a></h2><p>cmd不小心关了，在目录上方的地址栏输入 <code>cmd</code> 回车，可以快捷打开</p><p><img src="'+E+'" alt=""></p><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h3>',5),cs=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"pnpm"),s("span",{style:{color:"#98C379"}}," init")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),ds=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"yarn"),s("span",{style:{color:"#98C379"}}," init")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),ps=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npm"),s("span",{style:{color:"#98C379"}}," init")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),us=s("p",null,[s("img",{src:x,alt:""})],-1),ms=s("h3",{id:"安装依赖",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装依赖"},[s("span",null,"安装依赖")])],-1),bs=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 安装 vuepress 和 vue")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"pnpm"),s("span",{style:{color:"#98C379"}}," add"),s("span",{style:{color:"#D19A66"}}," -D"),s("span",{style:{color:"#98C379"}}," vuepress@next"),s("span",{style:{color:"#98C379"}}," vue")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 安装打包工具和主题")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"pnpm"),s("span",{style:{color:"#98C379"}}," add"),s("span",{style:{color:"#D19A66"}}," -D"),s("span",{style:{color:"#98C379"}}," @vuepress/bundler-vite@next"),s("span",{style:{color:"#98C379"}}," @vuepress/theme-default@next")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),hs=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 安装 vuepress")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"yarn"),s("span",{style:{color:"#98C379"}}," add"),s("span",{style:{color:"#D19A66"}}," -D"),s("span",{style:{color:"#98C379"}}," vuepress@next")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 安装打包工具和主题")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"yarn"),s("span",{style:{color:"#98C379"}}," add"),s("span",{style:{color:"#D19A66"}}," -D"),s("span",{style:{color:"#98C379"}}," @vuepress/bundler-vite@next"),s("span",{style:{color:"#98C379"}}," @vuepress/theme-default@next")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),vs=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 安装 vuepress")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npm"),s("span",{style:{color:"#98C379"}}," install"),s("span",{style:{color:"#D19A66"}}," -D"),s("span",{style:{color:"#98C379"}}," vuepress@next")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 安装打包工具和主题")])]),l(`
`),s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npm"),s("span",{style:{color:"#98C379"}}," install"),s("span",{style:{color:"#D19A66"}}," -D"),s("span",{style:{color:"#98C379"}}," @vuepress/bundler-vite@next"),s("span",{style:{color:"#98C379"}}," @vuepress/theme-default@next")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),gs=t('<p><img src="'+j+'" alt=""></p><p><img src="'+D+`" alt=""></p><h3 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录"><span>创建目录</span></a></h3><div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-bash;"><code><span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># 创建 docs 目录和 docs/.vuepress 目录</span></span></span>
<span class="line"><span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#98C379;"> docs</span></span></span>
<span class="line"><span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#98C379;"> docs</span><span style="color:#56B6C2;">\\.</span><span style="color:#98C379;">vuepress</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+w+'" alt=""></p><h3 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件"><span>创建配置文件</span></a></h3><p>在 docs/.vuepress/ 目录中，创建一个空的配置文件</p><div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-bash;"><code><span class="line"><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> &gt;</span><span style="color:#98C379;">docs/.vuepress/config.ts</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="'+q+`" alt=""></p><p>右键记事本打开，复制下面代码，粘贴到 <code>config.ts</code> 中保存</p><div class="language-typescript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-typescript;"><code><span class="line"><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">viteBundler</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &#39;@vuepress/bundler-vite&#39;</span></span></span>
<span class="line"><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defaultTheme</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &#39;@vuepress/theme-default&#39;</span></span></span>
<span class="line"><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineUserConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &#39;vuepress&#39;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#61AFEF;"> defineUserConfig</span><span style="color:#ABB2BF;">({</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  bundler</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">viteBundler</span><span style="color:#ABB2BF;">(),</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  theme</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">defaultTheme</span><span style="color:#ABB2BF;">(),</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">})</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+V+`" alt=""></p><h3 id="脚本命令" tabindex="-1"><a class="header-anchor" href="#脚本命令"><span>脚本命令</span></a></h3><p>在 <code>package.json</code> 中更改 scripts 命令，保存</p><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-json;"><code><span class="line"><span class="line"><span style="color:#98C379;">  &quot;scripts&quot;</span><span style="color:#ABB2BF;">: {</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">    &quot;docs:dev&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vuepress dev docs&quot;</span><span style="color:#ABB2BF;">,</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">    &quot;docs:build&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vuepress build docs&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">  }</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">命令讲解</p><p>执行命令 <code>docs:dev</code>，就会运行 <code>vuepress dev docs</code></p><p>执行命令 <code>docs:build</code>，就会运行 <code>vuepress build docs</code></p></div><p><img src="`+N+`" alt=""></p><h3 id="git忽略项" tabindex="-1"><a class="header-anchor" href="#git忽略项"><span>git忽略项</span></a></h3><p>添加 <code>.gitignore</code> 文件，主要用于上传到gitee/github的忽略项</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>分别将 依赖文件 / 临时目录 / 缓存目录 / 静态目录 添加到.gitignore文件中</p><p>建议先使用cmd，使用vscode有可能会出现乱码</p></div><div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-bash;"><code><span class="line"><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> node_modules</span><span style="color:#ABB2BF;"> &gt;&gt; </span><span style="color:#98C379;">.gitignore</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> .temp</span><span style="color:#ABB2BF;"> &gt;&gt; </span><span style="color:#98C379;">.gitignore</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> .cache</span><span style="color:#ABB2BF;"> &gt;&gt; </span><span style="color:#98C379;">.gitignore</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> dist</span><span style="color:#ABB2BF;"> &gt;&gt; </span><span style="color:#98C379;">.gitignore</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+z+`" alt=""></p><details class="custom-container details"><summary>Github上传未忽略dist文件夹</summary><p>原因：vscode输入命令导致编码错误</p><p>解决：Github Desktop - Repository settings - ignored files</p><p>输入我们忽略的dist文件即可，save保存即可</p><div class="language-text line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-text;"><code><span class="line"><span class="line"><span>node_modules</span></span></span>
<span class="line"><span class="line"><span>.temp</span></span></span>
<span class="line"><span class="line"><span>.cache</span></span></span>
<span class="line"><span class="line"><span>dist</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="创建文档" tabindex="-1"><a class="header-anchor" href="#创建文档"><span>创建文档</span></a></h3><div class="custom-container warning"><p class="custom-container-title">注意</p><p>建议先使用cmd，使用vscode有可能会出现乱码</p></div><p>创建你的第一篇文档</p><div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-bash;"><code><span class="line"><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#7F848E;font-style:italic;"> # Hello VuePress &gt; docs/README.md</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="`+G+'" alt=""></p><h3 id="本地启动" tabindex="-1"><a class="header-anchor" href="#本地启动"><span>本地启动</span></a></h3><p>执行在 <a href="#%E8%84%9A%E6%9C%AC%E5%91%BD%E4%BB%A4">脚本命令</a> 中的命令，进入开发环境来搭建文档网站</p>',30),ys=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"pnpm"),s("span",{style:{color:"#98C379"}}," docs:dev")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),_s=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"yarn"),s("span",{style:{color:"#98C379"}}," docs:dev")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),fs=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npm"),s("span",{style:{color:"#98C379"}}," docs:dev")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),ks=t('<div class="custom-container tip"><p class="custom-container-title">如何退出</p><p><code>ctrl+c</code> 即可退出开发模式</p></div><p><img src="'+S+'" alt=""></p><p>本地启动了一个 <code>8080</code> 端口的热重载开发服务器</p><p>复制 <code>http://localhost:8080</code> 网址到浏览器打开，看到页面就说明vuepress就搭建完成了</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>接下来我们可以关闭cmd，全程用vscode了</p></div><p><img src="'+R+'" alt=""></p>',6);function Fs(Cs,Bs){const a=r("CodeGroupItem"),i=r("CodeGroup");return d(),c("div",null,[I,s("details",P,[M,U,e(i,null,{default:n(()=>[e(a,{title:"pnpm"},{default:n(()=>[H]),_:1}),e(a,{title:"yarn"},{default:n(()=>[J]),_:1})]),_:1}),O]),W,e(i,null,{default:n(()=>[e(a,{title:"pnpm"},{default:n(()=>[K]),_:1}),e(a,{title:"yarn"},{default:n(()=>[L]),_:1}),e(a,{title:"npm"},{default:n(()=>[Q]),_:1})]),_:1}),X,s("details",Y,[Z,e(i,null,{default:n(()=>[e(a,{title:"pnpm"},{default:n(()=>[$]),_:1}),e(a,{title:"yarn"},{default:n(()=>[ss]),_:1}),e(a,{title:"npm"},{default:n(()=>[es]),_:1})]),_:1}),ns,as,e(i,null,{default:n(()=>[e(a,{title:"pnpm"},{default:n(()=>[ls]),_:1}),e(a,{title:"yarn"},{default:n(()=>[is]),_:1}),e(a,{title:"npm"},{default:n(()=>[ts]),_:1})]),_:1}),rs]),os,e(i,null,{default:n(()=>[e(a,{title:"pnpm"},{default:n(()=>[cs]),_:1}),e(a,{title:"yarn"},{default:n(()=>[ds]),_:1}),e(a,{title:"npm"},{default:n(()=>[ps]),_:1})]),_:1}),us,ms,e(i,null,{default:n(()=>[e(a,{title:"pnpm"},{default:n(()=>[bs]),_:1}),e(a,{title:"yarn"},{default:n(()=>[hs]),_:1}),e(a,{title:"npm"},{default:n(()=>[vs]),_:1})]),_:1}),gs,e(i,null,{default:n(()=>[e(a,{title:"pnpm"},{default:n(()=>[ys]),_:1}),e(a,{title:"yarn"},{default:n(()=>[_s]),_:1}),e(a,{title:"npm"},{default:n(()=>[fs]),_:1})]),_:1}),ks])}const Es=o(T,[["render",Fs],["__file","getting-started.html.vue"]]),xs=JSON.parse('{"path":"/guide/getting-started.html","title":"快速上手","lang":"zh-CN","frontmatter":{"prev":{"text":"前言","link":"/guide/"}},"headers":[{"level":2,"title":"在线体验","slug":"在线体验","link":"#在线体验","children":[]},{"level":2,"title":"前期工作","slug":"前期工作","link":"#前期工作","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"一键安装","slug":"一键安装","link":"#一键安装","children":[]},{"level":2,"title":"手动安装","slug":"手动安装","link":"#手动安装","children":[{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":3,"title":"创建目录","slug":"创建目录","link":"#创建目录","children":[]},{"level":3,"title":"创建配置文件","slug":"创建配置文件","link":"#创建配置文件","children":[]},{"level":3,"title":"脚本命令","slug":"脚本命令","link":"#脚本命令","children":[]},{"level":3,"title":"git忽略项","slug":"git忽略项","link":"#git忽略项","children":[]},{"level":3,"title":"创建文档","slug":"创建文档","link":"#创建文档","children":[]},{"level":3,"title":"本地启动","slug":"本地启动","link":"#本地启动","children":[]}]}],"git":{"updatedTime":1722761470000,"contributors":[{"name":"DzPian","email":"490857007@qq.com","commits":5}]},"filePathRelative":"guide/getting-started.md"}');export{Es as comp,xs as data};