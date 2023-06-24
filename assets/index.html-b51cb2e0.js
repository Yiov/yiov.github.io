import{_ as d,r as i,o as c,c as r,a as e,b as s,d as a,w as p,e as n}from"./app-978c3e53.js";const l="/assets/todesk-01-f0639801.png",h="/assets/todesk-02-9e62c8e7.png",m="/assets/todesk-03-8b975f53.png",u="/assets/todesk-04-228db2b9.png",_="/assets/todesk-05-c0d5a4c9.png",g="/assets/todesk-06-31c8bd46.png",v="/assets/todesk-07-630e7dd1.png",x="/assets/todesk-08-45ef8801.png",b="/assets/todesk-09-fd01b123.png",k="/assets/todesk-10-6ae795da.png",f="/assets/todesk-11-13fc9995.png",w="/assets/todesk-12-cf669938.png",B="/assets/todesk-13-f638abde.png",E="/assets/todesk-14-aaa65d27.png",C="/assets/todesk-15-ba374392.png",A="/assets/todesk-16-e04be59f.png",L="/assets/todesk-17-6be8befd.png",T="/assets/todesk-18-a220ce5f.png",I="/assets/todesk-19-da42a3a9.png",O="/assets/todesk-20-217a42b3.png",P="/assets/todesk-21-4fb8526b.png",S="/assets/todesk-22-1957abda.png",W="/assets/todesk-23-8cd1a185.png",y="/assets/todesk-24-667c0d4b.png",F="/assets/todesk-25-e737ad8c.png",N="/assets/todesk-26-b81d4971.png",V={},R=n('<h1 id="todesk远程开关电脑" tabindex="-1"><a class="header-anchor" href="#todesk远程开关电脑" aria-hidden="true">#</a> Todesk远程开关电脑</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2021-10-18</p></div><p>远程软件老牌软件就是TeamViewer了，还有向日葵</p><p>不是说这些软件不好（以免遭黑），个人体验下来，Todesk稳定不掉线，流畅度上都很不错</p><ul><li><p><a href="#%E6%89%8B%E6%9C%BA%E8%BF%9C%E7%A8%8B%E5%85%B3%E6%9C%BA">手机远程关机</a></p></li><li><p><a href="#%E6%89%8B%E6%9C%BA%E8%BF%9C%E7%A8%8B%E5%BC%80%E6%9C%BA">手机远程开机</a></p></li><li><p><a href="#linux%E5%AE%89%E8%A3%85tosesk%E5%B9%B6%E8%BF%9C%E7%A8%8B">Linux安装Tosesk并远程</a></p></li></ul><h2 id="手机远程关机" tabindex="-1"><a class="header-anchor" href="#手机远程关机" aria-hidden="true">#</a> 手机远程关机</h2><p>首先PC端，安装Tosesk</p>',7),D={href:"https://www.todesk.com/",target:"_blank",rel:"noopener noreferrer"},M=n('<p><img src="'+l+'" alt=""></p><p>支持电脑、手机甚至支持linux</p><p><img src="'+h+'" alt=""></p><p>安装、注册好账号，并登录</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>登录密码修改，好像只有在网页端可以改</p></div><p><img src="'+m+'" alt=""></p><p>手机端在应用商店安装好todesk，并登录<code>同样的账号</code></p><p>填入<code>远程设备代码</code> 点击远程控制，填入<code>临时密码</code>即可远程桌面</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>想要固定的临时密码，在高级设置-安全设置-临时密码更新，改成手动即可</p></div><p><img src="'+u+'" alt=""></p><p>远程成功后，就可以操作电脑了，单击、双击命令说明里面也有</p><p><img src="'+_+'" alt=""></p><h2 id="手机远程开机" tabindex="-1"><a class="header-anchor" href="#手机远程开机" aria-hidden="true">#</a> 手机远程开机</h2><div class="custom-container warning"><p class="custom-container-title">个人建议</p><p>如无必要，不建议折腾，买个智能插座就可以了</p></div><p>硬性条件：需要有同一局域网的设备(电脑或手机)</p><div class="custom-container tip"><p class="custom-container-title">Todesk远程唤醒</p><p>流程：A手机(外地) → 远程B安卓机(室内wifi) → 远程开机电脑(室内wifi)</p><p>A手机 → 远程电脑</p><p>苹果无法被远程控制，被控制手机只能是安卓</p></div><p>就是这么的复杂，基本上可以劝退大部分人了</p><h3 id="_1-a手机的设置" tabindex="-1"><a class="header-anchor" href="#_1-a手机的设置" aria-hidden="true">#</a> 1.A手机的设置</h3><p>建立一次电脑连接后</p><p>在我的-设置-打开 <code>Wake 0n Lan</code> 开关</p><p><img src="'+g+'" alt=""></p><h3 id="_2-b手机的设置" tabindex="-1"><a class="header-anchor" href="#_2-b手机的设置" aria-hidden="true">#</a> 2.B手机的设置</h3><p>登录同一账号，开启<code>允许远程本设备</code>- 控制模式 - 开启所有开关-开启被控模式</p><p><img src="'+v+'" alt=""></p><p>在我的-设置-打开 <code>Wake 0n Lan</code> 开关</p><p><img src="'+x+'" alt=""></p><p>然后A手机连接一次B手机，是否能正常连接，确认可以后断开</p><h3 id="_3-电脑设置" tabindex="-1"><a class="header-anchor" href="#_3-电脑设置" aria-hidden="true">#</a> 3.电脑设置</h3>',28),U={href:"https://www.todesk.com/helpcenter/questions-86.html",target:"_blank",rel:"noopener noreferrer"},q=n('<h4 id="_3-1-网卡设置" tabindex="-1"><a class="header-anchor" href="#_3-1-网卡设置" aria-hidden="true">#</a> 3.1 网卡设置</h4><p>我的电脑-右键-属性-设备管理器</p><p><img src="'+b+'" alt=""></p><p>网络适配器，找到网卡-右键-属性，我这里是 <code>Realtek...Controller</code></p><p><img src="'+k+'" alt=""></p><p>电源管理 选项卡里面开启 <code>允许此设备唤醒计算机</code></p><p><img src="'+f+'" alt=""></p><p>然后在 高级 选项卡里找到<code>wake on magic packet</code>、<code>关机网络唤醒</code>、<code>魔术封包唤醒</code>里设置成 <code>开启</code></p><p><code>网络唤醒和关机连接速度</code>，改成 100Mbps 优先，确定！一定要点确定生效！</p><p><img src="'+w+`" alt=""></p><h4 id="_3-2-设置主板bios" tabindex="-1"><a class="header-anchor" href="#_3-2-设置主板bios" aria-hidden="true">#</a> 3.2 设置主板BIOS</h4><p>需要在主板 BIOS 里面设置 WOL 唤醒功能的开关</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不同主板 BIOS 里关于 WOL 网络唤醒的选项一般是类似这些字眼:
wake on lan；
resume on lan；
power on PME；
power on by PCI-E device;
Power on by Onboard LAN
等等，将其设为 Enabled 即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以我的 <code>微星msi主板</code> 演示，只是演示！其他根据自己的主板来！</p><p>重启按<code>DEL</code>键进入BIOS，SETTINGS-Advanced</p><p><img src="`+B+'" alt=""></p><p>再进入 Wake Up Event Setup</p><p><img src="'+E+'" alt=""></p><p>将 Resume By PCI-E Device 改成 <code>Enabled</code>，按 <code>F10</code> 保存并推出</p><p><img src="'+C+'" alt=""></p><h4 id="_3-3-路由器进行arp绑定" tabindex="-1"><a class="header-anchor" href="#_3-3-路由器进行arp绑定" aria-hidden="true">#</a> 3.3 路由器进行ARP绑定</h4><p>我是斐讯路由器，浏览器<code>192.168.2.1</code>进入路由器</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>其他路由大部分可能是<code>192.168.1.1</code></p></div><p>功能设置-DCHP服务-绑定，这样即便重启了地址也不会变</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>其他路由器自己找下，只要把MAC地址和IP绑定即可</p></div><p><img src="'+A+'" alt=""></p><h3 id="_4-开机" tabindex="-1"><a class="header-anchor" href="#_4-开机" aria-hidden="true">#</a> 4.开机</h3><p>所有设置都完成了，我们关掉电脑。A手机用数据打开Tosesk-设备列表-远程B安卓手机，安卓机也打开Tosesk-设备列表-远程开机电脑</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>B手机要和电脑在同一WIFI下哦</p></div><p><img src="'+L+'" alt=""></p><p>电脑已进入开机界面，完结</p><p><img src="'+T+'" alt=""></p><h2 id="linux安装tosesk并远程" tabindex="-1"><a class="header-anchor" href="#linux安装tosesk并远程" aria-hidden="true">#</a> Linux安装Tosesk并远程</h2><p>由于系统原因，需要有图形界面的系统才可安装，我这里以Centos为例</p>',34),G=n('<p>我们进入Centos后，打开todesk官网下载Linux版本</p><p><img src="'+I+'" alt=""></p><p>我这里用的是Centos，下载Centos7即可</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>其他版本按自己的系统下载</p></div><p><img src="'+O+'" alt=""></p><p>下载后我们把下载的文件，放到 <code>主目录</code> 才可以正确安装！否则会提示找不到文件！</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>找不到的看我图示，就是和公共、视频、图片等同一级目录</p></div><p><img src="'+P+'" alt=""></p>',8),H={href:"https://www.todesk.com/linux.html",target:"_blank",rel:"noopener noreferrer"},j=n('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>请把这里安装包名改对，不然也安装不了</p><p>自己下的包名是什么，这里就填什么，少一个字都不行!</p></div><p><img src="'+S+`" alt=""></p><p>在桌面-鼠标右键-打开终端，输入命令，等待安装完成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装，注意自己的包名是否一致</span>
<span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> todesk-v4.3.1.0-c7-x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+W+'" alt=""></p><p><img src="'+y+`" alt=""></p><p>然后启动todesk，安装好登录账号就可以用了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#启动命令</span>
todesk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+F+'" alt=""></p><p><img src="'+N+`" alt=""></p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-如不能正常使用" tabindex="-1"><a class="header-anchor" href="#_1-如不能正常使用" aria-hidden="true">#</a> 1.如不能正常使用</h4><p>请执行以下命令初始化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl stop todeskd.service
sudo mv /opt/todesk/config/config.ini /opt/todesk/config/config.ini.bak
sudo systemctl start todeskd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-错误日志" tabindex="-1"><a class="header-anchor" href="#_2-错误日志" aria-hidden="true">#</a> 2.错误日志</h4><p>查看服务日志：（例如:xxxx_xx_xx.log为2022_08_03.log）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tail -f /var/log/todesk/service_xxxx_xx_xx.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看客户端日志：（例如:xxxx_xx_xx.log为2022_08_03.log）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tail -f ~/.local/share/todesk/Logs/client_xxxx_xx_xx.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-删除服务设置配置" tabindex="-1"><a class="header-anchor" href="#_3-删除服务设置配置" aria-hidden="true">#</a> 3.删除服务设置配置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo rm /opt/todesk/config/config.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-卸载" tabindex="-1"><a class="header-anchor" href="#_4-卸载" aria-hidden="true">#</a> 4.卸载:</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -e todesk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>`,24),z={href:"https://www.todesk.com/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.teamviewer.cn/cn/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://sunlogin.oray.com/",target:"_blank",rel:"noopener noreferrer"};function Q(X,Y){const t=i("ExternalLinkIcon"),o=i("RouterLink");return c(),r("div",null,[R,e("p",null,[s("官网："),e("a",D,[s("https://www.todesk.com/"),a(t)])]),M,e("p",null,[s("请保持B手机和电脑在同一WIFI下，"),e("a",U,[s("详情请参考Todesk文档：远程开机如何配置 Wake On Lan"),a(t)])]),q,e("p",null,[a(o,{to:"/website/Centos/"},{default:p(()=>[s("不会切换图形界面的☛点我教程：centos系统切换图形界面")]),_:1})]),G,e("p",null,[s("然后我们看 "),e("a",H,[s("官方文档"),a(t)]),s(" ，输入安装命令")]),j,e("ul",null,[e("li",null,[e("p",null,[e("a",z,[s("ToDesk"),a(t)])])]),e("li",null,[e("p",null,[e("a",J,[s("TeamViewer"),a(t)])])]),e("li",null,[e("p",null,[e("a",K,[s("向日葵"),a(t)])])])])])}const $=d(V,[["render",Q],["__file","index.html.vue"]]);export{$ as default};
