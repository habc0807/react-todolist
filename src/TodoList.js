import React, { Fragment, Component } from 'react'
import { Input, Button, List, message } from 'antd'
import './todolist.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            inputValue: '',
        }
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    render() {
        const {list, inputValue} = this.state 
        const headerTip = !list || list.length === 0 ? '' : 'Just to do it'
        const footerTip = list && list.length >= 5 ? `你还有5个todo没完成，不要好高骛远` : ''

        return (
            <Fragment>
                <div className="inputWrap">
                    <Input className="input" value={inputValue} placeholder="What are you doing" onChange={this.handleChangeInput}/>
                    <Button className="button" type="primary" onClick={this.handleAdd}>Add</Button>
                </div>

                <List
                    header={headerTip}
                    footer={footerTip}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleDeleteItem.bind(this, index)} data-index={index} key={index}>
                            {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }

    handleDeleteItem(index) {
        let {list} = this.state 
        list.splice(index, 1)

        this.setState({
            list
        })
    }

    handleChangeInput(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleAdd(e){
        const {inputValue, list=[]} = this.state

        if(!inputValue) {
            message.warning('todo list cannot be empty', 1);
            return 
        }

        if(list && list.length >= 5) {
            message.warning(`You have a few todos unfinished. Don't be too ambitious`, 2);
            return 
        }
    
        this.setState({
            list: [inputValue, ...list],
            inputValue: ''
        })
    }
}

export default TodoList