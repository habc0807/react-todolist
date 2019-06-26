import React , { Component }from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index.js'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange) // subscribe监听store改变 subscribe里的callback就会自动执行
    }
    render() {
        return (
            <div>
                <div>
                    <Input placeholder="todo list" 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>

                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                    />
            </div>
        )
    }

    handleInputChange(e) {
        // 创建一句话
        const action = {
            type: 'change_input_value',
            value: e.target.value 
        }

        // 把这句话传给store 
        store.dispatch(action)
        console.log(e.target.value)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleBtnClick(e) {
        const action = {
            type: 'add_todo_item',

        }
        store.dispatch(action)
    }
}

export default TodoList 