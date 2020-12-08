JavaScript：
继承
• 原生js实现继承有哪些方法？
js中动画如何实现，造成页面堵塞如何解决，问了requestAnimationFrame这个api
原型链
• 原型
this指向
•  JS中this指向问题（口述） 
• this 指向流程题
• this指向问题，不给提示，自己列举
设计模式、
call, apply,bind
• 写了 bind  
• bind返回的 用做构造函数时候怎么处理
• call  bind  apply的区别
new实现
json与js的转换方法
基本数据类型
防抖节流
• 节流防抖 使用场景
• throttle节流函数
let, var, const 区别
• let var const 有什么区别
event
eventloop
• 浏览器eventloop
loop
• for in、Object.keys、Object.getOwnPropertyNames的区别
• 答：for in遍历的是可枚举的属性，Object.keys能遍历所有的属性（包括原型链上的），Object.getOwnPropertyNames不能读到原型链上的属性。 
• 问：Object.keys能遍历到不可枚举的属性吗？ 
• 答：不是很清楚 
• foreach 怎么跳出
既然到这了，那说一下怎么判断空数组（好像是这样的，反正后来就开始说相等操作符了）
• 答：可以使用[] == false或者[].length == 0判断是否为空数组（然后我给自己挖了个坑） 
• （沉默） 
• 答：还有的话就是!![]结果是true，但是[] == false的，它们两个的机制不一样 
• （开始搞事）问：那么你可以说一下他们有什么不同吗？ 
• （想：好像是一个啥toString啥valueOf，顺序不记得了，就随便说了一个）答：应该是先调用valueOf吧？ 
• 问：你确定？ 
• 答：应该是吧。。 
• 问： 好，那你看一下下面这两个：     
• null == undefined 
• [] == 0 
• （第一个没什么悬念，第二个应该也是true吧）答： 两个都是true。 
• 问：那分别是为什么呢？它们底层的原理是怎么样的？ 
• 答：（实际上慌得一批了已经，感觉踩雷了，这一块一直没记下来）第一个没什么好说的吧，高程上就是这么写的，第二个的话，因为有一个操作数是数字的情况下，会尽力将另一个数也转化成数字进行比较。 
• 问：那么会调用数组的哪个方法进行转化呢？ 
• 答：不是很确定，应该是toString吧（实际上应该是先调用valueOf，再调用toString） 
• 问：好吧，那再看看下面这几个：     
• [0] == 0 
• 0 == {} 
• [] == {} 
• （然后我彻底把自己绕晕了，哔哩吧啦扯了挺久，然后面试官跳过了这个问题。） 
promise使用及实现
• 将请求函数封装成Promise
• 简述一下Promise原理
• 状态之间可以相互转换吗
• 怎么实现Promise的链式调用（在then中return一个新的Promise对象
• promise封装请求
• promise.all 中有错误请求 但不抛出错误 这个当时确实忘记了 直接改写了个promise.all
promise并行执行和顺序执行
、闭包、
垃圾回收和内存泄漏
• 垃圾回收机制
• 内存机制
你知道哪些js引擎
instanceof原理
数组方法
• var b=［1，2,  3］怎么删除2，说一下splice具体使用？b.splice（2，1，5，6）的输出结果
•  如何判断数组？
数组乱序
, 数组扁平化、
事件委托、事件监听、事件模型
• 手写事件监听
typescript
• typescript 中的 interface 和 type 到底有什么区别？ 
• https://github.com/SunshowerC/blog/issues/7
• 你觉得typescript和javascript有什么区别
• typescript你都用过哪些类型
• typescript中type和interface的区别
深拷贝 实现一下
时间流??
service worker
web worker
浏览器渲染和优化 
手写继承
webpack
• webpack  sourcemap
• webpack怎么优化
• 会webpack吗？
es6一大堆
• es6新特性
• es6新增。问我项目中用过什么，let const ，有没有考虑低版本兼容问题。说一下map对象和普通对象有什么区别。
ajax
• 实现原生ajax
• ajax
写es5怎么实现私有变量  
写个LRU
从有很多项的数组中快速获取符合条件的项
用正则表达式匹配 IP 地址
对象
• 写一个遍历对象属性的方法
• 怎么判断b是数组还是对象？然后举了几个例子，判断输出。具体的忘了
• js的对象声明方式有哪几种
前端异步请求机制
讲原型链， 如何判断属性是自身属性还是原型属性
es6的模块化和commenjs模块化区别
作用域
• 说一下作用域链的定义，闭包产生的原因。写一个闭包计数器
• js的闭包
dom api
• dom api中可以获取全部checkbox的方法