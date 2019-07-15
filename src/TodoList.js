import React, { Fragment, Component } from 'react'
import { Input, Button, List } from 'antd'
import './todolist.css'
import { getChangeInputAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator'
import { connect } from 'react-redux'

class TodoList extends Component {
    render() {
        const {list, inputValue} = this.props 
        const headerTip = !list || list.length === 0 ? '' : 'Just to do it'
        const footerTip = list && list.length >= 5 ? `你还有5个todo没完成，不要好高骛远` : ''

        return (
            <Fragment>
                <div className="inputWrap">
                    <Input 
                        className="input" 
                        value={inputValue} 
                        placeholder="What are you doing" 
                        onChange={this.props.handleChangeInput}
                    />
                    <Button 
                        className="button" 
                        type="primary" 
                        onClick={this.props.handleAddItem}
                    >Add</Button>
                </div>

                <List
                    header={headerTip}
                    footer={footerTip}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.props.handleDeleteItem.bind(this, index)} key={index}>
                            {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
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