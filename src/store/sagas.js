import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType'
import { initListAction } from './actionCreator'
import axios from 'axios'


function* getInitList() {
    try {
        const res = yield axios.get('http://localhost:8000/list');
        const listData = res.data.data.list
        const action = initListAction(listData)
        put(action)
    } catch(e) {
        console.log('todo list data 网络请求失败')
        const action = initListAction([])
        put(action)
    }
}

// generator 函数
function* todoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default todoSagas;