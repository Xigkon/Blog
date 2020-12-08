HTML&CSS：
flex布局
• flex布局的属性以及配置（主要问了设置主轴方向有哪些情况，justify-content属性中的space-around和space-between的区别）
容器的属性
• flex-direction  4
• flex-wrap    3
• flex-flow    3*4
• justify-content    5
• align-items    5
• align-content    6
项目的属性
• order
• flex-grow 
•  1)一种很常见的布局：当内容区域高度不够的时候，footer仍然需要固定在底部。这时候，我们可以给main使用flex-grow: 1，使它自动填满剩余空间。
• 2)在我们开发一种常见的表单组件的时候，使用flex布局，可以使输入框占满剩余空间。
• ps. 全部 item 的 flex-grow 總和最小為 1, 有個特別的地方是當 flex-grow 介於 0-1 時，剩餘空間將不會被分配完．
• flex-shrink  
• (而大部分场景下我们不希望元素被压缩，所以flex-shrink通常设置为0
• ps. 全部 item 的 flex-grow 總和最小為 1
• flex-basis   (max-width/min-width > flex-basis > width > box)
• flex
• align-self
水平居中，垂直居中
• 实现垂直居中和水平居中
• 牛客的IDE起飞，没有html，然后我完全没有办法调试，就硬是拿js调试器打了个html，可太难了 
• 然后我用flex实现了一下，没问题 
• 问：可以用别的方法实现吗。 
• 于是乎我又写了个margin：0 auto；后面就卡住了，真的就很奇怪，把position完全忘了，之前用得那么溜的
• flex  垂直居中
• 居中的几种方式
清除浮动、
BFC
BFC的概念
BFC 的英文缩写是 Block Formatting Contexts (块级格式化上下文)，通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。
BFC的触发条件 （面试常问）
• 根元素 （html）
• float的值不为none
• overflow的值不为visible
• display的值为 inline-block / table-cell / table-caption / flex / inline-flex
• postion的值为d 或 fixed
BFC的特性及应用（面试常问）
• Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻box的margin会发生重叠（应用：防止marin重叠）。解决方法是给下方的div包裹一个BFC
• BFC的区域不会与float发生重叠（应用：自适应两栏布局）
• 计算BFC的高度时，浮动元素也参与计算（应用：清除内部浮动）
（以上三点比较重要，文章下方有案例）
• BFC内部的Box会在垂直方向，一个接一个的放置。
• 每个元素的margin box的左边会与包含块border box的左边相接触（对于从左到右的格式化，否则相反），即使存在浮动也会如此。
• BFC就是页面上的一个独立容器，容器里面的元素不会影响到外面的元素
布局
• 两栏布局 实现一下
• 三个div怎么实现左固定，右固定，中间自适应？几种方法！
动画
•  CSS怎么实现秒针转动动画（animation + keyFrames）
• 旋转会相对于矩形的那一个点进行旋转，那怎么设置能实现秒针旋转的效果，旋转这块问的很细，直到这块答不出为止，面试官说这块没关系 
• css动画
• 纯CSS 画出 iOS开关 要能动的 可能因为菜画了半天
盒模型
• CSS 盒子模型
• 标准盒子 怪异盒子
• css标准盒子和怪异盒子，并且ie默认的是哪种盒子。
H5新特性
translate3d
pisition
• position都有哪些值，设置成relative后将top设置成2px会有什么效果，absolute如果找不到定位父元素那么会相对于谁进行定位 
• position有多少种取值？
• 答：relative 、static、 absolute、sticky、fixed（太紧张了，一下没想起来了fixed，从这里开始心态彻底炸了） 
• 问：说一下他们的区别和用法 
• 答：说了一下relative、absolute和static因为记不起来fixed，然后就开始瞎掰。
• position有哪些属性
ans
• 对象遵循标准文档流中
• static（静态定位）  对象遵循标准文档流中，top, right, bottom, left 等属性失效。
• relative（相对定位）  对象遵循标准文档流中，依赖top, right, bottom, left 等属性相对于该对象在标准文档流中的位置进行偏移，同时可通过z-index定义层叠关系。
• 对象脱离标准文档流
• absolute（绝对定位）  对象脱离标准文档流，使用top, right, bottom, left 等属性进行绝对定位（相对于static定位以外的第一个父元素进行绝对定位） 同时可通过z-index定义层叠关系。
• fixed（固定定位）  对象脱离标准文档流，使用top, right, bottom, left 等属性进行绝对定位（相对于浏览器窗口进行绝对定位）同时可通过z-index定义层叠关系。
长列表优化 
• 为什么不让后端做分页？
• 前端怎么实现这个分页的？
单位
• CSS有哪些字体单位，em和rem的区别 
• 我看你开发的是一个移动端的app，那能说一下rem原理吗？
• 答：rem是根据body的属性计算的。 
• 问：body的哪个属性？ 
• 答：font-size 
• 问：那它有什么替代的方案吗？ 
• 答：uniapp中可以用rpx（尬笑） 
• 问：还有吗？ 
• 答：vh那一套吗？（其实她就是想问一下响应式布局啥的，我一直get不到点） 
• 问：那你说说那几个吧。 
• 答：vh是视口的高度，vw是视口宽度，vmin是二者最小值，vmax是二者最大值。 
• 说一下rem和em的区别
• 答：rem是相对body的font-size属性，em是相对父元素的font-size 
弹窗
• 一个 弹窗 从右往左 弹 怎样 性能比较好
css3 硬件加速
• 并不是所有的CSS属性变化都会直接在GPU处理。只有下面的属性会这样处理：
• transform
• opacity
• filter
• 如何工作的
• 当浏览器接收到页面的信息，他会将页面解释成DOM输。DOM树和CSS让浏览器构建渲染树。渲染书包含渲染对象 - 在页面中需要渲染的元素。每一个渲染对象被分配到一个图层中。每一个图层被更新到GPU。这里的秘诀就在于通过transform的层会使用GPU渲染，因此不需要重绘，就像3D图形一样。这个转换是单独处理的。
• 使用硬件加速需要注意的地方
• 大部分重要的问题都是关于内存。GPU处理过多的内容会导致内存问题。这在移动端和移动端浏览器会导致崩溃。因此，通常不会对所有的元素使用硬件加速。
• 在GPU渲染字体会导致抗锯齿无效。这是因为GPU和CPU的算法不同。因此如果你不在动画结束的时候关闭硬件加速，会产生字体模糊。
• example
.example1 {
  transform: translateZ(0);
}
.example2 {
  transform: rotateZ(360deg);
}
less,sass它们的作用是什么
float
• CSS float
•  CSS 清除浮动方式
• 怎么清除浮动，我一紧张忘记了overflow那个，然后给了我补充，问我，这个是怎么实现清除浮动的，为什么可以清除浮动。
分块布局怎么做
html
• html的知识，html5新内容
bootstrap
• 说一下bootstrap的响应式原理
• 说一下你对bootstrap的学习程度
小程序开发和h5开发有什么区别？
回流和重绘？
• 定义，哪个更费时，怎么避免。
实现一个进度条10秒钟从进度0到100。
jquery
移动和pc端兼容
• 了解css吗？了解，怎么解决移动端和电脑端的兼容性问题。媒体查询和bootstrap框架。
页面白屏你会怎么处理？
css选择器
• http://www.ruanyifeng.com/blog/2009/03/css_selectors.html