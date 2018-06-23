
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
    let qStr = 'http://localhost:8088/ad-cluster';
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