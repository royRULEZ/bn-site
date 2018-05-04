//======================================================================================================================
// Redux store
//======================================================================================================================

//Imports
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/_root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(reduxThunk)
));

export default Store;