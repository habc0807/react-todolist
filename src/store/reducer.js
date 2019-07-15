import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, INIT_LIST_ACTION } from './actionType'
import { message } from 'antd'

let defaultState = {
    inputValue: '',
    list: [],
    headerTip: '',
    footerTip: '',
}

export default (state = defaultState, action) => {

    if(action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value 

        return newState
    }

    if(action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        const { inputValue, list } = newState

        if(!inputValue) {
            message.warning('添加任务不能为空', 1);
            return newState
        }

        if(list && list.length > 0) {
            newState.headerTip = '今日任务' 
        }

        if(list && list.length >= 5) {
            message.warning(`少年，不要好高骛远`, 2);
            newState.footerTip = '少年，不要好高骛远'
            newState.inputValue = ''
            return newState
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

    if(action.type === INIT_LIST_ACTION) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data 
        return newState 
    }

    return state 
}