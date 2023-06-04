import{_ as d,r as c,o as p,c as r,a as s,b as n,d as e,w as a,e as t}from"./app-92678b17.js";const m="/assets/nodejs-01-33545ca2.png",u="/assets/nodejs-02-eba263e5.png",v="/assets/nodejs-03-57567611.png",b="/assets/nodejs-04-4a621d83.png",h="/assets/nodejs-05-15c83715.png",g="/assets/nodejs-06-c3dcb8a4.png",_="/assets/nodejs-07-92bd9cb9.png",k="/assets/nodejs-08-61026b55.png",f="/assets/nodejs-09-fe24829a.png",x="/assets/nodejs-10-7db08480.png",j="/assets/nodejs-11-123f926e.png",w="/assets/home-03-d196ca29.png",y="/assets/nodejs-13-64102ac9.png",E="/assets/nodejs-14-5058f57c.png",P="/assets/nodejs-15-8eb9c975.png",A="/assets/nodejs-16-6b716133.png",B="/assets/nodejs-17-2dac0ee8.png",C="/assets/nodejs-18-d7e18c92.png",D="/assets/nodejs-19-2c739b71.png",N={},z=t('<h1 id="node-js安装使用" tabindex="-1"><a class="header-anchor" href="#node-js安装使用" aria-hidden="true">#</a> node.js安装使用</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-2-23</p></div><p>node.js是JavaScript的运行环境，本次仅演示</p><ul><li><p><a href="#linux%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85">Linux</a></p></li><li><p><a href="#window%E5%AE%89%E8%A3%85">Window</a></p></li></ul><div class="custom-container tip"><p class="custom-container-title">说明</p><p>安装了宝塔的可直接在软件商店搜node安装</p></div>',5),F={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/nodejs/node",target:"_blank",rel:"noopener noreferrer"},V=t('<p><img src="'+m+'" alt=""></p><h2 id="linux系统安装" tabindex="-1"><a class="header-anchor" href="#linux系统安装" aria-hidden="true">#</a> linux系统安装</h2><p>选择 <code>linux x64</code>下载，为了保证稳定性，建议选择长期维护的版本</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>不用直接点击下载，我们用命令</p></div><p><img src="'+u+`" alt=""></p><p>切换root账号</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>一般都是root，多加一步不影响</p><p>鼠标右键粘贴！ctrl+v是不可用的</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> root <span class="token comment">#切换到root帐号</span>
<span class="token builtin class-name">cd</span> / <span class="token comment">#进入根目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+'" alt=""></p><p>下载安装，版本是目前最新的V14.17.4，可按照官网最新的版本改好命令，保持一致</p>',10),q={class:"custom-container tip"},G=s("p",{class:"custom-container-title"},"说明",-1),R={href:"https://nodejs.org/dist/",target:"_blank",rel:"noopener noreferrer"},S=s("p",null,"依次运行命令",-1),L=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#下载nodejs安装包</span>
<span class="token function">wget</span> https://nodejs.org/dist/v14.17.4/node-v14.17.4-linux-x64.tar.xz

<span class="token comment">#解压</span>
<span class="token function">tar</span> xvf node-v14.17.4-linux-x64.tar.xz

<span class="token comment">#改名</span>
<span class="token function">mv</span> node-v14.17.4-linux-x64 node-v14.17.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等待完成，停在 改名 那 <code>回车</code> 一下就行了</p><p><img src="`+b+`" alt=""></p><p>进目录查看文件夹，有就代表安装好了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>注意版本号一致</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#进入目录并列出</span>
<span class="token builtin class-name">cd</span> /node-v14.17.4/bin <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><p>建立软连接</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>注意版本号一致</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /node-v14.17.4/bin/node /usr/local/bin/node
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /node-v14.17.4/bin/npm /usr/local/bin/npm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+`" alt=""></p><p>重启Xshell</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>完成后一定要关掉 Xshell 再打开，否则不生效</p></div><p>确定重启后，复制下面命令查看一下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /node-v14.17.4/bin <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span> <span class="token comment">#查看版本号</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span> <span class="token comment">#查看包管理工具</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+_+`" alt=""></p><p>清理安装包，查看目录列表，标红的 <code>node***.tar.xz</code> 就是刚下的压缩包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /
<span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><p>删除node安装包，复制下列命令</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>版本不同的话，自己改下名</p><p>我这里有两个，是因为我运行了2次，下载重复了</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> node-v14.17.4-linux-x64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删完后，我们再进目录看一下，完美</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /
<span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+'" alt=""></p><h2 id="window安装" tabindex="-1"><a class="header-anchor" href="#window安装" aria-hidden="true">#</a> Window安装</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>官网下载我们选择window的方式</p><p><img src="'+x+'" alt=""></p><p>下载好安装，就不用说了吧</p><p><img src="'+j+'" alt=""></p><p>安装好后，我们运行 <code>window键+R</code> 进入 <code>cmd</code> 终端</p><p><img src="'+w+`" alt=""></p><p>查看一下版本号，有就说明成功了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+y+'" alt=""></p><h3 id="更改全局模块-可选" tabindex="-1"><a class="header-anchor" href="#更改全局模块-可选" aria-hidden="true">#</a> 更改全局模块(可选)</h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>默认情况下，下载 <code>yarn</code> 或者 <code>pnpm</code> 会直接下载到 <code>C盘</code></p><p>如果想挪到安装目录的就看，无所谓的无视，不影响使用</p></div><p>在安装目录下创建两个文件夹 <code>node_global</code> 和 <code>node_cache</code></p><p><img src="'+E+`" alt=""></p><p>打开cmd 输入下列指令</p><div class="custom-container warning"><p class="custom-container-title">说明</p><p>全程请参照自己的安装目录来修改！！！</p><p>prefix = 创建的node_global文件夹所在路径</p><p>cache = 创建的node_cache文件夹所在路径</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">&quot;D:\\Program Files<span class="token entity" title="\\n">\\n</span>odejs<span class="token entity" title="\\n">\\n</span>ode_global&quot;</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">&quot;D:\\Program Files<span class="token entity" title="\\n">\\n</span>odejs<span class="token entity" title="\\n">\\n</span>ode_cache&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+P+`" alt=""></p><p>修改系统环境变量，将 <code>用户变量</code> 下的 <code>Path</code> 修改为如下，之后点击确定</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\Program Files\\nodejs\\node_global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p>此电脑-右键-属性-高级系统设置-环境变量</p></div><p><img src="`+A+`" alt=""></p><p>在 <code>系统变量</code> 下新建 <code>NODE_PATH</code> ，值如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\Program Files\\nodejs\\node_global\\node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+B+`" alt=""></p><p>在 <code>系统变量</code> 下的 <code>Path</code> 新建，添加node全局文件夹之后点击确定</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\Program Files\\nodejs\\node_global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+C+'" alt=""></p><p>右击Nodejs文件夹-属性-安全，点击编辑，将所有权限都✔上</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>关掉cmd重新打开，看是否能查询版本</p></div><p><img src="'+D+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn-和-pnpm" tabindex="-1"><a class="header-anchor" href="#yarn-和-pnpm" aria-hidden="true">#</a> YARN 和 PNPM</h2><p>我们常用的 <code>yarn</code>和 <code>pnpm</code> 可以安装一下，顺便测试一下全局模块是否正确</p>`,60),T=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#安装pnpm"),n(`
`),s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token function"},"pnpm"),n(`
`),s("span",{class:"token comment"},"#查看版本号"),n(`
`),s("span",{class:"token function"},"pnpm"),n(),s("span",{class:"token parameter variable"},"-v"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),W=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#安装yarn"),n(`
`),s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token function"},"yarn"),n(`
`),s("span",{class:"token comment"},"#查看版本号"),n(`
`),s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token parameter variable"},"-v"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),X=t(`<div class="custom-container tip"><p class="custom-container-title">说明</p><p>win11上如果报错，是因为power shell的安全策略，不允许执行不安全脚本</p><p><code>nrm : 无法加载文件 C:\\Users\\用户\\AppData\\Roaming\\npm\\nrm.ps1，因为在此系统上禁止运行脚本</code></p><p>解决：搜索 <code>power shell</code> 或者 <code>power shell ISE</code> ，管理员方式打开，输入如下值，然后全选A</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>set-ExecutionPolicy RemoteSigned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>想要改回来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>set-ExecutionPolicy Default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-linux输入版本号没反应" tabindex="-1"><a class="header-anchor" href="#_1-linux输入版本号没反应" aria-hidden="true">#</a> 1.linux输入版本号没反应</h4><p>关掉重新打开，再次查询</p><h4 id="_2-如何卸载" tabindex="-1"><a class="header-anchor" href="#_2-如何卸载" aria-hidden="true">#</a> 2.如何卸载</h4>`,8),H=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#npm卸载"),n(`
`),s("span",{class:"token function"},"npm"),n(" uninstall "),s("span",{class:"token function"},"npm"),n(),s("span",{class:"token parameter variable"},"-g"),n(`

`),s("span",{class:"token comment"},"#卸载node"),n(`
yum remove nodejs `),s("span",{class:"token function"},"npm"),n(),s("span",{class:"token parameter variable"},"-y"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),J=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#卸载"),n(`
`),s("span",{class:"token function"},"npm"),n(" uninstall "),s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token parameter variable"},"-g"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),M=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#卸载"),n(`
`),s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token function"},"pnpm"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),O=s("h4",{id:"_3-三者的关系",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-三者的关系","aria-hidden":"true"},"#"),n(" 3.三者的关系")],-1),U=s("p",null,"yarn是npm的升级版，pnpm是npm的替代，速度上自然是新秀pnpm更快",-1);function Y(K,Q){const l=c("ExternalLinkIcon"),i=c("CodeGroupItem"),o=c("CodeGroup");return p(),r("div",null,[z,s("ul",null,[s("li",null,[s("p",null,[n("官网："),s("a",F,[n("https://nodejs.org/zh-cn/"),e(l)])])]),s("li",null,[s("p",null,[n("仓库："),s("a",I,[n("https://github.com/nodejs/node"),e(l)])])])]),V,s("div",q,[G,s("p",null,[n("其他版本查找："),s("a",R,[n("https://nodejs.org/dist/"),e(l)])]),S]),L,e(o,null,{default:a(()=>[e(i,{title:"pnpm"},{default:a(()=>[T]),_:1}),e(i,{title:"yarn"},{default:a(()=>[W]),_:1})]),_:1}),X,e(o,null,{default:a(()=>[e(i,{title:"npm"},{default:a(()=>[H]),_:1}),e(i,{title:"yarn"},{default:a(()=>[J]),_:1}),e(i,{title:"pnpm"},{default:a(()=>[M]),_:1})]),_:1}),O,U])}const $=d(N,[["render",Y],["__file","index.html.vue"]]);export{$ as default};
