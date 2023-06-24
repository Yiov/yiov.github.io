import{_ as n,r as o,o as r,c,a as e,b as s,d as i,e as a}from"./app-978c3e53.js";const p="/assets/miui-01-e1d12512.png",l="/assets/miui-02-4583bb86.png",d="/assets/miui-03-e618367a.png",h="/assets/miui-04-11620845.png",m="/assets/miui-05-4664f5d1.png",_="/assets/miui-06-53f8e1c1.png",u="/assets/miui-07-a9deb072.png",g="/assets/miui-08-7e5fc85e.png",f="/assets/miui-09-63ba4598.png",v="/assets/miui-10-b016809f.png",b={},x=a('<h1 id="小米线刷降级破miui限制" tabindex="-1"><a class="header-anchor" href="#小米线刷降级破miui限制" aria-hidden="true">#</a> 小米线刷降级破MIUI限制</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2021-10-18</p></div><div class="custom-container danger"><p class="custom-container-title">注意</p><p>本教程仅适用于 刷机时出现</p><p><code>remote:update sparse crc list failed</code></p><p>原因：MIUI 12.5 后小米限制了降级</p></div><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>',4),k=e("li",null,[e("p",null,"原装数据线+备份")],-1),M=e("li",null,[e("p",null,"下载rom包")],-1),I=e("li",null,[e("p",null,"下载小米官方刷机工具")],-1),w={href:"http://www.miui.com/unlock/index.html",target:"_blank",rel:"noopener noreferrer"},B=a('<h2 id="_1-备份" tabindex="-1"><a class="header-anchor" href="#_1-备份" aria-hidden="true">#</a> 1.备份</h2><p>方便恢复数据，一定要备份！！</p><p>设置-更多设置-备份与恢复，备份复制到电脑桌面，不然刷机会丢失</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>手机端备份后在 <strong>MIUI-Backup-AllBackup</strong> 文件夹</p></div><p><img src="'+p+'" alt=""></p><h2 id="_2-下载rom包" tabindex="-1"><a class="header-anchor" href="#_2-下载rom包" aria-hidden="true">#</a> 2.下载ROM包</h2><p>想要降回哪个版本，就去下载相应稳定/开发版包，下载后解压</p>',7),O={class:"custom-container tip"},R=e("p",{class:"custom-container-title"},"说明",-1),F={href:"http://www.miui.com/unlock/index.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://web.vip.miui.com/page/info/mio/mio/detail?postId=37093637",target:"_blank",rel:"noopener noreferrer"},N={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"其他途径",-1),z={href:"https://xiaomirom.com/",target:"_blank",rel:"noopener noreferrer"},E=a('<p><img src="'+l+`" alt=""></p><h2 id="_3-小米官方刷机工具" tabindex="-1"><a class="header-anchor" href="#_3-小米官方刷机工具" aria-hidden="true">#</a> 3.小米官方刷机工具</h2><p>官网下载到电脑后解压</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>老版：http://bigota.d.miui.com/tools/MiFlash2018-5-28-0.zip

新版：https://cdn.alsgp0.fds.api.mi-img.com/micomm/MiFlash2020-3-14-0.rar

带下载包的miflash pro：https://dzp.lanzouy.com/ij7Wk0g7755g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt=""></p><h2 id="_4-开始刷机" tabindex="-1"><a class="header-anchor" href="#_4-开始刷机" aria-hidden="true">#</a> 4.开始刷机</h2><p>手机关机，再 <strong>长按音量下键+电源键</strong> ，进入线刷 <code>FASTBOT</code> 兔子模式，数据线连接电脑</p><p>解压后，打开小米刷机工具文件夹，运行 <strong>XiaoMiFlash.exe</strong></p><p><img src="'+h+'" alt=""></p><p>停在这个界面就行</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>第一次下载的点一下 <code>Driver</code> 安装一下驱动，已经装过的无视</p></div><p><img src="'+m+'" alt=""></p><p>以下一一对应</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>全部删除 —— flash_all.bat</p><p>保留数据 —— flash_all_except_storage</p><p>全部删除并LOCK —— flash_all_lock.bat</p></div><p><img src="'+_+'" alt=""></p><p>打开ROM包文件夹，找到相应的bat命令更改，鼠标右键—用记事本打开</p><p><img src="'+u+'" alt=""></p><p>编辑—查找 <code>Flash sparsecrclist error</code></p><p><img src="'+g+'" alt=""></p><p>把这一段<strong>整句全删掉</strong>，不留空格，<strong>保存并退出</strong></p><p><img src="'+f+'" alt=""></p><p>打开刷机工具，选择你ROM包的文件夹</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这里注意你的ROM包文件夹的位置，一定要对</p><p>不知道路径的，进你的ROM包文件夹里，复制顶部的路径，粘贴过去就行</p></div><p><img src="'+v+'" alt=""></p><p>然后点击 — <strong>加载设备</strong> —— <strong>刷机</strong> 即可，会有绿色进度条</p><p>等300-400秒就可以完成了，开机还要等一会</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-刷机出现couldn-t-find-flash-script" tabindex="-1"><a class="header-anchor" href="#_1-刷机出现couldn-t-find-flash-script" aria-hidden="true">#</a> 1.刷机出现couldn&#39;t find flash script</h4><p>答：ROM文件夹位置没选对</p><h4 id="_2-半天没开机" tabindex="-1"><a class="header-anchor" href="#_2-半天没开机" aria-hidden="true">#</a> 2.半天没开机</h4><p>答：只要刷机显示success，就耐心等开机就行</p><h4 id="_3-手机已开机-但刷机工具卡进度条800多秒" tabindex="-1"><a class="header-anchor" href="#_3-手机已开机-但刷机工具卡进度条800多秒" aria-hidden="true">#</a> 3.手机已开机，但刷机工具卡进度条800多秒</h4><p>答：如果没开机，给我老实等着，千万不要动</p><p>如果已经开机了，就表示已经完成了，不用担心，拔掉数据线即可</p>',34);function T(U,A){const t=o("ExternalLinkIcon");return r(),c("div",null,[x,e("ul",null,[k,M,I,e("li",null,[e("p",null,[e("a",w,[s("已解官方BL锁"),i(t)])])])]),B,e("div",O,[R,e("p",null,[s("开发版要去小米论坛申请内测资格并通过，然后去 "),e("a",F,[s("官网申请BL锁"),i(t)])])]),e("p",null,[s("官方论坛刷机包汇总："),e("a",L,[s("https://web.vip.miui.com/page/info/mio/mio/detail?postId=37093637"),i(t)])]),e("div",N,[V,e("p",null,[s("XiaomiRom："),e("a",z,[s("https://xiaomirom.com/"),i(t)])])]),E])}const S=n(b,[["render",T],["__file","index.html.vue"]]);export{S as default};
