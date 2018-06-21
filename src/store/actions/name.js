
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

export const fetchNameInfoNotFound = () => {
    return {
        type: actionTypes.FETCH_NAMEINFO_NOTFOUND,
        noFind: true
    };
};
export const fetchNameInfo = (name) => {
    let qStr = 'http://localhost:8088/name?n='+name+'';
    return dispatch => {
        
        dispatch(fetchNameInfoStart());
        axios.get( qStr )
            .then( res => {
                if(!res.data[0]){
                    console.log("Didn't Find");
                    dispatch(fetchNameInfoNotFound());
                }else{
                    const nameInfo = [];
                    for ( let key in res.data ) {
                        nameInfo.push( {
                            ...res.data[key],
                            id: key
                        } );
                    }
                    dispatch(fetchNameInfoSuccess(nameInfo));
                }
            } )
            .catch( err => {
                console.log('[FETCH_NAMEINFO_FAIL]', err);
                dispatch(fetchNameInfoFail(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// Name Meaning
// --------------------------------------------------------------------------------------------------------------------------
export const fetchImdbSuccess = ( imdb ) => {
    return {
        type: actionTypes.FETCH_IMDB_SUCCESS,
        imdb: imdb
    };
};

export const fetchImdbFail = ( error ) => {
    return {
        type: actionTypes.FETCH_IMDB_FAIL,
        error: error
    };
};

export const fetchImdbStart = () => {
    return {
        type: actionTypes.FETCH_IMDB_START
    };
};

export const fetchImdb = (name) => {
    let qStr = 'http://localhost:8088/imdb/'+name+'';
    return dispatch => {
        
        dispatch(fetchImdbStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchImdbSuccess(res.data.d));
            } )
            .catch( err => {
                console.log('[FETCH_IMDB_FAIL]', err);
                dispatch(fetchImdbFail(err));
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

// --------------------------------------------------------------------------------------------------------------------------
// Songs
// --------------------------------------------------------------------------------------------------------------------------
export const fetchSongsSuccess = ( songs ) => {
    return {
        type: actionTypes.FETCH_SONGS_SUCCESS,
        songs: songs
    };
};

export const fetchSongsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_SONGS_FAIL,
        error: error
    };
};

export const fetchSongsStart = () => {
    return {
        type: actionTypes.FETCH_SONGS_START
    };
};

export const fetchSongs = (name) => {
    let qStr = 'https://itunes.apple.com/search?term='+name+'&entity=song&limit=5';
    return dispatch => {
        
        dispatch(fetchSongsStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchSongsSuccess(res.data.results));
            } )
            .catch( err => {
                console.log('[FETCH_SONGS_FAIL]', err);
                dispatch(fetchSongsFail(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// Trends
// --------------------------------------------------------------------------------------------------------------------------
export const fetchTrendsSuccess = ( trends ) => {
    return {
        type: actionTypes.FETCH_TRENDS_SUCCESS,
        trends: trends
    };
};

export const fetchTrendsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_TRENDS_FAIL,
        error: error
    };
};

export const fetchTrendsStart = () => {
    return {
        type: actionTypes.FETCH_TRENDS_START
    };
};

export const fetchTrends = (name) => {
    let qStr = 'http://localhost:8088/google-trends/'+name+''; 
    return dispatch => {
        
        dispatch(fetchTrendsStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchTrendsSuccess(res.data.default.timelineData));
            } )
            .catch( err => {
                console.log('[FETCH_TRENDS_FAIL]', err);
                dispatch(fetchTrendsFail(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// Origins
// --------------------------------------------------------------------------------------------------------------------------
export const fetchOriginsSuccess = ( origins ) => {
    return {
        type: actionTypes.FETCH_ORIGINS_SUCCESS,
        origins: origins
    };
};

export const fetchOriginsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORIGINS_FAIL,
        error: error
    };
};

export const fetchOriginsStart = () => {
    return {
        type: actionTypes.FETCH_ORIGINS_START
    };
};

export const fetchOrigins = (name) => {
    let qStr = 'http://localhost:8088/origin/'+name+''; 
    return dispatch => {
        
        dispatch(fetchOriginsStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchOriginsSuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_ORIGINS_FAIL]', err);
                dispatch(fetchOriginsFail(err));
            } );
    };
};


// --------------------------------------------------------------------------------------------------------------------------
// Origins
// --------------------------------------------------------------------------------------------------------------------------
export const fetchNameCollectionsSuccess = ( nameCollections ) => {
    return {
        type: actionTypes.FETCH_NAMECOLLECTIONS_SUCCESS,
        nameCollections: nameCollections
    };
};

export const fetchNameCollectionsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_NAMECOLLECTIONS_FAIL,
        error: error
    };
};

export const fetchNameCollectionsStart = () => {
    return {
        type: actionTypes.FETCH_NAMECOLLECTIONS_START
    };
};

export const fetchNameCollections = (name) => {
    let qStr = 'http://localhost:8088/get-collections/'+name+''; 
    return dispatch => {
        
        dispatch(fetchNameCollectionsStart());
        axios.get( qStr )
            .then( res => {
                dispatch(fetchNameCollectionsSuccess(res.data));
            } )
            .catch( err => {
                console.log('[FETCH_NAMECOLLECTIONS_FAIL]', err);
                dispatch(fetchNameCollectionsFail(err));
            } );
    };
};