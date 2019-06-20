import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import axios from 'axios'
import "./style.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        type="text"
                        className="input"
                        placeholder="你要干点啥"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(valueText) => {this.inputText = valueText}}
                    />
                    <button onClick={this.handleBtnClick}>
                        提交
                    </button>
                </div>

                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>

            </Fragment>
        );
    }

    componentDidMount() {
        console.log('componentDidMount')
        axios.get('/api/todolist')
            .then(() => {
                alert('res')
            }).catch(() => {
                alert('error')
            })
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={item + index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            );
        })
    }

    handleInputChange() {
        const value = this.inputText.value
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        this.setState(prevState => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ""
            }
        }, () => {
            // console.log(this.ul.querySelectorAll('li').length)
        });
    }

    handleItemDelete(index) {
        this.setState(prevState => {
            const list = [...prevState.list]
            list.splice(index, 1)

            return {list}
        });
    }
}

export default TodoList;
