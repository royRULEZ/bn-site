import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import Store from './store/store';
import registerServiceWorker from './registerServiceWorker';

const app = (
    <Provider store={Store}>
        <BrowserRouter>
            <App />    
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

//======================================================================================================================
// Packages Installed:
// . styled-components
// . react-redux
// . redux
// . react-router-dom
// . axios
// . redux-thunk
// . react-chartsjs-2
// . (not yet) redux-form
//======================================================================================================================