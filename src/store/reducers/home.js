//======================================================================================================================
// Home page Redux reducer
//======================================================================================================================

//Imports
import {
    FETCH_NAMES_START_G,
    FETCH_NAMES_SUCCESS_G,
    FETCH_NAMES_FAIL_G
} from '../actions/_actionTypes';
import { updateObject } from '../utility';

//State
const initialState = {
    girlNames20: [],
    boyNames20: [],
    loading: false
};


// --------------------------------------------------------------------------------------------------------------------------
// 20 Random Names
// --------------------------------------------------------------------------------------------------------------------------
const fetchNamesStart_G = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchNamesSuccess_G = ( state, action ) => {
    return updateObject( state, {
        girlNames20: action.girlNames20,
        loading: false
    } );
};

const fetchNamesFail_G = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


// --------------------------------------------------------------------------------------------------------------------------
// Collections
// --------------------------------------------------------------------------------------------------------------------------
const fetchCollectionsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchCollectionsSuccess = ( state, action ) => {
    return updateObject( state, {
        collections: action.collections,
        loading: false
    } );
};

const fetchCollectionsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


// --------------------------------------------------------------------------------------------------------------------------
// Main Reducer
// --------------------------------------------------------------------------------------------------------------------------
export const homeReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        //
        case FETCH_NAMES_START_G: return fetchNamesStart_G( state, action );
        case FETCH_NAMES_SUCCESS_G: return fetchNamesSuccess_G( state, action );
        case FETCH_NAMES_FAIL_G: return fetchNamesFail_G( state, action );
        //
        case FETCH_NAMES_START_G: return fetchCollectionsStart( state, action );
        case FETCH_NAMES_SUCCESS_G: return fetchCollectionsSuccess( state, action );
        case FETCH_NAMES_FAIL_G: return fetchCollectionsFail( state, action );
        //
        default: return state;
    }
};



