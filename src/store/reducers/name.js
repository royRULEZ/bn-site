//======================================================================================================================
// Home page Redux reducer
//======================================================================================================================

//Imports
import {
    FETCH_NAMEINFO_START,
    FETCH_NAMEINFO_SUCCESS,
    FETCH_NAMEINFO_FAIL
} from '../actions/_actionTypes';
import { updateObject } from '../utility';

//State
const initialState = {
    nameInfo: [],
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
// Main Reducer
// --------------------------------------------------------------------------------------------------------------------------
export const nameReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        //
        case FETCH_NAMEINFO_START: return fetchNameInfoStart( state, action );
        case FETCH_NAMEINFO_SUCCESS: return fetchNameInfoSuccess( state, action );
        case FETCH_NAMEINFO_FAIL: return fetchNameInfoFail( state, action );
        //
        default: return state;
    }
};



