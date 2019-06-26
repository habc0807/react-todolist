const defaultState = {
    list: [
        '1',
        '2',
        '3',
    ],
    inputValue: ''
}

// state上一次的所有数据， action 就是那句话
// reducer 可以接收state,但是绝不能修改state 
export default (state = defaultState, action) => {
    console.log(state, action)
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state)) // 最简单的深拷贝技巧
        newState.inputValue = action.value 
        return newState
    }

    if(action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state)) // 最简单的深拷贝技巧
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}