import{_ as r,r as n,o,c,a as e,b as s,d as a,e as p}from"./app-2494679a.js";const i="/assets/VMware-01-14486bb6.png",d="/assets/VMware-02-476fe4ed.png",l="/assets/VMware-03-18fb66cb.png",_="/assets/VMware-04-88a55efd.png",m="/assets/VMware-05-0e7e2054.png",g="/assets/VMware-06-519529c5.png",h="/assets/VMware-07-f0497ac8.png",u="/assets/VMware-08-08811c2d.png",w="/assets/VMware-09-602bd409.png",b="/assets/VMware-10-bb5ad615.png",V="/assets/VMware-11-f1cdb946.png",f="/assets/VMware-12-f9483cc9.png",M="/assets/VMware-13-54466c74.png",v="/assets/VMware-14-12c8e03d.png",x="/assets/VMware-15-6c8b3d6d.png",C="/assets/VMware-16-1e4848ab.png",S="/assets/VMware-17-2056da09.png",k="/assets/VMware-18-e80bfaaa.png",O="/assets/VMware-19-ca783c78.png",I="/assets/VMware-20-e01393cc.png",D="/assets/VMware-21-42e1a9fb.png",E="/assets/VMware-22-7a952289.png",G="/assets/VMware-23-aa2aa9b8.png",y="/assets/VMware-24-77fc6bda.png",B="/assets/VMware-25-b2f98adc.png",L="/assets/VMware-26-577e0226.png",P="/assets/VMware-27-483c8ee3.png",N="/assets/VMware-28-656d8c82.png",T="/assets/VMware-29-b22d8585.png",q="/assets/VMware-30-cf31ea97.png",H="/assets/VMware-31-2c5acd62.png",A="/assets/VMware-32-42cf0f67.png",U="/assets/VMware-33-166a7851.png",F="/assets/VMware-34-0d4e3952.png",R="/assets/VMware-35-6dd12c22.png",W="/assets/VMware-36-19bb9f91.png",j="/assets/VMware-37-8c1263c2.png",z="/assets/VMware-38-458c7d0a.png",J="/assets/VMware-39-f0a42726.png",K="/assets/VMware-40-9780edab.png",Q="/assets/VMware-41-3f1790fd.png",X="/assets/VMware-42-43628b08.png",Y="/assets/VMware-43-e7da068d.png",Z="/assets/VMware-44-5b4bd08a.png",$="/assets/VMware-45-12b84df1.png",ee={},se=e("h1",{id:"vm虚拟机安装centos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vm虚拟机安装centos","aria-hidden":"true"},"#"),s(" VM虚拟机安装centos")],-1),te=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"更新时间"),e("p",null,"最近更新：2021-11-15"),e("p",null,"激活码百度一大堆")],-1),ae={href:"https://www.centos.org/",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://www.debian.org/",target:"_blank",rel:"noopener noreferrer"},re={href:"https://www.redhat.com/",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://cn.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"},oe=p(`<div class="custom-container tip"><p class="custom-container-title">说明</p><p>除了linux系统，还可以同样的方法安装 window 以及 PE系统</p><p>虚拟机做服务器的最大弊病就是：要一直开机！</p></div><h2 id="小科普" tabindex="-1"><a class="header-anchor" href="#小科普" aria-hidden="true">#</a> 小科普</h2><p>Linux指的是Linux系统内核，只有终端命令界面，无图形界面</p><p>CentOS是Linux发行套件系统，同时拥有终端命令界面和图形界面</p><h2 id="_1-下载虚拟机" tabindex="-1"><a class="header-anchor" href="#_1-下载虚拟机" aria-hidden="true">#</a> 1.下载虚拟机</h2><p>我下载的时候还是V16.0，复制到迅雷打开下载</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://softdown01.rbread04.cn/huajunsafe/VMware-workstation-full-16.0.0-16894299.exe?timestamp=610ff0a5&amp;auth_key=fb62b4bde191eaec6565e5d87231a4b9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),ce={class:"custom-container tip"},ie=e("p",{class:"custom-container-title"},"说明",-1),de={href:"https://www.onlinedown.net/soft/2062.htm",target:"_blank",rel:"noopener noreferrer"},le=e("p",null,"切记！下载地址-普通下载地址-通用网络下载",-1),_e=p('<h2 id="_2-安装虚拟机" tabindex="-1"><a class="header-anchor" href="#_2-安装虚拟机" aria-hidden="true">#</a> 2.安装虚拟机</h2><p><img src="'+i+'" alt=""></p><p>安装比较简单，点点点就好了，唯一注意的就是更改下安装位置，<strong>别安装在C盘</strong>了</p><p><img src="'+d+'" alt=""></p><p>安装好，打开，我们等会再用</p><h2 id="_3-下载centos镜像" tabindex="-1"><a class="header-anchor" href="#_3-下载centos镜像" aria-hidden="true">#</a> 3.下载Centos镜像</h2>',6),me={href:"https://mirrors.aliyun.com/centos/",target:"_blank",rel:"noopener noreferrer"},ge=p('<p>建议选择CentOS 7 以上，我选的7.9</p><p>选<code>7.9.2009/isos/x86_64/</code>，然后选DVD的，iso的后缀文件,<code>CentOS-7-x86 64-DVD-2009.ISO</code></p><p><img src="'+l+'" alt=""></p><p><img src="'+_+'" alt=""></p><p>下载完成后，记住文件夹路径，一会要用，或者自己单独放一个文件夹</p><h2 id="_4-新建虚拟机" tabindex="-1"><a class="header-anchor" href="#_4-新建虚拟机" aria-hidden="true">#</a> 4.新建虚拟机</h2><p>打开虚拟机，创建虚拟机</p><p><img src="'+m+'" alt=""></p><p>选择 <code>自定义 -下一步</code></p><p><img src="'+g+'" alt=""></p><p>这里 <code>稍后安装操作系统</code>，<code>linux</code> <code>CentOS7 64位</code></p><p><img src="'+h+'" alt=""></p><p>我是先再F盘新建了一个文件夹 <code>Virtual Machines</code> ，再 <code>浏览</code> 中选中这个文件夹</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>取简单一点就好，不用像我这么复杂</p></div><p><img src="'+u+'" alt=""></p><p>处理器默认1，我选了2；内存默认1G，我选了2G</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>看自己电脑是否吃的消</p><p>本人电脑：I5 四核处理器，8G运存</p></div><p><img src="'+w+'" alt=""></p><p>选 <strong>桥接网络</strong>，下一步按推荐的默认</p><div class="custom-container tip"><p class="custom-container-title">桥接和NAT的区别</p><p>1.桥接通过路由器联网</p><p>主机 → 路由器 ← 虚拟机</p><p>2.NAT通过主机联网</p><p>路由器 ← 主机 ← 虚拟机</p></div><p><img src="'+b+'" alt=""></p><p>默认推荐下一步，创建新虚拟磁盘</p><p><img src="'+V+'" alt=""></p><p>磁盘容量我选了50G，正常是够用了，除非你还有其他的要装，100G都可以</p><p><img src="'+f+'" alt=""></p><p>自定义硬件，把声卡和打印机移除，用不到两个玩意，移除后完成</p><p><img src="'+M+'" alt=""></p><p><img src="'+v+'" alt=""></p><p>这样我们的虚拟机就建好了</p><p><img src="'+x+'" alt=""></p><h2 id="_5-安装centos" tabindex="-1"><a class="header-anchor" href="#_5-安装centos" aria-hidden="true">#</a> 5.安装CentOS</h2><p>鼠标右键虚拟机-设置</p><p><img src="'+C+'" alt=""></p><p>选CD/DVD，使用ISO映像文件-浏览，即 <a href="#_3-%E4%B8%8B%E8%BD%BDcentos%E9%95%9C%E5%83%8F">第3步下载centos镜像</a> 那个镜像文件 <code>后缀是.iso</code>，确定。</p><p><img src="'+S+'" alt=""></p><p>进入了系统开机界面，选择第一个</p><p>如果上下键没反应，左下提示按 <code>Ctrl+G</code> ，上下移动看看，选最上面的那个，<strong>选中了是白色的字体</strong></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>Install CentOS 7（安装CentOS 7）</p><p>Test this media &amp; install CentOS 7（测试并安装CentOS 7）</p><p>Troubleshooting（修复故障）</p></div><p><img src="'+k+'" alt=""></p><p>默认的就是US键盘，语言是English，不要担心，一步步来就可以</p><p><img src="'+O+'" alt=""></p><p>设置时间</p><p><img src="'+I+'" alt=""></p><p>亚洲-上海，核对下时间和日期，完后点完成</p><p><img src="'+D+'" alt=""></p><p>安装所需软件</p><p><img src="'+E+'" alt=""></p><p>选 <code>Server with GUI</code></p><p><img src="'+G+'" alt=""></p><p>安装位置并分区</p><p><img src="'+y+'" alt=""></p><p>选我即将分区 <code>I will configure partitioning</code></p><p><img src="'+B+'" alt=""></p><p>点 <code>+</code> 添加分区，<code>/boot</code> 分 500M</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这里只能用键盘上的数字打字，小键盘不可用</p></div><p><img src="'+L+'" alt=""></p><p>同样的方式分配其他两个，完成</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p><code>/</code> 分 10G</p><p><code>swap</code> 分 2G</p></div><p><img src="'+P+'" alt=""></p><p>点接受更改</p><p><img src="'+N+'" alt=""></p><p>设置网卡和主机名</p><p><img src="'+T+'" alt=""></p><p>这里把网卡开关打开，<code>Host name</code>的主机名，自己随便设置，点一下应用，完成</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这里的 <code>IP Address</code> 记一下，这个就是我们的 <code>假公网IP</code></p><p>如果忘记密码，可以进CentOS系统-桌面-鼠标右键-打开终端(open Terminal)，输入<code>ip addr</code>，查看ens32或者33之类的IP地址即可</p></div><p><img src="'+q+'" alt=""></p><p>开始安装</p><p>现在，点开始安装就行了</p><p><img src="'+H+'" alt=""></p><p>安装好之前，我们先设置root密码</p><div class="custom-container warning"><p class="custom-container-title">重要</p><p>这个就是登录服务器用到的密码</p></div><p><img src="'+A+'" alt=""></p><p>这个密码一定要牢记，要用的，别弄太复杂</p><p><img src="'+U+'" alt=""></p><p>接下来就是创建管理员账户</p><p><img src="'+F+'" alt=""></p><p>账号随便，密码要记得，登录用的</p><p><img src="'+R+'" alt=""></p><p>耐心等待系统安装完成，点 <code>Reboot</code> 重启就好了</p><p><img src="'+W+'" alt=""></p><p>进入了开机界面</p><p><img src="'+j+'" alt=""></p><p>安装许可证</p><p><img src="'+z+'" alt=""></p><p>这里勾选接受，完成</p><p><img src="'+J+'" alt=""></p><p>结束许可信息，即可</p><p><img src="'+K+'" alt=""></p><h2 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h2><p>进入登录界面，输入自己设置的账密</p><p><img src="'+Q+'" alt=""></p><p>这里我们选择<code>汉语</code>，一路点前进，就行</p><p><img src="'+X+'" alt=""></p><p>终于，我们完成了整个CentOS的安装，开始使用</p><p><img src="'+Y+'" alt=""></p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-虚拟机打不开-报错" tabindex="-1"><a class="header-anchor" href="#_1-虚拟机打不开-报错" aria-hidden="true">#</a> 1.虚拟机打不开 报错</h4><blockquote><p>报错：出现您的主机不满足在启用 Hyper-V 或 Device/Credential Guard 的情况下运行 VMware Workstation 的最低要求</p></blockquote><p>解决：尝试过各种方法，不行，直接更新了本机电脑的微软系统，竟然可以了！</p><blockquote><p>可能产生的原因：安装了docker desktop，导致和Hyper-V冲突。别看网上说关掉Hyper-V，这样桥接就没有网络了</p></blockquote><h4 id="_2-虚拟机如何进pe系统" tabindex="-1"><a class="header-anchor" href="#_2-虚拟机如何进pe系统" aria-hidden="true">#</a> 2.虚拟机如何进PE系统</h4><p>选择其他安装方式中的第3个：<code>生成可启动的ISO</code> 自己选一个本地盘符文件夹放镜像文件</p><p><img src="'+Z+'" alt=""></p><p>虚拟机CD/DVD选择生成的ISO镜像文件，启动即可</p><p><img src="'+$+`" alt=""></p><h4 id="_3-搭建网站本地调试-域名怎么弄" tabindex="-1"><a class="header-anchor" href="#_3-搭建网站本地调试-域名怎么弄" aria-hidden="true">#</a> 3.搭建网站本地调试，域名怎么弄</h4><p>按照下面路径修改host文件，填加IP+域名即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Windows\\System32\\drivers\\etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到 <code>hosts</code> 文件，鼠标右键-记事本方式打开- 拉倒底部 输入<code>虚拟机的IP+空格+任意域名</code>，保存关掉</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.1.154 alibaba.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在宝塔中添加站点，输入此网址即可</p>`,111);function he(ue,we){const t=n("ExternalLinkIcon");return o(),c("div",null,[se,te,e("p",null,[s("本文仅演示虚拟机运行Linux系统的 "),e("a",ae,[s("CentOS"),a(t)])]),e("p",null,[s("由于Linux的开源，市场上还有其他的发行版，"),e("a",pe,[s("debian"),a(t)]),s("、"),e("a",re,[s("商业版 Redhat"),a(t)]),s("、"),e("a",ne,[s("Ubuntu"),a(t)]),s("等")]),oe,e("div",ce,[ie,e("p",null,[s("原地址："),e("a",de,[s("https://www.onlinedown.net/soft/2062.htm"),a(t)])]),le]),_e,e("p",null,[s("阿里云镜像："),e("a",me,[s("https://mirrors.aliyun.com/centos/"),a(t)])]),ge])}const Ve=r(ee,[["render",he],["__file","index.html.vue"]]);export{Ve as default};
