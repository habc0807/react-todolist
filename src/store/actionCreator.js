import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionType'

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