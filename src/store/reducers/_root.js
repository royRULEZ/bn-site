//======================================================================================================================
// App Redux root reducer
//======================================================================================================================

//Imports
import { combineReducers } from 'redux';

//App reducers
import { homeReducer } from './home';
import { exploreReducer } from './explore';

const rootReducer = combineReducers({
    home: homeReducer,
    explore: exploreReducer
});

export default rootReducer;