
// Imports
import * as actionTypes from './_actionTypes';
import axios from '../../global/axios';

// --------------------------------------------------------------------------------------------------------------------------
// Name Info
// --------------------------------------------------------------------------------------------------------------------------
export const fetchNameInfoSuccess = ( nameInfo ) => {
    return {
        type: actionTypes.FETCH_NAMEINFO_SUCCESS,
        nameInfo: nameInfo
    };
};

export const fetchNameInfoFail = ( error ) => {
    return {
        type: actionTypes.FETCH_NAMEINFO_FAIL,
        error: error
    };
};

export const fetchNameInfoStart = () => {
    return {
        type: actionTypes.FETCH_NAMEINFO_START
    };
};

export const fetchNameInfo = (name) => {
    let qStr = 'http://localhost:8088/name?n='+name+'';
    return dispatch => {
        
        dispatch(fetchNameInfoStart());
        axios.get( qStr )
            .then( res => {
                const nameInfo = [];
                for ( let key in res.data ) {
                    nameInfo.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchNameInfoSuccess(nameInfo));
            } )
            .catch( err => {
                console.log('[FETCH_NAMEINFO_FAIL]', err);
                dispatch(fetchNameInfoFail(err));
            } );
    };
};

// --------------------------------------------------------------------------------------------------------------------------
// Recent History
// --------------------------------------------------------------------------------------------------------------------------
export const fetchRecentHistorySuccess = ( recentHistory ) => {
    return {
        type: actionTypes.FETCH_RECENTHISTORY_SUCCESS,
        recentHistory: recentHistory
    };
};

export const fetchRecentHistoryFail = ( error ) => {
    return {
        type: actionTypes.FETCH_RECENTHISTORY_FAIL,
        error: error
    };
};

export const fetchRecentHistoryStart = () => {
    return {
        type: actionTypes.FETCH_RECENTHISTORY_START
    };
};

export const fetchRecentHistory = (name) => {
    let qStr = 'http://localhost:8088/namehistory20/'+name+'';
    return dispatch => {
        
        dispatch(fetchRecentHistoryStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchRecentHistorySuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_RECENTHISTORY_FAIL]', err);
                dispatch(fetchRecentHistoryFail(err));
            } );
    };
};

// --------------------------------------------------------------------------------------------------------------------------
// Full History
// --------------------------------------------------------------------------------------------------------------------------
export const fetchHistorySuccess = ( history ) => {
    return {
        type: actionTypes.FETCH_HISTORY_SUCCESS,
        history: history
    };
};

export const fetchHistoryFail = ( error ) => {
    return {
        type: actionTypes.FETCH_HISTORY_FAIL,
        error: error
    };
};

export const fetchHistoryStart = () => {
    return {
        type: actionTypes.FETCH_HISTORY_START
    };
};

export const fetchHistory = (name) => {
    let qStr = 'http://localhost:8088/namehistory/'+name+'';
    return dispatch => {
        
        dispatch(fetchHistoryStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchHistorySuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_HISTORY_FAIL]', err);
                dispatch(fetchHistoryFail(err));
            } );
    };
};

// --------------------------------------------------------------------------------------------------------------------------
// Variations
// --------------------------------------------------------------------------------------------------------------------------
export const fetchVariationsSuccess = ( variations ) => {
    return {
        type: actionTypes.FETCH_VARIATIONS_SUCCESS,
        variations: variations
    };
};

export const fetchVariationsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_VARIATIONS_FAIL,
        error: error
    };
};

export const fetchVariationsStart = () => {
    return {
        type: actionTypes.FETCH_VARIATIONS_START
    };
};

export const fetchVariations = (name) => {
    let qStr = 'http://localhost:8088/variations/'+name+'';
    return dispatch => {
        
        dispatch(fetchVariationsStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchVariationsSuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_VARIATIONS_FAIL]', err);
                dispatch(fetchVariationsFail(err));
            } );
    };
};