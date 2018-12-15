import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'


const articleLikesReducer = (state={},action) => state
const store = createStore(articleLikesReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
       </BrowserRouter>
    </Provider>, document.getElementById('root'));
    


serviceWorker.unregister();








