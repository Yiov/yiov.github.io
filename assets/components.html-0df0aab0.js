import{_ as u,r as i,o as r,c as d,a,w as e,b as n,d as s,e as l}from"./app-e1a61026.js";const v="/assets/vuepress-101-b2697d0e.png",m="/assets/vuepress-102-8c69d780.png",h={},g=l('<h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-8-16</p><p>搭建版本：v2.0-beta.66</p></div><h2 id="基本组成" tabindex="-1"><a class="header-anchor" href="#基本组成" aria-hidden="true">#</a> 基本组成</h2><p>组件由三部分组成：<code>&lt;template&gt;</code> <code>&lt;script&gt;</code> <code>&lt;style&gt;</code></p><div class="custom-container tip"><p class="custom-container-title">对应关系</p><p>template 对应 html</p><p>script 对应 js</p><p>style 对应 css</p></div><h2 id="安装注册插件" tabindex="-1"><a class="header-anchor" href="#安装注册插件" aria-hidden="true">#</a> 安装注册插件</h2><p>v2版都要自行安装了</p>',7),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-register-components@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-register-components@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-register-components@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerComponentsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-register-components&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 配置项</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="别名路径" tabindex="-1"><a class="header-anchor" href="#别名路径" aria-hidden="true">#</a> 别名路径</h2><p>组件目录默认放在 <code>components</code> 文件夹中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─ docs
   └─.vuepress
      └─ components   &lt;- 组件目录
         └─ test.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还要安装别名路径，才能全局引用</p>`,5),x=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/utils@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/utils@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/utils@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),D=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/utils&#39;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      componentsDir<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="演示-进度条" tabindex="-1"><a class="header-anchor" href="#演示-进度条" aria-hidden="true">#</a> 演示：进度条</h2><p>对于我这种还不会Vue的小白，我们直接用别人写好的插件</p>`,3),C={href:"https://themusecatcher.github.io/vue-amazing-ui/",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,"我用进度条演示",-1),q=n("p",null,[n("img",{src:v,alt:""})],-1),V=n("code",null,"Progress.vue",-1),E={href:"https://github.com/themusecatcher/vue-amazing-ui/blob/master/packages/progress/Progress.vue",target:"_blank",rel:"noopener noreferrer"},I=n("p",null,[n("img",{src:m,alt:""})],-1),z=n("p",null,"在代码style-lang中还有less需要安装",-1),G=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(),n("span",{class:"token function"},"less"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(),n("span",{class:"token function"},"less"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(),n("span",{class:"token function"},"less"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),A=l(`<p>然后我们在README.md文档中引用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Progress</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们还要输入进度条的百分比，以及加一个渐变色</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> 
<span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>99<span class="token punctuation">&quot;</span></span> 
<span class="token attr-name">:strokeColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    &#39;0%&#39;: &#39;#108ee9&#39;,
    &#39;100%&#39;: &#39;#87d068&#39;,
    direction: &#39;right&#39;
  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Progress</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function L(j,M){const t=i("CodeGroupItem"),c=i("CodeGroup"),o=i("ExternalLinkIcon"),p=i("Progress");return r(),d("div",null,[g,a(c,null,{default:e(()=>[a(t,{title:"pnpm"},{default:e(()=>[k]),_:1}),a(t,{title:"yarn"},{default:e(()=>[b]),_:1}),a(t,{title:"npm"},{default:e(()=>[_]),_:1})]),_:1}),f,a(c,null,{default:e(()=>[a(t,{title:"pnpm"},{default:e(()=>[x]),_:1}),a(t,{title:"yarn"},{default:e(()=>[y]),_:1}),a(t,{title:"npm"},{default:e(()=>[w]),_:1})]),_:1}),D,n("p",null,[s("Vue Amazing UI："),n("a",C,[s("https://themusecatcher.github.io/vue-amazing-ui/"),a(o)])]),P,q,n("p",null,[s("在 components 文件夹创建 "),V,s("，然后在 "),n("a",E,[s("仓库"),a(o)]),s(" 把代码复制过来")]),I,z,a(c,null,{default:e(()=>[a(t,{title:"pnpm"},{default:e(()=>[G]),_:1}),a(t,{title:"yarn"},{default:e(()=>[N]),_:1}),a(t,{title:"npm"},{default:e(()=>[B]),_:1})]),_:1}),A,a(p,{width:"100%",percent:99,strokeColor:{"0%":"#108ee9","100%":"#87d068",direction:"right"}})])}const S=u(h,[["render",L],["__file","components.html.vue"]]);export{S as default};
