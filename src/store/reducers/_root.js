//======================================================================================================================
// App Redux root reducer
//======================================================================================================================

//Imports
import { combineReducers } from 'redux';

//App reducers
import { homeReducer } from './home';

const rootReducer = combineReducers({
    home: homeReducer,
});

export default rootReducer;