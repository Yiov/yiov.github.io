import{_ as i,r,o as c,c as p,a as t,b as e,d as n,w as u,e as o}from"./app-fd996406.js";const d="/assets/quantumultX-274c7674.png",h="/assets/quantumultX-1-ae3faebd.png",m="/assets/IKUUU-11b4ebfb.png",_="/assets/IKUUU-1-70ed4c99.png",g="/assets/quantumultX-2-6d84199a.png",f="/assets/quantumultX-3-612b1d94.png",b="/assets/quantumultX-4-630bf405.png",X="/assets/quantumultX-5-8ab9c8e2.png",v="/assets/quantumultX-6-433eeaf4.png",x="/assets/quantumultX-7-fea64415.png",k="/assets/quantumultX-8-447e9768.png",y="/assets/quantumultX-9-d521a589.png",w="/assets/quantumultX-10-7213e24b.png",Q="/assets/rule-1-344392fe.png",q="/assets/rule-2-c40c5b5b.png",O="/assets/quantumultX-11-e4b5f7dd.png",P="/assets/quantumultX-12-c1268d18.png",z="/assets/quantumultX-13-baca8e7a.png",D="/assets/quantumultX-14-e8953bb1.png",E="/assets/quantumultX-15-6d2b4500.png",A="/assets/quantumultX-16-0bdb6727.png",j="/assets/quantumultX-17-a2fbb247.png",I="/assets/quantumultX-18-98360930.png",K="/assets/quantumultX-19-956fa203.png",R="/assets/quantumultX-20-456cb81f.png",S="/assets/quantumultX-21-ba449113.png",C="/assets/quantumultX-22-e10a2805.png",N="/assets/quantumultX-23-c8ec521a.png",U="/assets/quantumultX-24-f273003a.png",G="/assets/quantumultX-25-39ac50c0.png",T="/assets/quantumultX-26-91a39e0f.png",F="/assets/quantumultX-27-15ec02be.png",M="/assets/quantumultX-28-19b80307.png",B="/assets/quantumultX-29-693f6018.png",L="/assets/quantumultX-30-571f81b1.png",V="/assets/quantumultX-31-65db6011.png",J="/assets/quantumultX-32-ca89ef22.png",Y="/assets/quantumultX-33-fa491bef.png",H="/assets/quantumultX-34-f9d3b2af.png",W="/assets/quantumultX-35-f7d3f1de.png",Z="/assets/quantumultX-36-c4e0136d.png",a="/assets/quantumultX-37-03b4483e.png",$={},tt=t("h1",{id:"圈x上手教程",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#圈x上手教程","aria-hidden":"true"},"#"),e(" 圈X上手教程")],-1),et=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"更新时间"),t("p",null,"最近更新：2022-1-25")],-1),nt={href:"https://www.notion.so/Quantumult-X-1d32ddc6e61c4892ad2ec5ea47f00917",target:"_blank",rel:"noopener noreferrer"},st=o('<div class="custom-container tip"><p class="custom-container-title">说明</p><p>注：日区苹果ID的圈X，买兑换码只要6RMB</p></div><p><img src="'+d+'" alt=""></p><h2 id="_1-主界面说明" tabindex="-1"><a class="header-anchor" href="#_1-主界面说明" aria-hidden="true">#</a> 1.主界面说明</h2><p>主界面如下图都一一注明了，基本操作都是点按/长按/左滑/右滑动</p><p><img src="'+h+'" alt=""></p><h2 id="_2-连通圈x" tabindex="-1"><a class="header-anchor" href="#_2-连通圈x" aria-hidden="true">#</a> 2.连通圈X</h2><p>圈X的使用全程需要扶梯子，就顺道演示下如何用机场翻墙</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>主要用于普及订阅知识，机场仅供参考，后续有条件换好点的</p></div><p>免费机场：iKUUU，注册就有50G</p>',9),ot={href:"https://ikuuu.eu/",target:"_blank",rel:"noopener noreferrer"},rt=t("p",null,[t("img",{src:m,alt:""})],-1),at=t("p",null,"下拉，找到V2Ray，点击会复制到剪切板",-1),lt=t("p",null,[t("img",{src:_,alt:""})],-1),it=t("p",null,"因为圈X不直接支持这种格式，我们用订阅转化一下",-1),ct={href:"https://dove.589669.xyz/web",target:"_blank",rel:"noopener noreferrer"},pt=o('<p><img src="'+g+'" alt=""></p><p>然后来到我们的圈X，点右下角风车-节点-引用（订阅）</p><p><img src="'+f+'" alt=""></p><p>标签随便，资源路径填我们 <code>刚转换的订阅链接</code> ，右上角保存即可</p><p><img src="'+b+'" alt=""></p><p>回到主界面，就能看到我们添加成功的节点了</p><h2 id="_3-资源解析器" tabindex="-1"><a class="header-anchor" href="#_3-资源解析器" aria-hidden="true">#</a> 3.资源解析器</h2><p>有了资源解析器的加持，以后都不会用到转换链接了，它会自动本地处理转换完成</p><p>随便选一个速度可以的节点，打开圈X开关，点风车-下拉到底部，配置文件-编辑</p><p><img src="'+X+`" alt=""></p><p>在 <code>[general]</code> 下面粘贴资源解析器代码，右上角保存</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>resource_parser_url<span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token constant">KOP</span><span class="token operator">-</span><span class="token constant">XIAO</span><span class="token operator">/</span>QuantumultX<span class="token operator">/</span>master<span class="token operator">/</span>Scripts<span class="token operator">/</span>resource<span class="token operator">-</span>parser<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),ut={class:"custom-container tip"},dt=t("p",{class:"custom-container-title"},"说明",-1),ht={href:"https://github.com/KOP-XIAO/QuantumultX/",target:"_blank",rel:"noopener noreferrer"},mt=o('<p><img src="'+v+'" alt=""></p><p>风车-节点-引用（订阅）-资源解析器的下方，有灰色介绍字体就说明成功了</p><p><img src="'+x+'" alt=""></p><p>只要是导入节点，都要开启开关，否则导入失败</p><h2 id="_4-节点" tabindex="-1"><a class="header-anchor" href="#_4-节点" aria-hidden="true">#</a> 4.节点</h2><p>Quantumult X共支持5种类型的格式：SS，SSR，VMess，HTTP(s)，Trojan</p><ul><li>一次添加一个节点，对应配置文件中的 <code>[server local]</code> 模块</li></ul><div class="custom-container tip"><p class="custom-container-title">说明</p><p>添加：只支持ss协议</p><p>URI：支持ss、ssr以及圈x格式的vmess/https/trojan的节点</p><p>扫码：支持ss、ssr以及圈x格式的vmess/https/trojan的节点二维码</p></div><ul><li>一次添加多个节点，对应配置文件中的 <code>[server remote]</code> 模块</li></ul><p><strong>引用（订阅）是最常用的，有资源解析器的加持，非常强大</strong></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>引用（订阅）：支持ss、ssr订阅，以及圈X格式的vmess/https/trojan的订阅</p></div><p><img src="'+k+'" alt=""></p><p>自己找好用的机场或者免费分享节点的tg群都可以，演示一遍，粘贴订阅链接-开启资源解析器-保存</p>',13),_t={class:"custom-container tip"},gt=t("p",{class:"custom-container-title"},"白嫖",-1),ft=o('<p><img src="'+y+'" alt=""></p><h2 id="_5-分流" tabindex="-1"><a class="header-anchor" href="#_5-分流" aria-hidden="true">#</a> 5.分流</h2><p>相对复杂的知识，涉及到分流规则和策略组</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>分流规则是为了访问不同的网页或App，自动走不同的节点；策略组是为了把节点进行归类</p><p>那么问题来了，这么多策略组，我要如何写又如何归类，反正我第一次看到这里头都大了，一度想放弃，那就和我一样直接看5.4小白配置吧</p></div><h3 id="_5-1分流规则" tabindex="-1"><a class="header-anchor" href="#_5-1分流规则" aria-hidden="true">#</a> 5.1分流规则</h3><ul><li>一次添加一个规则，对应配置文件中的 [<strong>filter_local</strong>] 模块</li></ul><blockquote><p>添加：不常用也不推荐</p></blockquote><ul><li>一次添加多个规则，对应配置文件中的 [<strong>filter_remote</strong>] 模块</li></ul><blockquote><p>引用（订阅）：灵活更细分，格式：*.list</p></blockquote><p><img src="'+w+'" alt=""></p><ul><li>神机规则（最强规则，其他配置也是按它的修改而来）</li></ul>',11),bt={href:"https://github.com/DivineEngine/Profiles/tree/master/Quantumult/Filter",target:"_blank",rel:"noopener noreferrer"},Xt=o('<p><img src="'+Q+'" alt=""></p><p><img src="'+q+'" alt=""></p><p>获取到list链接，粘贴到引用里即可</p><p><img src="'+O+`" alt=""></p><p>更多的规则，请自己挨个导入，另外在配置文件中可使用 force-policy 来强制使用策略偏好,如</p><blockquote><p>tag - 标签；force-policy - 强制指定策略组；enabled - 是否生效</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/Apple.list, tag=Apple服务, force-policy=🍎 苹果服务,enabled=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-2策略组" tabindex="-1"><a class="header-anchor" href="#_5-2策略组" aria-hidden="true">#</a> 5.2策略组</h3><p>策略组需要配合分流规则使用，可包含多个节点和策略组，对应配置文件中的 <code>[policy]</code> 模块</p><ul><li><p>Quantumult X自带3种策略：PROXY（代理）、DIRECT（直连）、REJECT（拒绝）</p></li><li><p>Quantumult X有策略类型：static、available、Round-Robin</p></li></ul><div class="custom-container tip"><p class="custom-container-title">说明</p><p>static 静态策略：需自己手动选择路线/子策略组</p><p>available 健康检查策略：从第一个节点开始检查是否可用，直到选择可用节点</p><p>Round-Robin 轮询策略：按网络请求轮流使用所有节点；</p></div><p>我们在神机规则中找一个策略组演示一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/Apple.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>风车-分流-引用，添加后主界面的节点变成了策略组的图标</p><p><img src="`+P+'" alt=""></p><p>长按这个策略组-编辑，进入组查看，根据需要添加，访问苹果走哪些节点</p><p><img src="'+z+`" alt=""></p><h3 id="_5-3策略组图标" tabindex="-1"><a class="header-anchor" href="#_5-3策略组图标" aria-hidden="true">#</a> 5.3策略组图标</h3><p>主要是美化作用，喜欢折腾的可以弄，否则无视</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>图片格式：*.PNG（透明背景）</p><p>图片尺寸：108*108像素</p><p>本地引用路径：我的iPhone/Quantumultx/Images</p><p>远程引用路径：iCloud/Qantumult X/Images，需要在记得去quantumultX其他设置中开启iCloud</p></div><p>图片在对应的策略组后写上图片链接，在 <code>[policy]</code> 模块添加，格式如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static=YouTube,  节点1, 节点2 , 策略组1 , 策略组2 , img-url= https://raw.githubusercontent.com/crossutility/Quantumult-X/master/icon-samples/youtube.PNG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="制作icon图标的网站" tabindex="-1"><a class="header-anchor" href="#制作icon图标的网站" aria-hidden="true">#</a> 制作icon图标的网站</h4>`,23),vt={href:"https://igoutu.cn/icons/set/youtube",target:"_blank",rel:"noopener noreferrer"},xt={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},kt=t("h4",{id:"收集一些好用的icon库",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#收集一些好用的icon库","aria-hidden":"true"},"#"),e(" 收集一些好用的icon库")],-1),yt={href:"https://github.com/Orz-3/mini",target:"_blank",rel:"noopener noreferrer"},wt={href:"https://github.com/Koolson/Qure",target:"_blank",rel:"noopener noreferrer"},Qt=t("h3",{id:"_5-4小白-懒人配置",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-4小白-懒人配置","aria-hidden":"true"},"#"),e(" 5.4小白/懒人配置")],-1),qt=t("p",null,"深度理解了分流规则和策略组就可以自己写规则了，反正我不会，我选择小白配置",-1),Ot=t("p",null,"删除之前添加的规则，跟我做，下面2个均可",-1),Pt=t("div",{class:"custom-container danger"},[t("p",{class:"custom-container-title"},"注意"),t("p",null,"注：使用小白/懒人配置会清空已保存的圈X所有设置，请提前备份")],-1),zt=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"配置"),t("th",{style:{"text-align":"left"}},"路径")])],-1),Dt={style:{"text-align":"center"}},Et={href:"https://github.com/Orz-3/QuantumultX",target:"_blank",rel:"noopener noreferrer"},At={style:{"text-align":"left"}},jt={href:"https://raw.githubusercontent.com/Orz-3/QuantumultX/master/Orz-3.conf",target:"_blank",rel:"noopener noreferrer"},It={style:{"text-align":"center"}},Kt={href:"https://github.com/Sonmbs/quantumult_X/",target:"_blank",rel:"noopener noreferrer"},Rt={style:{"text-align":"left"}},St={href:"https://raw.githubusercontent.com/Sonmbs/quantumult_X/main/coconut.conf",target:"_blank",rel:"noopener noreferrer"},Ct={style:{"text-align":"center"}},Nt={href:"https://github.com/w37fhy/QuantumultX",target:"_blank",rel:"noopener noreferrer"},Ut={style:{"text-align":"left"}},Gt={href:"https://raw.githubusercontent.com/w37fhy/QuantumultX/master/QuantumultX_diy.conf",target:"_blank",rel:"noopener noreferrer"},Tt={style:{"text-align":"center"}},Ft={href:"https://github.com/DivineEngine/Profiles/",target:"_blank",rel:"noopener noreferrer"},Mt={style:{"text-align":"left"}},Bt={href:"https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Outbound.conf",target:"_blank",rel:"noopener noreferrer"},Lt={style:{"text-align":"center"}},Vt={href:"https://github.com/DivineEngine/Profiles/",target:"_blank",rel:"noopener noreferrer"},Jt={style:{"text-align":"left"}},Yt={href:"https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Inbound.conf",target:"_blank",rel:"noopener noreferrer"},Ht={style:{"text-align":"center"}},Wt={href:"https://github.com/ddgksf2013/ddgksf2013",target:"_blank",rel:"noopener noreferrer"},Zt={style:{"text-align":"left"}},$t={href:"https://github.com/ddgksf2013/Profile/raw/master/QuantumultX.conf",target:"_blank",rel:"noopener noreferrer"},te={style:{"text-align":"center"}},ee={href:"https://github.com/KOP-XIAO/QuantumultX/",target:"_blank",rel:"noopener noreferrer"},ne={style:{"text-align":"left"}},se={href:"https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/QuantumultX_Profiles.conf",target:"_blank",rel:"noopener noreferrer"},oe={style:{"text-align":"center"}},re={href:"https://github.com/limbopro/Profiles4limbo/",target:"_blank",rel:"noopener noreferrer"},ae={style:{"text-align":"left"}},le={href:"https://raw.githubusercontent.com/limbopro/Profiles4limbo/main/full.conf",target:"_blank",rel:"noopener noreferrer"},ie={style:{"text-align":"center"}},ce={href:"https://github.com/GodMoli/QuanX",target:"_blank",rel:"noopener noreferrer"},pe={style:{"text-align":"left"}},ue={href:"https://raw.githubusercontent.com/GodMoli/QuanX/main/File/Auto.conf",target:"_blank",rel:"noopener noreferrer"},de={style:{"text-align":"center"}},he={href:"https://github.com/fmz200/wool_scripts/",target:"_blank",rel:"noopener noreferrer"},me={style:{"text-align":"left"}},_e={href:"https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/config/lanren.conf",target:"_blank",rel:"noopener noreferrer"},ge={style:{"text-align":"center"}},fe={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},be={style:{"text-align":"left"}},Xe={href:"https://raw.githubusercontent.com/erdongchanyo/Rules/main/Quantumult%20X/LazyConf/QuantumultX_EDC-Lazy.conf",target:"_blank",rel:"noopener noreferrer"},ve={style:{"text-align":"center"}},xe={href:"https://github.com/Tartarus2014/QuantumultX-Script/",target:"_blank",rel:"noopener noreferrer"},ke={style:{"text-align":"left"}},ye={href:"https://raw.githubusercontent.com/Tartarus2014/QuantumultX-Script/main/QuanX.conf",target:"_blank",rel:"noopener noreferrer"},we={style:{"text-align":"center"}},Qe={href:"https://github.com/GeQ1an/Rules/",target:"_blank",rel:"noopener noreferrer"},qe={style:{"text-align":"left"}},Oe={href:"https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/QuantumultX.conf",target:"_blank",rel:"noopener noreferrer"},Pe={style:{"text-align":"center"}},ze={href:"https://github.com/rules/QuantumultX/",target:"_blank",rel:"noopener noreferrer"},De={style:{"text-align":"left"}},Ee={href:"https://qxnav.com/rules/QuantumultX/qixin.conf",target:"_blank",rel:"noopener noreferrer"},Ae={style:{"text-align":"center"}},je={href:"https://github.com/zwf234/rules/",target:"_blank",rel:"noopener noreferrer"},Ie={style:{"text-align":"left"}},Ke={href:"https://raw.githubusercontent.com/zwf234/rules/master/QuantumultX/qixin.conf",target:"_blank",rel:"noopener noreferrer"},Re={style:{"text-align":"center"}},Se={href:"https://github.com/zwf234/rules/",target:"_blank",rel:"noopener noreferrer"},Ce={style:{"text-align":"left"}},Ne={href:"https://raw.githubusercontent.com/zwf234/rules/master/QuantumultX/overseas.conf",target:"_blank",rel:"noopener noreferrer"},Ue=o('<p>风车-配置文件-下载，粘贴链接保存</p><p><img src="'+D+'" alt=""></p><p>这里就替换了自己原先的配置文件了，主界面也清空了！</p><p>我们重新把订阅节点添加进来，好使用</p><p><img src="'+E+'" alt=""></p><p>打开重写和Mitm开关，重新安装证书，请看 <a href="#_6-1-%E5%AE%89%E8%A3%85%E8%AF%81%E4%B9%A6">6.1安装证书</a> 的操作</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如果之前安装过证书的，顺手删掉哈</p></div><p>安装完成后，我们导入订阅节点，打开圈X开关，全部更新</p><p><img src="'+A+'" alt=""></p><p>我们开启分流规则，就可以愉快的使用了</p><p><img src="'+j+'" alt=""></p><h2 id="_6-重写和mitm" tabindex="-1"><a class="header-anchor" href="#_6-重写和mitm" aria-hidden="true">#</a> 6.重写和Mitm</h2><ul><li><p>添加：本地重写，对应配置文件中的[<strong>rewrite_local</strong>]模块</p></li><li><p>引用：远程重写，对应配置文件中的[<strong>rewrite_remote</strong>]模块，格式*.conf</p></li></ul><p>这是很常用的功能了，去广告跑脚本这些</p><p><img src="'+I+'" alt=""></p><h3 id="_6-1-安装证书" tabindex="-1"><a class="header-anchor" href="#_6-1-安装证书" aria-hidden="true">#</a> 6.1 安装证书</h3><p>打开 <code>重写</code> 和 <code>MitM</code> 开关，并生成证书</p><p><img src="'+K+'" alt=""></p><p>然后点配置证书-跳转浏览器 允许</p><p><img src="'+R+'" alt=""></p><p>设置-通用-描述文件与设备管理，找到圈X-安装</p><p><img src="'+S+'" alt=""></p><p><img src="'+C+'" alt=""></p><p>设置-通用-关于本机-证书信任设置</p><p><img src="'+N+'" alt=""></p><p>到这里，就完成了证书的安装</p><h3 id="_6-2-去广告的演示" tabindex="-1"><a class="header-anchor" href="#_6-2-去广告的演示" aria-hidden="true">#</a> 6.2 去广告的演示</h3><p>其实小白/懒人配置里其实都已经集成了，我这里演示一下其他大佬的订阅怎么用</p>',28),Ge=t("code",null,"毒奶",-1),Te={href:"https://limbopro.com/",target:"_blank",rel:"noopener noreferrer"},Fe=o('<p>风车-配置文件 编辑，我们来这里粘贴</p><p><img src="'+U+`" alt=""></p><p>右上角跳转到 远程分流 <code>[filter_remote]</code> 添加，保存</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://limbopro.xyz/Adblock4limbo.list, tag=毒奶特供, force-policy=reject, enabled=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>右上角跳转到 远程重写 <code>[rewrite_remote]</code> 添加，保存</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://limbopro.xyz/Adblock4limbo.conf, tag=毒奶特供, enabled=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+G+'" alt=""></p><p>这样在重写界面，我们就能看到毒奶的脚本了</p><p><img src="'+T+'" alt=""></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>其他规则请参照脚本作者说明</p></div><h2 id="_7-工具-分析" tabindex="-1"><a class="header-anchor" href="#_7-工具-分析" aria-hidden="true">#</a> 7.工具&amp;分析</h2><p>这个就是我们常见的用来跑js脚本</p><p><img src="'+F+`" alt=""></p><h3 id="_7-1-单脚本任务" tabindex="-1"><a class="header-anchor" href="#_7-1-单脚本任务" aria-hidden="true">#</a> 7.1 单脚本任务</h3><p>格式是 *.js，单脚本运行，以野比大佬 @NobyDa 的脚本为例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>NobyDa<span class="token operator">/</span>Script<span class="token operator">/</span>master<span class="token operator">/</span><span class="token constant">JD</span><span class="token operator">-</span>DailyBonus<span class="token operator">/</span>JD_DailyBonus<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们在浏览器打开这个脚本，根据要求在 <code>task_local</code> 、 <code>rewrite_local</code> 和 <code>mitm</code> 添加，然后保存</p><p><img src="`+M+'" alt=""></p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>注：如果这里已经有hostname=了，就只复制主机名，添加在后面，用逗号隔开</p></div><p><img src="'+B+`" alt=""></p><p>脚本里说打开网页获取CK，登录一次账号后再粘贴进入一次，即可获取</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://home.m.jd.com/myJd/newhome.action
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+L+'" alt=""></p><p>我们来运行看看，脚本往右滑，运行，查看</p><p><img src="'+V+'" alt=""></p><p>顺便讲一下界面</p><p><img src="'+J+'" alt=""></p><h3 id="_7-2-多脚本任务" tabindex="-1"><a class="header-anchor" href="#_7-2-多脚本任务" aria-hidden="true">#</a> 7.2 多脚本任务</h3><p>格式是 <code>*.json</code> ，有些大佬已经写好了，我们直接拉仓库</p><p>点右上角任务仓库，进入后默认添加了系统默认的任务仓库，直接点好的</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这里一定要先加系统的，后面才能加其他大佬的</p></div><p><img src="'+Y+'" alt=""></p>',32),Me={href:"https://github.com/NobyDa",target:"_blank",rel:"noopener noreferrer"},Be=o(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>https<span class="token operator">:</span><span class="token comment">//raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+H+'" alt=""></p><p>这样我们就添加成功了，其他脚本可以按需添加。添加后再任务栏，右滑查看脚本，如何获取数据即可</p><p><img src="'+W+'" alt=""></p><p>有些多账号管理的可以用boxjs，最后说一下Cron表达式吧，看图，还不懂就度娘吧</p><p><img src="'+Z+'" alt=""></p><h2 id="_8-配置文件及设置" tabindex="-1"><a class="header-anchor" href="#_8-配置文件及设置" aria-hidden="true">#</a> 8.配置文件及设置</h2><p>终于最后了，好家伙我真累了</p><p>这里没啥好说的了，已经来来回回接触它几次了，看一下吧</p><p><img src="'+a+'" alt=""></p><p>就是圈X的核心配置文件了，关于其他设置里，开不开启开启iCloud，看个人喜好吧</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>开启iCloud，脚本都会在iCloud云盘，方便换设备了使用</p><p>不开启，默认在我的iphone文件夹里，方便保存脚本</p><p>本地使用也可用 <code>Working Copy</code> 软件Fetch脚本，前提在我的iphone里建一个文件夹</p></div><p><img src="'+a+'" alt=""></p><p>篇幅真的长，上手还是有点门槛的！收工！</p><h2 id="相关及其他脚本" tabindex="-1"><a class="header-anchor" href="#相关及其他脚本" aria-hidden="true">#</a> 相关及其他脚本</h2>',15),Le={href:"https://github.com/KOP-XIAO/QuantumultX",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://github.com/DivineEngine/Profiles/tree/master/Quantumult/Filter",target:"_blank",rel:"noopener noreferrer"},Je={href:"https://github.com/Orz-3/QuantumultX",target:"_blank",rel:"noopener noreferrer"},Ye={href:"https://github.com/w37fhy/QuantumultX",target:"_blank",rel:"noopener noreferrer"},He={href:"https://github.com/Orz-3/mini",target:"_blank",rel:"noopener noreferrer"},We={href:"https://github.com/Koolson/Qure",target:"_blank",rel:"noopener noreferrer"},Ze={href:"https://limbopro.com/",target:"_blank",rel:"noopener noreferrer"},$e={href:"https://github.com/NobyDa",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/UI-Action.json",target:"_blank",rel:"noopener noreferrer"};function en(nn,sn){const s=r("ExternalLinkIcon"),l=r("RouterLink");return c(),p("div",null,[tt,et,t("p",null,[e("参考教程： "),t("a",nt,[e("https://www.notion.so/Quantumult-X-1d32ddc6e61c4892ad2ec5ea47f00917"),n(s)])]),st,t("p",null,[e("官网："),t("a",ot,[e("https://ikuuu.eu/"),n(s)])]),rt,at,lt,it,t("p",null,[e("官网："),t("a",ct,[e("https://dove.589669.xyz/web"),n(s)])]),pt,t("div",ut,[dt,t("p",null,[e("资源解析器来源："),t("a",ht,[e("https://github.com/KOP-XIAO/QuantumultX/"),n(s)])])]),mt,t("div",_t,[gt,t("ul",null,[t("li",null,[n(l,{to:"/gfw/proxy/"},{default:u(()=>[e("白嫖节点教程")]),_:1})])])]),ft,t("p",null,[t("a",bt,[e("https://github.com/DivineEngine/Profiles/tree/master/Quantumult/Filter"),n(s)])]),Xt,t("ul",null,[t("li",null,[t("p",null,[e("icons8："),t("a",vt,[e("https://igoutu.cn/icons/set/youtube"),n(s)])])]),t("li",null,[t("p",null,[e("阿里iconfont："),t("a",xt,[e("https://www.iconfont.cn/"),n(s)])])])]),kt,t("ul",null,[t("li",null,[t("p",null,[t("a",yt,[e("https://github.com/Orz-3/mini"),n(s)])])]),t("li",null,[t("p",null,[t("a",wt,[e("https://github.com/Koolson/Qure"),n(s)])])])]),Qt,qt,Ot,Pt,t("table",null,[zt,t("tbody",null,[t("tr",null,[t("td",Dt,[t("a",Et,[e("小白配置"),n(s)])]),t("td",At,[t("a",jt,[e("https://raw.githubusercontent.com/Orz-3/QuantumultX/master/Orz-3.conf"),n(s)])])]),t("tr",null,[t("td",It,[t("a",Kt,[e("懒人配置"),n(s)])]),t("td",Rt,[t("a",St,[e("https://raw.githubusercontent.com/Sonmbs/quantumult_X/main/coconut.conf"),n(s)])])]),t("tr",null,[t("td",Ct,[t("a",Nt,[e("懒人配置DIY版"),n(s)])]),t("td",Ut,[t("a",Gt,[e("https://raw.githubusercontent.com/w37fhy/QuantumultX/master/QuantumultX_diy.conf"),n(s)])])]),t("tr",null,[t("td",Tt,[t("a",Ft,[e("神机出国配置"),n(s)])]),t("td",Mt,[t("a",Bt,[e("https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Outbound.conf"),n(s)])])]),t("tr",null,[t("td",Lt,[t("a",Vt,[e("神机回国配置"),n(s)])]),t("td",Jt,[t("a",Yt,[e("https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Inbound.conf"),n(s)])])]),t("tr",null,[t("td",Ht,[t("a",Wt,[e("墨鱼配置"),n(s)])]),t("td",Zt,[t("a",$t,[e("https://github.com/ddgksf2013/Profile/raw/master/QuantumultX.conf"),n(s)])])]),t("tr",null,[t("td",te,[t("a",ee,[e("Shaw配置"),n(s)])]),t("td",ne,[t("a",se,[e("https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/QuantumultX_Profiles.conf"),n(s)])])]),t("tr",null,[t("td",oe,[t("a",re,[e("毒奶配置"),n(s)])]),t("td",ae,[t("a",le,[e("https://raw.githubusercontent.com/limbopro/Profiles4limbo/main/full.conf"),n(s)])])]),t("tr",null,[t("td",ie,[t("a",ce,[e("莫离配置"),n(s)])]),t("td",pe,[t("a",ue,[e("https://raw.githubusercontent.com/GodMoli/QuanX/main/File/Auto.conf"),n(s)])])]),t("tr",null,[t("td",de,[t("a",he,[e("张军配置"),n(s)])]),t("td",me,[t("a",_e,[e("https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/config/lanren.conf"),n(s)])])]),t("tr",null,[t("td",ge,[t("a",fe,[e("耳东橙配置"),n(s)])]),t("td",be,[t("a",Xe,[e("https://raw.githubusercontent.com/erdongchanyo/Rules/main/Quantumult%20X/LazyConf/QuantumultX_EDC-Lazy.conf"),n(s)])])]),t("tr",null,[t("td",ve,[t("a",xe,[e("烧烤哥配置"),n(s)])]),t("td",ke,[t("a",ye,[e("https://raw.githubusercontent.com/Tartarus2014/QuantumultX-Script/main/QuanX.conf"),n(s)])])]),t("tr",null,[t("td",we,[t("a",Qe,[e("GeQ1an配置"),n(s)])]),t("td",qe,[t("a",Oe,[e("https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/QuantumultX.conf"),n(s)])])]),t("tr",null,[t("td",Pe,[t("a",ze,[e("奇心配置"),n(s)])]),t("td",De,[t("a",Ee,[e("https://qxnav.com/rules/QuantumultX/qixin.conf"),n(s)])])]),t("tr",null,[t("td",Ae,[t("a",je,[e("奇心大陆配置"),n(s)])]),t("td",Ie,[t("a",Ke,[e("https://raw.githubusercontent.com/zwf234/rules/master/QuantumultX/qixin.conf"),n(s)])])]),t("tr",null,[t("td",Re,[t("a",Se,[e("奇心海外配置"),n(s)])]),t("td",Ce,[t("a",Ne,[e("https://raw.githubusercontent.com/zwf234/rules/master/QuantumultX/overseas.conf"),n(s)])])])])]),Ue,t("p",null,[e("比如"),Ge,e("的去广告："),t("a",Te,[e("https://limbopro.com/"),n(s)])]),Fe,t("p",null,[e("野比大佬 "),t("a",Me,[e("@NobyDa"),n(s)]),e(" 我又来了")]),Be,t("ul",null,[t("li",null,[t("p",null,[t("a",Le,[e("@KOP-XIAO"),n(s)]),e("「资源解析器」")])]),t("li",null,[t("p",null,[t("a",Ve,[e("@DivineEngine"),n(s)]),e("「神机规则」")])]),t("li",null,[t("p",null,[t("a",Je,[e("@Orz-3"),n(s)]),e("「小白配置」")])]),t("li",null,[t("p",null,[t("a",Ye,[e("@w37fhy"),n(s)]),e("「懒人配置」")])]),t("li",null,[t("p",null,[t("a",He,[e("@Orz-3"),n(s)]),e("「Orz-3图标」")])]),t("li",null,[t("p",null,[t("a",We,[e("@Koolson"),n(s)]),e("「Koolson图标」")])]),t("li",null,[t("p",null,[t("a",Ze,[e("@limbopro"),n(s)]),e("「毒奶」")])]),t("li",null,[t("p",null,[t("a",$e,[e("@NobyDa"),n(s)]),e("「野比大佬」")])]),t("li",null,[t("p",null,[e("查看流媒体解锁："),t("a",tn,[e("https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/UI-Action.json"),n(s)])])])])])}const rn=i($,[["render",en],["__file","index.html.vue"]]);export{rn as default};
