import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_UI} from './actionTypes'
const defaultState = {
    list: [],
    inputValue: ''
}

// state上一次的所有数据， action 就是那句话
// reducer 可以接收state,但是绝不能修改state 
export default (state = defaultState, action) => {
    console.log(state, action)
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state)) // 最简单的深拷贝技巧
        newState.inputValue = action.value 
        return newState
    }

    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state)) // 最简单的深拷贝技巧
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}