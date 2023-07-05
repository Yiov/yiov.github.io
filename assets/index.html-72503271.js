import{_ as t,r as l,o as r,c as o,a as s,d as a,w as i,b as e,e as c}from"./app-39495bd1.js";const p="/assets/ss5-1-3e548cdd.png",u="/assets/ss5-cd9437d2.png",h="/assets/ss5-2-72db9de4.png",m="/assets/ss5-3-a8564159.png",v="/assets/ss5-4-d4cac6c0.png",b="/assets/ss5-5-ce81b52c.png",g="/assets/ss5-6-70fe70fb.png",_="/assets/ss5-7-8b08f1d1.png",f="/assets/ss5-8-844ec546.png",k="/assets/ss5-9-2fef496d.png",x="/assets/ss5-10-05f5307f.png",w="/assets/ss5-11-e7b6bf8b.png",E={},S=c('<h1 id="socks5的搭建" tabindex="-1"><a class="header-anchor" href="#socks5的搭建" aria-hidden="true">#</a> Socks5的搭建</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2022-1-25</p></div><p>要问有什么用，用不上也就不会看了</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>',4),q=c(`<h2 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖" aria-hidden="true">#</a> 1.安装依赖</h2><p>Xshell登录服务器，输入下面命令安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc <span class="token function">make</span> automake pam-devel openldap-devel openssl-devel cyrus-sasl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+p+'" alt=""></p><h2 id="_2-下载安装包" tabindex="-1"><a class="header-anchor" href="#_2-下载安装包" aria-hidden="true">#</a> 2.下载安装包</h2>',5),C={href:"http://ss5.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"},z={href:"http://sourceforge.net/projects/ss5/files/",target:"_blank",rel:"noopener noreferrer"},y=c('<div class="custom-container tip"><p class="custom-container-title">说明</p><p>不用下载到本地，把下载链接复制一下，我们直接wget到服务器</p></div><p><img src="'+u+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://downloads.sourceforge.net/project/ss5/ss5/3.8.9-8/ss5-3.8.9-8.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><details class="custom-container details"><summary>点击查看 其他下载链接</summary><p>另一个日本大学的包也可以用，选一个即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://jaist.dl.sourceforge.net/project/ss5/ss5/3.8.9-8/ss5-3.8.9-8.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="_3-解压" tabindex="-1"><a class="header-anchor" href="#_3-解压" aria-hidden="true">#</a> 3.解压</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> ss5-3.8.9-8.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">tar注解</p><p><code>-x</code> 解压指令；</p><p><code>-z</code> 解压/压缩gzip；</p><p><code>-v</code> 过程显示文件；</p><p><code>-f</code> 使用文档名</p></div><p><img src="`+m+`" alt=""></p><h2 id="_4-编译及安装" tabindex="-1"><a class="header-anchor" href="#_4-编译及安装" aria-hidden="true">#</a> 4.编译及安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ss5-3.8.9
./configure <span class="token operator">&amp;&amp;</span> <span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt=""></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>前面步骤不对，这里就会报错</p><p>configure会检测当前环境是否满足依赖关系，自动生成makefile，否则会报错</p></div><h2 id="_5-配置用户" tabindex="-1"><a class="header-anchor" href="#_5-配置用户" aria-hidden="true">#</a> 5.配置用户</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/opt/ss5/ss5.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+b+`" alt=""></p><h3 id="_5-1不设置密码" tabindex="-1"><a class="header-anchor" href="#_5-1不设置密码" aria-hidden="true">#</a> 5.1不设置密码</h3><p>在line 87用<code>DEL键</code>删掉注释#号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>auth <span class="token number">0.0</span>.0.0/0 - -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+`" alt=""></p><p>在line 203用<code>DEL键</code>删掉注释#号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>permit - <span class="token number">0.0</span>.0.0/0 - <span class="token number">0.0</span>.0.0/0 - - - - -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+_+`" alt=""></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>修改好后，<code>ESC键</code>，然后<code>:wq</code>+<code>回车键</code>保存并退出</p><p>不保存并退出为<code>ESC键</code>，然后<code>:q!</code>+<code>回车键</code></p></div><h3 id="_5-2-设置密码" tabindex="-1"><a class="header-anchor" href="#_5-2-设置密码" aria-hidden="true">#</a> 5.2 设置密码</h3><p>一样在87行和203行，就是加了个 <code>u</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>auth <span class="token number">0.0</span>.0.0/0 - u
permit u <span class="token number">0.0</span>.0.0/0 - <span class="token number">0.0</span>.0.0/0 - - - - -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/opt/ss5/ss5.passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+f+`" alt=""></p><p>用户名和密码中间用空格隔开,一行一个账密</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user1 password1
user2 password2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-设置端口" tabindex="-1"><a class="header-anchor" href="#_6-设置端口" aria-hidden="true">#</a> 6.设置端口</h2><p>默认端口是1080，<code>强烈建议修改</code>，不然会被扫，比如10080或者10800之类的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysconfig/ss5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><p>把第2行的 <code>#</code> 号删掉，然后改成下面的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">SS5_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-u root -b 0.0.0.0:1080&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改好后，<code>ESC键</code>，然后<code>:wq</code>+<code>回车键</code>保存</p><p>不保存为<code>ESC键</code>，然后<code>:q!</code>+<code>回车键</code></p><p>放行端口</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>服务器还需要，在安全组/防火墙放行端口</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">1080</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+x+`" alt=""></p><h2 id="_7-开启访问权限" tabindex="-1"><a class="header-anchor" href="#_7-开启访问权限" aria-hidden="true">#</a> 7.开启访问权限</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> a+x /etc/init.d/ss5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+w+`" alt=""></p><p>不开权限启动会报错</p><blockquote><p>env: /etc/init.d/ss5: Permission denied</p></blockquote><div class="custom-container tip"><p class="custom-container-title">chmod注释</p><p><code>a</code> 为所有人；</p><p><code>x</code> 为execute 执行权限；</p><p><code>r</code> 为read 读权限；</p><p><code>w</code> 为write 写权限</p></div><h2 id="_8-启动socks5" tabindex="-1"><a class="header-anchor" href="#_8-启动socks5" aria-hidden="true">#</a> 8.启动socks5</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> ss5 start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在就搭建完毕，可以使用了，使用方法就不用说了吧</p><p>一般无密码方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>socks5://ip:端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一般有密码方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>socks5://账号:密码@ip:端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="其他常用命令" tabindex="-1"><a class="header-anchor" href="#其他常用命令" aria-hidden="true">#</a> 其他常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> ss5 stop <span class="token comment"># 停止</span>

<span class="token function">service</span> ss5 status <span class="token comment"># 查看状态</span>

<span class="token function">service</span> ss5 restart <span class="token comment"># 重启</span>

<span class="token comment"># 开机自启 自行选择</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> ss5

<span class="token function">chkconfig</span> ss5 on

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>`,60),L={href:"http://ss5.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"};function j(B,N){const n=l("RouterLink"),d=l("ExternalLinkIcon");return r(),o("div",null,[S,s("ul",null,[s("li",null,[s("p",null,[a(n,{to:"/website/ECS/"},{default:i(()=>[e("服务器1台")]),_:1})])]),s("li",null,[s("p",null,[a(n,{to:"/website/ECS/#%E5%9F%9F%E5%90%8D"},{default:i(()=>[e("域名1个")]),_:1})])]),s("li",null,[s("p",null,[a(n,{to:"/website/Xshell/"},{default:i(()=>[e("安装Xshell工具")]),_:1})])]),s("li",null,[s("p",null,[a(n,{to:"/website/BT/"},{default:i(()=>[e("安装宝塔面板")]),_:1})])])]),q,s("p",null,[e("进入"),s("a",C,[e("Socks5官网"),a(d)]),e(" 获取下载链接")]),s("p",null,[e("下载地址："),s("a",z,[e("http://sourceforge.net/projects/ss5/files/"),a(d)])]),y,s("ul",null,[s("li",null,[s("a",L,[e("Socks5官网"),a(d)])])])])}const D=t(E,[["render",j],["__file","index.html.vue"]]);export{D as default};
