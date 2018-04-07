import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';

import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import bookTableReducers from './reducers/index';


const store = createStore(bookTableReducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
