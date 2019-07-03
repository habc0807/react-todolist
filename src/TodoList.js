import React , { Component }from 'react';
import 'antd/dist/antd.css'
import store from './store/index.js'
import TodoListUI from './TodoListUI.js'
import axios from 'axios'
import ReduxThunk from 'redux-thunk'
import { getInitList, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import {getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction} from './store/actionCreator'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
        store.subscribe(this.handleStoreChange) // subscribe监听store改变 subscribe里的callback就会自动执行
    }

    componentDidMount() {
        const action = getInitList()
        store.dispatch(action)
        console.log(action)
        // axios.get('/list.json').then(() => {
        //     console.log('----')
        // })
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleDeleteItem={this.handleDeleteItem}
            />
        )
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value) // 创建一句话action
        store.dispatch(action) // 把这句话传给store 
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleBtnClick(e) {
        const action = getAddTodoItemAction()
        store.dispatch(action)
    }

    handleDeleteItem(index) {
        const action = getDeleteTodoItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList 