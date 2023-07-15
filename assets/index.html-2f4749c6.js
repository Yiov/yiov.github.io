import{_ as i,r as t,o as c,c as d,a as s,b as a,d as e,e as l}from"./app-3acf8c5f.js";const r="/assets/git-01-3d6e1804.png",p="/assets/git-02-010dc14b.png",o="/assets/git-03-f0b5fa4a.png",m="/assets/git-04-6bd53789.png",u="/assets/git-05-206010fe.png",v="/assets/git-06-ab53e746.png",g="/assets/git-07-d77fb1c8.png",h="/assets/git-08-956d4965.png",b="/assets/git-09-c1cca724.png",_="/assets/git-10-32e3dbd6.png",k="/assets/git-11-d0d23690.png",f="/assets/git-12-5f42daa9.png",x="/assets/git-13-5b60e608.png",q="/assets/git-14-c47ba810.png",S="/assets/git-15-8cd41459.png",y="/assets/git-16-cd41b4d9.png",w="/assets/git-17-6c00b44d.png",H="/assets/git-18-577284e2.png",G="/assets/git-19-3817549d.png",N="/assets/git-20-b239a166.png",B="/assets/git-21-688577d8.png",E="/assets/git-22-3efb30eb.png",P="/assets/git-23-4db024f2.png",D="/assets/git-24-7c263852.png",I="/assets/git-25-59840832.png",V="/assets/git-26-2dfb562e.png",z="/assets/git-27-733acae8.png",A="/assets/git-28-a883ff81.png",C="/assets/git-29-3e5daee8.png",L="/assets/git-30-e4a38725.png",F="/assets/git-31-23b3624a.png",K={},M=s("h1",{id:"git使用及上传代码到仓库",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#git使用及上传代码到仓库","aria-hidden":"true"},"#"),a(" git使用及上传代码到仓库")],-1),R=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"更新时间"),s("p",null,"最近更新：2021-9-21")],-1),T=s("p",null,"网上教程对我这种小白，越看越头疼。于是自己边摸索，边写了这篇教程",-1),U={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},Y={class:"custom-container tip"},j=s("p",{class:"custom-container-title"},"说明",-1),J={href:"https://www.githubs.cn/post/git-tutorial",target:"_blank",rel:"noopener noreferrer"},O=s("p",null,[s("img",{src:r,alt:""})],-1),Q=s("h2",{id:"_1-下载安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-下载安装","aria-hidden":"true"},"#"),a(" 1.下载安装")],-1),W=s("p",null,"根据自己的系统下载git，本次演示仅为windows",-1),X={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},Z=l('<p><img src="'+p+'" alt=""></p><p>安装的时候，这里要勾选</p><p><img src="'+o+'" alt=""></p><p>下载安装完成后 选择Launch Git Bash启动</p><p><img src="'+m+'" alt=""></p><h2 id="_2-设置账户" tabindex="-1"><a class="header-anchor" href="#_2-设置账户" aria-hidden="true">#</a> 2.设置账户</h2><p>打开git后是这样的界面</p><p><img src="'+u+`" alt=""></p><p>名字修改一下，再粘贴</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#&quot;DzPian&quot;更改成你github用户名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;DzPian&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>鼠标右键-Paste粘贴，<code>不要用ctrl v</code></p><p><img src="`+v+'" alt=""></p><p><img src="'+g+`" alt=""></p><p>回车，然后设置邮箱</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#&quot;490857007@qq.com&quot;这里填你的邮箱</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;490857007@qq.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><p>设置的用处就是，为了知道远程仓库是谁上传的</p><p>有没有设置成功，可以输入命令查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看身份</span>
<span class="token function">git</span> config user.name
<span class="token function">git</span> config user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-新建本地仓库" tabindex="-1"><a class="header-anchor" href="#_3-新建本地仓库" aria-hidden="true">#</a> 3.新建本地仓库</h2><p>自己在任意盘符创建一个文件夹，命名自己取</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>例：我在F盘新建了一个文件夹，命名为Github，然后再创建子文件夹copydog</p></div><p><img src="`+b+`" alt=""></p><p><code>copydog</code> 就是我的仓库项目名，我们cd进文件夹</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>斜杠不能掉，大小写无所谓</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#f是F盘，自己根据自己的盘符和文件夹改</span>
<span class="token builtin class-name">cd</span> /f/github/copydog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者简单粗暴git bash文件夹，空白处，鼠标右键- <code>Git Bash Here</code> ，一样也能进入页面</p><p><img src="`+_+`" alt=""></p><p>我们初始化项目git init就可以远程上传了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><p>注意这里后面的蓝色 <code>master</code> 分支要转换成 <code>main</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>以前的github默认是master分支，为避免这个词产生歧义，2020年10月改成了main</p><p>而git工具还是默认的master，我们先转换下分支了才能正确上传</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+f+'" alt=""></p><p>创建完成后会在本地生成一个.git的隐藏文件</p><p><img src="'+x+'" alt=""></p><p>看不到的是因为系统默认隐藏了文件，查看里面打开即可，不打开也没有关系，以免你误删</p><p><img src="'+q+`" alt=""></p><p>通过 ls -al 来查看一下，到这里本地仓库就建立完成了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls -al
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+S+`" alt=""></p><h2 id="_4-创建连接" tabindex="-1"><a class="header-anchor" href="#_4-创建连接" aria-hidden="true">#</a> 4.创建连接</h2><p>用 <code>~/.ssh</code> 检查一下是否有SSH Key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/.ssh

<span class="token comment">#显示ssh: Is a directory，表示有</span>
<span class="token comment">#显示ssh: No such file or directory，表示没有</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+y+`" alt=""></p><p>没有就输入命令创建SSH Key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#&quot;490857007@qq.com&quot;填你自己的邮箱</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;490857007@qq.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>直接3次回车即可</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>第1次问你保存在哪，默认就行，回车</p><p>第2次问你密码，默认空白，回车</p><p>第3次要你确认密码，默认空白，回车</p></div><p><img src="`+w+'" alt=""></p><p>刚才的 SSH key 代码默认生成 <code>id_rsa</code> 和 <code>id_rsa.pub</code> 两个秘钥文件</p><p>在 <code>C:\\Users\\Administrator\\.ssh</code> 目录下找到 <code>id_rsa.pub</code> 鼠标右键-用记事本打开</p><p><img src="'+H+'" alt=""></p><p>打开Github，右上角-头像-设置</p><p><img src="'+G+'" alt=""></p><p>点击 SSH与GPG公钥，创建New SSH key</p><p><img src="'+N+'" alt=""></p><p>标题随便起，key是刚刚生成的SSH key，全选了，复制粘贴进去</p><p><img src="'+B+'" alt=""></p><p>授权，输入你github的登录密码</p><p><img src="'+E+'" alt=""></p><p>SSH key就创建好了，邮箱也会收到通知</p><p><img src="'+P+'" alt=""></p><p><img src="'+D+`" alt=""></p><p>在git Bash 中输入以下代码，测试一下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#默认git@github.com不要改</span>
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里问你是否继续连接，输入yes，回车</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>You’ve successfully authenticated, but GitHub does not provide shell access.</p><p>已经验证，但还不能shell访问，我们继续</p></div><p><img src="`+I+'" alt=""></p><h2 id="_5-添加远程仓库" tabindex="-1"><a class="header-anchor" href="#_5-添加远程仓库" aria-hidden="true">#</a> 5.添加远程仓库</h2><p>进入自己的仓库，点击SSH连接并复制</p><p><img src="'+V+`" alt=""></p><p>然后，更改下方代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin 这里是你的SSH连接地址

<span class="token comment">#如：git remote add origin git@github.com:DzPian/copydog.git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+z+`" alt=""></p><p>输入git remote -v查看是否成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment">#push是推送，fetch是获取，有就是正常</span>

<span class="token comment">#git remote remove origin</span>
<span class="token comment">#断开仓库连接，慎用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+A+`" alt=""></p><h2 id="_6-上传" tabindex="-1"><a class="header-anchor" href="#_6-上传" aria-hidden="true">#</a> 6.上传</h2><p>提交上传很简单，add后面的 <code>.</code> 不能漏掉</p><div class="custom-container tip"><p class="custom-container-title">前提条件</p><p>你在本地仓库放了新文件，脚本或者文件夹都可以</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment">#git add 只将修改的文件添加缓存区</span>
<span class="token comment">#git add +文件名.文件类型 ，将某个文件加到缓存区</span>
<span class="token comment">#git add +文件名.文件类型 ... 文件名.文件类型 ，将n个文件添加到缓存区</span>
<span class="token comment">#git add xx文件夹/*.html 将xx文件夹下的所有的html文件添加到缓存区。</span>
<span class="token comment">#git add *hhh  将以hhh结尾的文件的所有修改添加到暂存区</span>
<span class="token comment">#git add Hello*  将所有以Hello开头的文件的修改添加到暂存区</span>
<span class="token comment">#git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)</span>
<span class="token comment">#git add . 提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件</span>
<span class="token comment">#…</span>
<span class="token comment">#git add -A 提交所有变化。git add前几条都可以记不住，这个必须记住！！！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+C+`" alt=""></p><p>添加描述</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> “这里描述上传了什么”

<span class="token comment">#如：git commit -m “描述文件README”</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+L+`" alt=""></p><p>推送到远程仓库，去网页版刷新一下，就能看到了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>默认分支是main，除非你想创建其他分支</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#第1次推送使用-u，之后就不用了</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main

<span class="token comment">#常用推送命令</span>
<span class="token function">git</span> push origin main

<span class="token comment">#强制推送，报错懒得处理，建议少用</span>
<span class="token comment">#git push origin main-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+F+`" alt=""></p><h2 id="_7-常见问题" tabindex="-1"><a class="header-anchor" href="#_7-常见问题" aria-hidden="true">#</a> 7.常见问题</h2><h4 id="_1-分支错误" tabindex="-1"><a class="header-anchor" href="#_1-分支错误" aria-hidden="true">#</a> 1. 分支错误</h4><p>原来的master变成了 <code>master rebase 1/2</code> 之类的，用abort回退即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">--abort</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出现 <code>main|MERGING</code> ，回退</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token function">head</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-删除分支" tabindex="-1"><a class="header-anchor" href="#_2-删除分支" aria-hidden="true">#</a> 2. 删除分支</h4><p>如果你上传错了分支，不是main而是传到了分支，在网页仓库点分支删除</p><h4 id="_3-修改注释" tabindex="-1"><a class="header-anchor" href="#_3-修改注释" aria-hidden="true">#</a> 3. 修改注释</h4><p>修改后，别忘了push</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#修改内容</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;你要修改的内容&quot;</span>

<span class="token comment">#更新推送</span>
<span class="token function">git</span> push origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-修改文件名" tabindex="-1"><a class="header-anchor" href="#_4-修改文件名" aria-hidden="true">#</a> 4. 修改文件名</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#修改内容</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;你要修改的文件名&quot;</span>

<span class="token comment">#更新推送</span>
<span class="token function">git</span> push origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-查看历史提交" tabindex="-1"><a class="header-anchor" href="#_5-查看历史提交" aria-hidden="true">#</a> 5. 查看历史提交</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-远程删除文件" tabindex="-1"><a class="header-anchor" href="#_6-远程删除文件" aria-hidden="true">#</a> 6. 远程删除文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#删除文件</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> 你要删除的文件名

<span class="token comment">#删除说明</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;注释一下你删除了什么&quot;</span>

<span class="token comment">#更新推送</span>
<span class="token function">git</span> push origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-创建分支" tabindex="-1"><a class="header-anchor" href="#_7-创建分支" aria-hidden="true">#</a> 7. 创建分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#用英文</span>
<span class="token function">git</span> branch 这里写分支的名字

<span class="token comment">#比如：git branch master</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-仓库克隆" tabindex="-1"><a class="header-anchor" href="#_8-仓库克隆" aria-hidden="true">#</a> 8. 仓库克隆</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone 你的SSH仓库地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,112);function $(ss,as){const n=t("ExternalLinkIcon");return c(),d("div",null,[M,R,T,s("p",null,[a("官网："),s("a",U,[a("https://git-scm.com/"),e(n)])]),s("div",Y,[j,s("p",null,[a("Git入门教程:"),s("a",J,[a("https://www.githubs.cn/post/git-tutorial"),e(n)])])]),O,Q,W,s("p",null,[s("a",X,[a("https://git-scm.com/downloads"),e(n)])]),Z])}const es=i(K,[["render",$],["__file","index.html.vue"]]);export{es as default};
