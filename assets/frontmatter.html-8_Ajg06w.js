import{_ as s,c as n,o as a,e}from"./app-fhCrW_NW.js";const l="/frontmatter/01.png",i="/frontmatter/02.png",p="/frontmatter/03.png",r="/frontmatter/04.png",c="/frontmatter/05.png",d={},t=e(`<h1 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h1><blockquote><p>最近更新：2024-7-29</p></blockquote><h2 id="配置参考" tabindex="-1"><a class="header-anchor" href="#配置参考"><span>配置参考</span></a></h2><p>官方将默认配置教程放到了 <a href="https://ecosystem.vuejs.press/zh/themes/default/frontmatter.html" target="_blank" rel="noopener noreferrer">Vuepress生他系统</a></p><h2 id="页面属性" tabindex="-1"><a class="header-anchor" href="#页面属性"><span>页面属性</span></a></h2><h3 id="lang" tabindex="-1"><a class="header-anchor" href="#lang"><span>lang</span></a></h3><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">lang</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">zh-CN</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>title</span></a></h3><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">页面的标题</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>description</span></a></h3><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">description</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">页面的描述</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""></p><h3 id="head" tabindex="-1"><a class="header-anchor" href="#head"><span>head</span></a></h3><p>一般我们在config.ts中统一配置即可，无需单独设置页面的head，如果你有特殊的需求可以使用</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">  - - </span><span style="color:#98C379;">meta</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">    - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">foo</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">      content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">yaml 第一种，数组语法</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">  - [</span><span style="color:#98C379;">meta</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">bar</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">第二种，方括号语法</span><span style="color:#ABB2BF;"> }]</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页"><span>首页</span></a></h2><h3 id="设置首页" tabindex="-1"><a class="header-anchor" href="#设置首页"><span>设置首页</span></a></h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>设置为 true ，就是首页，无侧边栏</p><p>不设置(默认关闭)，是普通页面，即文档页，有侧边栏</p></div><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">home</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 <code>README.md</code> ，首页就设定好了，我们依次添加其他元素来完善主页</p><p><img src="`+i+`" alt=""></p><h3 id="图片路径" tabindex="-1"><a class="header-anchor" href="#图片路径"><span>图片路径</span></a></h3><p>默认的路径是public文件夹，首页图片的引用方式 二选一</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># Public文件路径 本地引用</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">heroImage</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/images/logo.png</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line highlighted"><span style="color:#7F848E;font-style:italic;"># URL 远程引用</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">heroImage</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">https://vuejs.org/images/logo.png</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>夜间模式中，单独使用其他的首页图片，示例：</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>有的人logo是黑色的，如果遇到夜间模式就需要单独配置，不然看不到了</p></div><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">heroImageDark</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/images/logodark.png</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="首页按钮" tabindex="-1"><a class="header-anchor" href="#首页按钮"><span>首页按钮</span></a></h3><p>用 <code>actions</code> 配置首页按钮，一般2个是比较舒适的，当然你也可以配置多个</p><div class="custom-container tip"><p class="custom-container-title">说明</p><ul><li><p>text：显示文字</p></li><li><p>link：跳转路径</p></li><li><p>type：主次类型显示；仅primary默认，secondary次要</p></li></ul></div><p>输入：</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">actions</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">快速上手</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">    link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/guide/getting-started.html</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">    type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">primary</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">项目简介</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">    link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/guide/</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">    type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">secondary</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+p+`" alt=""></p><h3 id="特性列表" tabindex="-1"><a class="header-anchor" href="#特性列表"><span>特性列表</span></a></h3><p>用 <code>features</code> 配置首页特性列表</p><p>输入：</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">features</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">简洁至上</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">    details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Vue 驱动</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">    details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">高性能</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">    details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+r+`" alt=""></p><h3 id="页脚" tabindex="-1"><a class="header-anchor" href="#页脚"><span>页脚</span></a></h3><p>用 <code>footer</code> 配置首页的页脚，一般就是版权和备案信息</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">footer</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">MIT Licensed | Copyright © 2018-present Evan You</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但有一个特殊情况，要备案的话需要有跳转，这里直接打 <code>&lt;/a&gt;</code> 标签不能用</p><p>我们将页脚的html开启，然后书写备案信息</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">footerHtml</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line highlighted"><span style="color:#E06C75;">footer</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Copyright © 2023 备案号：&lt;a href=&quot;https://beian.miit.gov.cn/&quot; target=&quot;_blank&quot;&gt;京****号&lt;/a&gt;</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+c+`" alt=""></p><h2 id="普通页" tabindex="-1"><a class="header-anchor" href="#普通页"><span>普通页</span></a></h2><h3 id="上个页面" tabindex="-1"><a class="header-anchor" href="#上个页面"><span>上个页面</span></a></h3><p>会自动根据侧边栏配置进行推断，不是自己想要的你也可以手动配置</p><p>格式：</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># NavLink</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">prev</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Get Started</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/guide/getting-started.html</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># NavLink - 外部 URL</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">prev</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">GitHub</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">https://github.com</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># 字符串 - 页面文件路径</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">prev</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/guide/getting-started.md</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># 字符串 - 页面文件相对路径</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">prev</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">../../guide/getting-started.md</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下个页面" tabindex="-1"><a class="header-anchor" href="#下个页面"><span>下个页面</span></a></h3><p>下一个页面的链接，会自动根据侧边栏配置进行推断，不是自己想要的你也可以手动配置</p><p>格式：</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># NavLink</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Get Started</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/guide/getting-started.html</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># NavLink - 外部 URL</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">GitHub</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">https://github.com</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># 字符串 - 页面文件路径</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/guide/getting-started.md</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;"># 字符串 - 页面文件相对路径</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">../../guide/getting-started.md</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout"><span>layout</span></a></h3><p>如果主题布局无法满足你的需求，你可以使用自定义布局组件</p><p>示例：</p><p>在 <code>.vuepress/client.ts</code> 文件中注册一个布局组件：</p><div class="language-typescript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-typescript;"><code><span class="line"><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineClientConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &#39;@vuepress/client&#39;</span></span></span>
<span class="line"><span class="line"><span style="color:#C678DD;">import</span><span style="color:#E06C75;"> CustomLayout</span><span style="color:#C678DD;"> from</span><span style="color:#98C379;"> &#39;./CustomLayout.vue&#39;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#61AFEF;"> defineClientConfig</span><span style="color:#ABB2BF;">({</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">  layouts</span><span style="color:#ABB2BF;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">    CustomLayout</span><span style="color:#ABB2BF;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">  },</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">})</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>布局中写</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">layout</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">CustomLayout</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass"><span>pageClass</span></a></h3><p>为当前页面添加额外的样式</p><p>在 <code>.vuepress/styles/index.scss</code> 文件中为这个页面添加自定义样式</p><div class="language-scss line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-scss;"><code><span class="line"><span class="line"><span style="color:#D19A66;">.theme-container.custom-page-class</span><span style="color:#ABB2BF;"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#7F848E;font-style:italic;">  /* 页面样式 */</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再布局中写就可以引用</p><div class="language-markdown line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf language-markdown;"><code><span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span>
<span class="line"><span class="line"><span style="color:#E06C75;">pageClass</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">custom-page-class</span></span></span>
<span class="line"><span class="line"><span style="color:#ABB2BF;">---</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,70),o=[t];function v(u,m){return a(),n("div",null,o)}const h=s(d,[["render",v],["__file","frontmatter.html.vue"]]),y=JSON.parse('{"path":"/guide/frontmatter.html","title":"Frontmatter","lang":"zh-CN","frontmatter":{"next":{"text":"Markdown","link":"/guide/markdown"}},"headers":[{"level":2,"title":"配置参考","slug":"配置参考","link":"#配置参考","children":[]},{"level":2,"title":"页面属性","slug":"页面属性","link":"#页面属性","children":[{"level":3,"title":"lang","slug":"lang","link":"#lang","children":[]},{"level":3,"title":"title","slug":"title","link":"#title","children":[]},{"level":3,"title":"description","slug":"description","link":"#description","children":[]},{"level":3,"title":"head","slug":"head","link":"#head","children":[]}]},{"level":2,"title":"首页","slug":"首页","link":"#首页","children":[{"level":3,"title":"设置首页","slug":"设置首页","link":"#设置首页","children":[]},{"level":3,"title":"图片路径","slug":"图片路径","link":"#图片路径","children":[]},{"level":3,"title":"首页按钮","slug":"首页按钮","link":"#首页按钮","children":[]},{"level":3,"title":"特性列表","slug":"特性列表","link":"#特性列表","children":[]},{"level":3,"title":"页脚","slug":"页脚","link":"#页脚","children":[]}]},{"level":2,"title":"普通页","slug":"普通页","link":"#普通页","children":[{"level":3,"title":"上个页面","slug":"上个页面","link":"#上个页面","children":[]},{"level":3,"title":"下个页面","slug":"下个页面","link":"#下个页面","children":[]},{"level":3,"title":"layout","slug":"layout","link":"#layout","children":[]},{"level":3,"title":"pageClass","slug":"pageclass","link":"#pageclass","children":[]}]}],"git":{"updatedTime":1722761470000,"contributors":[{"name":"DzPian","email":"490857007@qq.com","commits":4}]},"filePathRelative":"guide/frontmatter.md"}');export{h as comp,y as data};
