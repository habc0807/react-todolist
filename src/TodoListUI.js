import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'

function TodoListUI (props) {
    return (
        <Fragment>
            <div className="inputWrap">
                <Input 
                    className="input" 
                    value={props.inputValue} 
                    placeholder="你要干点啥" 
                    onChange={props.handleChangeInput}
                />
                <Button 
                    className="button" 
                    type="primary" 
                    onClick={props.handleAddItem}
                >添加</Button>
            </div>

            <List
                header={props.headerTip}
                footer={props.footerTip}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={props.handleDeleteItem.bind(this, index)} key={index}>
                        {item}
                    </List.Item>
                )}
            />
        </Fragment>
    )
}

export default TodoListUI