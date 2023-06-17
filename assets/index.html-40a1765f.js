import{_ as c,r as n,o as r,c as l,a as e,b as s,d as t,w as o,e as a}from"./app-dc048004.js";const d="/assets/dump-01-6dd033a5.png",m="/assets/dump-02-4ff6746f.png",u="/assets/dump-03-59923fbc.png",_="/assets/dump-04-2e13ee05.png",h="/assets/dump-05-a7ac34fa.png",g="/assets/dump-06-6d3b721c.png",b="/assets/dump-07-14f18754.png",v="/assets/dump-08-82c181f8.png",f="/assets/dump-09-74ccc721.png",y="/assets/dump-10-d886bc0b.png",D="/assets/dump-11-57395894.png",w="/assets/dump-12-f598d7d2.png",k="/assets/dump-13-2ccb2087.png",x="/assets/dump-14-85540460.png",z="/assets/dump-16-05287be3.png",A="/assets/dump-17-ad9de11c.png",I="/assets/dump-18-93cdd2cd.png",P="/assets/dump-19-2eae3812.png",F="/assets/dump-20-b22eeb1c.png",C="/assets/dump-21-cf0bf893.png",B="/assets/dump-22-9b0c985f.png",j="/assets/dump-23-bc951911.png",N="/assets/dump-24-ad203995.png",T="/assets/dump-25-28aadcd5.png",E="/assets/dump-26-bbf205c0.png",R="/assets/dump-27-c408e168.png",S="/assets/dump-28-a4a72d7b.png",V="/assets/dump-29-69b5b503.png",L="/assets/dump-30-bb312cfd.png",O="/assets/dump-31-08b03a9a.png",G="/assets/dump-32-97944fef.png",H={},Q=a('<h1 id="ios应用砸壳及插件注入" tabindex="-1"><a class="header-anchor" href="#ios应用砸壳及插件注入" aria-hidden="true">#</a> IOS应用砸壳及插件注入</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2022-11-11</p></div><p>为什么要砸壳，因为苹果商店上架的APP，都进行了加密，相当于给IPA加了一层外壳</p><p>无法直接安装，只有通过砸壳工具进行解密脱壳后才可以</p><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2><p>本来想砸<code>微信</code>演示的，结果手机砸出来的没有相册权限，还是得Mac砸</p><p>就换成演示 <code>抖音</code> 了</p><ul><li><p>插件：DumpDecrypter(砸壳)、Filza(文件管理)、CyDown(下载deb)、ReProvision Reborn(自签)</p></li><li><p>工具：NewTerm 2(终端) 或 轻松签</p></li></ul><h2 id="_1-安装插件" tabindex="-1"><a class="header-anchor" href="#_1-安装插件" aria-hidden="true">#</a> 1.安装插件</h2><p>在Cydia添加3个插件源</p>',10),M={href:"https://repo.initnil.com",target:"_blank",rel:"noopener noreferrer"},U={href:"https://tigisoftware.com/cydia/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://julio.hackyouriphone.org/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://havoc.app",target:"_blank",rel:"noopener noreferrer"},K=e("p",null,[e("img",{src:d,alt:""})],-1),W=e("p",null,[s("添加好源后，分别搜索安装哥哥源的 "),e("code",null,"DumpDecrypter"),s(" 砸壳")],-1),X=e("p",null,[e("img",{src:m,alt:""})],-1),Y=e("p",null,[s("TIGI Software的 "),e("code",null,"Filza"),s(" 文件管理")],-1),Z={class:"custom-container tip"},$=e("p",{class:"custom-container-title"},"说明",-1),ee=e("p",null,[e("img",{src:u,alt:""})],-1),se=e("p",null,[s("julioverne源的 "),e("code",null,"CyDown"),s(" 下载deb插件")],-1),te=e("p",null,[e("img",{src:_,alt:""})],-1),pe=e("code",null,"ReProvision Reborn",-1),ae={href:"https://cydia.akemi.ai/",target:"_blank",rel:"noopener noreferrer"},ie=a('<div class="custom-container tip"><p class="custom-container-title">说明</p><p>这个插件主要是为了安装IPA包，免签名</p></div><p><img src="'+h+'" alt=""></p><p>安装自带的 Chariz 源里的 <code>NewTerm 2</code> 终端和哥哥源里的 <code>injectipa</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>都装好，不然哪里出错了都不知道</p></div><p><img src="'+g+'" alt=""></p><h2 id="_2-安装轻松签" tabindex="-1"><a class="header-anchor" href="#_2-安装轻松签" aria-hidden="true">#</a> 2.安装轻松签</h2>',6),oe={href:"https://esign.yyyue.xyz/",target:"_blank",rel:"noopener noreferrer"},ne=a('<div class="custom-container tip"><p class="custom-container-title">说明</p><p>下载IPA后，在Filza里点击下载好的IPA文件就可以安装了</p></div><p>Safari浏览器打开官网，请求桌面网站</p><p><img src="'+b+'" alt=""></p><p>下载的文件在icloud的下载文件夹中，长按-分享-save to Filza</p><p><img src="'+v+'" alt=""></p><p>存储，再次打开Filza会自动弹到目录</p><p><img src="'+f+'" alt=""></p><p>点安装即可，这样我们所需的所有工具就都准备好了</p><p><img src="'+y+'" alt=""></p><p>没有证书的，可以用我打包好的证书</p>',10),ce={class:"custom-container tip"},re=e("p",{class:"custom-container-title"},"说明",-1),le={href:"https://dzp.lanzouy.com/iVToO0swgpfc",target:"_blank",rel:"noopener noreferrer"},de=e("p",null,"密码：1",-1),me=a('<p>解压，保证p12证书和cert文件在一个目录，点击pe12，输入密码：1，导入证书库</p><p><img src="'+D+'" alt=""></p><h2 id="_3-砸壳" tabindex="-1"><a class="header-anchor" href="#_3-砸壳" aria-hidden="true">#</a> 3.砸壳</h2><p>我这里用<code>抖音</code>演示，应用商店下载原版</p><p>打开 <code>DumpDecrypter</code> APP，选择抖音-确定解密，等砸完，手机不要锁屏</p><p><img src="'+w+'" alt=""></p><p><img src="'+k+'" alt=""></p><p>砸完，前往Filza查看，一个完整的脱壳IPA就诞生了</p><p>我们先长按文件，点复制把路径复制出来</p><div class="custom-container tip"><p class="custom-container-title">默认路径</p><p>/var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa</p></div><p><img src="'+x+'" alt=""></p><h2 id="_4-下载deb插件" tabindex="-1"><a class="header-anchor" href="#_4-下载deb插件" aria-hidden="true">#</a> 4.下载deb插件</h2><p>自己选一个喜欢的方式下载，本次用 <code>CyDown</code> 演示</p>',13),ue={class:"custom-container tip"},_e=e("p",{class:"custom-container-title"},"说明",-1),he=a('<p>我们用哥哥源里的抖音净化插件</p><p>源 - Tweaks - 抖音净化 - 更改 - 添加到Downloads</p><p><img src="'+z+'" alt=""></p><p><img src="'+A+'" alt=""></p><p>下载完成点击插件 - Show in Filza - 点击插件</p><div class="custom-container tip"><p class="custom-container-title">Cydown下载插件的路径</p><p>/var/mobile/Documents/Cydown</p></div><p><img src="'+I+'" alt=""></p><p>我们先解压，进 Library 文件夹</p><p><img src="'+P+'" alt=""></p><p>我们先长按文件，点复制把路径复制出来</p><div class="custom-container tip"><p class="custom-container-title">默认路径</p><p>/var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib</p></div><p><img src="'+F+`" alt=""></p><h2 id="_5-注入插件" tabindex="-1"><a class="header-anchor" href="#_5-注入插件" aria-hidden="true">#</a> 5.注入插件</h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>经测试，下载的插件注入后并没有生效，对比后发现是插件不适配</p><p>就看一下流程吧，也可以用轻松签提取ipa包里的插件</p><p>注入方式二选一，都可以！</p></div><details class="custom-container details"><summary>5.1 inject注入</summary><p>打开NewTerm终端，输入 <code>injectipa</code> ，后面接IPA路径和插件的路径</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>输入不了，切换一下输入法</p></div><p>格式：injectipa IPA路径 插件路径</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>IPA路径路径：/var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa

插件路径：/var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib

例子：injectipa /var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa /var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+C+'" alt=""></p><p>等它注入打包完就可以了，会自动跳到Filza目录</p><p><img src="'+B+'" alt=""></p><p>之前安装了自签插件了，直接安装就可以打开了</p><p>首次打开会弹作者介绍窗，之后就没有了，在设置里可以看到插件设置</p><p><img src="'+j+`" alt=""></p></details><details class="custom-container details"><summary>5.2 轻松签注入</summary><p>在 <code>DumpDecrypter</code> 文件夹把IPA文件导入，长按文件，打开方式选 轻松签</p><p>在 <code>CyDown</code> 文件夹把dylib文件导入，长按文件，打开方式选 轻松签</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>默认路径：/var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa

默认路径：/var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开轻松签，点击IPA文件-导入应用库</p><p><img src="`+N+'" alt=""></p><p>应用-签名-更多设置</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>如果要多开需要改应用名和Bundle ID，后面加字就行，不改就是官替会覆盖原版</p></div><p><img src="'+T+'" alt=""></p><p>添加第三方库-选择准备好的插件<code>Awemepure.dylib</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>导入其他插件就按名字找</p></div><p><img src="'+E+'" alt=""></p><p>开启文件访问-立即签名，安装就不赘述了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>巨魔用户直接永久安装，越狱用户用Filza安装，未越狱的用证书安装</p></div><p><img src="'+R+'" alt=""></p><p>下载的视频，也是无水印的，其他功能自行探索吧</p><p><img src="'+S+'" alt=""></p></details><h2 id="_6-插件提取" tabindex="-1"><a class="header-anchor" href="#_6-插件提取" aria-hidden="true">#</a> 6.插件提取</h2><details class="custom-container details"><summary>6.1 已安装应用提取插件</summary><p>点击轻松签已安装的应用，提取库-选择要提取的插件</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>最新版有此功能，记住插件都 <code>*.dylib</code> 的后缀名，其他的是系统的不要动，否则闪退</p></div><p><img src="'+V+'" alt=""></p></details><details class="custom-container details"><summary>6.2 未安装应用提取插件</summary><p>我们先下载好IPA文件，导入轻松签，解压，完成后有生成一个 <code>Payload</code> 的文件夹</p><p><img src="'+L+'" alt=""></p><p>进入文件夹-点击文件夹-查看文件，跳转到Filza文件目录，其中 <code>Frameworks</code> 就是插件目录</p><p><img src="'+O+'" alt=""></p><p>这里除了dylib插件，其他都是系统的不要动，复制出来即可</p><p><img src="'+G+'" alt=""></p></details><h2 id="特别鸣谢" tabindex="-1"><a class="header-anchor" href="#特别鸣谢" aria-hidden="true">#</a> 特别鸣谢</h2>',20),ge={href:"https://github.com/Netskao/iOS-DumpDecrypted-IPAs",target:"_blank",rel:"noopener noreferrer"},be={href:"https://www.tigisoftware.com/default/?p=439",target:"_blank",rel:"noopener noreferrer"};function ve(fe,ye){const p=n("ExternalLinkIcon"),i=n("RouterLink");return r(),l("div",null,[Q,e("ul",null,[e("li",null,[e("p",null,[s("DumpDecrypter 丨 哥哥源："),e("a",M,[s("https://repo.initnil.com"),t(p)])])]),e("li",null,[e("p",null,[s("Filza 丨 TIGI Software源："),e("a",U,[s("https://tigisoftware.com/cydia/"),t(p)]),s(" 丨 "),t(i,{to:"/mobile/Filza/"},{default:o(()=>[s("Filza破解教程☛点我")]),_:1})])]),e("li",null,[e("p",null,[s("CyDown丨julioverne源："),e("a",q,[s("https://julio.hackyouriphone.org/"),t(p)])])]),e("li",null,[e("p",null,[s("ReProvision Reborn 丨 Havoc源："),e("a",J,[s("https://havoc.app"),t(p)])])])]),K,W,X,Y,e("div",Z,[$,e("p",null,[s("可以直接用 "),t(i,{to:"/mobile/Filza/"},{default:o(()=>[s("Filza破解版")]),_:1})])]),ee,se,te,e("p",null,[s("Havoc源里的 "),pe,s(" 或 "),e("a",ae,[s("蔡明美源的AppSync Unified"),t(p)])]),ie,e("p",null,[s("轻松签官网："),e("a",oe,[s("https://esign.yyyue.xyz/"),t(p)])]),ne,e("div",ce,[re,e("p",null,[s("过期证书："),e("a",le,[s("https://dzp.lanzouy.com/iVToO0swgpfc"),t(p)])]),de]),me,e("div",ue,[_e,e("p",null,[t(i,{to:"/mobile/jail%E2%80%8Bbreak/#_1-deb%E6%8F%92%E4%BB%B6%E4%B8%8B%E8%BD%BD"},{default:o(()=>[s("其他deb插件下载方式☛点我")]),_:1})])]),he,e("ul",null,[e("li",null,[e("p",null,[e("a",ge,[s("Netskao砸壳"),t(p)]),s("「微信/QQ」")])]),e("li",null,[e("p",null,[e("a",be,[s("Filza"),t(p)]),s(" 「文件管理器」")])])])])}const we=c(H,[["render",ve],["__file","index.html.vue"]]);export{we as default};
