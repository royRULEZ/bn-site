//======================================================================================================================
// Home page Redux reducer
//======================================================================================================================

//Imports
import {
    FETCH_ADCLUSTER_START,
    FETCH_ADCLUSTER_SUCCESS,
    FETCH_ADCLUSTER_FAIL,
    //
    FETCH_AFROW_START,
    FETCH_AFROW_SUCCESS,
    FETCH_AFROW_FAIL,
    //
} from '../actions/_actionTypes';
import { updateObject } from '../utility';

//State
const initialState = {
    adcluster: [],
    afrow: [],
    loading: false
};


// --------------------------------------------------------------------------------------------------------------------------
// Name Info
// --------------------------------------------------------------------------------------------------------------------------
const fetchAdClusterStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchAdClusterSuccess = ( state, action ) => {
    return updateObject( state, {
        adcluster: action.adcluster,
        loading: false
    });
};

const fetchAdClusterFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};


// --------------------------------------------------------------------------------------------------------------------------
// Affiliate Row
// --------------------------------------------------------------------------------------------------------------------------
const fetchAFRowStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchAFRowSuccess = ( state, action ) => {
    return updateObject( state, {
        afrow: action.afrow,
        loading: false
    });
};

const fetchAFRowFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Main Reducer
// --------------------------------------------------------------------------------------------------------------------------
export const affiliateReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        //
        case FETCH_ADCLUSTER_START: return fetchAdClusterStart( state, action );
        case FETCH_ADCLUSTER_SUCCESS: return fetchAdClusterSuccess( state, action );
        case FETCH_ADCLUSTER_FAIL: return fetchAdClusterFail( state, action );
        //
        //
        case FETCH_AFROW_START: return fetchAFRowStart( state, action );
        case FETCH_AFROW_SUCCESS: return fetchAFRowSuccess( state, action );
        case FETCH_AFROW_FAIL: return fetchAFRowFail( state, action );
        //
        default: return state;
    }
};




