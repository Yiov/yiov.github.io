import{_ as r,r as i,o as c,c as p,a as s,b as a,d as n,w as t,e as o}from"./app-d6c48e1d.js";const d="/assets/go-01-e6aaa783.png",u="/assets/go-02-46098021.png",m="/assets/go-03-38e05573.png",v="/assets/go-04-fc66b4fe.png",g="/assets/go-05-8f1efb9b.png",b="/assets/go-06-02da85a9.png",h="/assets/go-07-a6c0ddef.png",k="/assets/go-08-b16d4332.png",_={},f=o('<h1 id="go环境的安装教程" tabindex="-1"><a class="header-anchor" href="#go环境的安装教程" aria-hidden="true">#</a> Go环境的安装教程</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-2-23</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>常说的go就是golang的简称，演示一下go语言的安装</p>',4),x={href:"https://go.dev/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://golang.google.cn/",target:"_blank",rel:"noopener noreferrer"},O=s("p",null,[s("img",{src:d,alt:""})],-1),G=s("h2",{id:"准备工作",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),a(" 准备工作")],-1),T=s("h2",{id:"开始安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#开始安装","aria-hidden":"true"},"#"),a(" 开始安装")],-1),N=s("code",null,"Download",-1),P={href:"https://go.dev/dl/",target:"_blank",rel:"noopener noreferrer"},R=o(`<p>点击 Linux 获取下载链接，比如我的：</p><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token scheme">https<span class="token scheme-delimiter">:</span></span><span class="token authority"><span class="token authority-delimiter">//</span><span class="token host">dl.google.com</span></span><span class="token path"><span class="token path-separator">/</span>go<span class="token path-separator">/</span>go1.20.1.linux-amd64.tar.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+u+`" alt=""></p><p>打开 Xshell工具 并登录服务器，然后下载go</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#下载</span>
<span class="token builtin class-name">cd</span> /www/server <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> https://golang.google.cn/dl/go1.20.1.linux-amd64.tar.gz

<span class="token comment">#解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> go1.20.1.linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#添加环境变量</span>
<span class="token function">vi</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt=""></p><p>输入 <code>i</code> 进入编辑模式，方向键拉倒最底部，回车一下粘贴下面变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/www/server/go
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOBIN</span><span class="token operator">=</span><span class="token variable">$GOROOT</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPKG</span><span class="token operator">=</span><span class="token variable">$GOROOT</span>/pkg/tool/linux_amd64
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span>/www/wwwroot/Golang
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOBIN</span><span class="token builtin class-name">:</span><span class="token variable">$GOPKG</span><span class="token builtin class-name">:</span><span class="token variable">$GOPATH</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+'" alt=""></p><p>按<code>ESC</code>退出编辑模式，输入<code>:wq</code> 回车保存并退出</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>若不保存退出，输入 <code>:q!</code></p></div><p><img src="'+b+`" alt=""></p><p>环境变量生效命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><p>检查版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-如何卸载go" tabindex="-1"><a class="header-anchor" href="#_1-如何卸载go" aria-hidden="true">#</a> 1.如何卸载go</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看goroot目录地址</span>
go <span class="token function">env</span>

<span class="token comment">#根据目录路径删除即可</span>
<span class="token builtin class-name">cd</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /www/server/go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function $(A,B){const e=i("ExternalLinkIcon"),l=i("RouterLink");return c(),p("div",null,[f,s("p",null,[a("GO官网："),s("a",x,[a("https://go.dev/"),n(e)])]),s("p",null,[a("备用官网："),s("a",w,[a("https://golang.google.cn/"),n(e)])]),O,G,s("ul",null,[s("li",null,[s("p",null,[n(l,{to:"/website/ECS/"},{default:t(()=>[a("服务器")]),_:1}),a(" 或 "),n(l,{to:"/website/VMware/"},{default:t(()=>[a("虚拟机")]),_:1})])]),s("li",null,[s("p",null,[n(l,{to:"/website/Xshell/"},{default:t(()=>[a("Xshell工具")]),_:1})])])]),T,s("p",null,[a("点击 "),N,a(" 进入下载页面："),s("a",P,[a("https://go.dev/dl/"),n(e)])]),R])}const E=r(_,[["render",$],["__file","index.html.vue"]]);export{E as default};