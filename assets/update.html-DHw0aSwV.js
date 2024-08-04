import{_ as r,r as t,c,a as s,w as n,e as o,b as e,d as l,o as d}from"./app-D31wT-F8.js";const u={},p=o(`<h1 id="更新及卸载" tabindex="-1"><a class="header-anchor" href="#更新及卸载"><span>更新及卸载</span></a></h1><blockquote><p>更新时间：2024-7-29</p></blockquote><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新"><span>更新</span></a></h2><h3 id="安装ncu" tabindex="-1"><a class="header-anchor" href="#安装ncu"><span>安装ncu</span></a></h3><div class="custom-container danger"><p class="custom-container-title">注意</p><p>已经安装过的可以直接看 <a href="#%E6%9B%B4%E6%96%B0%E5%8C%85">更新包</a> 步骤</p></div><p>由于直接用命令更新，不能改变 <code>package.json</code> 的内容，更推荐用 npm-check-updates，即 <code>ncu</code></p><div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-bash;"><code><span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># 安装ncu</span></span></span>
<span class="line"><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> i</span><span style="color:#D19A66;"> -g</span><span style="color:#98C379;"> npm-check-updates</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># 检查出需更新的软件包</span></span></span>
<span class="line"><span class="line"><span style="color:#61AFEF;">ncu</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新包" tabindex="-1"><a class="header-anchor" href="#更新包"><span>更新包</span></a></h3><p>更新模块包版本信息</p><div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-bash;"><code><span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">#即运行ncu -u to upgrade package.json</span></span></span>
<span class="line"><span class="line"><span style="color:#61AFEF;">ncu</span><span style="color:#D19A66;"> -u</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这时候我们的 <code>package.json</code> 里的版本都按最新的填写完毕了</p></div><p>我们直接用命令更新安装依赖即可</p>`,12),h=e("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[e("code",null,[e("span",{class:"line"},[e("span",{class:"line"},[e("span",{style:{color:"#61AFEF"}},"pnpm"),e("span",{style:{color:"#98C379"}}," install")])])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[e("code",null,[e("span",{class:"line"},[e("span",{class:"line"},[e("span",{style:{color:"#61AFEF"}},"yarn"),e("span",{style:{color:"#98C379"}}," install")])])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),m=e("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[e("code",null,[e("span",{class:"line"},[e("span",{class:"line"},[e("span",{style:{color:"#61AFEF"}},"bun"),e("span",{style:{color:"#98C379"}}," install")])])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),v=e("h2",{id:"卸载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#卸载"},[e("span",null,"卸载")])],-1),g=e("p",null,[l("卸载就比较简单了，在 "),e("code",null,"package.json"),l(" 中找到包名即可")],-1),y=e("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[e("code",null,[e("span",{class:"line"},[e("span",{class:"line"},[e("span",{style:{color:"#61AFEF"}},"pnpm"),e("span",{style:{color:"#98C379"}}," uninstall"),e("span",{style:{color:"#98C379"}}," 包名")])])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[e("code",null,[e("span",{class:"line"},[e("span",{class:"line"},[e("span",{style:{color:"#61AFEF"}},"yarn"),e("span",{style:{color:"#98C379"}}," uninstall"),e("span",{style:{color:"#98C379"}}," 包名")])])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-bash line-numbers-mode line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",{class:"shiki one-dark-pro vp-code",style:{"background-color":"#282c34",color:"#abb2bf language-bash"}},[e("code",null,[e("span",{class:"line"},[e("span",{class:"line"},[e("span",{style:{color:"#61AFEF"}},"bun"),e("span",{style:{color:"#98C379"}}," uninstall"),e("span",{style:{color:"#98C379"}}," 包名")])])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}}),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),f=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"比如"),e("p",null,"pnpm uninstall vue"),e("p",null,[l("其中"),e("code",null,"vue"),l(" 就是包名")])],-1);function F(C,x){const a=t("CodeGroupItem"),i=t("CodeGroup");return d(),c("div",null,[p,s(i,null,{default:n(()=>[s(a,{title:"pnpm"},{default:n(()=>[h]),_:1}),s(a,{title:"yarn"},{default:n(()=>[b]),_:1}),s(a,{title:"bun"},{default:n(()=>[m]),_:1})]),_:1}),v,g,s(i,null,{default:n(()=>[s(a,{title:"pnpm"},{default:n(()=>[y]),_:1}),s(a,{title:"yarn"},{default:n(()=>[_]),_:1}),s(a,{title:"bun"},{default:n(()=>[k]),_:1})]),_:1}),f])}const j=r(u,[["render",F],["__file","update.html.vue"]]),A=JSON.parse('{"path":"/guide/update.html","title":"更新及卸载","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"更新","slug":"更新","link":"#更新","children":[{"level":3,"title":"安装ncu","slug":"安装ncu","link":"#安装ncu","children":[]},{"level":3,"title":"更新包","slug":"更新包","link":"#更新包","children":[]}]},{"level":2,"title":"卸载","slug":"卸载","link":"#卸载","children":[]}],"git":{},"filePathRelative":"guide/update.md"}');export{j as comp,A as data};
