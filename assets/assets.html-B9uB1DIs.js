import{_ as c,r as i,c as o,a as n,w as a,e as r,b as s,d as e,o as t}from"./app-fhCrW_NW.js";const d="/assets/01.png",v="/assets/02.png",u={},m=r(`<h1 id="静态部署" tabindex="-1"><a class="header-anchor" href="#静态部署"><span>静态部署</span></a></h1><blockquote><p>最近更新：2024-7-29</p></blockquote><p>主要讲一下GitHub，其他的方式都大同小异，<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">更多部署方式可以参考官方文档</a></p><h2 id="base" tabindex="-1"><a class="header-anchor" href="#base"><span>Base</span></a></h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>base必须配置，否则打包会丢失css样式！！</p><p>根目录配置 <code>/</code>，那么对应 <code>https://yiov.github.io/</code></p><p>仓库 <code>vitepress</code> 配置 <code>/vitepress/</code> ，那么对应 <code>https://yiov.github.io/vitepress</code></p></div><p>我们根据自己的需求，选择相应的的配置</p><div class="language-typescript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-typescript;"><code><span class="line"><span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#61AFEF;"> defineUserConfig</span><span style="color:#ABB2BF;"> ({</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">  base</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">//网站部署的路径，默认根目录</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#7F848E;font-style:italic;">  // base: &#39;/vuepress/&#39;, //网站部署到github的vuepress这个仓库里</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">}),</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果你base设置成其他仓库后，你的fav图标也要变动一下</p></div><div class="language-typescript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-typescript;"><code><span class="line"><span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#61AFEF;"> defineUserConfig</span><span style="color:#ABB2BF;"> ({</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">  base</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/vuepress/&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">//网站部署在vuepress仓库</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  head</span><span style="color:#ABB2BF;">: [[</span><span style="color:#98C379;">&#39;link&#39;</span><span style="color:#ABB2BF;">, </span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">  //favicon图标也要改成仓库名路径，否则丢失</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">rel</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;icon&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">href</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/vuepress/images/logo.png&#39;</span><span style="color:#ABB2BF;"> },]],</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">}),</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工作流-可选" tabindex="-1"><a class="header-anchor" href="#工作流-可选"><span>工作流(可选)</span></a></h2><p>配置工作流可以自动帮我们部署发布，<a href="#%E7%BD%91%E7%AB%99%E9%83%A8%E7%BD%B2">懒得弄看下面的教程：网站部署</a></p><p>新建文件 <code>.github/workflows/docs.yml</code> ，将下面yml信息粘贴进去</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">├─ docs</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">├─ .github</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">│    └─ workflows</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#ABB2BF;">│         └─ docs.yml  &lt;--- yml工作流</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">└─ .gitignore</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p><p>.github 与 docs为同级目录，有兴趣 <a href="https://docs.github.com/zh/actions" target="_blank" rel="noopener noreferrer">GitHub Actions 深入了解</a></p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>经过反复测试，还是没搞定，于是弃用了</p><p>这是一个已经配置好的工作流，自己记得删掉注释！！！</p><p>实际是github分配了一个虚拟机给你使用，里面的ubuntu系统以及pnpm都是虚拟机使用的，与自己的无关，不要动就行</p></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-yaml line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-yaml;"><code><span class="line"><span class="line"><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">docs</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#D19A66;">on</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">  # 每当 push 到 main 分支时触发部署</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  push</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">    branches</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">main</span><span style="color:#ABB2BF;">]</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">  # 手动触发部署</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  workflow_dispatch</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">jobs</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  docs</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">    runs-on</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">ubuntu-latest</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">    steps</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/checkout@v4</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">        with</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">          fetch-depth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Setup pnpm</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">        uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">pnpm/action-setup@v2</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">        with</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">          # 选择要使用的 pnpm 版本</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">          version</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">8</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">          # 使用 pnpm 安装依赖</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">          run_install</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Setup Node.js</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">        uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/setup-node@v4</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">        with</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">          # 选择要使用的 node 版本</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">          node-version</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">20</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">          # 缓存 pnpm 依赖</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">          cache</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">pnpm</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">      # 运行构建脚本</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Build VuePress site</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">        run</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">pnpm docs:build</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">      # 查看 workflow 的文档来获取更多信息</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">      # @see https://github.com/crazy-max/ghaction-github-pages</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Deploy to GitHub Pages</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">        uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">crazy-max/ghaction-github-pages@v4</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">        with</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">          # 部署到 gh-pages 分支</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">          target_branch</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">gh-pages</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">          # 部署目录为 VuePress 的默认输出目录</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">          build_dir</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">docs/.vuepress/dist</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">        env</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">          GITHUB_TOKEN</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\${{ secrets.GITHUB_TOKEN }}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="网站部署" tabindex="-1"><a class="header-anchor" href="#网站部署"><span>网站部署</span></a></h2><p>我自己使用的是 <a href="https://yiov.top/website/vercel.html" target="_blank" rel="noopener noreferrer">Vercel一键部署</a> 还不用买服务器，买个域名就就行</p><p>如果想要部署到 <a href="https://yiov.top/website/github.html#%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">GithubPage</a> 或者 <a href="https://yiov.top/website/Server.html" target="_blank" rel="noopener noreferrer">服务器</a> 的话，可以通过命令打包</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>默认的构建输出目录 <code>.vuepress/dist</code></p></div>`,20),b=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"pnpm"),s("span",{style:{color:"#98C379"}}," docs:build")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),y=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"yarn"),s("span",{style:{color:"#98C379"}}," docs:build")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),B=s("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[s("code",null,[s("span",{class:"line"},[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF"}},"npm"),s("span",{style:{color:"#98C379"}}," docs:build")])])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),h=s("p",null,[e("打包完成后，在 "),s("code",null,"docs/.vuepress/dist"),e(" 目录，将"),s("code",null,"dist"),e(" 文件夹的所有文件上传到网站或者仓库即可")],-1),g=s("p",null,[s("img",{src:d,alt:""})],-1),F=s("p",null,"手动上传到github的，需要在设置-page里把分支改成main，默认root，保存等创建成功后即可获得访问链接",-1),C=s("p",null,[s("img",{src:v,alt:""})],-1);function A(f,E){const l=i("CodeGroupItem"),p=i("CodeGroup");return t(),o("div",null,[m,n(p,null,{default:a(()=>[n(l,{title:"pnpm"},{default:a(()=>[b]),_:1}),n(l,{title:"yarn"},{default:a(()=>[y]),_:1}),n(l,{title:"npm"},{default:a(()=>[B]),_:1})]),_:1}),h,g,F,C])}const k=c(u,[["render",A],["__file","assets.html.vue"]]),w=JSON.parse('{"path":"/guide/assets.html","title":"静态部署","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Base","slug":"base","link":"#base","children":[]},{"level":2,"title":"工作流(可选)","slug":"工作流-可选","link":"#工作流-可选","children":[]},{"level":2,"title":"网站部署","slug":"网站部署","link":"#网站部署","children":[]}],"git":{"updatedTime":1722761470000,"contributors":[{"name":"DzPian","email":"490857007@qq.com","commits":5}]},"filePathRelative":"guide/assets.md"}');export{k as comp,w as data};
