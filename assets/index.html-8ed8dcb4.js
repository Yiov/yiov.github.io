import{_ as i,r as p,o as c,c as r,a,b as s,d as n,w as o,e as l}from"./app-64061f40.js";const d="/assets/halo-f74487f8.png",u="/assets/halo-01-48e6de4e.png",h="/assets/halo-02-6b08dd25.png",m="/assets/halo-03-91810152.png",v="/assets/halo-04-1f22e00f.png",b="/assets/halo-05-50c4f24b.png",_="/assets/halo-06-b72fcb67.png",k="/assets/halo-07-d340e077.png",g="/assets/halo-08-d1907fc0.png",f="/assets/halo-09-8256ac02.png",x="/assets/halo-10-3c9ee775.png",y="/assets/halo-11-c81e29cf.png",w="/assets/halo-12-97538240.png",S="/assets/halo-13-73f06478.png",z="/assets/halo-14-ae7763ea.png",H="/assets/halo-15-87c0db4f.png",E="/assets/halo-16-c399b2cd.png",L={},N=l('<h1 id="halo博客的搭建" tabindex="-1"><a class="header-anchor" href="#halo博客的搭建" aria-hidden="true">#</a> Halo博客的搭建</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2022-3-17</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>一款现代化的开源博客/CMS系统，界面非常美观</p>',4),P={href:"https://halo.run/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://demo.halo.run/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/halo-dev/halo/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://docs.halo.run/",target:"_blank",rel:"noopener noreferrer"},X=a("p",null,[a("img",{src:d,alt:""})],-1),$=a("h2",{id:"准备工作",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),s(" 准备工作")],-1),B={class:"custom-container tip"},I=a("p",{class:"custom-container-title"},"说明",-1),R={href:"https://bbs.halo.run/d/312-halo/9",target:"_blank",rel:"noopener noreferrer"},T=l(`<h2 id="_1-下载配置文件" tabindex="-1"><a class="header-anchor" href="#_1-下载配置文件" aria-hidden="true">#</a> 1.下载配置文件</h2><p>Xshell登录服务器，创建工作目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/.halo <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ~/.halo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载示例配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://dl.halo.run/config/application-template.yaml <span class="token parameter variable">-O</span> ./application.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+u+'" alt=""></p>',6),V={href:"https://docs.halo.run/getting-started/config/",target:"_blank",rel:"noopener noreferrer"},D=l(`<div class="custom-container tip"><p class="custom-container-title">说明</p><p>可以用下面命令，也可以用宝塔进目录 <code>/root/.halo</code> 修改</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> application.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-配置-端口" tabindex="-1"><a class="header-anchor" href="#_1-1-配置-端口" aria-hidden="true">#</a> 1.1 配置：端口</h3><p>默认端口8090，可以修改，但建议不要改成80端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server:
  port: <span class="token number">8090</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-配置-h2数据库" tabindex="-1"><a class="header-anchor" href="#_1-2-配置-h2数据库" aria-hidden="true">#</a> 1.2 配置：H2数据库</h3><p>Halo 目前支持 H2 及 MySQL 数据库，推荐使用H2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>spring:
  datasource: 
    driver-class-name: org.h2.Driver
    url: jdbc:h2:file:~/.halo/db/halo
    username: admin
    password: <span class="token number">123456</span>
  h2:
    console:
      settings:
        web-allow-others: <span class="token boolean">false</span>
      path: /h2-console
      enabled: <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p><code>url</code> 为默认的数据本地存储地址，请勿修改</p><p>数据库账户和密码默认为 <code>admin</code> 和 <code>123456</code>，请修改账密</p><p><code>h2</code> 的配置使用默认，如果需要手动修改请参考官方配置</p></div><h3 id="_1-3-可选配置-gzip压缩" tabindex="-1"><a class="header-anchor" href="#_1-3-可选配置-gzip压缩" aria-hidden="true">#</a> 1.3 可选配置：Gzip压缩</h3><p>启用压缩对于减少带宽和加快页面加载非常有用</p><p>在未使用 <code>Nginx</code> 或 <code>Caddy</code> 等反向代理服务器时(反向代理服务器通常是默认开启 Gzip 的)，可以考虑开启，将 <code>false</code> 改成 <code>true</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Response data gzip.</span>
compression:
  enabled: <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-可选配置-压缩" tabindex="-1"><a class="header-anchor" href="#_1-4-可选配置-压缩" aria-hidden="true">#</a> 1.4 可选配置：压缩</h3><p>Halo 支持自定义后台管理的根路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>halo:
<span class="token comment"># Your admin client path is https://your-domain/{admin-path}</span>
admin-path: admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-可选配置-缓存" tabindex="-1"><a class="header-anchor" href="#_1-5-可选配置-缓存" aria-hidden="true">#</a> 1.5 可选配置：缓存</h3><p>支持两种策略：</p><p><code>memory</code> 将数据缓存至内存，重启服务缓存将清空</p><p><code>level</code> 将数据缓存至本地，重启服务不会清空缓存</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>halo:
<span class="token comment"># memory or level</span>
cache: memory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-拉取halo镜像" tabindex="-1"><a class="header-anchor" href="#_2-拉取halo镜像" aria-hidden="true">#</a> 2.拉取Halo镜像</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull halohub/halo:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><h2 id="_3-创建容器" tabindex="-1"><a class="header-anchor" href="#_3-创建容器" aria-hidden="true">#</a> 3.创建容器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> ~/.halo:/root/.halo <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8090</span>:8090 <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> halo <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>unless-stopped <span class="token punctuation">\\</span>
halohub/halo:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p><code>-it</code> 开启输入功能并连接伪终端</p><p><code>-d</code> 后台运行容器</p><p><code>-v</code> 工作目录映射，宿主机路径:/root/.halo，后者不能修改</p><p><code>-p</code> 端口映射，格式为 主机(宿主)端口:容器端口 ，可在 <code>application.yaml</code> 配置</p><p><code>--name</code> 为容器指定一个名称</p><p><code>--restart</code> 建议设置为 unless-stopped，在 Docker 启动的时候自动启动 Halo 容器</p></div><p><img src="`+m+`" alt=""></p><p>如果你想域名访问网站，请看完所有步骤！！！</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>不想域名访问用IP+端口即可</p></div><p>访问前请开启8090端口</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>服务器还需去控制台-防火墙安全组放行</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8090</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-安装nginx" tabindex="-1"><a class="header-anchor" href="#_4-安装nginx" aria-hidden="true">#</a> 4.安装Nginx</h2><p>宝塔软件商店搜索<code>Nginx</code>并安装</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>已装的无视</p></div><p><img src="`+v+'" alt=""></p><p>网站-添加站点-输入域名，FTP 和 数据库均不创建数据库，PHP纯静态</p><p><img src="'+b+'" alt=""></p><h2 id="_5-设置ssl" tabindex="-1"><a class="header-anchor" href="#_5-设置ssl" aria-hidden="true">#</a> 5.设置SSL</h2><p>可以用宝塔的，也可以用服务器的，以腾讯服务器为例</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>SSL证书可以实现加密传输，也可以消除不安全网站提示</p></div><p>搜索SSL证书进入，申请免费证书</p><p><img src="'+_+'" alt=""></p><p><img src="'+k+'" alt=""></p><p>填写域名信息，即可申请成功后，下载Nginx格式</p><p><img src="'+g+'" alt=""></p><p><img src="'+f+'" alt=""></p><p>宝塔网站-域名-SSL-其他证书，这里需要 <code>KEY</code> 和 <code>PEM</code></p><p>我们从下载的安装包里找到对应文件，记事本方式打开复制粘贴进去，保存</p><p><img src="'+x+'" alt=""></p><h2 id="_6-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_6-修改配置文件" aria-hidden="true">#</a> 6.修改配置文件</h2><p>宝塔网站-域名-配置文件，把下面这一段加在第一行</p><p><img src="'+y+`" alt=""></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>8090为运行端口</p></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>upstream halo <span class="token punctuation">{</span>
    server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8090</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下拉找到location，修改成为下面这样</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">#修改前</span>
location <span class="token operator">~</span> <span class="token operator">.</span><span class="token operator">*</span>\\<span class="token operator">.</span><span class="token punctuation">(</span><span class="token class-name">gif</span><span class="token operator">|</span><span class="token class-name">jpg</span><span class="token operator">|</span><span class="token class-name">jpeg</span><span class="token operator">|</span><span class="token class-name">png</span><span class="token operator">|</span><span class="token class-name">bmp</span><span class="token operator">|</span><span class="token class-name">swf</span><span class="token punctuation">)</span>$
<span class="token punctuation">{</span>
    proxy_pass http<span class="token punctuation">:</span><span class="token comment">//halo;</span>
    expires      <span class="token number">30</span>d<span class="token punctuation">;</span>
    error_log <span class="token operator">/</span>dev<span class="token operator">/</span><span class="token constant">null</span><span class="token punctuation">;</span>
    access_log off<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">#修改后</span>
location <span class="token operator">~</span> <span class="token operator">.</span><span class="token operator">*</span>\\<span class="token operator">.</span><span class="token punctuation">(</span><span class="token class-name">js</span><span class="token operator">|</span><span class="token class-name">css</span><span class="token punctuation">)</span><span class="token operator">?</span>$
<span class="token punctuation">{</span>
    proxy_pass http<span class="token punctuation">:</span><span class="token comment">//halo;</span>
    expires      <span class="token number">12</span>h<span class="token punctuation">;</span>
    error_log <span class="token operator">/</span>dev<span class="token operator">/</span><span class="token constant">null</span><span class="token punctuation">;</span>
    access_log off<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在js|css下方，<code>access_log</code>之上添加这一整段，保存即可</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>location <span class="token operator">/</span> <span class="token punctuation">{</span>
    proxy_pass http<span class="token punctuation">:</span><span class="token comment">//halo;</span>
    proxy_set_header <span class="token class-name type-declaration">HOST</span> <span class="token variable">$host</span><span class="token punctuation">;</span>
    proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span><span class="token class-name type-declaration">Proto</span> <span class="token variable">$scheme</span><span class="token punctuation">;</span>
    proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Real<span class="token operator">-</span><span class="token class-name type-declaration">IP</span> <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span><span class="token keyword">For</span> <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考示例如图</p><p><img src="`+w+'" alt=""></p><h2 id="_7-访问域名并安装" tabindex="-1"><a class="header-anchor" href="#_7-访问域名并安装" aria-hidden="true">#</a> 7.访问域名并安装</h2><p>访问域名成功进入安装引导界面，自行填写信息即可</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这里的账密是后台登录用的，自己记好</p></div><p><img src="'+S+'" alt=""></p><p>后台登录：<code>http://域名/admin</code></p><p><img src="'+z+'" alt=""></p><h2 id="_8-更换主题" tabindex="-1"><a class="header-anchor" href="#_8-更换主题" aria-hidden="true">#</a> 8.更换主题</h2>',70),M={href:"https://halo.run/themes.html",target:"_blank",rel:"noopener noreferrer"},G=a("p",null,[a("img",{src:H,alt:""})],-1),O=a("p",null,"启用上传的主题包即可，更新方法也是一样",-1),Y=a("p",null,[a("img",{src:E,alt:""})],-1),K=a("h2",{id:"特别鸣谢",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#特别鸣谢","aria-hidden":"true"},"#"),s(" 特别鸣谢")],-1),Q={href:"https://github.com/halo-dev/halo/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://halo.run/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/xzhuz/halo-theme-xue/",target:"_blank",rel:"noopener noreferrer"};function J(U,W){const e=p("ExternalLinkIcon"),t=p("RouterLink");return c(),r("div",null,[N,a("p",null,[s("官网："),a("a",P,[s("https://halo.run/"),n(e)])]),a("p",null,[s("演示："),a("a",j,[s("https://demo.halo.run/"),n(e)])]),a("p",null,[s("项目："),a("a",C,[s("https://github.com/halo-dev/halo/"),n(e)])]),a("p",null,[s("文档："),a("a",F,[s("https://docs.halo.run/"),n(e)])]),X,$,a("ul",null,[a("li",null,[a("p",null,[n(t,{to:"/website/ECS/"},{default:o(()=>[s("服务器1台")]),_:1})])]),a("li",null,[a("p",null,[n(t,{to:"/website/ECS/#%E5%9F%9F%E5%90%8D"},{default:o(()=>[s("域名1个")]),_:1})])]),a("li",null,[a("p",null,[n(t,{to:"/website/Xshell/"},{default:o(()=>[s("安装Xshell工具")]),_:1})])]),a("li",null,[a("p",null,[n(t,{to:"/website/BT/"},{default:o(()=>[s("安装宝塔面板")]),_:1})])]),a("li",null,[a("p",null,[n(t,{to:"/website/docker/"},{default:o(()=>[s("安装docker")]),_:1})])])]),a("div",B,[I,a("p",null,[s("非docker安装需要安装java环境，"),a("a",R,[s("请参考此文"),n(e)])])]),T,a("p",null,[s("编辑配置文件，"),a("a",V,[s("☛ 官方配置文档参考"),n(e)])]),D,a("p",null,[s("主题商店："),a("a",M,[s("https://halo.run/themes.html"),n(e)])]),G,O,Y,K,a("ul",null,[a("li",null,[a("p",null,[a("a",Q,[s("halo"),n(e)])])]),a("li",null,[a("p",null,[a("a",q,[s("halo官网"),n(e)])])]),a("li",null,[a("p",null,[a("a",A,[s("xzhuz"),n(e)]),s("「雪主题」")])])])])}const aa=i(L,[["render",J],["__file","index.html.vue"]]);export{aa as default};
