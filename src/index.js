import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import bookTableReducers from './reducers/index';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(bookTableReducers);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
