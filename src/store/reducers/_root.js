//======================================================================================================================
// App Redux root reducer
//======================================================================================================================

//Imports
import { combineReducers } from 'redux';

//App reducers
import { homeReducer } from './home';
import { exploreReducer } from './explore';
import { nameReducer } from './name';
import { collectionReducer } from './collection';
import { affiliateReducer } from './affiliate';

const rootReducer = combineReducers({
    home: homeReducer,
    explore: exploreReducer,
    name: nameReducer,
    collection: collectionReducer,
    affiliate: affiliateReducer
});

export default rootReducer;