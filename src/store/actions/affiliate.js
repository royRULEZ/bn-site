
// Imports
import * as actionTypes from './_actionTypes';
import axios from '../../global/axios';

// --------------------------------------------------------------------------------------------------------------------------
// Collection Info
// --------------------------------------------------------------------------------------------------------------------------
export const fetchAdClusterSuccess = ( adcluster ) => {
    return {
        type: actionTypes.FETCH_ADCLUSTER_SUCCESS,
        adcluster: adcluster
    };
};

export const fetchAdClusterFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ADCLUSTER_FAIL,
        error: error
    };
};

export const fetchAdClusterStart = () => {
    return {
        type: actionTypes.FETCH_ADCLUSTER_START
    };
};

export const fetchAdCluster = (name) => {
    let qStr = 'ad-cluster';
    return dispatch => {
        
        dispatch(fetchAdClusterStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchAdClusterSuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_ADCLUSTER_FAIL]', err);
                dispatch(fetchAdClusterFail(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// Affiliate Row
// --------------------------------------------------------------------------------------------------------------------------
export const fetchAFRowSuccess = ( afrow ) => {
    return {
        type: actionTypes.FETCH_AFROW_SUCCESS,
        afrow: afrow
    };
};

export const fetchAFRowFail = ( error ) => {
    return {
        type: actionTypes.FETCH_AFROW_FAIL,
        error: error
    };
};

export const fetchAFRowStart = () => {
    return {
        type: actionTypes.FETCH_AFROW_START
    };
};

export const fetchAFRow = (name) => {
    let qStr = 'af-row';
    return dispatch => {
        
        dispatch(fetchAFRowStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchAFRowSuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_AFROW_FAIL]', err);
                dispatch(fetchAFRowFail(err));
            } );
    };
};