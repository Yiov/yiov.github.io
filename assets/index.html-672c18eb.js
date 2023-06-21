import{_ as a,r as t,o as n,c as i,a as e,b as d,d as r,e as c}from"./app-69baa154.js";const p="/assets/Centos-01-0cb6f0ec.png",l="/assets/Centos-02-661e226e.png",o="/assets/Centos-03-8eb259d3.png",h="/assets/Centos-04-313c7ded.png",u="/assets/Centos-05-cf9a3132.png",m="/assets/Centos-06-be8af1eb.png",g="/assets/Centos-07-cc4a5534.png",v="/assets/Centos-08-184e7530.png",b="/assets/Centos-09-b5f31707.png",_="/assets/Centos-10-139f9d06.png",f="/assets/Centos-11-f6d50ee8.png",x="/assets/Centos-12-7a816dd1.png",C="/assets/Centos-13-828677b0.png",y="/assets/Centos-14-48aa7dee.png",k="/assets/Centos-15-b3a44ffd.png",N="/assets/Centos-16-e56c05ec.png",w={},V=c('<h1 id="centos切换到图形界面" tabindex="-1"><a class="header-anchor" href="#centos切换到图形界面" aria-hidden="true">#</a> Centos切换到图形界面</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2022-9-8</p></div><p>远程centos需要借助VNC、xrdp等工具</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>注意：不可直接使用Xshell等工具！！！</p></div><h2 id="演示环境" tabindex="-1"><a class="header-anchor" href="#演示环境" aria-hidden="true">#</a> 演示环境</h2><ul><li><p>腾讯云服务器</p></li><li><p>Centos 7.6</p></li></ul><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2><p>我用的腾讯云，自带VNC登录，其他的云服务器请自测</p><p>控制台-云产品-云服务器-登录</p><p><img src="'+p+'" alt=""></p><p>选择下方的 <code>VNC登录</code></p><p><img src="'+l+'" alt=""></p><p>进入命令行界面，我们输入账号密码登录</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>账号默认为root，密码自己设置的服务器密码</p></div><p><img src="'+o+'" alt=""></p><p><img src="'+h+`" alt=""></p><p>安装 X window 控制</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p><code>-y</code> 表示一直同意，省去手动输入</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum groupinstall <span class="token string">&quot;X Window System&quot;</span> <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为VNC登录不能粘贴，我们点击上面，在输入框里输入，确定，回车，直到安装完成</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>后面的命令也这样粘贴</p></div><p><img src="`+u+`" alt=""></p><p>安装 GNOME 图形界面，时间非常长，耐心等到安装完成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum groupinstall <span class="token parameter variable">-y</span> <span class="token string">&quot;GNOME Desktop&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启图形界面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>init <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+'" alt=""></p><p>设置下语言 <code>汉语</code></p><p><img src="'+g+'" alt=""></p><p><img src="'+v+'" alt=""></p><p>隐私默认，位置也默认是上海</p><p><img src="'+b+'" alt=""></p><p><img src="'+_+'" alt=""></p><p>在线账号跳过</p><p><img src="'+f+'" alt=""></p><p>设置下登录的账号和密码，登录用的</p><p><img src="'+x+'" alt=""></p><p><img src="'+C+'" alt=""></p><p>设置成功，进入桌面</p><p><img src="'+y+'" alt=""></p><p><img src="'+k+`" alt=""></p><h2 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h2><p>了解就行了，不需要输入</p><h3 id="_1-开机启动模式" tabindex="-1"><a class="header-anchor" href="#_1-开机启动模式" aria-hidden="true">#</a> 1.开机启动模式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl get-default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开机时启动图形化界面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl set-default graphical.target 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开机时启动dos界面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl set-default multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-防火墙" tabindex="-1"><a class="header-anchor" href="#_2-防火墙" aria-hidden="true">#</a> 2.防火墙</h3><p>防火墙状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启防火墙</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关闭防火墙</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启防火墙</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-如何使用浏览器" tabindex="-1"><a class="header-anchor" href="#_1-如何使用浏览器" aria-hidden="true">#</a> 1.如何使用浏览器</h4><p>右上角-应用程序-Firefox</p><p><img src="`+N+'" alt=""></p><h4 id="_2-如何退出图形界面" tabindex="-1"><a class="header-anchor" href="#_2-如何退出图形界面" aria-hidden="true">#</a> 2.如何退出图形界面</h4><p>按键盘 <code>Ctrl+Alt+F2</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>图形界面一共是6个,F1-F6</p><p>默认是F1，输入F2是为了切换图形界面</p></div><h4 id="_3-如何重新进入界面" tabindex="-1"><a class="header-anchor" href="#_3-如何重新进入界面" aria-hidden="true">#</a> 3.如何重新进入界面</h4><p>我们先重新登录root账号，再输入<code>init 3</code>，再输入<code>init 5</code>即可</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>init 3 是命令界面</p><p>init 5是图形界面</p></div><h4 id="_4-登录界面提示的-tty1-是什么" tabindex="-1"><a class="header-anchor" href="#_4-登录界面提示的-tty1-是什么" aria-hidden="true">#</a> 4.登录界面提示的 <code>tty1</code> 是什么</h4><p>这是表示图形界面1，默认是tty1-tty6，我们退出图形界面就是用个切换的</p><h4 id="_5-我网络上搜都是-startx-进入" tabindex="-1"><a class="header-anchor" href="#_5-我网络上搜都是-startx-进入" aria-hidden="true">#</a> 5.我网络上搜都是 <code>startx</code> 进入</h4><p>进是可以进，但是界面还是有不同的，主要是我也不知道这个界面怎么退</p><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>',73),F={href:"https://cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"};function E(q,B){const s=t("ExternalLinkIcon");return n(),i("div",null,[V,e("ul",null,[e("li",null,[e("a",F,[d("腾讯云"),r(s)])])])])}const G=a(w,[["render",E],["__file","index.html.vue"]]);export{G as default};
