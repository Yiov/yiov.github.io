import{_ as c,r as o,o as r,c as d,a,w as e,b as n,d as s,e as l}from"./app-0dcd5f3e.js";const u="/assets/vuepress-41-2cf40f08.png",v="/assets/vuepress-42-4ef57bf9.png",m="/assets/vuepress-43-0f7c88c1.png",h="/assets/vuepress-44-81c2bfc1.png",g="/assets/vuepress-45-39246a59.png",k="/assets/vuepress-46-28066ba8.png",b="/assets/vuepress-100-719cd566.png",_={},f=l('<h1 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h1><blockquote><p>最近更新：2023-11-17</p></blockquote><h2 id="markdown高亮" tabindex="-1"><a class="header-anchor" href="#markdown高亮" aria-hidden="true">#</a> Markdown高亮</h2><p>使用内置插件 <code>Prism.js</code> 来为 Markdown 代码块启用高亮</p><div class="custom-container danger"><p class="custom-container-title">注意</p><p>不用另外装和配置，已经内置了除非你要改动，你就需要重新安装</p></div>',5),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-prismjs@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-prismjs@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-prismjs@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),D=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> prismjsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-prismjs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//markdown代码高亮配置</span>
    <span class="token function">prismjsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      preloadLanguages<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;markdown&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jsdoc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yaml&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在生产和构建时候会 <code>提示插件已经被使用多次</code> ，是因为已经内置了，你再装一个插件</p><p>默认使用你安装的，不影响打包</p></div><h2 id="站外链接文字" tabindex="-1"><a class="header-anchor" href="#站外链接文字" aria-hidden="true">#</a> 站外链接文字</h2><p>默认主题中，我们复制站外链接文字会出现多余的A11y文字</p>`,4),j={class:"custom-container tip"},I=n("p",{class:"custom-container-title"},"比如",-1),P={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"GitHub open in new window",-1),C=n("p",null,"怎么删除后面这个open in new window呢",-1),G=n("p",null,"我们需要安装插件后进行配置，安装",-1),L=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-external-link-icon@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-external-link-icon@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-external-link-icon@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),V=l(`<div class="custom-container tip"><p class="custom-container-title">说明</p><p>引号内留空就可以了，除非你想个性化</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> externalLinkIconPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-external-link-icon&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">externalLinkIconPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          openInNewWindow<span class="token operator">:</span> <span class="token string">&#39;在新窗口打开，不想要文字删掉留空即可&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;/en/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          openInNewWindow<span class="token operator">:</span> <span class="token string">&#39;open in new window&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在生产和构建时候会 <code>提示插件已经被使用多次</code> ，是因为已经内置了，你再装一个插件</p><p>默认使用你安装的，不影响打包</p></div><p>另外站外链接图标不想要，可以用Frontmatter关闭当前页</p>`,4),A={class:"custom-container tip"},B=n("p",{class:"custom-container-title"},"说明",-1),E={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#themeplugins-externallinkicon",target:"_blank",rel:"noopener noreferrer"},M=l(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">externalLinkIcon</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="谷歌分析" tabindex="-1"><a class="header-anchor" href="#谷歌分析" aria-hidden="true">#</a> 谷歌分析</h2>`,2),q={href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"},W=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-google-analytics@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-google-analytics@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-google-analytics@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),S=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> googleAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-google-analytics&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token string">&#39;G-XXXXXXXXXX&#39;</span><span class="token punctuation">,</span> <span class="token comment">//跟踪ID</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T={href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"},J=l('<p>点 <code>开始衡量</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>没有账号的注册账号，要翻墙哦</p></div><p><img src="'+u+'" alt=""></p><p>信息随便填，后面都可以改</p><p><img src="'+v+'" alt=""></p><p>创建完成，点网站，输入你自己的网站</p><p><img src="'+m+'" alt=""></p><p><img src="'+h+'" alt=""></p><p>衡量ID就是跟踪ID，我们填入 <code>config.ts</code></p><p><img src="'+g+'" alt=""></p><p>如果不想要了，在账户设置里删除账户</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>删除了在回收站里，要35天后永久删除</p></div><p><img src="'+k+'" alt=""></p><h2 id="复制代码块" tabindex="-1"><a class="header-anchor" href="#复制代码块" aria-hidden="true">#</a> 复制代码块</h2><p>默认主题没有添加这个功能，我们可以用第三方插件</p>',15),K={href:"https://plugin-copy-code2.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},O=n("p",null,"安装",-1),Q=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-copy-code2
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-copy-code2
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-copy-code2
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Y=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> copyCodePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-plugin-copy-code2&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">copyCodePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showInMobile<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否显示在移动端</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+'" alt=""></p><h2 id="更多插件" tabindex="-1"><a class="header-anchor" href="#更多插件" aria-hidden="true">#</a> 更多插件</h2>',3),Z={href:"https://marketplace.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/vuepress/awesome-vuepress/blob/main/v2.md",target:"_blank",rel:"noopener noreferrer"};function nn(sn,an){const t=o("CodeGroupItem"),p=o("CodeGroup"),i=o("ExternalLinkIcon");return r(),d("div",null,[f,a(p,null,{default:e(()=>[a(t,{title:"pnpm"},{default:e(()=>[y]),_:1}),a(t,{title:"yarn"},{default:e(()=>[x]),_:1}),a(t,{title:"npm"},{default:e(()=>[w]),_:1})]),_:1}),D,n("div",j,[I,n("p",null,[n("a",P,[s("Github"),a(i)]),s(" 复制出来是 "),X]),C]),G,a(p,null,{default:e(()=>[a(t,{title:"pnpm"},{default:e(()=>[L]),_:1}),a(t,{title:"yarn"},{default:e(()=>[N]),_:1}),a(t,{title:"npm"},{default:e(()=>[z]),_:1})]),_:1}),V,n("div",A,[B,n("p",null,[s("所有页面都关闭，可参考 "),n("a",E,[s("官方文档"),a(i)]),s(" ，但我并未生效")])]),M,n("p",null,[s("利用插件 "),n("a",q,[s("google-analytics"),a(i)]),s(" ，来查看网站访问量")]),a(p,null,{default:e(()=>[a(t,{title:"pnpm"},{default:e(()=>[W]),_:1}),a(t,{title:"yarn"},{default:e(()=>[F]),_:1}),a(t,{title:"npm"},{default:e(()=>[H]),_:1})]),_:1}),S,n("p",null,[s("谷歌分析官网："),n("a",T,[s("https://analytics.google.com/"),a(i)])]),J,n("p",null,[s("官网："),n("a",K,[s("https://plugin-copy-code2.vuejs.press/zh/"),a(i)])]),O,a(p,null,{default:e(()=>[a(t,{title:"pnpm"},{default:e(()=>[Q]),_:1}),a(t,{title:"yarn"},{default:e(()=>[R]),_:1}),a(t,{title:"npm"},{default:e(()=>[U]),_:1})]),_:1}),Y,n("ul",null,[n("li",null,[s("VuePress 插件市场："),n("a",Z,[s("https://marketplace.vuejs.press/zh/"),a(i)]),s(" 丨 "),n("a",$,[s("文档版"),a(i)])])])])}const tn=c(_,[["render",nn],["__file","plugin.html.vue"]]);export{tn as default};