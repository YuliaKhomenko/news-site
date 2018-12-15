import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import articleLikesReducer from './common/features/articlelikereducer'



const store = createStore(
    articleLikesReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
       </BrowserRouter>
    </Provider>, document.getElementById('root'));
    


serviceWorker.unregister();








