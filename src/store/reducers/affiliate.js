//======================================================================================================================
// Home page Redux reducer
//======================================================================================================================

//Imports
import {
    FETCH_ADCLUSTER_START,
    FETCH_ADCLUSTER_SUCCESS,
    FETCH_ADCLUSTER_FAIL,
    //
} from '../actions/_actionTypes';
import { updateObject } from '../utility';

//State
const initialState = {
    adcluster: [],
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
// Main Reducer
// --------------------------------------------------------------------------------------------------------------------------
export const affiliateReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        //
        case FETCH_ADCLUSTER_START: return fetchAdClusterStart( state, action );
        case FETCH_ADCLUSTER_SUCCESS: return fetchAdClusterSuccess( state, action );
        case FETCH_ADCLUSTER_FAIL: return fetchAdClusterFail( state, action );
        //
        default: return state;
    }
};




