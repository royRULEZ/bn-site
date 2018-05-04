//======================================================================================================================
// Explore page Redux reducer
//======================================================================================================================

//Imports
import {
    FETCH_ALLNAMES_START,
    FETCH_ALLNAMES_SUCCESS,
    FETCH_ALLNAMES_FAIL
} from '../actions/_actionTypes';
import { updateObject } from '../utility';

//State
const initialState = {
    allNames: [],
    loading: false
};

const fetchAllNamesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchAllNamesSuccess = ( state, action ) => {
    return updateObject( state, {
        allNames: action.allNames,
        loading: false
    } );
};

const fetchAllNamesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

export const exploreReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_ALLNAMES_START: return fetchAllNamesStart( state, action );
        case FETCH_ALLNAMES_SUCCESS: return fetchAllNamesSuccess( state, action );
        case FETCH_ALLNAMES_FAIL: return fetchAllNamesFail( state, action );
        default: return state;
    }
};

