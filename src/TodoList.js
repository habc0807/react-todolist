import React, { Component } from 'react'
import './todolist.css'
import { 
    getChangeInputAction, 
    getAddItemAction, 
    getDeleteItemAction,
    getInitList
} from './store/actionCreator'
import { connect } from 'react-redux'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    render() {
        let { list, inputValue, headerTip, footerTip } = this.props 

        return (
            <TodoListUI 
                headerTip={headerTip}
                footerTip={footerTip}
                inputValue={inputValue}
                list={list}
                handleDeleteItem={this.props.handleDeleteItem}
                handleChangeInput={this.props.handleChangeInput}
                handleAddItem={this.props.handleAddItem}
            ></TodoListUI>
        )
    }

    componentDidMount() {
        this.props.handleInitList()
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        inputValue: state.inputValue,
        headerTip: state.headerTip,
        footerTip: state.footerTip,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInitList() {
            const action = getInitList()
            dispatch(action)
        },

        handleDeleteItem(index) {
            const action = getDeleteItemAction(index)
            dispatch(action)
        },
    
        handleChangeInput(e) {
            const action = getChangeInputAction(e.target.value)
            dispatch(action)
        },
    
        handleAddItem(e){
            const action = getAddItemAction() 
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)