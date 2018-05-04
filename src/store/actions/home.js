import * as actionTypes from './_actionTypes';
import axios from '../../global/axios';

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
        axios.get( '/20-girl-names' )
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