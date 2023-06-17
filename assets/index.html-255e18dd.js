import{_ as o,r,o as n,c as i,a as t,b as s,d as p,e as a}from"./app-dc048004.js";const l="/assets/capture-01-d83cdee6.png",d="/assets/capture-02-1fe223bf.png",_="/assets/capture-03-bd53e3ec.png",m="/assets/capture-04-b9df2ccb.png",h="/assets/capture-05-b6175752.png",u="/assets/capture-06-473a3576.png",g="/assets/capture-07-145f3078.png",f="/assets/capture-08-6573062d.png",b="/assets/capture-09-accc1bc4.png",k="/assets/capture-10-081fc16c.png",v="/assets/capture-11-f6d51292.png",P="/assets/capture-12-70291146.png",y="/assets/capture-13-5ac32ec9.png",x="/assets/capture-14-1fb4a6a6.png",S="/assets/capture-15-352be758.png",C="/assets/capture-16-02f714be.png",A="/assets/capture-17-10b41db2.png",z="/assets/capture-18-797599d9.png",T="/assets/capture-19-2eeffa0e.png",w="/assets/capture-20-3f50733c.png",H="/assets/capture-21-472b218b.png",j="/assets/capture-22-88171463.png",M="/assets/capture-23-5d1ce82e.png",N="/assets/capture-24-4ce1e326.png",O="/assets/capture-25-443cb07b.png",c="/assets/capture-26-18c703f7.png",I="/assets/capture-27-ad7c67e7.png",B="/assets/capture-28-7f3456ac.png",E="/assets/capture-29-e5634a3b.png",K="/assets/capture-30-ea0f4bde.png",V="/assets/capture-31-6e532eb4.png",L="/assets/capture-32-0570bf8d.png",D="/assets/capture-33-af0c535e.png",J="/assets/capture-34-2fd1e1ad.png",Q="/assets/capture-35-f1ea1c14.png",X="/assets/capture-36-fc5b254d.png",F="/assets/capture-37-671a54ab.png",G="/assets/capture-38-50685297.png",q="/assets/capture-39-b93ec503.png",R="/assets/capture-40-c69db9ea.png",U="/assets/capture-42-618c54e2.png",W="/assets/capture-43-1f4d628f.png",Y="/assets/capture-44-afd9e83e.png",Z="/assets/capture-45-655999d4.png",$="/assets/capture-46-60d0200f.png",tt="/assets/capture-47-10bb8dca.png",st="/assets/capture-48-e843f494.png",et={},pt=a('<h1 id="手机抓包工具安装及使用" tabindex="-1"><a class="header-anchor" href="#手机抓包工具安装及使用" aria-hidden="true">#</a> 手机抓包工具安装及使用</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2021-10-13</p></div><p>电脑抓包用 <code>Fiddler</code>，百度自己搜，本文只讲手机端</p><p>由于工具繁多，只列举2个好用的APP，其他使用方法相差不大</p><h2 id="抓包工具" tabindex="-1"><a class="header-anchor" href="#抓包工具" aria-hidden="true">#</a> 抓包工具</h2><h3 id="ios端" tabindex="-1"><a class="header-anchor" href="#ios端" aria-hidden="true">#</a> IOS端</h3>',6),at=t("li",null,[t("p",null,"Thor (俗称锤子，已跑路)")],-1),ct=t("li",null,[t("p",null,"HTTP Catcher （俗称网球，已跑路）")],-1),ot={href:"https://apps.apple.com/cn/app/stream/id1312141691",target:"_blank",rel:"noopener noreferrer"},rt=t("h3",{id:"安卓端",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#安卓端","aria-hidden":"true"},"#"),s(" 安卓端")],-1),nt=t("li",null,[t("p",null,"Packet Capture（已凉）")],-1),it={href:"https://dzp.lanzouy.com/i0uhfkd2nle",target:"_blank",rel:"noopener noreferrer"},lt=t("h2",{id:"_1-安装",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-安装","aria-hidden":"true"},"#"),s(" 1.安装")],-1),dt={class:"custom-container details"},_t=t("summary",null,"点我查看 IOS端安装教程",-1),mt=t("h3",{id:"_1-1-ios端-stream",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-1-ios端-stream","aria-hidden":"true"},"#"),s(" 1.1 IOS端：Stream")],-1),ht={href:"https://apps.apple.com/cn/app/stream/id1312141691",target:"_blank",rel:"noopener noreferrer"},ut=a('<p><img src="'+l+'" alt=""></p><p>下载安装后打开，但要先安装好证书后，才能正常使用</p><p>点击 <strong>开始抓包-允许-去安装证书</strong></p><p><img src="'+d+'" alt=""></p><p><strong>安装CA证书</strong>，跳转到浏览器后，点允许</p><p><img src="'+_+'" alt=""></p><p>提示描述文件下载完成，<strong>设置-通用-描述文件与设备管理</strong></p><p>找到这个Stream描述文件，安装</p><p><img src="'+m+'" alt=""></p><p>安装好就是 <code>已验证√</code> 了</p><p><img src="'+h+'" alt=""></p><p>然后就是<strong>信任证书</strong>，<strong>设置-通用-关于本机-证书信任设置</strong>，把开关打开</p><p><img src="'+u+'" alt=""></p><p>返回APP看，这样就安装完成了，记得把抓包关了先</p><p><img src="'+g+'" alt=""></p>',15),gt=t("h3",{id:"_1-2-安卓端-httpcanary",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-2-安卓端-httpcanary","aria-hidden":"true"},"#"),s(" 1.2 安卓端：HttpCanary")],-1),ft=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"注意"),t("p",null,"由于安卓11以后系统不再信任以外的证书，导致证书无法安装，https抓包时目标APP无网络，需要借助MT管理器手动导入安装证书")],-1),bt=t("code",null,"HttpCanary_v3.8.1",-1),kt={href:"https://dzp.lanzouy.com/i0uhfkd2nle",target:"_blank",rel:"noopener noreferrer"},vt=a('<h4 id="硬性条件" tabindex="-1"><a class="header-anchor" href="#硬性条件" aria-hidden="true">#</a> 硬性条件</h4><p>缺一不可，达不到的无视以下教程</p><ul><li><p>手机root (小米系统切换为开发版)</p></li><li><p>解锁system分区</p></li><li><p>MT管理器 (手机需root并解锁分区，否则挂载失败)</p></li></ul><h4 id="导出证书" tabindex="-1"><a class="header-anchor" href="#导出证书" aria-hidden="true">#</a> 导出证书</h4><p>安装好后打开，左上角三横-设置</p><p><img src="'+f+'" alt=""></p><p><strong>SSL证书设置-导出HttpCanary根证书</strong></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这里为什么不点安装呢，因为就是装不了，才不能按正常的步骤</p></div><p><img src="'+b+'" alt=""></p><p>类型选第一个 <code>System Trusted(.0)</code> 导出成功会提示下载到了相应的目录</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>默认目录：/HttpcCanary/cert/</p></div><p><img src="'+k+'" alt=""></p><h4 id="解锁分区" tabindex="-1"><a class="header-anchor" href="#解锁分区" aria-hidden="true">#</a> 解锁分区</h4><p>先解锁一下分区，我自己是小米，用的Syslock</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>其他手机请自测，一般刷面具root完成后就解锁分区了，如MT管理器无法移动文件就过来解锁</p></div>',15),Pt={href:"https://dzp.lanzouy.com/ioB9Npn6xtg",target:"_blank",rel:"noopener noreferrer"},yt=a('<p><img src="'+v+'" alt=""></p><p>下载后，打开按钮</p><p><img src="'+P+'" alt=""></p><p>重启后，再次打开Syslock，开启即可完成</p><p><img src="'+y+'" alt=""></p><h4 id="mt管理器" tabindex="-1"><a class="header-anchor" href="#mt管理器" aria-hidden="true">#</a> MT管理器</h4>',6),xt={href:"https://www.coolapk.com/game/21048/",target:"_blank",rel:"noopener noreferrer"},St=a('<p><img src="'+x+'" alt=""></p><p>安装完成后打开，简单说一下，这里分别显示的是根目录和SD卡目录</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>知道是目录就好了，那就开始操作</p></div><p><img src="'+S+'" alt=""></p><p>点进MT管理器 <strong>右栏</strong> 根目录的文件夹 <code>date/date</code>，然后搜索黄鸟的应用包名 <code>com.guoshi.httpcanary</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>找到一个就可以点停止搜索了</p></div><p><img src="'+C+'" alt=""></p><p>点击搜索到的结果，再点绿色的包进去</p><p><img src="'+A+'" alt=""></p><p>再点 <code>cache</code> 文件夹进去</p><p><img src="'+z+'" alt=""></p><p>点底部的同步按钮，这样两边栏就都一致了，选择 <code>HttpCanary.pem</code>，复制</p><p><img src="'+T+'" alt=""></p><p>复制时，把文件名改成 <code>HttpCanary.jks</code>，确定</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>到这里我们的CA证书就弄好了，但是根证书还需要装到手机系统里才行</p></div><p><img src="'+w+'" alt=""></p><p>点击 <strong>左边</strong> 栏空白处，再点左上角 <strong>三横-内部存储-HttpCanary</strong></p><p><img src="'+H+'" alt=""></p><p>再点 <code>cert</code> 文件夹进去，找到我们之前<strong>导出的根证书</strong></p><p><img src="'+j+'" alt=""></p><p>点击 <strong>右边</strong> 栏空白处，再点左上角 <strong>三横-根目录</strong></p><p><img src="'+M+'" alt=""></p><p>分别进入 <code>etc/security/cacerts</code> 文件夹，这里面就都是系统的证书了</p><p>我们选择证书长按复制到根目录即可</p><p><img src="'+N+'" alt=""></p><p>到这里，证书就全部安装完成了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>可以到卸载更证书里看到，系统的证书里已经有黄鸟了</p></div><p><img src="'+O+'" alt=""></p><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2.使用</h2><p>我们要抓某个APP的数据，先点击开始抓包，然后再进APP操作，抓到后点停止</p><p>为方便演示，以下以 <code>滴滴果园</code> 和 <code>京东CK</code> 为例</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>请看清楚先后步骤</p></div>',32),Ct={class:"custom-container details"},At=a('<summary>IOS抓包演示</summary><h2 id="抓滴滴果园" tabindex="-1"><a class="header-anchor" href="#抓滴滴果园" aria-hidden="true">#</a> 抓滴滴果园</h2><p>进入滴滴APP主界面，找到免费领水果，<strong>但先不要进去</strong></p><p><img src="'+c+'" alt=""></p><p>然后打开Stream，点击<strong>开始抓包</strong>，切到滴滴APP，点<strong>免费种水果</strong></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>先点开抓包，再进APP操作，这样才能精准的抓到数据</p></div><p><img src="'+I+'" alt=""></p><p>直到完成进入滴滴果园，点击<strong>停止抓包</strong></p><p><img src="'+B+'" alt=""></p><p>进入抓包历史查看，刚刚抓到的数据</p><p><img src="'+E+'" alt=""></p><p>接下来就是筛选数据，右上角放大镜，域名下选择 <code>game.xiaojikeji.com</code></p><p><img src="'+K+'" alt=""></p><p>现在就4条记录了，选POST包进去，请求拉倒底 <code>查看JSON</code></p><p><img src="'+V+'" alt=""></p><p>这里的<code>token</code>值就是我们要的数据</p><p><img src="'+L+'" alt=""></p><h2 id="抓京东ck" tabindex="-1"><a class="header-anchor" href="#抓京东ck" aria-hidden="true">#</a> 抓京东CK</h2>',18),zt={href:"https://m.jd.com/",target:"_blank",rel:"noopener noreferrer"},Tt=a('<div class="custom-container tip"><p class="custom-container-title">多账号步骤</p><p>浏览器开无痕模式-登账号-抓CK1-叉掉网页-关无痕-退出浏览器...(多账号循环)</p></div><p><img src="'+D+'" alt=""></p><p>打开Stream，开启抓包-返回京东页面刷新一下</p><p><img src="'+J+'" alt=""></p><p>停止抓包，然后在抓包历史里找数据</p><p><img src="'+Q+'" alt=""></p><p>点放大镜，筛选要找的包，就剩这一个</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>方法：GET</p><p>域名：api.m.jd.com</p></div><p><img src="'+X+'" alt=""></p><p>进去后点请求，下拉到最下面，找到 <code>pt_key=***;pt_pin=***;</code> 就我我们要的数据</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这里的分号不能漏，且不能有空格符</p></div><p><img src="'+F+'" alt=""></p>',12),wt={href:"https://apps.apple.com/cn/app/alook/id1261944766",target:"_blank",rel:"noopener noreferrer"},Ht=t("p",null,[t("img",{src:G,alt:""})],-1),jt=t("p",null,[t("img",{src:q,alt:""})],-1),Mt={href:"https://www.icloud.com/shortcuts/f47146c2831a4e8e8bb7f06daac1b858",target:"_blank",rel:"noopener noreferrer"},Nt=t("p",null,[t("img",{src:R,alt:""})],-1),Ot={class:"custom-container details"},It=a('<summary>安卓抓包演示</summary><h2 id="抓滴滴果园-1" tabindex="-1"><a class="header-anchor" href="#抓滴滴果园-1" aria-hidden="true">#</a> 抓滴滴果园</h2><p>进入滴滴APP主界面，找到免费领水果，<strong>但先不要进去</strong></p><p><img src="'+c+'" alt=""></p><p>然后打开黄鸟，点击蓝色的飞机开始抓包，切到滴滴APP，点<strong>免费种水果</strong></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>先点开抓包，再进APP操作，这样才能精准的抓到数据</p></div><p><img src="'+U+'" alt=""></p><p>直到完成进入滴滴果园，点击绿色的飞机停止抓包</p><p><img src="'+W+'" alt=""></p><p>右上角放大镜 - 服务器Host</p><p><img src="'+Y+'" alt=""></p><p>勾选 <code>game.xiaojukeji.com</code> ，就剩4个了，点POST包进去</p><p><img src="'+Z+'" alt=""></p><p>请求里的 <code>toekn</code>值就是我们需要的数据</p><p><img src="'+$+'" alt=""></p><h2 id="抓京东ck-1" tabindex="-1"><a class="header-anchor" href="#抓京东ck-1" aria-hidden="true">#</a> 抓京东CK</h2>',16),Bt={href:"https://dzp.lanzoui.com/iCMXQr2edpg",target:"_blank",rel:"noopener noreferrer"},Et=t("p",null,"安装登录APP-右上角-设置-导出登录信息，粘贴到任意聊天界面，提取pt信息",-1),Kt=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"说明"),t("p",null,[s("我们只需要 "),t("code",null,"pt_key=***;pt_pin=***;")])],-1),Vt=t("p",null,[t("img",{src:tt,alt:""})],-1),Lt=t("p",null,[t("img",{src:st,alt:""})],-1);function Dt(Jt,Qt){const e=r("ExternalLinkIcon");return n(),i("div",null,[pt,t("ul",null,[at,ct,t("li",null,[t("p",null,[t("a",ot,[s("Stream"),p(e)]),s("（免费）")])])]),rt,t("ul",null,[nt,t("li",null,[t("p",null,[t("a",it,[s("HttpCanary"),p(e)]),s("（俗称小黄鸟/小蓝鸟）")])])]),lt,t("details",dt,[_t,mt,t("p",null,[s("APP Store下载："),t("a",ht,[s("https://apps.apple.com/cn/app/stream/id1312141691"),p(e)])]),ut]),gt,ft,t("p",null,[s("下载 "),bt,s(" 高级解锁版："),t("a",kt,[s("https://dzp.lanzouy.com/i0uhfkd2nle"),p(e)])]),vt,t("p",null,[s("下载Syslock："),t("a",Pt,[s("https://dzp.lanzouy.com/ioB9Npn6xtg"),p(e)])]),yt,t("p",null,[s("下载MT管理器："),t("a",xt,[s("https://www.coolapk.com/game/21048/"),p(e)])]),St,t("details",Ct,[At,t("p",null,[s("打开浏览器，输入网址："),t("a",zt,[s("https://m.jd.com/"),p(e)])]),Tt,t("p",null,[s("还可以利用 "),t("a",wt,[s("Alook浏览器"),p(e)]),s(" - 工具箱 - 开发者工具 - cookies ，一键提取")]),Ht,jt,t("p",null,[s("如果觉得筛选数据麻烦，可以用 "),t("a",Mt,[s("点我☛快捷指令提取"),p(e)])]),Nt]),t("details",Ot,[It,t("p",null,[s("直接上工具 JD任务小辅："),t("a",Bt,[s("https://dzp.lanzoui.com/iCMXQr2edpg"),p(e)])]),Et,Kt,Vt,Lt])])}const Ft=o(et,[["render",Dt],["__file","index.html.vue"]]);export{Ft as default};
