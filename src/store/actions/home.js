import * as actionTypes from './_actionTypes';
import axios from '../../global/axios';


// --------------------------------------------------------------------------------------------------------------------------
// 20 Random Names
// --------------------------------------------------------------------------------------------------------------------------
export const fetchNamesSuccess_G = ( girlNames20 ) => {
    return {
        type: actionTypes.FETCH_NAMES_SUCCESS_G,
        girlNames20: girlNames20
    };
};

export const fetchNamesFail_G = ( error ) => {
    return {
        type: actionTypes.FETCH_NAMES_FAIL_G,
        error: error
    };
};

export const fetchNamesStart_G = () => {
    return {
        type: actionTypes.FETCH_NAMES_START_G
    };
};

export const fetchNames = () => {
    return dispatch => {
        dispatch(fetchNamesStart_G());
        axios.get( '20-girl-names' )
            .then( res => {
                const fetchedNames = [];
                for ( let key in res.data ) {
                    fetchedNames.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchNamesSuccess_G(fetchedNames));
            } )
            .catch( err => {
                console.log('[Fetch_Girl_Names]', err);
                dispatch(fetchNamesFail_G(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// 20 Random Boy Names
// --------------------------------------------------------------------------------------------------------------------------
export const fetchNamesSuccess_B = ( boyNames20 ) => {
    return {
        type: actionTypes.FETCH_NAMES_SUCCESS_B,
        boyNames20: boyNames20
    };
};

export const fetchNamesFail_B = ( error ) => {
    return {
        type: actionTypes.FETCH_NAMES_FAIL_B,
        error: error
    };
};

export const fetchNamesStart_B = () => {
    return {
        type: actionTypes.FETCH_NAMES_START_B
    };
};

export const fetchNames_B = () => {
    return dispatch => {
        dispatch(fetchNamesStart_B());
        axios.get( '20-boy-names' )
            .then( res => {
                const fetchedNames = [];
                for ( let key in res.data ) {
                    fetchedNames.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchNamesSuccess_B(fetchedNames));
            } )
            .catch( err => {
                console.log('[Fetch_Boy_Names]', err);
                dispatch(fetchNamesFail_B(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// Random Name
// --------------------------------------------------------------------------------------------------------------------------
export const fetchRandomSuccess = ( randomName ) => {
    return {
        type: actionTypes.FETCH_RANDOM_SUCCESS,
        randomName: randomName
    };
};

export const fetchRandomFail = ( error ) => {
    return {
        type: actionTypes.FETCH_RANDOM_FAIL,
        error: error
    };
};

export const fetchRandomStart = () => {
    return {
        type: actionTypes.FETCH_RANDOM_START
    };
};

export const fetchRandom = () => {
    return dispatch => {
        dispatch(fetchRandomStart());
        axios.get( 'random-name' )
            .then( res => {   
                dispatch(fetchRandomSuccess(res.data[0]));
            } )
            .catch( err => {
                console.log('[Fetch_Boy_Names]', err);
                dispatch(fetchRandomFail(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// Collections
// --------------------------------------------------------------------------------------------------------------------------
export const fetchHCollectionsSuccess = ( HCollections ) => {
    return {
        type: actionTypes.FETCH_HCOLLECTIONS_SUCCESS,
        HCollections: HCollections
    };
};

export const fetchHCollectionsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_HCOLLECTIONS_FAIL,
        error: error
    };
};

export const fetchHCollectionsStart = () => {
    return {
        type: actionTypes.FETCH_HCOLLECTIONS_START
    };
};

export const fetchHCollections = () => {
    return dispatch => {
        dispatch(fetchHCollectionsStart());
        axios.get( 'collection-featured' )
            .then( res => {   
                dispatch(fetchHCollectionsSuccess(res.data));
            } )
            .catch( err => {
                console.log('[Fetch_HCOLLECTIONS_Names]', err);
                dispatch(fetchHCollectionsFail(err));
            } );
    };
};
