//======================================================================================================================
// Home page Redux reducer
//======================================================================================================================

//Imports
import {
    FETCH_NAMEINFO_START,
    FETCH_NAMEINFO_SUCCESS,
    FETCH_NAMEINFO_FAIL,
    //
    FETCH_RECENTHISTORY_START,
    FETCH_RECENTHISTORY_SUCCESS,
    FETCH_RECENTHISTORY_FAIL,
    //
    FETCH_HISTORY_START,
    FETCH_HISTORY_SUCCESS,
    FETCH_HISTORY_FAIL,
    //
    FETCH_VARIATIONS_START,
    FETCH_VARIATIONS_SUCCESS,
    FETCH_VARIATIONS_FAIL,
} from '../actions/_actionTypes';
import { updateObject } from '../utility';

//State
const initialState = {
    nameInfo: [],
    recentHistory: [],
    history: [],
    variations: [],
    loading: false
};


// --------------------------------------------------------------------------------------------------------------------------
// Name Info
// --------------------------------------------------------------------------------------------------------------------------
const fetchNameInfoStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchNameInfoSuccess = ( state, action ) => {
    return updateObject( state, {
        nameInfo: action.nameInfo,
        loading: false
    });
};

const fetchNameInfoFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Recent History
// --------------------------------------------------------------------------------------------------------------------------
const fetchRecentHistoryStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchRecentHistorySuccess = ( state, action ) => {
    return updateObject( state, {
        recentHistory: action.recentHistory,
        loading: false
    });
};

const fetchRecentHistoryFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Full History
// --------------------------------------------------------------------------------------------------------------------------
const fetchHistoryStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchHistorySuccess = ( state, action ) => {
    return updateObject( state, {
        history: action.history,
        loading: false
    });
};

const fetchHistoryFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Variations
// --------------------------------------------------------------------------------------------------------------------------
const fetchVariationsStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchVariationsSuccess = ( state, action ) => {
    return updateObject( state, {
        variations: action.variations,
        loading: false
    });
};

const fetchVariationsFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Main Reducer
// --------------------------------------------------------------------------------------------------------------------------
export const nameReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        //
        case FETCH_NAMEINFO_START: return fetchNameInfoStart( state, action );
        case FETCH_NAMEINFO_SUCCESS: return fetchNameInfoSuccess( state, action );
        case FETCH_NAMEINFO_FAIL: return fetchNameInfoFail( state, action );
        //
        //
        case FETCH_RECENTHISTORY_START: return fetchRecentHistoryStart( state, action );
        case FETCH_RECENTHISTORY_SUCCESS: return fetchRecentHistorySuccess( state, action );
        case FETCH_RECENTHISTORY_FAIL: return fetchRecentHistoryFail( state, action );
        //
        //
        case FETCH_HISTORY_START: return fetchHistoryStart( state, action );
        case FETCH_HISTORY_SUCCESS: return fetchHistorySuccess( state, action );
        case FETCH_HISTORY_FAIL: return fetchHistoryFail( state, action );
        //
        //
        case FETCH_VARIATIONS_START: return fetchVariationsStart( state, action );
        case FETCH_VARIATIONS_SUCCESS: return fetchVariationsSuccess( state, action );
        case FETCH_VARIATIONS_FAIL: return fetchVariationsFail( state, action );
        //
        default: return state;
    }
};




