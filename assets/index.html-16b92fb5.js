import{_ as i,r as t,o as c,c as d,a as e,b as s,d as n,e as p}from"./app-dc048004.js";const l="/assets/BT-01-fe4e501a.png",r="/assets/BT-02-41896ae7.png",o="/assets/BT-03-ec68c7f6.png",m="/assets/BT-04-09fed395.png",h="/assets/BT-05-e6620085.png",u="/assets/BT-06-c08be1ed.png",v="/assets/BT-07-beede23b.png",b="/assets/BT-08-16375210.png",_="/assets/BT-14-99ca76af.png",g="/assets/BT-09-5dbd1a32.png",x="/assets/BT-10-be0a3ee9.png",f="/assets/BT-11-1e503960.png",w="/assets/BT-12-8aa1823a.png",k="/assets/BT-13-6c11c572.png",B={},T=e("h1",{id:"linux安装宝塔面板",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux安装宝塔面板","aria-hidden":"true"},"#"),s(" Linux安装宝塔面板")],-1),P=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"更新时间"),e("p",null,"最近更新：2023-2-23")],-1),L={href:"https://www.bt.cn/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.aapanel.com/new/index.html",target:"_blank",rel:"noopener noreferrer"},I=p('<p><img src="'+l+'" alt=""></p><h2 id="_1-安装宝塔" tabindex="-1"><a class="header-anchor" href="#_1-安装宝塔" aria-hidden="true">#</a> 1.安装宝塔</h2><p>参考官网的命令即可，我以<code>centos 7</code>为例</p><p><img src="'+r+`" alt=""></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>第一次接触命令的，请记住键盘中的<code>Ctrl+V</code> 不可用，请用鼠标右键 <code>粘贴</code></p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /
yum install -y wget &amp;&amp; wget -O install.sh https://download.bt.cn/install/install_6.0.sh &amp;&amp; sh install.sh ed8484bec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt=""></p><p>等待安装，提示输入 <code>y</code> 确定，<code>回车</code>，继续等待</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>若提示开不开启SSL，都可以，我是开了</p><p>就是访问面板是否是https</p></div><p><img src="'+m+'" alt=""></p><p>完成后会显示的宝塔后台地址/账号/密码，复制出来一会要用</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>我这里有个随机端口 <code>36663</code></p></div><p><img src="'+h+'" alt=""></p><p>服务器控制台-防火墙-添加规则-TCP协议-端口输入你的随机端口</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>由于新版都是 <code>随机端口</code> ，要按需放行，后台地址显示端口是那个，就放行那个</p></div><p><img src="'+u+'" alt=""></p><h2 id="_2-登录宝塔" tabindex="-1"><a class="header-anchor" href="#_2-登录宝塔" aria-hidden="true">#</a> 2.登录宝塔</h2><p>复制后台地址打开，打不开端口没有放行，账密就是 <code>username</code> <code>password</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>比如我的：https://192.168.0.1:36663/e223387d</p></div><p><img src="'+v+'" alt=""></p><p>登录先改账密，面板设置-面板用户和密码，改完保存生效</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>安全入口也可以一起改</p></div><p><img src="'+b+`" alt=""></p><h2 id="_3-安装lnmp套件" tabindex="-1"><a class="header-anchor" href="#_3-安装lnmp套件" aria-hidden="true">#</a> 3.安装LNMP套件</h2><p>登录注册好的宝塔账号，一般都会弹，就按默认推荐的即可，都够用了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如遇到添加站点的时候报错，卸载重新安装</p><p>大部分的环境安装都可以在软件商店找到</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>L - 指的是Linux系统
N - 指的是Nginx代理服务器，建站必装
M - 指的是MySQL数据库，动态网站必装
P - 指的是PHP脚本语言

phpMyAdmin - 数据库管理软件，导入导出
Pure-Ftpd - ftp服务器软件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+_+`" alt=""></p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-如何找回宝塔账号密码" tabindex="-1"><a class="header-anchor" href="#_1-如何找回宝塔账号密码" aria-hidden="true">#</a> 1.如何找回宝塔账号密码</h4><p>一个 <code>bt</code> 命令即可更改所有，按数字查看修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+'" alt=""></p><h4 id="_2-无法正常使用删除键" tabindex="-1"><a class="header-anchor" href="#_2-无法正常使用删除键" aria-hidden="true">#</a> 2.无法正常使用删除键</h4><p>更改键盘序列即可</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>按Backspace键，显示的是 <code>^H</code></p><p>按Del键，显示的是 <code>^[[3~</code></p></div><p><img src="'+x+'" alt=""></p><p>选择服务器-右键属性-终端-键盘,都选择成ASCII ，当然最后一个也可以，ASCII 常用</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>记得断开了，重连才生效</p></div><p><img src="'+f+`" alt=""></p><h4 id="_3-堡塔app扫码连接超时" tabindex="-1"><a class="header-anchor" href="#_3-堡塔app扫码连接超时" aria-hidden="true">#</a> 3.堡塔app扫码连接超时</h4><p>进入宝塔面板-设置-关闭面板SSL即可；如需使用SSL，APP绑定好了再重新开启就行了</p><h4 id="_4-更新系统及软件" tabindex="-1"><a class="header-anchor" href="#_4-更新系统及软件" aria-hidden="true">#</a> 4.更新系统及软件</h4><p>如无必要，不要轻易更新</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+w+'" alt=""></p><p>提示Is this ok ，输入 <strong>y</strong> ，回车确定，耐心等待完成</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>完成后Complete，自动返回根目录</p></div><p><img src="'+k+`" alt=""></p><h4 id="_5-使用pm2启动服务器的时候报错-bin-sh-line-9-pm2-command-not-found" tabindex="-1"><a class="header-anchor" href="#_5-使用pm2启动服务器的时候报错-bin-sh-line-9-pm2-command-not-found" aria-hidden="true">#</a> 5.使用PM2启动服务器的时候报错/bin/sh: line 9: pm2:command not found</h4><p>这个和宝塔无关，应该是修改了应用变量无保存成功，进不去了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1.将环境变量改回正确的路径</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/bin:/usr/sbin:/bin:/sbin:/usr/X11R6/bin

<span class="token comment">#2.修改环境变量</span>
<span class="token function">vim</span> ~/.bash_profile

<span class="token comment">#3.生效环境变量</span>
<span class="token builtin class-name">source</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实输入第1个的命令就可以了，第2个命令可再次进入设置环境变量界面，增减了命令 <code>esc</code> + <code>:wq</code> 保存，再用第3个命令使其生效</p><h4 id="_6-宝塔如何网站迁移" tabindex="-1"><a class="header-anchor" href="#_6-宝塔如何网站迁移" aria-hidden="true">#</a> 6.宝塔如何网站迁移</h4><p>软件商店搜：<code>宝塔一键迁移</code> ，按步骤走就可以了，非常简单</p><p>确保两个服务器都装了宝塔，在面板打开了API按钮</p><p>完成后别忘了修改成新的域名解析</p><h4 id="_7-如何卸载宝塔面板" tabindex="-1"><a class="header-anchor" href="#_7-如何卸载宝塔面板" aria-hidden="true">#</a> 7.如何卸载宝塔面板</h4><p>先下载宝塔的卸载程序，在执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#下载卸载程序</span>
<span class="token function">wget</span> http://download.bt.cn/install/bt-uninstall.sh

<span class="token comment">#执行卸载</span>
<span class="token function">sh</span> bt-uninstall.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60);function y(N,A){const a=t("ExternalLinkIcon");return c(),d("div",null,[T,P,e("p",null,[s("宝塔官网："),e("a",L,[s("https://www.bt.cn/"),n(a)])]),e("p",null,[s("宝塔国际版："),e("a",S,[s("https://www.aapanel.com/new/index.html"),n(a)])]),I])}const M=i(B,[["render",y],["__file","index.html.vue"]]);export{M as default};
