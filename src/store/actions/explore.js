
// Imports
import * as actionTypes from './_actionTypes';
import axios from '../../global/axios';


export const fetchAllNamesSuccess = ( exploreResults ) => {
    return {
        type: actionTypes.FETCH_ALLNAMES_SUCCESS,
        allNames: exploreResults.names,
        pageCount: exploreResults.count
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

export const updatePopularity = ( popularity ) => {
    return {
        type: actionTypes.UPDATE_POPULARITY,
        popularity: popularity,
    };
};

export const updateGender = ( gender ) => {
    return {
        type: actionTypes.UPDATE_GENDER,
        gender: gender,
    };
};

export const updateAlpha = ( alpha ) => {
    return {
        type: actionTypes.UPDATE_ALPHA,
        alpha: alpha,
    };
};

export const updateLength = ( length ) => {
    return {
        type: actionTypes.UPDATE_LENGTH,
        length: length,
    };
};

export const updatePage = ( page ) => {
    return {
        type: actionTypes.UPDATE_PAGE,
        page: page,
    };
};
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

export const changeGender = (bundle, gender) => {
    let qStr = 'explore-names?p='+bundle.popularity+'&g='+gender+'&a='+bundle.alpha+'&l='+bundle.length+'';
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
                dispatch(updateGender(gender));
                dispatch(fetchAllNamesSuccess(exploreResults));
            } )
            .catch( err => {
                console.log('[FETCH_ALLNAMES_FAIL]', err);
                dispatch(fetchAllNamesFail(err));
            } );
    };
};

export const changePopularity = (bundle, popularity) => {
    let qStr = 'explore-names?p='+popularity+'&g='+bundle.gender+'&a='+bundle.alpha+'&l='+bundle.length+'';
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
                dispatch(updatePopularity(popularity));
                dispatch(fetchAllNamesSuccess(exploreResults));
                
            } )
            .catch( err => {
                console.log('[FETCH_ALLNAMES_FAIL]', err);
                dispatch(fetchAllNamesFail(err));
            } );
    };
};

export const changeAlpha = (bundle, alpha) => {
    let qStr = 'explore-names?p='+bundle.popularity+'&g='+bundle.gender+'&a='+alpha+'&l='+bundle.length+'';
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
                dispatch(updateAlpha(alpha));
                dispatch(fetchAllNamesSuccess(exploreResults));
            } )
            .catch( err => {
                console.log('[FETCH_ALLNAMES_FAIL]', err);
                dispatch(fetchAllNamesFail(err));
            } );
    };
};

export const changeLength = (bundle, length) => {
    let qStr = 'explore-names?p='+bundle.popularity+'&g='+bundle.gender+'&a='+bundle.alpha+'&l='+length+'';
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
                dispatch(updateLength(length));
                dispatch(fetchAllNamesSuccess(exploreResults));
            } )
            .catch( err => {
                console.log('[FETCH_ALLNAMES_FAIL]', err);
                dispatch(fetchAllNamesFail(err));
            } );
    };
};

export const changePage = (bundle, page) => {
    let qStr = 'explore-names?p='+bundle.popularity+'&g='+bundle.gender+'&a='+bundle.alpha+'&l='+bundle.length+'&page='+page+'';
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
                dispatch(updatePage(page));
                dispatch(fetchAllNamesSuccess(exploreResults));
            } )
            .catch( err => {
                console.log('[FETCH_ALLNAMES_FAIL]', err);
                dispatch(fetchAllNamesFail(err));
            } );
    };
};