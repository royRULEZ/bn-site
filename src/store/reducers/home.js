//======================================================================================================================
// Home page Redux reducer
//======================================================================================================================

//Imports
import {
    //
    FETCH_NAMES_START_G,
    FETCH_NAMES_SUCCESS_G,
    FETCH_NAMES_FAIL_G,
    //
    //
    FETCH_NAMES_START_B,
    FETCH_NAMES_SUCCESS_B,
    FETCH_NAMES_FAIL_B,
    //
    //
    FETCH_RANDOM_START,
    FETCH_RANDOM_SUCCESS,
    FETCH_RANDOM_FAIL
    //
} from '../actions/_actionTypes';
import { updateObject } from '../utility';

//State
const initialState = {
    girlNames20: [],
    boyNames20: [],
    randomName: [],
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
// 20 Random Boy Names
// --------------------------------------------------------------------------------------------------------------------------
const fetchNamesStart_B = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchNamesSuccess_B = ( state, action ) => {
    return updateObject( state, {
        boyNames20: action.boyNames20,
        loading: false
    } );
};

const fetchNamesFail_B = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

// --------------------------------------------------------------------------------------------------------------------------
// Random Name
// --------------------------------------------------------------------------------------------------------------------------
const fetchRandomStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchRandomSuccess = ( state, action ) => {
    return updateObject( state, {
        randomName: action.randomName,
        loading: false
    } );
};

const fetchRandomFail = ( state, action ) => {
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
        //
        case FETCH_NAMES_START_B: return fetchNamesStart_B( state, action );
        case FETCH_NAMES_SUCCESS_B: return fetchNamesSuccess_B( state, action );
        case FETCH_NAMES_FAIL_B: return fetchNamesFail_B( state, action );
        //
        //
        case FETCH_RANDOM_START: return fetchRandomStart( state, action );
        case FETCH_RANDOM_SUCCESS: return fetchRandomSuccess( state, action );
        case FETCH_RANDOM_FAIL: return fetchRandomFail( state, action );
        //
        default: return state;
    }
};



