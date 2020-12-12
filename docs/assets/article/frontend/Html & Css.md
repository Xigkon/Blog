## HTML&CSS：

### flex布局

- flex布局的属性以及配置（主要问了设置主轴方向有哪些情况，justify-content属性中的space-around和space-between的区别）
- 容器属性

```css
display: flex;
flex-direction: row | row-reverse | column | column-reverse
/* 决定主轴的方向(即项目的排列方向) */
 flex-wrap: nowrap | wrap | wrap-reverse    
 /* 决定容器内项目是否可换行 */
flex-flow: <flex-direction> || <flex-wrap>
/* 两个属性的拼接   */
justify-content: flex-start | flex-end | center | space-between | space-around
 /* 定义了项目在主轴的对齐方式 */
align-items: flex-start | flex-end | center | baseline | stretch
/* 定义了项目在交叉轴上的对齐方式  */
align-content: flex-start | flex-end | center | space-between | space-around | stretch  
 /* 定义了多根轴线的对齐方式，如果项目只有一根轴线，那么该属性将不起作用  */
```

- 项目属性

```css
order
 /* 定义项目在容器中的排列顺序，数值越小，排列越靠前，默认值为 0  */
 flex-basis: <length> | auto
 /* 定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间  */
flex-grow: <number>
  /* 定义项目的放大比例 */
 flex-shrink: <number>
  /* 定义了项目的缩小比例  */
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  /* * flex-grow, flex-shrink 和 flex-basis的简写 */
 align-self: auto | flex-start | flex-end | center | baseline | stretch
  /* * 允许单个项目有与其他项目不一样的对齐方式 */
```

> - flex-grow 
>
> - -  1)一种很常见的布局：当内容区域高度不够的时候，footer仍然需要固定在底部。这时候，我们可以给main使用flex-grow: 1，使它自动填满剩余空间。![image.png](https://cdn.nlark.com/yuque/0/2020/png/2938876/1607006424822-ea306121-8504-40b4-a11c-612997c01d8a.png)
>   - 2)在我们开发一种常见的表单组件的时候，使用flex布局，可以使输入框占满剩余空间。![image.png](https://cdn.nlark.com/yuque/0/2020/png/2938876/1607006474193-afbff39e-df43-46a6-91ac-099826e73a61.png)
>   - ps. **全部 item 的 `flex-grow` 總和**最小為 1, 有個特別的地方是當 `flex-grow` 介於 0-1 時，剩餘空間將不會被分配完．
>
> - flex-shrink  
>
> - - (而大部分场景下我们不希望元素被压缩，所以flex-shrink通常设置为0
>   - ps. **全部 item 的 `flex-grow` 總和**最小為 1
>
> - flex-basis   (max-width/min-width > flex-basis > width > box)
> - 

### 水平居中，垂直居中

- 实现垂直居中和水平居中

- - 牛客的IDE起飞，没有html，然后我完全没有办法调试，就硬是拿js调试器打了个html，可太难了 
  - 然后我用flex实现了一下，没问题 
  - 问：可以用别的方法实现吗。 
  - 于是乎我又写了个margin：0 auto；后面就卡住了，真的就很奇怪，把position完全忘了，之前用得那么溜的

- flex 垂直居中
- 居中的几种方式

清除浮动、

### BFC

#### BFC的概念

BFC 的英文缩写是 Block Formatting Contexts (块级格式化上下文)，通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

#### BFC的触发条件 （面试常问）

- 根元素 （html）
- float的值不为none
- overflow的值不为visible
- display的值为 inline-block / table-cell / table-caption / flex / inline-flex
- postion的值为d 或 fixed

#### BFC的特性及应用（面试常问）

- Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻box的margin会发生重叠（应用：防止marin重叠）。解决方法是给下方的div包裹一个BFC
- BFC的区域不会与float发生重叠（应用：自适应两栏布局）
- 计算BFC的高度时，浮动元素也参与计算（应用：清除内部浮动）

（以上三点比较重要，文章下方有案例）

- BFC内部的Box会在垂直方向，一个接一个的放置。
- 每个元素的margin box的左边会与包含块border box的左边相接触（对于从左到右的格式化，否则相反），即使存在浮动也会如此。
- BFC就是页面上的一个独立容器，容器里面的元素不会影响到外面的元素



布局

- 两栏布局 实现一下
- 三个div怎么实现左固定，右固定，中间自适应？几种方法！

### 动画

-  CSS怎么实现秒针转动动画（animation + keyFrames）
- 旋转会相对于矩形的那一个点进行旋转，那怎么设置能实现秒针旋转的效果，旋转这块问的很细，直到这块答不出为止，面试官说这块没关系 
- css动画
- 纯CSS 画出 iOS开关 要能动的 可能因为菜画了半天

### 盒模型

- CSS 盒子模型
- 标准盒子 怪异盒子
- css标准盒子和怪异盒子，并且ie默认的是哪种盒子。

#### ans

- 盒模型的组成：是由content（内容区）、padding（填充区）、border（边框区）、margin（外边距区）这四个部分组成！
- 标准盒模型占据的位置大小 = content+padding+border+margin
- 怪异盒模型占据的位置大小 = width(content+padding+border)+margin, 换句话说，width和height 包含 内容，内边距，边框
- **②如何切换盒模型模式？**使用 box-sizing: border-box 可切换为IE怪异盒模型，使用box-sizing:content-box可切换为W3C标准盒模型。
- **如何在W3C标准盒模型和IE怪异盒模型间取舍？**建议使用border-box，因为border-box的width会将padding和border包含在内，布局时更好控制，使用百分比布局时更好控制,尤其是在响应式布局中。有一种推荐而且很常见的做法：

```
* {
    box-sizing:border-box;
}
```

- **文档的DOCTYPE类型对盒模型类型有影响吗？**答案是：几乎没有，只有ie5及以下才会触发怪异模式，无论是否声明<!DOCTYPE html>

H5新特性

### translate3d

### pisition

- position都有哪些值，设置成relative后将top设置成2px会有什么效果，absolute如果找不到定位父元素那么会相对于谁进行定位 
- position有多少种取值？

- - 答：relative 、static、 absolute、sticky、fixed（太紧张了，一下没想起来了fixed，从这里开始心态彻底炸了） 
  - 问：说一下他们的区别和用法 
  - 答：说了一下relative、absolute和static因为记不起来fixed，然后就开始瞎掰。

- position有哪些属性

#### ans

- 对象遵循标准文档流中

- - static（静态定位）  对象遵循标准文档流中，top, right, bottom, left 等属性失效。
  - relative（相对定位）  对象遵循标准文档流中，依赖top, right, bottom, left 等属性相对于该对象在标准文档流中的位置进行偏移，同时可通过z-index定义层叠关系。

- 对象脱离标准文档流

- - absolute（绝对定位）  对象脱离标准文档流，使用top, right, bottom, left 等属性进行绝对定位（相对于static定位以外的第一个父元素进行绝对定位） 同时可通过z-index定义层叠关系。
  - fixed（固定定位）  对象脱离标准文档流，使用top, right, bottom, left 等属性进行绝对定位（相对于浏览器窗口进行绝对定位）同时可通过z-index定义层叠关系。

- sticky

- - 页面滑动到“临界点”之前表现为 relative, 到达“临界点”时表现为 fixed
  - Sticky 效果只在 Containing Block 内有效，Containing Block 滑出屏幕时，Stickey Element 也跟着滑走

### 长列表优化 

- 为什么不让后端做分页？
- 前端怎么实现这个分页的？

#### ans

- 对于较长的列表，比如1000个数组的数据结构，如果想要同时渲染这1000个数据，生成相应的1000个原生dom，我们知道原生的dom元素是很复杂的，如果长列表通过生成如此多的dom元素来实现，很可能使网页失去响应。
- 业务开发中会遇到一些无法使用分页方式来加载的列表，我们一般把这种列表叫做长列表。
- 解决方法：将数据存在数组，只显示可视区域的内容
- 和懒加载的区别

- - 懒加载偏向于网络资源请求，解决网络资源请求过多，造成网站响应时间过长的问题
  - 虚拟列表是对长列表渲染的一种优化，解决大量数据渲染造成的性能问题

### 单位

- CSS有哪些字体单位，em和rem的区别 
- 我看你开发的是一个移动端的app，那能说一下rem原理吗？

- - 答：rem是根据body的属性计算的。 
  - 问：body的哪个属性？ 
  - 答：font-size 
  - 问：那它有什么替代的方案吗？ 
  - 答：uniapp中可以用rpx（尬笑） 
  - 问：还有吗？ 
  - 答：vh那一套吗？（其实她就是想问一下响应式布局啥的，我一直get不到点） 
  - 问：那你说说那几个吧。 
  - 答：vh是视口的高度，vw是视口宽度，vmin是二者最小值，vmax是二者最大值。 

- 说一下rem和em的区别

- - 答：rem是相对body的font-size属性，em是相对父元素的font-size 

#### ans

- %
- px  屏幕的一个点
- em: 相对于当前对象内文本的字体尺寸(font-size)。例如：1em 等于当前的字体尺寸；2em 等于当前字体尺寸的两倍。em 是非常有用的单位，因为它可以自动适应用户所使用的字体。
- rem: 使用rem同em一样皆为相对字体大小单位，不同的是rem相对的是HTML根元素。(html {font-size: 12px})
- vh vw: 

```
1vh = viewportHeight * 1/100; 
1vw = viewportWidth * 1/100; 
```

- vmin 和 vmax

```
1vmin = min(width, height)*1/100
1vmax = max(width, height)*1/100
```

- ex ch: 与em、rem相似之处在于都依赖于font-size，但是ex、ch还依赖于font-family，基于font-specific来计算。 
- in  cm  mm pt(磅) pc

### 弹窗

- 一个 弹窗 从右往左 弹 怎样 性能比较好

### css3 硬件加速

#### ans

- 并不是所有的`CSS`属性变化都会直接在`GPU`处理。只有下面的属性会这样处理：

- - transform
  - opacity
  - filter

- 如何工作的

- - 当浏览器接收到页面的信息，他会将页面解释成`DOM`输。`DOM`树和`CSS`让浏览器构建渲染树。渲染书包含渲染对象 - 在页面中需要渲染的元素。每一个渲染对象被分配到一个图层中。每一个图层被更新到`GPU`。这里的秘诀就在于通过`transform`的层会使用`GPU`渲染，因此不需要重绘，就像3D图形一样。这个转换是单独处理的。

- 使用硬件加速需要注意的地方

- - 大部分重要的问题都是关于内存。`GPU`处理过多的内容会导致内存问题。这在移动端和移动端浏览器会导致崩溃。因此，通常不会对所有的元素使用硬件加速。
  - 在`GPU`渲染字体会导致抗锯齿无效。这是因为`GPU`和`CPU`的算法不同。因此如果你不在动画结束的时候关闭硬件加速，会产生字体模糊。

- example

```
.example1 {
  transform: translateZ(0);
}

.example2 {
  transform: rotateZ(360deg);
}
```





### less,sass它们的作用是什么

#### ans

- CSS预处理器是一种语言
- 为css 增加一些编程特性，无需考虑兼容问题，比如可以使用变量，简单的逻辑，函数等
- 让css更简洁

### float

- CSS float
-  CSS 清除浮动方式
- 怎么清除浮动，我一紧张忘记了overflow那个，然后给了我补充，问我，这个是怎么实现清除浮动的，为什么可以清除浮动。

### 分块布局怎么做

### html

- html的知识，html5新内容

#### ans

使用

- **用<!DOCTYPE html>进行声明**

所有HTML5文档都要以该标签开头来指出这是支持HTML5的文档



h5目标

- 鼓励使用语义化标签  header, nav, main, article, aside, section, footer
- 样式设计与内容相分离
- 推广辅助功能以及响应式设计
- 减少HTML，CSS，JavaScript之间的重叠:三种语言的边界并限制它们做自己分内的事,
- 在消除Flash或java这样的插件的同时，支持丰富的媒体功能

- - <video>用于定义视频
  - <audio>用于定义音频
  - <canvas>用于定义图形，如图表或其他图像。
    ps：canvas标签只是容器，图形要通过JS脚本来绘制

### bootstrap

- 说一下bootstrap的响应式原理
- 说一下你对bootstrap的学习程度

### 小程序开发和h5开发有什么区别？

### 回流和重绘？

- 定义，哪个更费时，怎么避免。

### 实现一个进度条10秒钟从进度0到100。

### jquery

### 移动和pc端兼容

- 了解css吗？了解，怎么解决移动端和电脑端的兼容性问题。媒体查询和bootstrap框架。

#### ans

- 目前针对跨终端的方案，主要分为两大阵营：一套资源Vs两套资源。

- - 通过响应式或页面终端判断去实现一套资源适配所有终端；
  - 通过终端判断分别调取两套资源以适配所有终端。

这两种思路我们并不能斩钉截铁的说哪一个更优选，正所谓”合适的才是最好的”。

- 媒体查询

```html
/// 媒体功能
<style media="(min-width: 1000px)">
  div {
    color: red;
  }
</style>
<style media="(max-width: 1000px">
  div {
    color: green;
  }
</style>
<style media="screen and (min-width:400px) and (max-width:600px)"></style>

///  媒体类型
<style media="screen">
  div {
    color: red;
  }
</style>
<style media="print">
  div {
    color: green;
  }
</style>
/// 
```

- 查询屏幕设备,其中`screen` 表示设备类型 通常我们的电脑,平板,手机等都属于`screen`类型.其他的还有譬如`print`表示打印设备等(使用`Ctrl+p` 就可以调出来).不给值就是默认值,默认值是`all`.



### 如何机智地回答浏览器兼容性问题

#### 样式兼容性（css）方面

- 不同浏览器默认样式不同：初始化样式
- 浏览器对css语法兼容不同：使用浏览器前缀

| 主要代表的浏览器 | 前缀    |                       |
| ---------------- | ------- | --------------------- |
| IE浏览器         | -ms     | Trident               |
| Firefox          | -moz    | Gecko                 |
| Opera            | -o      | 曾经Presto，现在blink |
| Chrome           | -webkit | 曾经Webkit，现在blink |
| safari           | -webkit | webkit                |



- IE9 以下浏览器不能使用 opacit

#### 交互兼容性（javascript）

- new Date()构造函数使用，'2018-07-05'是无法被各个浏览器中，使用new Date(str)来正确生成日期对象的。 正确的用法是'2018/07/05'.

#### 浏览器 hack

- CSS hack是通过在CSS样式中加入一些特殊的符号，让不同的浏览器识别不同的符号,不同的浏览器识别不同的符号是有标准的（比如说* _），以达到应用不同的 CSS 样式的目的
- 快速判断 IE 浏览器版本

```html
 <!--[if IE 8]> ie8 <![endif]-->
 <!--[if IE 9]> 骚气的 ie9 浏览器 <![endif]-->
   
  /* Safari */
 var isSafari = /a/.__proto__=='//';

 /* Chrome */
 var isChrome = Boolean(window.chrome);
```



### 页面白屏你会怎么处理？

### css选择器

- http://www.ruanyifeng.com/blog/2009/03/css_selectors.html