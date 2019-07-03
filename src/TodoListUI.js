import React from 'react';
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    return (
        <div>
            <div style={{ display: 'flex', marginBottom: '20px'}}>
                <Input placeholder="todo list" 
                value={props.inputValue} 
                onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>

            <List
                header={<div>今日事项</div>}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={(index) => {props.handleDeleteItem(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TodoListUI