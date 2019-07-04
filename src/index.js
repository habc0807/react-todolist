import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './store'

import TodoList from './TodoList'
// import Autocomp from './Autocomp.js'

const App = (
    <Provider store={store}>
        <TodoList/>
        {/* <Autocomp/> */}
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
