import{_ as d,M as t,p as l,q as r,R as s,t as e,N as n,V as o,a1 as a}from"./framework-e03faf0e.js";const p="/assets/docker-01-dfa5ebd4.png",u="/assets/docker-02-28f1a21a.png",m="/assets/docker-02-28f1a21a.png",v="/assets/docker-04-0cd7c7dc.png",h="/assets/docker-05-5079fee2.png",k="/assets/docker-06-c9343598.png",b="/assets/docker-07-e2b6969a.png",g="/assets/docker-08-8bfee20a.png",_="/assets/docker-09-b29de0e4.png",f="/assets/docker-10-44ab4c11.png",x={},w=a('<h1 id="docker的安装教程" tabindex="-1"><a class="header-anchor" href="#docker的安装教程" aria-hidden="true">#</a> Docker的安装教程</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2021-11-17</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>虚拟机占用空间大，启动时间长，容器技术应运而生，docker就是其中一种应用容器引擎</p><p>可以更加便捷的管理镜像</p>',5),D={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},y=s("p",null,[s("img",{src:p,alt:""})],-1),E=s("h2",{id:"准备工作",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),e(" 准备工作")],-1),I=a(`<h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1.安装</h2><p>用Xshell工具登录服务器，然后一键安装Docker需要的依赖包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt=""></p><p>安装完成后，开启Docker服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl status <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+v+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+h+'" alt=""></p><h2 id="_2-其他功能" tabindex="-1"><a class="header-anchor" href="#_2-其他功能" aria-hidden="true">#</a> 2.其他功能</h2>',12),L={class:"custom-container details"},V=s("summary",null,"点击查看 多容器管理",-1),S=s("p",null,[e("安装 "),s("code",null,"Docker compose"),e(" ，用于管理多容器，容器不多的，可以不用装")],-1),N=s("p",null,"这个有点慢，多等一会",-1),C={class:"custom-container tip"},$=s("p",{class:"custom-container-title"},"说明",-1),q={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},B=a('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.16.1/docker-compose-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">`</span></span>-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">`</span></span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x /usr/local/bin/docker-compose <span class="token comment">#给权限</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token comment">#运行docker-compose</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',3),R=a(`<h3 id="docker常用命令" tabindex="-1"><a class="header-anchor" href="#docker常用命令" aria-hidden="true">#</a> docker常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token comment">#查看容器</span>

<span class="token function">docker</span> stop 容器ID <span class="token comment">#暂停容器</span>

<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> 容器ID <span class="token comment">#删除容器</span>

<span class="token function">docker</span> <span class="token function">kill</span> 容器ID <span class="token comment">#关闭容器</span>

<span class="token function">docker</span> restart 容器名称 <span class="token comment">#重启容器</span>

<span class="token builtin class-name">exit</span> <span class="token comment">#退出容器</span>

<span class="token function">docker</span> images <span class="token comment">#查看镜像</span>

<span class="token function">docker</span> rmi 镜像ID <span class="token comment">#删除镜像</span>

<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> whyour/qinglong:latest <span class="token comment">#删除镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-docker安装出现errno-14" tabindex="-1"><a class="header-anchor" href="#_1-docker安装出现errno-14" aria-hidden="true">#</a> 1.Docker安装出现Errno 14</h4><p>Errno 14连接失败，是密钥下载失败了，那我们手动下载即可</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>我碰到的情况有2种，都是这么解决的</p></div><p><img src="`+k+'" alt=""></p><p><img src="'+b+`" alt=""></p><p>重新添加从仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+`" alt=""></p><p>再编辑repo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/yum.repos.d/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进来之后，我们找到标记位置，按 <code>Vi</code> 进入编辑模式，会有个绿色的光标</p><p><img src="`+_+`" alt=""></p><p>用方向键移动，把 <code>$releasever</code> 改成 <code>7</code>，多余的字用Del键删，其他的不要改</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> baseurl=https://download.docker.com/linux/centos/$releasever/$basearch/stable\`
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> baseurl=https://download.docker.com/linux/centos/7/$basearch/stable
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt=""></p><p>然后按 <code>ESC</code> 退出编辑模式，再输入 <code>:wq</code> 即可保存退出</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p><code>:</code>冒号按SHIFT键打出来，确保是全英文输入法状态</p></div><p>我们重新安装，两次y确定后安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-如何卸载旧版本docker" tabindex="-1"><a class="header-anchor" href="#_2-如何卸载旧版本docker" aria-hidden="true">#</a> 2.如何卸载旧版本Docker</h4><p>如果出现安装错误，或者未知错误，直接卸载了重装</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>放心卸，不会影响镜像面板的使用</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#老版本的Docker被称为docker或docker-engine</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> docker-common docker-selinux docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function X(M,T){const i=t("ExternalLinkIcon"),c=t("RouterLink");return l(),r("div",null,[w,s("p",null,[e("官网："),s("a",D,[e("https://www.docker.com/"),n(i)])]),y,E,s("ul",null,[s("li",null,[s("p",null,[n(c,{to:"/website/ECS/"},{default:o(()=>[e("服务器")]),_:1}),e(" 或 "),n(c,{to:"/website/VMware/"},{default:o(()=>[e("虚拟机")]),_:1})])]),s("li",null,[s("p",null,[n(c,{to:"/website/Xshell/"},{default:o(()=>[e("Xshell工具")]),_:1})])])]),I,s("details",L,[V,S,N,s("div",C,[$,s("p",null,[e("仓库："),s("a",q,[e("https://github.com/docker/compose"),n(i)])])]),B]),R])}const H=d(x,[["render",X],["__file","index.html.vue"]]);export{H as default};