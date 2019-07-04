import React, {Component} from 'react'
import { connect } from 'react-redux'

const TodoList = (props) => {
    const {inputValue, list, changeInputValue, handleClick, handleDelete} = props 

    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} onClick={() => {handleDelete(index)}}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list 
    }
}

// store.dispatch props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            console.log(e.target.value)
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }

            dispatch(action)
        },

        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },

        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index: index
            }
            dispatch(action)
        }
    }
}

// 让todolist组件与store作连接 做连接就要有一个规则 规则就在 mapStateToProps
// connect导出的是一个结果 就是一个容器组件 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)