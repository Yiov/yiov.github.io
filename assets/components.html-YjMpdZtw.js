import{_ as l,r as i,c as p,b as n,d as s,a as t,w as o,e,o as c}from"./app-D31wT-F8.js";const r={},d=e('<h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h1><blockquote><p>最近更新：2024-7-29</p></blockquote><h2 id="基本组成" tabindex="-1"><a class="header-anchor" href="#基本组成"><span>基本组成</span></a></h2><p>组件由三部分组成：<code>&lt;template&gt;</code> <code>&lt;script&gt;</code> <code>&lt;style&gt;</code></p><div class="custom-container tip"><p class="custom-container-title">对应关系</p><p>template 对应 html</p><p>script 对应 js</p><p>style 对应 css</p></div><h2 id="注册插件" tabindex="-1"><a class="header-anchor" href="#注册插件"><span>注册插件</span></a></h2>',6),u=n("code",null,"clients.ts",-1),v=e(`<div class="language-typescript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-typescript;"><code><span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">// clients.ts</span></span></span>
<span class="line"><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineClientConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &#39;@vuepress/client&#39;</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#C678DD;">import</span><span style="color:#E06C75;"> MyComponent</span><span style="color:#C678DD;"> from</span><span style="color:#98C379;"> &#39;./components/MyComponent.vue&#39;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#61AFEF;"> defineClientConfig</span><span style="color:#ABB2BF;">({</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#61AFEF;">  enhance</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">router</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">siteData</span><span style="color:#ABB2BF;"> }) {</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E5C07B;">    app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">component</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;MyComponent&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">MyComponent</span><span style="color:#ABB2BF;">)</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#ABB2BF;">  },</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">})</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts"><span>layouts</span></a></h2><p>layouts 配置项用于设置布局组件。你在此处注册布局后，用户就可以通过 <a href="https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html#layout" target="_blank" rel="noopener noreferrer">layout</a> frontmatter 来使用它们</p><div class="language-typescript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-typescript;"><code><span class="line"><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineClientConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &#39;vuepress/client&#39;</span></span></span>
<span class="line"><span class="line"><span style="color:#C678DD;">import</span><span style="color:#E06C75;"> MyLayout</span><span style="color:#C678DD;"> from</span><span style="color:#98C379;"> &#39;./layouts/MyLayout.vue&#39;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#61AFEF;"> defineClientConfig</span><span style="color:#ABB2BF;">({</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  layouts</span><span style="color:#ABB2BF;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">    MyLayout</span><span style="color:#ABB2BF;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">  },</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">})</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function y(m,B){const a=i("RouteLink");return c(),p("div",null,[d,n("p",null,[s("个人建议是在 "),u,s(),t(a,{to:"/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-%E5%8F%AF%E9%80%89"},{default:o(()=>[s("客户端配置")]),_:1}),s(" 中添加，非常方便")]),v])}const b=l(r,[["render",y],["__file","components.html.vue"]]),C=JSON.parse('{"path":"/guide/components.html","title":"组件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"基本组成","slug":"基本组成","link":"#基本组成","children":[]},{"level":2,"title":"注册插件","slug":"注册插件","link":"#注册插件","children":[]},{"level":2,"title":"layouts","slug":"layouts","link":"#layouts","children":[]}],"git":{},"filePathRelative":"guide/components.md"}');export{b as comp,C as data};
