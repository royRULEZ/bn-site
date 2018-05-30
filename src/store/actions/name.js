
// Imports
import * as actionTypes from './_actionTypes';
import axios from '../../global/axios';


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