
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
    let qStr = 'collection/'+name+'';
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
export const fetchCollectionNamesSuccess = ( collectionResults ) => {
    return {
        type: actionTypes.FETCH_COLLECTIONNAMES_SUCCESS,
        collectionNames: collectionResults.names,
        pageCount: collectionResults.count
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

export const updateCollectionNamesPage = ( page ) => {
    return {
        type: actionTypes.UPDATE_COLLECTIONNAMES_PAGE,
        page: page,
    };
};

export const fetchCollectionNames = (id) => {
    let qStr = 'collection-names?cid='+id+'';
    return dispatch => {
        
        dispatch(fetchCollectionNamesStart());
        axios.get( qStr )
            .then( res => {
                let collectionResults = {
                    names : res.data.allnames,
                    count : res.data.pagecount
                }
                dispatch(fetchCollectionNamesSuccess(collectionResults));
            } )
            .catch( err => {
                console.log('[FETCH_COLLECTIONNAMES_FAIL]', err);
                dispatch(fetchCollectionNamesFail(err));
            } );
    };
};

/*
export const fetchAllNames = (bundle) => {
    let qStr = 'explore-names?p='+bundle.popularity+'&g='+bundle.gender+'&a='+bundle.alpha+'&l='+bundle.length+'';
    return dispatch => {
        
        dispatch(fetchAllNamesStart());
        axios.get( qStr )
            .then( res => {
                const fetchedNames = [];
                for ( let key in res.data.allnames ) {
                    fetchedNames.push( {
                        ...res.data.allnames[key],
                        id: key
                    } );
                }
                let exploreResults = {
                    names : fetchedNames,
                    count : res.data.pagecount
                }
                //console.log("Results 1 ", exploreResults);
                dispatch(fetchAllNamesSuccess(exploreResults));
            } )
            .catch( err => {
                console.log('[FETCH_ALLNAMES_FAIL]', err);
                dispatch(fetchAllNamesFail(err));
            } );
    };
};
*/

export const changeCollectionNamesPage = (cid, page) => {
    console.log("CID", cid);
    let qStr = 'collection-names?cid='+cid+''+'&page='+page+'';
    return dispatch => {

        dispatch(fetchCollectionNamesStart());
        axios.get( qStr )
            .then( res => {
                let collectionResults = {
                    names : res.data.allnames,
                    count : res.data.pagecount
                }
                dispatch(updateCollectionNamesPage(page));
                dispatch(fetchCollectionNamesSuccess(collectionResults));
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
    let qStr = 'collection-profiles/'+id+'';
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
// Collections
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

export const fetchCollections = (a) => {
    let qStr = a ? 'collections/'+a : 'collections/';
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

// --------------------------------------------------------------------------------------------------------------------------
// Collections Popular
// --------------------------------------------------------------------------------------------------------------------------
export const fetchCollectionsPopularSuccess = ( collectionpopular ) => {
    return {
        type: actionTypes.FETCH_COLLECTIONSPOPULAR_SUCCESS,
        collectionpopular: collectionpopular
    };
};

export const fetchCollectionsPopularFail = ( error ) => {
    return {
        type: actionTypes.FETCH_COLLECTIONSPOPULAR_FAIL,
        error: error
    };
};

export const fetchCollectionsPopularStart = () => {
    return {
        type: actionTypes.FETCH_COLLECTIONSPOPULAR_START
    };
};

export const fetchCollectionsPopular = () => {
    let qStr = 'collections-popular/';
    return dispatch => {
        
        dispatch(fetchCollectionsPopularStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchCollectionsPopularSuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_COLLECTIONSPOPULAR_FAIL]', err);
                dispatch(fetchCollectionsPopularFail(err));
            } );
    };
};
