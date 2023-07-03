import{_ as a,r as n,o as c,c as i,a as s,b as e,d as r,w as p,e as d}from"./app-8b0f5bb2.js";const l="/assets/wordpress-01-310543c6.png",_="/assets/wordpress-02-70942023.png",h="/assets/wordpress-03-ddb53acb.png",m="/assets/wordpress-04-bb5bd653.png",w="/assets/wordpress-05-9a7ef70c.png",u="/assets/wordpress-06-4033b61d.png",g="/assets/wordpress-07-9fefd3b7.png",f="/assets/wordpress-08-f5f8822e.png",b="/assets/wordpress-09-d84d5d9d.png",x="/assets/wordpress-10-f3c473ed.png",v="/assets/wordpress-11-90ea7206.png",k="/assets/wordpress-12-fcf62134.png",E="/assets/wordpress-13-227e6805.png",L="/assets/wordpress-14-3d723b5a.png",B="/assets/wordpress-15-12820e4e.png",C="/assets/wordpress-16-7f215978.png",N="/assets/wordpress-17-c9348439.png",S={},V=s("h1",{id:"wordpress详细安装教程",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#wordpress详细安装教程","aria-hidden":"true"},"#"),e(" wordpress详细安装教程")],-1),F=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"更新时间"),s("p",null,"最近更新：2022-7-18")],-1),I={href:"https://cn.wordpress.org/",target:"_blank",rel:"noopener noreferrer"},T=s("p",null,[s("img",{src:l,alt:""})],-1),P=s("h2",{id:"准备工作",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),e(" 准备工作")],-1),R=s("li",null,[s("p",null,"足够的耐心")],-1),X=s("h2",{id:"_1-下载wordpress",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-下载wordpress","aria-hidden":"true"},"#"),e(" 1.下载wordpress")],-1),y={href:"https://cn.wordpress.org/",target:"_blank",rel:"noopener noreferrer"},D=d('<div class="custom-container tip"><p class="custom-container-title">说明</p><p>下载就可以了，不要解压！一会用</p></div><p><img src="'+_+'" alt=""></p><h2 id="_2-添加站点" tabindex="-1"><a class="header-anchor" href="#_2-添加站点" aria-hidden="true">#</a> 2.添加站点</h2><p>打开宝塔面板后，点 网站-添加站点</p><p><img src="'+h+'" alt=""></p><p>域名填入你买的域名，FTP不创建，数据库MySQL，密码可以自己改的好记一点，提交</p><p><img src="'+m+'" alt=""></p><p>这样站点就创建完成了</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>要记一下，等会要用</p></div><p><img src="'+w+'" alt=""></p><h2 id="_3-上传wordpress" tabindex="-1"><a class="header-anchor" href="#_3-上传wordpress" aria-hidden="true">#</a> 3.上传wordpress</h2><p>文件 <code>/www/wwwroot/dh.***.com</code> 目录，把里面的文件都删掉</p><p><img src="'+u+'" alt=""></p><p>上传下载好的wordpress压缩包，完成后右键解压</p><p><img src="'+g+'" alt=""></p><p><img src="'+f+'" alt=""></p><p>但是，这样我们站点只有个文件夹，而不是整个wordpress的文件</p><p>我们进文件夹，把里面文件全部剪切出来</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>事后记得删除空文件夹和压缩包哦</p></div><p><img src="'+b+'" alt=""></p><p><img src="'+x+'" alt=""></p><p><img src="'+v+'" alt=""></p><h2 id="_4-安装wordpress" tabindex="-1"><a class="header-anchor" href="#_4-安装wordpress" aria-hidden="true">#</a> 4.安装wordpress</h2><p>访问你的域名即可，我的是<code>dh.***.com</code>，你们按自己的域名来</p><p><img src="'+k+'" alt=""></p><p>数据库名和用户名是一样的，密码自己设的，后面2项默认不用改</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>数据主机也可以填IP，表前缀除非有多个wordpress在数据库，避免冲突就改下，否则默认</p></div><p><img src="'+E+'" alt=""></p><p><img src="'+L+'" alt=""></p><p>这样就可以了，运行程序，填写站点信息，自己填好就行了</p><p><img src="'+B+'" alt=""></p><p>完成后邮箱也会受到消息，我们点登录</p><p><img src="'+C+'" alt=""></p><p>这样就完成了wordpress的所有安装</p><p>进入了后台，外观-主题里找 或 上传主题</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>我会整理一些自己喜欢的主题进来，进行参考</p></div>',36),M={href:"http://***.com/wp-admin/",target:"_blank",rel:"noopener noreferrer"},Q=s("p",null,[s("img",{src:N,alt:""})],-1),j=s("h2",{id:"特别鸣谢",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#特别鸣谢","aria-hidden":"true"},"#"),e(" 特别鸣谢")],-1),q={href:"https://cn.wordpress.org/",target:"_blank",rel:"noopener noreferrer"};function z(A,G){const t=n("ExternalLinkIcon"),o=n("RouterLink");return c(),i("div",null,[V,F,s("p",null,[e("wordpress官网："),s("a",I,[e("https://cn.wordpress.org/"),r(t)])]),T,P,s("ul",null,[s("li",null,[s("p",null,[r(o,{to:"/website/ECS/"},{default:p(()=>[e("服务器1台")]),_:1})])]),s("li",null,[s("p",null,[r(o,{to:"/website/ECS/#%E5%9F%9F%E5%90%8D"},{default:p(()=>[e("域名1个")]),_:1})])]),s("li",null,[s("p",null,[r(o,{to:"/website/Xshell/"},{default:p(()=>[e("安装Xshell工具")]),_:1})])]),s("li",null,[s("p",null,[r(o,{to:"/website/BT/"},{default:p(()=>[e("安装宝塔面板")]),_:1})])]),R]),X,s("p",null,[e("进入 "),s("a",y,[e("wordpress中国官网"),r(t)]),e(" ，点击右上角获取 - 下载并安装 - 下载")]),D,s("p",null,[e("后台的地址："),s("a",M,[e("http://***.com/wp-admin/"),r(t)])]),Q,j,s("ul",null,[s("li",null,[s("a",q,[e("@wordpress中国"),r(t)])])])])}const J=a(S,[["render",z],["__file","index.html.vue"]]);export{J as default};
