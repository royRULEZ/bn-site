
// Imports
import * as actionTypes from './_actionTypes';
import axios from '../../global/axios';

// --------------------------------------------------------------------------------------------------------------------------
// Collection Info
// --------------------------------------------------------------------------------------------------------------------------
export const fetchCollectionSuccess = ( collection ) => {
    return {
        type: actionTypes.FETCH_COLLECTION_SUCCESS,
        collection: collection
    };
};

export const fetchCollectionFail = ( error ) => {
    return {
        type: actionTypes.FETCH_COLLECTION_FAIL,
        error: error
    };
};

export const fetchCollectionStart = () => {
    return {
        type: actionTypes.FETCH_COLLECTION_START
    };
};

export const fetchCollection = (name) => {
    let qStr = 'http://localhost:8088/collection/'+name+'';
    return dispatch => {
        
        dispatch(fetchCollectionStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchCollectionSuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_COLLECTION_FAIL]', err);
                dispatch(fetchCollectionFail(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// Collection Names
// --------------------------------------------------------------------------------------------------------------------------
export const fetchCollectionNamesSuccess = ( collectionNames ) => {
    return {
        type: actionTypes.FETCH_COLLECTIONNAMES_SUCCESS,
        collectionNames: collectionNames
    };
};

export const fetchCollectionNamesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_COLLECTIONNAMES_FAIL,
        error: error
    };
};

export const fetchCollectionNamesStart = () => {
    return {
        type: actionTypes.FETCH_COLLECTIONNAMES_START
    };
};

export const fetchCollectionNames = (id) => {
    let qStr = 'http://localhost:8088/collection-names/'+id+'';
    return dispatch => {
        
        dispatch(fetchCollectionNamesStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchCollectionNamesSuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_COLLECTIONNAMES_FAIL]', err);
                dispatch(fetchCollectionNamesFail(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// Collection Profiles
// --------------------------------------------------------------------------------------------------------------------------
export const fetchCollectionProfilesSuccess = ( collectionProfiles ) => {
    return {
        type: actionTypes.FETCH_COLLECTIONPROFILES_SUCCESS,
        collectionProfiles: collectionProfiles
    };
};

export const fetchCollectionProfilesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_COLLECTIONPROFILES_FAIL,
        error: error
    };
};

export const fetchCollectionProfilesStart = () => {
    return {
        type: actionTypes.FETCH_COLLECTIONPROFILES_START
    };
};

export const fetchCollectionProfiles = (id) => {
    let qStr = 'http://localhost:8088/collection-profiles/'+id+'';
    return dispatch => {
        
        dispatch(fetchCollectionProfilesStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchCollectionProfilesSuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_COLLECTIONPROFILES_FAIL]', err);
                dispatch(fetchCollectionProfilesFail(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// Collection Profiles
// --------------------------------------------------------------------------------------------------------------------------
export const fetchCollectionsSuccess = ( collections ) => {
    return {
        type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
        collections: collections
    };
};

export const fetchCollectionsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_COLLECTIONS_FAIL,
        error: error
    };
};

export const fetchCollectionsStart = () => {
    return {
        type: actionTypes.FETCH_COLLECTIONS_START
    };
};

export const fetchCollections = () => {
    let qStr = 'http://localhost:8088/collections/';
    return dispatch => {
        
        dispatch(fetchCollectionsStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchCollectionsSuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_COLLECTIONS_FAIL]', err);
                dispatch(fetchCollectionsFail(err));
            } );
    };
};

