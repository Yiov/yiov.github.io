import{_ as o,r,o as t,c as l,a as e,d as a,w as c,b as s,e as i}from"./app-3acf8c5f.js";const p="/assets/dockerhub-01-96e19c5c.png",h="/assets/dockerhub-02-61dd4092.png",u="/assets/dockerhub-03-3389cb6a.png",m="/assets/dockerhub-04-b5c68f9c.png",b="/assets/dockerhub-05-3ef3e95a.png",g="/assets/dockerhub-06-904431a5.png",v="/assets/dockerhub-07-aace37d0.png",_="/assets/dockerhub-08-eba2bc3c.png",k="/assets/dockerhub-09-562af79c.png",f="/assets/dockerhub-10-407a1cea.png",x="/assets/dockerhub-11-66ca6e0e.png",w="/assets/dockerhub-12-8b0fe0fc.png",y="/assets/dockerhub-13-e079a1d5.png",j="/assets/dockerhub-14-aeb6996b.png",L="/assets/dockerhub-15-8ce8e5ac.png",N={},R=i('<h1 id="dockerhub上传本地镜像" tabindex="-1"><a class="header-anchor" href="#dockerhub上传本地镜像" aria-hidden="true">#</a> dockerhub上传本地镜像</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2021-11-12</p></div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>本文仅演示本地有的镜像，就是你服务器拉取了别人的镜像</p><p>怎么上传到自己的dockerhub</p><p>至于如何制作镜像不教，因为我也不会，哈哈哈哈</p><h2 id="准备条件" tabindex="-1"><a class="header-anchor" href="#准备条件" aria-hidden="true">#</a> 准备条件</h2>',7),S=e("h2",{id:"_1-创建docker账号",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-创建docker账号","aria-hidden":"true"},"#"),s(" 1.创建docker账号")],-1),V={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},q=i('<p><img src="'+p+'" alt=""></p><p>登录账号后，点 <code>Repositories-Create Repository</code> 创建仓库</p><p><img src="'+h+'" alt=""></p><p>给仓库命名，公开还是私有，创建</p><p><img src="'+u+'" alt=""></p><p>这样就创建成功了</p><p><img src="'+m+'" alt=""></p><h2 id="_2-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_2-拉取镜像" aria-hidden="true">#</a> 2.拉取镜像</h2><p>Xshell工具登录 服务器 或 虚拟机，拉取要上传(备份)的镜像</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>已拉取过的无视，本次仅做演示</p></div>',10),C={href:"https://hub.docker.com/r/whyour/qinglong",target:"_blank",rel:"noopener noreferrer"},E=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull whyour/qinglong:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+b+`" alt=""></p><h2 id="_3-登录docker" tabindex="-1"><a class="header-anchor" href="#_3-登录docker" aria-hidden="true">#</a> 3.登录docker</h2><p>输入命令登录docker账号和密码，输完直接回车</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Login Succeeded</code> 就是登录成功了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>Username：账户名</p><p>Password：密码(输入是隐藏的，尽管输入，不是键盘出问题)</p></div><p><img src="`+g+`" alt=""></p><h2 id="_4-上传镜像" tabindex="-1"><a class="header-anchor" href="#_4-上传镜像" aria-hidden="true">#</a> 4.上传镜像</h2><p>我们先查看一下查看镜像</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如没有镜像，就是还未拉取，看步骤2</p><p>我这里想要上传 @nolan 的 <code>nvjdc</code> 镜像作为演示</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+v+`" alt=""></p><p>dockerhub无法直接上传别人的镜像</p><p>我们pull镜像后，通过 <code>打标签</code> 的形式换成自己的账户仓库名，再上传就可以了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> tag 镜像ID 账户名/仓库名:标签名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p>镜像ID：4dc24556b2ff(上面自己复制)</p><p>账户名：nolanhzy(自己的账户名)</p><p>仓库名：nvjdc(仓库名用第1步自己建的名字)</p><p>标签名：latest(可以自己改)</p></div><p>最终：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> tag 4dc24556b2ff yiov/nvjdc:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+_+`" alt=""></p><p>我们再查看一下镜像，这样我们就得到了与原镜像完全一致的镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><p>现在我们来上传镜像</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如果上传前想查看数据 <code>docker inspect 账户名/仓库名:版本号</code></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> push yiov/nvjdc:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+f+'" alt=""></p><p>回到dockerhub网页查看，这样就是上传成功了</p><p><img src="'+x+'" alt=""></p><p>在Tags也能直观的看到，pull命令就可以直接使用了</p><p><img src="'+w+`" alt=""></p><h2 id="_5-退出账号并删除镜像" tabindex="-1"><a class="header-anchor" href="#_5-退出账号并删除镜像" aria-hidden="true">#</a> 5.退出账号并删除镜像</h2><p>先退出账号的好处，就是为了毕竟自己误操作，需要的时候再登</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">logout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Removing login</code> 就是已经移除登录状态了</p><p><img src="`+y+`" alt=""></p><p>先查看一下本地的镜像，我们用命令删除这个生成的镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+j+`" alt=""></p><p>用命令删除即可</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>我的就是：<code>docker rmi -f yiov/nvjdc:1.0</code></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 账户名/仓库名:标签名tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里再次 <code>docker images</code> 看一下，已经删除了</p><p><img src="`+L+'" alt=""></p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-docker一直登陆失败" tabindex="-1"><a class="header-anchor" href="#_1-docker一直登陆失败" aria-hidden="true">#</a> 1.docker一直登陆失败</h4><p>答：会话超时了，关掉SSH工具，重新打开，重新登录 <code>docker login</code> 即可</p><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>',48),I={href:"https://hub.docker.com/r/whyour/qinglong",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,[e("p",null,"Nvjdc (已更名为方舟)")],-1);function X(D,T){const n=r("RouterLink"),d=r("ExternalLinkIcon");return t(),l("div",null,[R,e("ul",null,[e("li",null,[e("p",null,[a(n,{to:"/website/ECS/"},{default:c(()=>[s("服务器1台")]),_:1}),s(" 或 "),a(n,{to:"/website/VMware/"},{default:c(()=>[s("虚拟机")]),_:1})])]),e("li",null,[e("p",null,[a(n,{to:"/website/Xshell/"},{default:c(()=>[s("安装Xshell工具")]),_:1})])]),e("li",null,[e("p",null,[a(n,{to:"/website/docker/"},{default:c(()=>[s("安装docker")]),_:1})])])]),S,e("p",null,[s("docker官网注册："),e("a",V,[s("https://hub.docker.com/"),a(d)])]),q,e("p",null,[s("练手可拉取青龙镜像："),e("a",C,[s("https://hub.docker.com/r/whyour/qinglong"),a(d)])]),E,e("ul",null,[e("li",null,[e("p",null,[e("a",I,[s("青龙镜像"),a(d)])])]),B])])}const H=o(N,[["render",X],["__file","index.html.vue"]]);export{H as default};
