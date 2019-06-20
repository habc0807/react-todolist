react 项目问题记录
1.React, {Component} from ‘react’ 中 React 组件开头必须使用大写 
2. 要求render返回的内容 必须放到一个标签里 
3.如果我包了一层 div 但是又不想让它在dom结构里展现 该怎么办 
react 16 提供了一个 fragment 相当于一个占位符 不在element中体现

4. react 中的响应式设计思想和事件绑定 

this.state里的初始值，展示后，通过事件绑定 事件监听修改state, 使用setState 来处理 

5.immutable state不允许我们做任何的改变 

6.标签样式的class 不建议使用class因为是jsx语法 与class同名建议使用 className来代替class

7.lable的作用是扩大点击区域  上的for
属性 要换为htmlFor 

8.拆分组件 setState写成了一个异步的返回函数 函数返回对象 

this.setState(() => ({
            inputValue: e.target.value
        }))
setState 的同步 异步 原理虚拟DOM

setState接受不了第两个参数，也是一个函数参数
希望等DOM更新后在处理相关操作就可以使用 setState的第二个参数
```
this.setState(prevState => {
    return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
    }
}, () => {
    console.log(this.ul.querySelectorAll('li').length)
});
```

9 prevState 如此写法,在react中,会形成一个队列,对所有setState依次调用
this.setState(prevState => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ""
        }));

10.react 是一种声明式开发 声明式开发 减少dom操作  
让数据来编程 ，更新数据，更新图纸 ，帮你构建这个建筑 

可以与其他框架并存 针对不同的根dom 

React组件式开发 组件名首字母要大写

单向水流

父组件可以向子组件传数据，子组件可以展示，不能更改，着就是react的单向数据流 

视图层框架  只用react 不行 我们需要一个数组层的框架 flux mobx redux 不是一个大型的完整框架 

函数式编程 维护比较容易 函数单一  自动化测试 非常容易进行测试 

给自动化测试带来了很大的便捷性 


11. 安装 chrrome 插件 react developer
写了一篇文章 加油哦

12 propTypes 子组件校验接受的变量和函数的类型 和设置是否必须传项  
    defaultProps 定义变量的默认值  
> 需要注意的是 propTypes defaultProps 首字母需要小写 


13 当组件的state 或者 props 发生改变的时候 组件的render函数就会重新去执行 
 当父组件的render函数被运行时，它的子组件的render都将被重新运行  


14 理解虚拟DOM 

15 e.target可以获取点击元素的DOM节点
 `<input type="text" class="input" placeholder="你要干点啥" value="">`

 ref={(ul) => {this.ul = ul}}

16 为什么在 constructor 里面bind函数，而不使用箭头函数
这是因为箭头函数会导致每次函数指针变化，从而降低程序性能 ？


 16 生命周期函数 
 
 > 生命周期函数是在某一个特殊的时刻组件自动执行的函数 

constructor不是react独有的 是ES6的一个函数 就不归于react生命周期。
在react组件中会初始化它自己的数据 constructor 函数可以接收props函数 通过state定义组件内部函数。

17 为什么`shouldComponentUpdate`需要返回一个boolean值？
你的组件需要被更新吗 如果返回false, 我不需要更新我的组件 （处理逻辑复杂的情况 什么情况下要更新组件  什么情况下不需要更新组件  有它自己的使用场景 一般返回true）

18 为什么请求不能放到 render里
render函数 每当数据更新都会执行 这样会多次请求数据了 不合理 
我们想哪个生命周期执行被执行一次 componentDidMount, 为什么不使用 componentWillMount呢，是因为做服务端渲染或者app是 用componentWillMount会有问题。为了防止这些问题，尽量使用componentDidMount，永远都不会有问题。

19 如何ajax请求 


### mounting 挂载 
```
componentWillMount() // 在组件即将被挂载到页面的时刻自动执行
render() 
componentDidMount() // 在组件被挂载到页面之后自动执行
```

`componentWillMount` 和 `componentDidMount` 只在第一次挂载的时候执行，render函数每次数据更新都会执行。

### Updation
props / state

componentWillReceiveProps 
shouldComponentUpdate // 组件被更新之前自动执行 > 需要返回一个boolean 
componentWillUpdate // 组件被更新之前它自动执行 但是它在shouldComponentUpdate返回true之后执行 
render 
componentDidUpdate // 组件更新完成之后自动执行

### componentWillReceiveProps
// 1. 当一个组件从父组件接受了参数 
// 2. 只要父组件得render函数重新执行了 子组件的这个生命周期就会执行该生命周期更新完成之后 它会被执行
// 3. 如果这个组件第一次存在于父组件中，不会执行  如果这个组件之前已经存在于父组件中，才会执行 

### Unmounting
componentWillUnmount // 当这个组件即将被从页面中剔除会自动执行


### shouldComponentUpdate 的使用场景
组件其它生命周期都可以不写，是因为组件是继承的React.Component, 而React.Component内置了除render函数的外的其它所有生命周期。

所以自定义组件需要写的生命周期是render。










