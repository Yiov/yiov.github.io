import{_ as i,r as d,o as c,c as u,a as n,w as s,e as o,b as e,d as a}from"./app-c2427153.js";const r={},p=o(`<h1 id="更新及卸载" tabindex="-1"><a class="header-anchor" href="#更新及卸载" aria-hidden="true">#</a> 更新及卸载</h1><blockquote><p>更新时间：2023-11-17</p></blockquote><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2><h3 id="安装ncu" tabindex="-1"><a class="header-anchor" href="#安装ncu" aria-hidden="true">#</a> 安装ncu</h3><div class="custom-container danger"><p class="custom-container-title">注意</p><p>已经安装过的可以直接看 <a href="#%E6%9B%B4%E6%96%B0%E5%8C%85">更新包</a> 步骤</p></div><p>由于直接用命令更新，不能改变 <code>package.json</code> 的内容</p><p>我更推荐用 npm-check-updates，即 <code>ncu</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> npm-check-updates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ncu可以可以检查出需更新的软件包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ncu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新包" tabindex="-1"><a class="header-anchor" href="#更新包" aria-hidden="true">#</a> 更新包</h3><p>更新模块包版本信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#即运行ncu -u to upgrade package.json</span>
ncu <span class="token parameter variable">-u</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这时候我们的 <code>package.json</code> 里的版本都按最新的填写完毕了</p></div><p>我们直接用命令更新安装依赖即可</p>`,15),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),a(),e("span",{class:"token function"},"install"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),m=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),a(),e("span",{class:"token function"},"install"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("bun "),e("span",{class:"token function"},"install"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),v=e("h2",{id:"卸载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#卸载","aria-hidden":"true"},"#"),a(" 卸载")],-1),_=e("p",null,[a("卸载就比较简单了，在 "),e("code",null,"package.json"),a(" 中找到包名即可")],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),a(` uninstall 包名
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),a(` uninstall 包名
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`bun uninstall 包名
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),x=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"比如"),e("p",null,"pnpm uninstall vue"),e("p",null,[a("其中"),e("code",null,"vue"),a(" 就是包名")])],-1);function C(B,j){const l=d("CodeGroupItem"),t=d("CodeGroup");return c(),u("div",null,[p,n(t,null,{default:s(()=>[n(l,{title:"pnpm"},{default:s(()=>[h]),_:1}),n(l,{title:"yarn"},{default:s(()=>[m]),_:1}),n(l,{title:"bun"},{default:s(()=>[b]),_:1})]),_:1}),v,_,n(t,null,{default:s(()=>[n(l,{title:"pnpm"},{default:s(()=>[g]),_:1}),n(l,{title:"yarn"},{default:s(()=>[f]),_:1}),n(l,{title:"bun"},{default:s(()=>[k]),_:1})]),_:1}),x])}const E=i(r,[["render",C],["__file","update.html.vue"]]);export{E as default};
