import{_ as r,r as o,o as d,c as l,a as e,b as s,d as t,w as i,e as c}from"./app-64061f40.js";const p="/assets/heng-25-e6d84fe4.png",h="/assets/heng-01-d559afd1.png",g="/assets/heng-02-7282a19c.png",m="/assets/heng-03-d6088ec8.png",_="/assets/heng-04-e33ddd88.png",u="/assets/heng-05-cba54fad.png",f="/assets/heng-06-61bf0282.png",b="/assets/heng-07-4deae4ea.png",v="/assets/heng-08-780d68d9.png",x="/assets/heng-09-605f6207.png",k="/assets/heng-10-ba3a26b4.png",w="/assets/heng-11-39713407.png",E="/assets/heng-12-c48e22a9.png",S="/assets/heng-13-e5617d9c.png",j="/assets/heng-14-42cb3659.png",L="/assets/heng-15-c983777f.png",I="/assets/heng-16-fbcf16bd.png",A="/assets/heng-17-3d658eea.png",N="/assets/heng-18-2205f366.png",B="/assets/heng-19-096df246.png",C="/assets/heng-20-426f1a5e.png",T="/assets/heng-21-7e7377f2.png",V="/assets/heng-22-290e82eb.png",y="/assets/heng-23-2b269367.png",P="/assets/heng-24-b3cec003.png",X="/assets/heng-26-96d3d734.png",D={},F=c('<h1 id="搭建专属的记仇小本本" tabindex="-1"><a class="header-anchor" href="#搭建专属的记仇小本本" aria-hidden="true">#</a> 搭建专属的记仇小本本</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2022-2-20</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>利用码云Issues作为数据库的记仇小本本，简约设计，支持富文本</p>',4),R={class:"custom-container tip"},G=e("p",{class:"custom-container-title"},"说明",-1),q={href:"https://github.com/n0tssss/",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"搭建成功，别忘了给请大佬点个星星！！",-1),H=e("p",null,[e("img",{src:p,alt:""})],-1),J=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),s(" Demo")],-1),K={href:"https://n0ts.gitee.io/heng/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/n0tssss/heng",target:"_blank",rel:"noopener noreferrer"},O={href:"https://gitee.com/n0ts/heng",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://gitee.com/n0ts/gitee-api",target:"_blank",rel:"noopener noreferrer"},U=e("h2",{id:"准备条件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备条件","aria-hidden":"true"},"#"),s(" 准备条件")],-1),W=c(`<h2 id="_1-部署api后端" tabindex="-1"><a class="header-anchor" href="#_1-部署api后端" aria-hidden="true">#</a> 1.部署API后端</h2><p>Xshell登录服务器，安装git</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>防止有些人没有安装，等会下不了</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+h+'" alt=""></p>',5),Y={href:"https://gitee.com/n0ts/gitee-api",target:"_blank",rel:"noopener noreferrer"},Z=c('<div class="custom-container tip"><p class="custom-container-title">说明</p><p>内有 <code>Gitee API 部署教程.docx</code> 很详细，参考着看就行了</p></div><p><img src="'+g+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /www/wwwroot
<span class="token function">git</span> clone https://gitee.com/n0ts/gitee-api.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt=""></p><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gitee-api
<span class="token function">npm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>完成后,测试运行一下</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>端口默认3000，可以自己在 <code>config.js</code> 里改，如没有其他项目冲突就默认</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+_+'" alt=""></p><h2 id="_2-创建私人令牌" tabindex="-1"><a class="header-anchor" href="#_2-创建私人令牌" aria-hidden="true">#</a> 2.创建私人令牌</h2><p>进入自己的gitee主页 - 私人令牌 -生成令牌</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>按照图示给与权限，懒的全给</p></div><p><img src="'+u+'" alt=""></p><p>记住你的秘钥，关闭后就无法再次查看了</p><p><img src="'+f+'" alt=""></p><h2 id="_3-配置config" tabindex="-1"><a class="header-anchor" href="#_3-配置config" aria-hidden="true">#</a> 3.配置config</h2><p>按需修改 <code>password</code> &amp; <code>端口</code> &amp; <code>AccessToken</code> 保存，其他不要动</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>密码要记住！搭建完成后，新增内容的时候需要输入的</p><p><code>accessToken</code> 就是我们申请的私人令牌秘钥</p></div><p><img src="'+b+'" alt=""></p><h2 id="_4-创建node项目" tabindex="-1"><a class="header-anchor" href="#_4-创建node项目" aria-hidden="true">#</a> 4.创建node项目</h2><p>进宝塔-网站-node项目，安装node管理器</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>已经安装的直接看下一步</p></div><p><img src="'+v+'" alt=""></p><p><img src="'+x+'" alt=""></p><p>这里更新下列表，选择最新的稳定版安装即可</p><p><img src="'+k+'" alt=""></p><p>添加node项目，选择gitee-api目录,按要去设置提交</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>项目名称：随便</p><p>启动项目：自定义启动命令 <code>node main.js</code></p><p>端口：3000 (改过的用修改的端口)</p></div><p><img src="'+w+'" alt=""></p><p><img src="'+E+'" alt=""></p><p>添加成功后，点设置-域名管理，添加一个域名</p><p><img src="'+S+'" alt=""></p><p>网站建议是开启https，先开<code>外网隐射</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>注意你的api网站和最终部署的网站，要一致；要么都是 <code>https</code> 或者 <code>http</code></p></div><p><img src="'+j+'" alt=""></p><p>添加 <code>SSL</code> 证书，建议去服务器申请免费的SSL证书</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>腾讯云为例：控制台-云产品-SSL证书-我的证书-申请免费证书</p><p>嫌麻烦也可以直接用测试证书和Let&#39;s Encrypt</p></div><p><img src="'+L+'" alt=""></p><p>访问搭建好的api网站，像这个就可以了，作者的图片挂了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>我的是 <code>https://api.yiov.com</code> ，如果不是https就是没开启</p></div><p><img src="'+I+'" alt=""></p><h2 id="_5-部署" tabindex="-1"><a class="header-anchor" href="#_5-部署" aria-hidden="true">#</a> 5.部署</h2><p>先添加一个站点，输入你的域名，数据库不用创建</p><p><img src="'+A+'" alt=""></p><p>进入目录，删除掉多余的文件</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p><code>.user.ini</code> 要删两次</p></div><p><img src="'+N+'" alt=""></p>',48),$={href:"https://github.com/n0tssss/heng",target:"_blank",rel:"noopener noreferrer"},ee=c('<p>下载上传-解压-将解压的文件剪切到域名文件夹下，就可以了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>多余的压缩包和空文件夹删掉</p></div><p><img src="'+B+'" alt=""></p><p><img src="'+C+'" alt=""></p><p><img src="'+T+'" alt=""></p><p><img src="'+V+'" alt=""></p><p>接下来我们来配置 <code>config/config.js</code> 文件，按需修改保存</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>后端地址的 <code>/api/gitee</code> 不要删，自己的地址加在前面</p></div><p><img src="'+y+'" alt=""></p><p>在gitee新建一个仓库，私有/公开都可以，建议私有</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>owner：填自己的gitee账户名</p><p>repo：填创建的仓库名</p><p>然后填入 <code>config.js</code> 中保存</p></div><p><img src="'+P+'" alt=""></p><p>访问看一下，这样就可以了</p><p><img src="'+p+'" alt=""></p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="_1-添加内容密码" tabindex="-1"><a class="header-anchor" href="#_1-添加内容密码" aria-hidden="true">#</a> 1.添加内容密码</h4><p>配置config自己设置的 <code>password</code> ，自己在后台文件夹 <code>git-api - config/config.js</code>里看</p><h4 id="_2-一直提示-记仇也要认真哦" tabindex="-1"><a class="header-anchor" href="#_2-一直提示-记仇也要认真哦" aria-hidden="true">#</a> 2.一直提示 记仇也要认真哦</h4><p>选择记仇人即可，记仇的标题旁有个 <code>你是？</code>，选择佩奇或者乔治</p><h4 id="_3-如何删掉记录" tabindex="-1"><a class="header-anchor" href="#_3-如何删掉记录" aria-hidden="true">#</a> 3.如何删掉记录</h4><p>因为使用的仓库 <code>Issues</code> ，直接进仓库去删即可</p><p><img src="'+X+'" alt=""></p><h4 id="_4-记录的时候一直转圈" tabindex="-1"><a class="header-anchor" href="#_4-记录的时候一直转圈" aria-hidden="true">#</a> 4.记录的时候一直转圈</h4><p>没有开https，再说一次无论你api网站和记录网站，要保持一致</p>',24);function se(te,ne){const n=o("ExternalLinkIcon"),a=o("RouterLink");return d(),l("div",null,[F,e("div",R,[G,e("p",null,[s("十分的感谢 "),e("a",q,[s("@N0ts"),t(n)]),s(" 大佬耐心的指导")]),z]),H,J,e("ul",null,[e("li",null,[e("p",null,[s("演示："),e("a",K,[s("https://n0ts.gitee.io/heng/"),t(n)])])]),e("li",null,[e("p",null,[s("仓库："),e("a",M,[s("https://github.com/n0tssss/heng"),t(n)]),s(" 或 "),e("a",O,[s("https://gitee.com/n0ts/heng"),t(n)])])]),e("li",null,[e("p",null,[s("后端："),e("a",Q,[s("https://gitee.com/n0ts/gitee-api"),t(n)])])])]),U,e("ul",null,[e("li",null,[e("p",null,[t(a,{to:"/website/ECS/"},{default:i(()=>[s("服务器1台")]),_:1})])]),e("li",null,[e("p",null,[t(a,{to:"/website/ECS/#%E5%9F%9F%E5%90%8D"},{default:i(()=>[s("域名1个")]),_:1})])]),e("li",null,[e("p",null,[t(a,{to:"/website/Xshell/"},{default:i(()=>[s("安装Xshell工具")]),_:1})])]),e("li",null,[e("p",null,[t(a,{to:"/website/BT/"},{default:i(()=>[s("安装宝塔面板")]),_:1})])]),e("li",null,[e("p",null,[t(a,{to:"/website/nodejs/#window%E5%AE%89%E8%A3%85"},{default:i(()=>[s("安装nodejs")]),_:1})])])]),W,e("p",null,[s("API后端："),e("a",Y,[s("https://gitee.com/n0ts/gitee-api"),t(n)])]),Z,e("p",null,[s("仓库下载："),e("a",$,[s("https://github.com/n0tssss/heng"),t(n)])]),ee])}const ie=r(D,[["render",se],["__file","index.html.vue"]]);export{ie as default};
