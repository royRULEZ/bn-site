//======================================================================================================================
// Home page Redux reducer
//======================================================================================================================

//Imports
import {
    FETCH_COLLECTION_START,
    FETCH_COLLECTION_SUCCESS,
    FETCH_COLLECTION_FAIL,
    //
    FETCH_COLLECTIONNAMES_START,
    FETCH_COLLECTIONNAMES_SUCCESS,
    FETCH_COLLECTIONNAMES_FAIL,
    //
    FETCH_COLLECTIONPROFILES_START,
    FETCH_COLLECTIONPROFILES_SUCCESS,
    FETCH_COLLECTIONPROFILES_FAIL,
    //
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAIL,
    //
} from '../actions/_actionTypes';
import { updateObject } from '../utility';

//State
const initialState = {
    collection: [],
    collectionNames: [],
    collectionProfiles: [],
    collections: [],
    loading: false
};


// --------------------------------------------------------------------------------------------------------------------------
// Name Info
// --------------------------------------------------------------------------------------------------------------------------
const fetchCollectionStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchCollectionSuccess = ( state, action ) => {
    return updateObject( state, {
        collection: action.collection,
        loading: false
    });
};

const fetchCollectionFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};


// --------------------------------------------------------------------------------------------------------------------------
// Collection Names
// --------------------------------------------------------------------------------------------------------------------------
const fetchCollectionNamesStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchCollectionNamesSuccess = ( state, action ) => {
    return updateObject( state, {
        collectionNames: action.collectionNames,
        loading: false
    });
};

const fetchCollectionNamesFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};


// --------------------------------------------------------------------------------------------------------------------------
// Collection Profiles
// --------------------------------------------------------------------------------------------------------------------------
const fetchCollectionProfilesStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchCollectionProfilesSuccess = ( state, action ) => {
    return updateObject( state, {
        collectionProfiles: action.collectionProfiles,
        loading: false
    });
};

const fetchCollectionProfilesFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Collections
// --------------------------------------------------------------------------------------------------------------------------
const fetchCollectionsStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchCollectionsSuccess = ( state, action ) => {
    return updateObject( state, {
        collections: action.collections,
        loading: false
    });
};

const fetchCollectionsFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Main Reducer
// --------------------------------------------------------------------------------------------------------------------------
export const collectionReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        //
        case FETCH_COLLECTION_START: return fetchCollectionStart( state, action );
        case FETCH_COLLECTION_SUCCESS: return fetchCollectionSuccess( state, action );
        case FETCH_COLLECTION_FAIL: return fetchCollectionFail( state, action );
        //
        //
        case FETCH_COLLECTIONNAMES_START: return fetchCollectionNamesStart( state, action );
        case FETCH_COLLECTIONNAMES_SUCCESS: return fetchCollectionNamesSuccess( state, action );
        case FETCH_COLLECTIONNAMES_FAIL: return fetchCollectionNamesFail( state, action );
        //
        //
        case FETCH_COLLECTIONPROFILES_START: return fetchCollectionProfilesStart( state, action );
        case FETCH_COLLECTIONPROFILES_SUCCESS: return fetchCollectionProfilesSuccess( state, action );
        case FETCH_COLLECTIONPROFILES_FAIL: return fetchCollectionProfilesFail( state, action );
        //
        //
        case FETCH_COLLECTIONS_START: return fetchCollectionsStart( state, action );
        case FETCH_COLLECTIONS_SUCCESS: return fetchCollectionsSuccess( state, action );
        case FETCH_COLLECTIONS_FAIL: return fetchCollectionsFail( state, action );
        //
        default: return state;
    }
};




