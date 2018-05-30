
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

export const fetchAllNames = (localState) => {
    let qStr = 'http://localhost:8088/explore-names?p='+localState.popularity+'&g='+localState.gender+'';
    return dispatch => {
        
        dispatch(fetchAllNamesStart());
        axios.get( qStr )
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

export const changeGender = (localState, gender) => {
    console.log(localState.gender, gender);
    let qStr = 'http://localhost:8088/explore-names?p='+localState.popularity+'&g='+gender+'';
    return dispatch => {


        dispatch(fetchAllNamesStart());
        axios.get( qStr )
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
    }
};

export const changePopularity = (localState, popularity) => {
    let qStr = 'http://localhost:8088/explore-names?p='+popularity+'&g='+localState.gender+'';
    return dispatch => {


        dispatch(fetchAllNamesStart());
        axios.get( qStr )
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
    }
};

export const changeAlpha = (localState, alpha) => {
    let qStr = 'http://localhost:8088/explore-names?p='+localState.popularity+'&g='+localState.gender+'&a='+alpha+'';
    return dispatch => {

        dispatch(fetchAllNamesStart());
        axios.get( qStr )
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
    }
};