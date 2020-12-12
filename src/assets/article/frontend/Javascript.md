## JavaScript：

### 继承

- 原生js实现继承有哪些方法？

#### ans

#### 原型链继承

```javascript
function Parent () {
    this.name = 'kevin';
}
Parent.prototype.getName = function () {
    console.log(this.name);
}
function Child () {
}
Child.prototype = new Parent();
var child1 = new Child();
console.log(child1.getName()) // kevin
// 缺点
// 引用类型的属性被所有实例共享
// 若属性为非引用类型 则直接添加到对象上
// 在创建 Child 的实例时，不能向Parent传参
function Parent () {
    this.names = ['kevin', 'daisy'];
}
function Child () {
}
Child.prototype = new Parent();
var child1 = new Child();
child1.names.push('yayu');
console.log(child1.names); // ["kevin", "daisy", "yayu"]
var child2 = new Child();
console.log(child2.names); // ["kevin", "daisy", "yayu"]
```

#### 构造函数继承 ( 经典继承

```javascript
function Parent () {
    this.names = ['kevin', 'daisy'];
}

// 该方法无法被继承
// Parent.prototype.getName = function () {
//   console.log(this.name);
// }

function Child () {
    // 当使用这个构造函数创建实例的时候，prototype属性指向的原型对象就成为实例的原型对象
    // 此处仅调用 Parent 函数 用于包装 this
    Parent.call(this); 
}

var child1 = new Child();
child1.names.push('yayu');
console.log(child1.names); // ["kevin", "daisy", "yayu"]
var child2 = new Child();
console.log(child2.names); // ["kevin", "daisy"]

// 缺点
// 方法都在构造函数中定义，每次创建实例都会创建一遍方法
// 无法实现方法公用
```

#### 组合继承

```javascript
// 原型链继承和经典继承双剑合璧
// 缺点 会调用两次父构造函数
// Child.prototype 会挂上父类的属性
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = new Parent(); 
// Child.prototype.constructor 指向 Parent
// Child.prototype = Parent.prototype;
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
```

#### 原型式继承

```javascript
// 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样
// 注意对比 没有提到方法问题 说明方法 (没问题 可挂在 prototype 上共享
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}

var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = 'person1';
console.log(person2.name); // kevin

person1.firends.push('taylor');
console.log(person2.friends); // ["daisy", "kelly", "taylor"]
```

#### 寄生式继承

```javascript
// 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象
// 缺点 跟借用构造函数模式一样，每次创建对象都会创建一遍方法
function createObj (o) {
    // clone.__proto__ === o
    var clone = Object.create(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}
```

#### 寄生组合式继承

```javascript
// 修正组合继承的弊端
// Child.prototype = new Parent()  而是间接的让 Child.prototype 访问到 Parent.prototype

function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);
```



### js中动画如何实现，造成页面堵塞如何解决，问了requestAnimationFrame这个api

### 原型链

- 原型

https://juejin.cn/post/6844903797039300615

### this指向

-  JS中this指向问题（口述） 
- this 指向流程题
- this指向问题，不给提示，自己列举

#### ans

总结一下：

- this的指向与上下文有关
- 由于`活动对象`还包含this指向，所以可以在作用域链访问到`this`
- this指向是在函数`调用的时候才能确认，定义的时候不能确认`
- 另外值得注意的是this的值是个对象

因此，我们分析this指向正确的做法应该从`不同的上下文`去`分析this的指向`

JavaScript中的运行环境主要包括以下三种情况

#### 全局环境：代码运行起来后会首先进入全局环境

```javascript
this === window // true
复制代码
'use strict'
this === window; //true
this.name = 'vnues';
console.log(this.name); // vnues
```

#### 函数环境：当函数被调用执行时，会进入当前函数中的执行代码

- 函数是如何调用的

- - 独立调用
  - 方法调用
  - 构造函数调用
  - call、apply、bind调用
  - 箭头函数调用模式

#### eval环境：不建议使用，不做介绍

### 造成浏览器崩溃的原因有哪些

#### 内存泄漏

内存泄漏加大浏览器的负担，很有可能导致浏览器崩溃

#### 网页代码复杂和浏览器bug

大量个人网站和低质量网站代码的涌现造成对浏览标准的普遍不支持，如果正好碰上浏览器存在的一些bug，浏览器渲染引擎在处理这些网页代码的时候会出错

#### 网页数据过多

多图页面，超长页面,各种控件会导致浏览器处理大量数据

#### Ajax的Web服务漏洞

Ajax的是基于XML的异步传输，文本格式的XML消息可能是二进制数据带宽量的两倍之多。传输XML消息所需的带宽越多，系统或应用程序用来执行其他任务的可用资源就越少。过高的带宽将导致Ajax应用程序输出破损的数据，因为没有足够的资源生成干净的数据。这意味着Web服务门户(Ajax应用程序属于其中的一部分)将把破损数据暴露给门户的其他部分，从而导致畸形消息和过度解析。 另外一方面，频繁的、较小的 HTTP 请求会加重后端服务器、负载均衡程序和防火墙的负担，结果是造成过高的带宽，最终导致性能降低。如果客户端长期停留在该页面或没有关闭浏览器，会使得浏览器的内存持续上涨，得不到释放，导致客户端浏览器崩溃。

为此，在较多的时候Ajax的时候，我们要考虑通过专门的硬件加速器、优化软件、消除代码冗余、XML加速功能和解决互操作性问题等方式加速Ajax应用程序



### 设计模式、

### call, apply,bind

- 写了 bind 
- bind返回的 用做构造函数时候怎么处理
- call bind apply的区别

### new实现

### json与js的转换方法

### 基本数据类型

### 防抖节流

- 节流防抖 使用场景
- throttle节流函数

### let, var, const 区别

- let var const 有什么区别

### event

### eventloop

- 浏览器eventloop

### loop

- for in、Object.keys、Object.getOwnPropertyNames的区别

- - 答：for in遍历的是可枚举的属性，Object.keys能遍历所有的属性（包括原型链上的），Object.getOwnPropertyNames不能读到原型链上的属性。 
  - 问：Object.keys能遍历到不可枚举的属性吗？ 
  - 答：不是很清楚 

- foreach 怎么跳出



### 既然到这了，那说一下怎么判断空数组（好像是这样的，反正后来就开始说相等操作符了）

- - 答：可以使用[] == false或者[].length == 0判断是否为空数组（然后我给自己挖了个坑） 
  - （沉默） 
  - 答：还有的话就是`!![]`结果是true，但是[] == false的，它们两个的机制不一样 
  - （开始搞事）问：那么你可以说一下他们有什么不同吗？ 
  - （想：好像是一个啥toString啥valueOf，顺序不记得了，就随便说了一个）答：应该是先调用valueOf吧？ 
  - 问：你确定？ 
  - 答：应该是吧。。 
  - 问： 好，那你看一下下面这两个：     

- - - null == undefined 
    - [] == 0 

- - （第一个没什么悬念，第二个应该也是true吧）答： 两个都是true。 
  - 问：那分别是为什么呢？它们底层的原理是怎么样的？ 
  - 答：（实际上慌得一批了已经，感觉踩雷了，这一块一直没记下来）第一个没什么好说的吧，高程上就是这么写的，第二个的话，因为有一个操作数是数字的情况下，会尽力将另一个数也转化成数字进行比较。 
  - 问：那么会调用数组的哪个方法进行转化呢？ 
  - 答：不是很确定，应该是toString吧（实际上应该是先调用valueOf，再调用toString） 
  - 问：好吧，那再看看下面这几个：     

- - - [0] == 0 
    - 0 == {} 
    - [] == {} 

- - （然后我彻底把自己绕晕了，哔哩吧啦扯了挺久，然后面试官跳过了这个问题。） 

### promise使用及实现

- 将请求函数封装成Promise
- 简述一下Promise原理
- 状态之间可以相互转换吗
- 怎么实现Promise的链式调用（在then中return一个新的Promise对象
- promise封装请求
- promise.all 中有错误请求 但不抛出错误 这个当时确实忘记了 直接改写了个promise.all

### promise并行执行和顺序执行

### 、闭包、

### 垃圾回收和内存泄漏

- 垃圾回收机制
- 内存机制

### 你知道哪些js引擎

### instanceof原理

### 数组方法

- var b=［1，2, 3］怎么删除2，说一下splice具体使用？b.splice（2，1，5，6）的输出结果
-  如何判断数组？

### 数组乱序

### , 数组扁平化、

### 事件委托、事件监听、事件模型

- 手写事件监听

### typescript

- typescript 中的 interface 和 type 到底有什么区别？ 

- - https://github.com/SunshowerC/blog/issues/7

- 你觉得typescript和javascript有什么区别
- typescript你都用过哪些类型
- typescript中type和interface的区别

### 深拷贝 实现一下

### 时间流??

### service worker

### web worker

### 浏览器渲染和优化 

### 手写继承

### webpack

- webpack sourcemap
- webpack怎么优化
- 会webpack吗？

### es6一大堆

- es6新特性
- es6新增。问我[项目](https://www.nowcoder.com/jump/super-jump/word?word=项目)中用过什么，let const ，有没有考虑低版本兼容问题。说一下map对象和普通对象有什么区别。

### ajax

- 实现原生ajax
- ajax

### 写es5怎么实现私有变量 

### 写个LRU

### 从有很多项的数组中快速获取符合条件的项

### 用[正则表达式匹配](https://www.nowcoder.com/jump/super-jump/word?word=正则表达式匹配) IP 地址

### 对象

- 写一个遍历对象属性的方法
- 怎么判断b是数组还是对象？然后举了几个例子，判断输出。具体的忘了
- js的对象声明方式有哪几种

### [前端](https://www.nowcoder.com/jump/super-jump/word?word=前端)异步请求机制

### 讲原型链， 如何判断属性是自身属性还是原型属性

### es6的模块化和commenjs模块化区别

### 作用域

- 说一下作用域链的定义，闭包产生的原因。写一个闭包计数器
- js的闭包

### dom api

- dom api中可以获取全部checkbox的方法
- dom获取对象的方式