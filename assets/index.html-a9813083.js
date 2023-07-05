import{_ as l,r as c,o as d,c as r,a as n,b as s,d as e,w as o,e as t}from"./app-39495bd1.js";const p="/assets/home-01-47f3f908.png",m="/assets/home-02-319952c3.png",u="/assets/home-03-d196ca29.png",v="/assets/home-04-02da2b2c.png",h="/assets/home-05-56e02c0b.png",b="/assets/home-06-0ccf8f62.png",_="/assets/home-07-dd58cc5f.png",g="/assets/home-08-ebb593f3.png",k="/assets/home-09-065d4851.png",f="/assets/home-10-ce0f3f66.png",y="/assets/home-11-63e46426.png",x="/assets/home-12-97ebac24.png",E="/assets/home-13-092992c6.png",w="/assets/home-14-0ef0c9cd.png",S="/assets/home-15-ed797c70.png",q={},I=n("h1",{id:"简单的个人主页搭建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简单的个人主页搭建","aria-hidden":"true"},"#"),s(" 简单的个人主页搭建")],-1),A=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"更新时间"),n("p",null,"最近更新：2022-2-10")],-1),N={href:"https://github.com/imsyy/home",target:"_blank",rel:"noopener noreferrer"},L={class:"custom-container tip"},V=n("p",{class:"custom-container-title"},"说明",-1),C={href:"https://file.4everland.app/font/Other/Pacifico-Regular.ttf",target:"_blank",rel:"noopener noreferrer"},T=t('<p><img src="https://s2.loli.net/2022/07/14/K5JigfvDoNewtuS.webp" alt="無名の主页"></p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>由于 CDN 缓存原因，查看最新效果可能需要 <code>Ctrl</code> + <code>F5</code> 强制刷新浏览器缓存</p></div>',3),j={href:"https://www.imsyy.top",target:"_blank",rel:"noopener noreferrer"},D={href:"https://home-imsyy.vercel.app/",target:"_blank",rel:"noopener noreferrer"},R=n("h2",{id:"_1-下载源码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-下载源码","aria-hidden":"true"},"#"),s(" 1.下载源码")],-1),O={href:"https://github.com/imsyy/home",target:"_blank",rel:"noopener noreferrer"},F=t('<p><img src="'+p+'" alt=""></p><p>放到一个盘符，并解压</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>我自己是放到了F盘</p></div><p><img src="'+m+'" alt=""></p><h2 id="_2-安装nodejs" tabindex="-1"><a class="header-anchor" href="#_2-安装nodejs" aria-hidden="true">#</a> 2.安装nodejs</h2>',5),P=t('<h2 id="_3-安装yarn" tabindex="-1"><a class="header-anchor" href="#_3-安装yarn" aria-hidden="true">#</a> 3.安装yarn</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>已安装过的无视</p></div><p><code>win+R</code> 运行 <code>cmd</code> 终端</p><p><img src="'+u+`" alt=""></p><p><code>cd</code> 到 项目根目录，我这里是 <code>F盘</code>，目录是 <code>home</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#盘符</span>
f:

<span class="token comment">#cd进目录</span>
<span class="token builtin class-name">cd</span> home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">说明</p><p>其实最简单方法：目录地址栏输入 <code>cmd</code> 即可</p></div><p><img src="`+v+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装yarn</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span>

<span class="token comment"># 查看版本号</span>
<span class="token function">yarn</span> <span class="token parameter variable">-v</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><h2 id="_4-安装依赖" tabindex="-1"><a class="header-anchor" href="#_4-安装依赖" aria-hidden="true">#</a> 4.安装依赖</h2><p>目录地址栏输入 <code>cmd</code> 进入终端，安装依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+b+'" alt=""></p><h2 id="_5-开发模式" tabindex="-1"><a class="header-anchor" href="#_5-开发模式" aria-hidden="true">#</a> 5.开发模式</h2><p>进入开发模式，会生成一个本地预览链接，打开</p>',16),B={href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"},G=t(`<div class="custom-container tip"><p class="custom-container-title">说明</p><p>我们现在就要，将默认页面修改成自己的</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+_+'" alt=""></p><details class="custom-container details"><summary>4.1 基础信息修改</summary><p>修改都在 <code>.env</code> 里面，右键笔记本打开修改保存</p><p><img src="'+g+`" alt=""></p><p>其他信息的修改，请参考图</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span>站点信息/简介/天气/歌曲/建站日期</span>
.env

<span class="token title important"><span class="token punctuation">#</span>图标</span>
public/images/icon

<span class="token title important"><span class="token punctuation">#</span>社交链接</span>
public/socialLinks.json

<span class="token title important"><span class="token punctuation">#</span>社交联系语</span>
src/components/SocialLinks/index.vue

<span class="token title important"><span class="token punctuation">#</span>网站链接6个</span>
src/components/Links/index.vue

<span class="token title important"><span class="token punctuation">#</span>打开音乐</span>
src/components/Hitokoto/index.vue

<span class="token title important"><span class="token punctuation">#</span>音乐列表</span>
src/components/Music/index.vue

<span class="token title important"><span class="token punctuation">#</span>时间胶囊</span>
src/components/TimeCapsule/index.vue

<span class="token title important"><span class="token punctuation">#</span>设置</span>
src/components/Set/index.vue

<span class="token title important"><span class="token punctuation">#</span>页脚版权备案信息</span>
src/components/Footer/index.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+'" alt=""></p><p><img src="'+f+'" alt=""></p></details>',4),K={class:"custom-container details"},H=n("summary",null,"4.2 天气修改",-1),J={href:"https://console.amap.com/dev/index",target:"_blank",rel:"noopener noreferrer"},M=n("p",null,[s("创建一个 "),n("code",null,"Web 服务"),s(" 类型的 "),n("code",null,"Key"),s("，并将 "),n("code",null,"Key"),s(" 填入 "),n("code",null,".env"),s(" 中的 "),n("code",null,"VITE_WEATHER_KEY"),s(" 中")],-1),W=t(`<details class="custom-container details"><summary>4.3 音乐修改</summary><p>本项目采用了基于 <code>MetingJS</code> 的 <code>Aplayer</code> 音乐播放器，可实现快速自定义歌单</p><p>仅支持 <strong>中国大陆地区</strong></p><p>请在 <code>.env</code> 文件中更改歌曲相关参数即可实现自定义歌单列表</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 歌曲 API 地址</span>
VITE_SONG_API = &quot;https://api-meting.imsyy.top&quot;
<span class="token title important"><span class="token punctuation">#</span> 歌曲服务器 ( netease-网易云, tencent-qq音乐 )</span>
VITE_SONG_SERVER = &quot;netease&quot;
<span class="token title important"><span class="token punctuation">#</span> 播放类型 ( song-歌曲, playlist-播放列表, album-专辑, search-搜索, artist-艺术家 )</span>
VITE_SONG_TYPE = &quot;playlist&quot;
<span class="token title important"><span class="token punctuation">#</span> 播放 ID</span>
VITE_SONG_ID = &quot;7452421335&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>4.4 字体修改</summary><p>现采用 <code>HarmonyOS Sans</code> 开源字体，采用字体拆分，提升加载速度</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>由于本站 <code>CDN</code> 已开启防盗链，<strong>非本站域名不可访问</strong>，请将字体引入链接更改为下方内容，否则 <strong>自定义字体将失效</strong></p><p>https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css</p></div></details><h2 id="_5-构建" tabindex="-1"><a class="header-anchor" href="#_5-构建" aria-hidden="true">#</a> 5.构建</h2><p>修改完成后，我们退出开发模式</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>退出模式 <code>Ctrl</code>+<code>C</code></p></div><p>构建，构建后的静态资源会在 <code>dist</code> 目录中生成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+y+'" alt=""></p><h2 id="_6-上传" tabindex="-1"><a class="header-anchor" href="#_6-上传" aria-hidden="true">#</a> 6.上传</h2><p>我们将<code>dist</code>打包并上传到服务器上</p>',10),Y={class:"custom-container tip"},z=n("p",{class:"custom-container-title"},"说明",-1),Q=n("p",null,[n("img",{src:x,alt:""})],-1),U=n("p",null,[n("img",{src:E,alt:""})],-1),X=t('<p><img src="'+w+'" alt=""></p><p>然后我们就看到成果了</p><p><img src="'+S+`" alt=""></p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-输入yarn命令错误提示" tabindex="-1"><a class="header-anchor" href="#_1-输入yarn命令错误提示" aria-hidden="true">#</a> 1. 输入yarn命令错误提示</h4><blockquote><p>&#39;yarn&#39;不是内部或外部命令，也不是可执行的程序或批处理文件</p></blockquote><p>原因：yarn没有成功安装，卸载后重新安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载</span>
<span class="token function">npm</span> uninstall <span class="token function">yarn</span> <span class="token parameter variable">-g</span>

<span class="token comment"># 安装yarn</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span>

<span class="token comment"># 查看版本号</span>
<span class="token function">yarn</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>`,9),Z={href:"https://github.com/imsyy/home",target:"_blank",rel:"noopener noreferrer"};function $(nn,sn){const a=c("ExternalLinkIcon"),i=c("RouterLink");return d(),r("div",null,[I,A,n("p",null,[s("简单的小主页，根据原作者 "),n("a",N,[s("@imsyy"),e(a)]),s(" 的教程进行了详细截图补充")]),n("div",L,[V,n("p",null,[s("主页的 Logo 字体已经过压缩，若用本站 Logo 以外的字母会变回默认字体，这里是 "),n("a",C,[s("完整字体"),e(a)])])]),T,n("ul",null,[n("li",null,[n("p",null,[n("a",j,[s("無名の主页"),e(a)])])]),n("li",null,[n("p",null,[n("a",D,[s("無名の主页 - 备用线路"),e(a)])])])]),R,n("p",null,[s("下载源码："),n("a",O,[s("https://github.com/imsyy/home"),e(a)])]),F,n("p",null,[s("请参考之前的教程 "),e(i,{to:"/website/nodejs/#window%E5%AE%89%E8%A3%85"},{default:o(()=>[s("node.js安装使用")]),_:1})]),P,n("p",null,[n("a",B,[s("http://localhost:3000/"),e(a)])]),G,n("details",K,[H,n("p",null,[s("天气及地区获取需要 "),n("a",J,[s("高德开放平台控制台"),e(a)]),s(" 获取 API")]),M]),W,n("div",Y,[z,n("p",null,[s("没有服务器也可使用 "),e(i,{to:"/website/githubpage/#%E9%9D%99%E6%80%81%E6%89%98%E7%AE%A1"},{default:o(()=>[s("静态托管平台部署")]),_:1})])]),Q,U,n("p",null,[s("上传后访问域名，却只有文字，因为要开启https，"),e(i,{to:"/website/ECS/#ssl%E8%AF%81%E4%B9%A6"},{default:o(()=>[s("直接SSL证书弄好了再开启")]),_:1})]),X,n("ul",null,[n("li",null,[n("a",Z,[s("@imsyy"),e(a)])])])])}const an=l(q,[["render",$],["__file","index.html.vue"]]);export{an as default};
