import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionType'
import { message } from 'antd'

let defaultState = {
    inputValue: 'ijjl',
    list: ['xiao', 'hei']
}

export default (state = defaultState, action) => {

    if(action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value 

        return newState
    }

    if(action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        const { inputValue, list=[] } = newState

        if(!inputValue) {
            message.warning('Adding todo list cannot be empty', 1);
            return 
        }

        if(list && list.length >= 5) {
            message.warning(`You have a few todos unfinished. Don't be too ambitious`, 2);
            return 
        }

        newState.list = [inputValue, ...list]
        newState.inputValue = ''
        
        return newState
    }

    if(action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        let { list } = newState 

        list.splice(action.index, 1)
        newState.list = list 

        return newState
    }


    return state 
}