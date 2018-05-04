
// Imports
import * as actionTypes from './_actionTypes';
import axios from '../../global/axios';


export const fetchAllNamesSuccess = ( allNames ) => {
    return {
        type: actionTypes.FETCH_ALLNAMES_SUCCESS,
        allNames: allNames
    };
};

export const fetchAllNamesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ALLNAMES_FAIL,
        error: error
    };
};

export const fetchAllNamesStart = () => {
    return {
        type: actionTypes.FETCH_ALLNAMES_START
    };
};

export const fetchAllNames = () => {
    return dispatch => {
        dispatch(fetchAllNamesStart());
        axios.get( 'http://localhost:8088/explore-names?p=Rare&g=M' )
            .then( res => {
                const fetchedNames = [];
                for ( let key in res.data ) {
                    fetchedNames.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchAllNamesSuccess(fetchedNames));
            } )
            .catch( err => {
                console.log('[FETCH_ALLNAMES_FAIL]', err);
                dispatch(fetchAllNamesFail(err));
            } );
    };
};
