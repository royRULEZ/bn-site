import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from '../src/hoc/ScrollToTop';

import App from './App';
import Store from './store/store';
import registerServiceWorker from './registerServiceWorker';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-9726036-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const app = (
    <Provider store={Store}>
        <BrowserRouter>
            <ScrollToTop>
                <App />    
            </ScrollToTop>
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