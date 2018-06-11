//======================================================================================================================
// Explore page Redux reducer
//======================================================================================================================

//Imports
import {
    FETCH_ALLNAMES_START,
    FETCH_ALLNAMES_SUCCESS,
    FETCH_ALLNAMES_FAIL,
    UPDATE_POPULARITY,
    UPDATE_GENDER,
    UPDATE_ALPHA,
    UPDATE_LENGTH,
    UPDATE_PAGE
} from '../actions/_actionTypes';

import { updateObject } from '../utility';

//State
const initialState = {
    allNames: [],
    pageCount: 0,
    popularity: "Unique",
    gender: "F",
    alpha: "",
    length: "",
    page: 1,
    loading: false
};

const fetchAllNamesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchAllNamesSuccess = ( state, action ) => {
    return updateObject( state, {
        allNames: action.allNames,
        pageCount: action.pageCount,
        loading: false
    } );
};

const fetchAllNamesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const updatePopularity = ( state, action ) => {
    return updateObject( state, {
        popularity: action.popularity,
    } );
};

const updateGender = ( state, action ) => {
    return updateObject( state, {
        gender: action.gender,
    } );
};

const updateAlpha = ( state, action ) => {
    return updateObject( state, {
        alpha: action.alpha,
    } );
};

const updateLength = ( state, action ) => {
    return updateObject( state, {
        length: action.length,
    } );
};

const updatePage = ( state, action ) => {
    return updateObject( state, {
        page: action.page,
    } );
};

export const exploreReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_ALLNAMES_START: return fetchAllNamesStart( state, action );
        case FETCH_ALLNAMES_SUCCESS: return fetchAllNamesSuccess( state, action );
        case FETCH_ALLNAMES_FAIL: return fetchAllNamesFail( state, action );
        case UPDATE_POPULARITY: return updatePopularity( state, action );
        case UPDATE_GENDER: return updateGender( state, action );
        case UPDATE_ALPHA: return updateAlpha( state, action );
        case UPDATE_LENGTH: return updateLength( state, action );
        case UPDATE_PAGE: return updatePage( state, action );
        default: return state;
    }
};

