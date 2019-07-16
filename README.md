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


css3动画 

1. transtion: all 1s ease-in forwards 
2. animation ： animation-name 2s ease-in forwards 

Keyframes animation-name {
	0% {}
	50% {} 
	100% {} 
}



react-transition-group 实现动画 


<CSSTransition 
    in={this.state.show}
    timeout={1000}
    classNames='fade'
    unmountOnExit
    onEntered={(el) => {el.style.color = 'blue'}}
    appear={true}
>
    <div>hello</div>
</CSSTransition>


1.Redux = Reducer + Flux （官方推出最原始的数据层框架）
Flux的了解 todo 视频 

Redux的工作流程：  

store: 图书管理员
reducer: 管理员的小本本（记录借阅情况）
component: 接受store查阅reducer后的数据 
action: component 用户操作 跟管理说的话 剩下的事让图书管理员去处理 


store
1.安装并引用redux 2.creactStore创建store, 并且接收一个函数参数 

```
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer)
export default store 
```

reducer 返回一个 函数，该函数接收两个参数 state\action, state可赋值一个默认参数defaultState 
```
const defaultState = {
    list: [
        '1',
        '2',
        '3',
    ],
    inputValue: ''
}

export default (state = defaultState, action) => {
    return state
}
```

怎样让store一改变 我的组件就改变呢 
```
this.setState(store.getState()) // 如果新的state不依赖于老得state的数据 用对象可以
this.setState(store.getState) // 如果新的state依赖于老得state的数据 就传函数 
```
为什么呢？里面涉及到哪些底层原理？



actionCreator 统一处理action
actionType 统一管理action type

当一个组件只有render函数的时候 就可以写成 无状态组件 


无状态组件的优势是什么？
性能比较高 是因为它就是一个函数 UI组件class是一个类 类生成对象 react组件还会有生命周期函数，

redux-thunk的是redux的中间件，不是react的中间件 
安装thunk 使用thunk 查看的文档是在 redux-devtools-extentsion里 


到底什么是Redux中间件？action 和 store 之间 
当我们使用里 thunk 之后 action 可以是函数里  对dispatch方法做了一个升级 
传过来是一个函数 它会先执行 

dispatch 如果接收是对象 我直接传给 store
         如果传过来的是函数 我先将函数执行 再


redux-log
redux-thunk
redux-saga 单独把异步的处理拆分到一个页面里 





Provider 是react-redux提供的第一个核心API, Provider 提供器将store提供给了它内部组件

actionCreator.js 将用户行为的处理都放在该文件里处理 返回用户行为的action对象

1.安装了chrome的redux-devtools插件，如果想让项目可以看到redux相关信息，需要在项目中store/index.js中配置 

```
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store 
```
> window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


