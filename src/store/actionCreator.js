import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionType'


export const getChangeInputAction = (value) => (
    {
        type: CHANGE_INPUT,
        value
    }
)

export const getAddItemAction = () => (
    {
        type: ADD_ITEM
    }
)

export const getDeleteItemAction = (index) => (
    {
        type: DELETE_ITEM,
        index
    }
)

export const initListAction = (data) => (
    {
        type: INIT_LIST_ACTION,
        data
    }
)

export const getInitList = () => ({
    type: GET_INIT_LIST
})
