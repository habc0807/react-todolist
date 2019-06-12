import React, {
    Component,
    Fragment
} from 'react' 
import './style.css'
import TodoItem from './TodoItem'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
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
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>

                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div key={index}>
                                    <TodoItem 
                                        content = {
                                            item
                                        }
                                        index = {
                                            index
                                        }
                                        deleteItem = {
                                            this.handleItemDelete.bind(this)
                                        } 
                                    > 
                                    </TodoItem>
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange (e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick() {
        const {
            list,
            inputValue
        } = this.state 

        this.setState({
            list: [...list, inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        const list = [...this.state.list]
        list.splice(index, 1)

        this.setState({
            list
        })
    }
}

export default TodoList