import { GET_INIT_LIST, put } from './actionTypes'
import { tackEvery } from 'redux-saga/effectss'
import axios from 'axios'


function* getInitList() {
    axios.get('/list.json').then(() => {
        console.log('----')
        const action = initListAction(data)
        put(action)
    })
}

function* mySaga() {
    yield tackEvery("USER_FETCH_REQUESTED", getInitList);
}

export default mySaga 