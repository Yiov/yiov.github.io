import{_ as d,M as t,p as l,q as c,R as n,t as a,N as s,a1 as i}from"./framework-e03faf0e.js";const p="/assets/markdown-01-04a4713a.png",r={},o=i('<h1 id="markdown的简单用法" tabindex="-1"><a class="header-anchor" href="#markdown的简单用法" aria-hidden="true">#</a> Markdown的简单用法</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2022-1-7</p></div><h2 id="关于markdown" tabindex="-1"><a class="header-anchor" href="#关于markdown" aria-hidden="true">#</a> 关于Markdown</h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。</p></div><p>Markdown语法简明便捷，既弥补了传统纯文本缺少样式的不足，又降低了传统 Word、HTML 等样式文本的技术门槛，目前它已是全球最大的技术分享网站 GitHub 和技术问答网站 StackOverFlow 的御用书写格式</p><h2 id="演示工具" tabindex="-1"><a class="header-anchor" href="#演示工具" aria-hidden="true">#</a> 演示工具</h2><p>当然演示的软件和网站有很多，你自己去度娘找也可以</p>',7),u={href:"https://typoraio.cn/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://zh.mweb.im/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/gsantner/markor/releases",target:"_blank",rel:"noopener noreferrer"},b={href:"https://marked.js.org/demo/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://tool.lu/markdown/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.xkboke.com/web-inn/onlineTool/markdown-online.html",target:"_blank",rel:"noopener noreferrer"},x=i(`<h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2><p>以 <code>#</code> 号开头，后面至少一个空格，和H1~H6一样的</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 一级标题</span>
<span class="token title important"><span class="token punctuation">##</span> 二级标题</span>
<span class="token title important"><span class="token punctuation">###</span> 三级标题</span>
<span class="token title important"><span class="token punctuation">####</span> 四级标题</span>
<span class="token title important"><span class="token punctuation">#####</span> 五级标题</span>
<span class="token title important"><span class="token punctuation">######</span> 六级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点击查看输出</summary><h1 id="一级标题" tabindex="-1"><a class="header-anchor" href="#一级标题" aria-hidden="true">#</a> 一级标题</h1><h2 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题" aria-hidden="true">#</a> 二级标题</h2><h3 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题" aria-hidden="true">#</a> 三级标题</h3><h4 id="四级标题" tabindex="-1"><a class="header-anchor" href="#四级标题" aria-hidden="true">#</a> 四级标题</h4><h5 id="五级标题" tabindex="-1"><a class="header-anchor" href="#五级标题" aria-hidden="true">#</a> 五级标题</h5><h6 id="六级标题" tabindex="-1"><a class="header-anchor" href="#六级标题" aria-hidden="true">#</a> 六级标题</h6></details><p>还有另一种写法，也可以，不过仅限于一级和二级</p><p>输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>标题1的下方加等号
=

标题2的下方加横杠
-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点击查看输出</summary><h1 id="标题1的下方加等号" tabindex="-1"><a class="header-anchor" href="#标题1的下方加等号" aria-hidden="true">#</a> 标题1的下方加等号</h1><h2 id="标题2的下方加横杠" tabindex="-1"><a class="header-anchor" href="#标题2的下方加横杠" aria-hidden="true">#</a> 标题2的下方加横杠</h2></details><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><p>列表用的比较多了，逐一来讲</p><h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h3><p>以 <code>*</code> 或 <code>+</code> 或 <code>-</code> 开头，后面至少一个空格，标识为实心●圆点</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">*</span> 这是第1句
<span class="token list punctuation">+</span> 这是第2句
<span class="token list punctuation">-</span> 这是第3句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><ul><li>这是第1句</li></ul><ul><li>这是第2句</li></ul><ul><li>这是第3句</li></ul><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3><p>全部使用 <code>1.</code> 即可，生成的时候会自增</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>也可手动使用 <code>1.</code> 、<code>2.</code> 、<code>3.</code></p></div><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 我的天哪
<span class="token list punctuation">1.</span> 这么神奇
<span class="token list punctuation">1.</span> 小岳岳
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><ol><li>我的天哪</li><li>这么神奇</li><li>小岳岳</li></ol><h3 id="层级列表" tabindex="-1"><a class="header-anchor" href="#层级列表" aria-hidden="true">#</a> 层级列表</h3><p>和无序列表一样，使用 <code>*</code> 号开头</p><p>每下一层比上一层多 <strong>2个空格</strong></p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>第一层前面<strong>不可超过3个空格</strong></p><p>第一级的标识为实心●圆点，第二级的标识为空心○圆点，第3级以后的标识均为实心■方点</p></div><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">*</span> 中国
  <span class="token list punctuation">*</span> 北京
    <span class="token list punctuation">*</span> 海淀区
      <span class="token list punctuation">*</span> 百度
  <span class="token list punctuation">*</span> 浙江
    <span class="token list punctuation">*</span> 杭州
      <span class="token list punctuation">*</span> 阿里巴巴
  <span class="token list punctuation">*</span> 广东
    <span class="token list punctuation">*</span> 深圳
      <span class="token list punctuation">*</span> 腾讯
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><ul><li>中国 <ul><li>北京 <ul><li>海淀区 <ul><li>百度</li></ul></li></ul></li><li>浙江 <ul><li>杭州 <ul><li>阿里巴巴</li></ul></li></ul></li><li>广东 <ul><li>深圳 <ul><li>腾讯</li></ul></li></ul></li></ul></li></ul><h3 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表" aria-hidden="true">#</a> 任务列表</h3><p>和无序列表一样，使用 <code>*</code> 号开头</p><p>格式如下， <code>[ ]</code> 里面是空格，若完成了， <code>[ ]</code> 里的空格换成X</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">*</span> [ ] 吃饭
<span class="token list punctuation">*</span> [ ] 睡觉
<span class="token list punctuation">*</span> [x] 打豆豆
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+p+`" alt=""></p><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p>引用比较简单，符号是 <code>&gt;</code>，可以多层嵌套</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> 青玉案·元夕
<span class="token blockquote punctuation">&gt;&gt;</span> 辛弃疾
<span class="token blockquote punctuation">&gt;&gt;&gt;</span>东风夜放花千树。更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。
<span class="token blockquote punctuation">&gt;&gt;&gt;</span>蛾儿雪柳黄金缕。笑语盈盈暗香去。众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><blockquote><p>青玉案·元夕</p><blockquote><p>辛弃疾</p><blockquote><p>东风夜放花千树。更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。 蛾儿雪柳黄金缕。笑语盈盈暗香去。众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。</p></blockquote></blockquote></blockquote><h2 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h2><p>字体的格式也有些多，放在一起吧，符号后无空格</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token italic"><span class="token punctuation">*</span><span class="token content">斜体字</span><span class="token punctuation">*</span></span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">粗体字</span><span class="token punctuation">**</span></span>

<span class="token strike"><span class="token punctuation">~</span><span class="token content">删除线</span><span class="token punctuation">~</span></span>

<span class="token code-snippet code keyword">\`高亮\`</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">&gt;</span></span>下划线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border-bottom:2px dashed yellow;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>加下划线用的是html代码<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><em>斜体字</em></p><p><strong>粗体字</strong></p><p>~删除线~</p><p><code>高亮</code></p><p><u>下划线</u></p><p><span style="border-bottom:2px dashed yellow;">加下划线用的是html代码</span></p><h2 id="引用-1" tabindex="-1"><a class="header-anchor" href="#引用-1" aria-hidden="true">#</a> 引用</h2><p>此方法，适用于图片/视频/音频等，有链接都可以</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">替代文字</span>](<span class="token url">图片地址</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p>注：[ ]中括号的替代文字可留空</p></div><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">小岳岳</span>](<span class="token url">https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181204%2F86b842eb7b6648cca02e9254c751041d.jpeg&amp;refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&amp;app=2002&amp;size=f9999,10000&amp;q=a80&amp;n=0&amp;g=0n&amp;fmt=jpeg?sec=1644145498&amp;t=5d9dfddd717d73b1b129cd0cec967f92</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p><p><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181204%2F86b842eb7b6648cca02e9254c751041d.jpeg&amp;refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&amp;app=2002&amp;size=f9999,10000&amp;q=a80&amp;n=0&amp;g=0n&amp;fmt=jpeg?sec=1644145498&amp;t=5d9dfddd717d73b1b129cd0cec967f92" alt="小岳岳"></p><p>如果在链接后加 <code>空格双引号接内容</code> ，无地址或失效，这时候引号内的文字就有作用了</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">小岳岳</span>](<span class="token url">https://地址失效后</span> <span class="token string">&quot;我的天哪&quot;</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p><p><img src="https://xn--fqrt6enbu7jf8y" alt="小岳岳" title="我的天哪"></p><h2 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接" aria-hidden="true">#</a> 超链接</h2><h3 id="行内式" tabindex="-1"><a class="header-anchor" href="#行内式" aria-hidden="true">#</a> 行内式</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>格式1：<span class="token url">[<span class="token content">这里填文字</span>](<span class="token url">这里是跳转的网址</span>)</span>

格式2：<span class="token url">[<span class="token content">这里填文字</span>](<span class="token url">这里是跳转的网址</span> <span class="token string">&quot;这里填鼠标放上去显示的文字&quot;</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">百度</span>](<span class="token url">http://www.baidu.com</span>)</span>

<span class="token url">[<span class="token content">百度</span>](<span class="token url">http://www.baidu.com</span> <span class="token string">&quot;百度一下，你就知道&quot;</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>`,76),w={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.baidu.com",title:"百度一下，你就知道",target:"_blank",rel:"noopener noreferrer"},_=i(`<h3 id="自动连接" tabindex="-1"><a class="header-anchor" href="#自动连接" aria-hidden="true">#</a> 自动连接</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>格式：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>这里填网址</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;http://www.baidu.com/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p>`,5),y={href:"http://www.baidu.com/",target:"_blank",rel:"noopener noreferrer"},q=i(`<h2 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h2><p>同时使用3个连续的 <code>*</code> 或 <code>-</code> 或 <code>_</code> 表示分割线</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>分隔线1<span class="token italic"><span class="token punctuation">*</span><span class="token content">星号
</span><span class="token punctuation">*</span></span>**

分隔线2-+换行+横杠

<span class="token hr punctuation">---</span>

分隔线3_下划线
___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p>分隔线1*星号</p><hr><p>分隔线2-+换行+横杠</p><hr><p>分隔线3_下划线</p><hr><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2><p>上下三个反引号 \`\`\` 开始和结尾，中间放内容/文字/代码</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>前面加4个空格也是可以的，但不建议这么做</p></div><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span>
<span class="token code-block">pnpm vuepress dev</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> vuepress dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="代码块嵌套" tabindex="-1"><a class="header-anchor" href="#代码块嵌套" aria-hidden="true">#</a> 代码块嵌套</h3><p>比如我们想展示代码块的写法，但是反引号已经用了，那么我们就用4个反引号 \`\`\`\` ，以此类推即可</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">\`</span>
<span class="token punctuation">\`\`\`</span></span>
pnpm vuepress build
\`\`\`
\`\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>\`\`<span class="token variable"><span class="token variable">\`</span>
<span class="token function">pnpm</span> vuepress build
<span class="token variable">\`</span></span>\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><p>注释常用于代码中，双斜杠，多行注释用 <code>/*</code></p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token comment">//单行注释双斜杠</span>
<span class="token comment">//pnpm add -D vuepress@next @vuepress/client@next vue</span>

<span class="token comment">/*
多行注释
pnpm add -D vuepress@next @vuepress/client@next vue
*/</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//单行注释双斜杠</span>
<span class="token comment">//pnpm add -D vuepress@next @vuepress/client@next vue</span>

<span class="token comment">/*
多行注释
pnpm add -D vuepress@next @vuepress/client@next vue
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码新增行加亮" tabindex="-1"><a class="header-anchor" href="#代码新增行加亮" aria-hidden="true">#</a> 代码新增行加亮</h3><p>加入diff即可，<code>+</code> 或 <code>-</code> 都可以表示</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">diff</span>
<span class="token code-block language-diff">- pnpm add -D vuepress@next
+ pnpm add -D vuepress@next @vuepress/client@next vue</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> pnpm add -D vuepress@next
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> pnpm add -D vuepress@next @vuepress/client@next vue
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="锚点" tabindex="-1"><a class="header-anchor" href="#锚点" aria-hidden="true">#</a> 锚点</h2><p>是一个有难度的用法，需要配合标签使用</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>格式：<span class="token url">[<span class="token content">说明文字</span>](<span class="token url">#要跳转的位置</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">跳转到代码块</span>](<span class="token url">#代码块</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p><p><a href="#%E4%BB%A3%E7%A0%81%E5%9D%97">跳转到代码块</a></p><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2><ul><li><p>第一行：表头行，用 <code>|</code> 隔开，控制分列</p></li><li><p>第二行：控制行，用 <code>-</code> 隔开，控制分行</p></li></ul><div class="custom-container tip"><p class="custom-container-title">说明</p><p>使用冒号 <code>:</code> 可控制对齐方式</p><p><code>:-</code> 表示左对齐</p><p><code>.</code>或 <code>:-:</code> 表示中对齐</p><p><code>-:</code> 表示右对齐</p></div><ul><li>第三行及以下：数据行,用 <code>|</code> 隔开</li></ul><p>表头行和控制行数量要一致，否则不生效！</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>| 名字 | 性别 | 年龄 | 部门 |
|:-:|:-:|:-:|:-:|
| 张三 | 男 | 21 | 产品 |
| 李四 | 女 | 18 | 开发 |
| 王二 | 男 | 20 | 销售 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:center;">性别</th><th style="text-align:center;">年龄</th><th style="text-align:center;">部门</th></tr></thead><tbody><tr><td style="text-align:center;">张三</td><td style="text-align:center;">男</td><td style="text-align:center;">21</td><td style="text-align:center;">产品</td></tr><tr><td style="text-align:center;">李四</td><td style="text-align:center;">女</td><td style="text-align:center;">18</td><td style="text-align:center;">开发</td></tr><tr><td style="text-align:center;">王二</td><td style="text-align:center;">男</td><td style="text-align:center;">20</td><td style="text-align:center;">销售</td></tr></tbody></table>`,51);function F(j,D){const e=t("ExternalLinkIcon");return l(),c("div",null,[o,n("ul",null,[n("li",null,[n("p",null,[n("a",u,[a("Typora"),s(e)]),a("「电脑端-已收费」")])]),n("li",null,[n("p",null,[n("a",m,[a("VSCode"),s(e)]),a("「电脑端」")])]),n("li",null,[n("p",null,[n("a",v,[a("Mweb"),s(e)]),a("「IOS端」")])]),n("li",null,[n("p",null,[n("a",h,[a("Markor"),s(e)]),a("「安卓端」")])]),n("li",null,[n("p",null,[n("a",b,[a("Marked Demo"),s(e)]),a("「网页]")])]),n("li",null,[n("p",null,[n("a",k,[a("markdown在线工具"),s(e)]),a("「网页]")])]),n("li",null,[n("p",null,[n("a",g,[a("雷欧的前端客栈"),s(e)]),a("「网页]")])])]),x,n("p",null,[n("a",w,[a("百度"),s(e)])]),n("p",null,[n("a",f,[a("百度"),s(e)])]),_,n("p",null,[n("a",y,[a("http://www.baidu.com/"),s(e)])]),q])}const A=d(r,[["render",F],["__file","index.html.vue"]]);export{A as default};