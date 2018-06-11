//======================================================================================================================
// Home page Redux reducer
//======================================================================================================================

//Imports
import {
    FETCH_NAMEINFO_START,
    FETCH_NAMEINFO_SUCCESS,
    FETCH_NAMEINFO_FAIL,
    //
    FETCH_RECENTHISTORY_START,
    FETCH_RECENTHISTORY_SUCCESS,
    FETCH_RECENTHISTORY_FAIL,
    //
    FETCH_HISTORY_START,
    FETCH_HISTORY_SUCCESS,
    FETCH_HISTORY_FAIL,
    //
    FETCH_VARIATIONS_START,
    FETCH_VARIATIONS_SUCCESS,
    FETCH_VARIATIONS_FAIL,
    //
    FETCH_SONGS_START,
    FETCH_SONGS_SUCCESS,
    FETCH_SONGS_FAIL,
    //
    FETCH_TRENDS_START,
    FETCH_TRENDS_SUCCESS,
    FETCH_TRENDS_FAIL,
    //
    FETCH_ORIGINS_START,
    FETCH_ORIGINS_SUCCESS,
    FETCH_ORIGINS_FAIL,
    //
    FETCH_NAMECOLLECTIONS_START,
    FETCH_NAMECOLLECTIONS_SUCCESS,
    FETCH_NAMECOLLECTIONS_FAIL,
} from '../actions/_actionTypes';
import { updateObject } from '../utility';

//State
const initialState = {
    nameInfo: [],
    recentHistory: [],
    history: [],
    variations: [],
    songs: [],
    trends: [],
    origins: [],
    nameCollections: [],
    loading: false,
    noFind: false
};


// --------------------------------------------------------------------------------------------------------------------------
// Name Info
// --------------------------------------------------------------------------------------------------------------------------
const fetchNameInfoStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchNameInfoSuccess = ( state, action ) => {
    return updateObject( state, {
        nameInfo: action.nameInfo,
        loading: false
    });
};

const fetchNameInfoFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Recent History
// --------------------------------------------------------------------------------------------------------------------------
const fetchRecentHistoryStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchRecentHistorySuccess = ( state, action ) => {
    return updateObject( state, {
        recentHistory: action.recentHistory,
        loading: false
    });
};

const fetchRecentHistoryFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Full History
// --------------------------------------------------------------------------------------------------------------------------
const fetchHistoryStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchHistorySuccess = ( state, action ) => {
    return updateObject( state, {
        history: action.history,
        loading: false
    });
};

const fetchHistoryFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Variations
// --------------------------------------------------------------------------------------------------------------------------
const fetchVariationsStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchVariationsSuccess = ( state, action ) => {
    return updateObject( state, {
        variations: action.variations,
        loading: false
    });
};

const fetchVariationsFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Variations
// --------------------------------------------------------------------------------------------------------------------------
const fetchSongsStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchSongsSuccess = ( state, action ) => {
    return updateObject( state, {
        songs: action.songs,
        loading: false
    });
};

const fetchSongsFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Trends
// --------------------------------------------------------------------------------------------------------------------------
const fetchTrendsStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchTrendsSuccess = ( state, action ) => {
    return updateObject( state, {
        trends: action.trends,
        loading: false
    });
};

const fetchTrendsFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};


// --------------------------------------------------------------------------------------------------------------------------
// Origins
// --------------------------------------------------------------------------------------------------------------------------
const fetchOriginsStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchOriginsSuccess = ( state, action ) => {
    return updateObject( state, {
        origins: action.origins,
        loading: false
    });
};

const fetchOriginsFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};


// --------------------------------------------------------------------------------------------------------------------------
// Name Collections
// --------------------------------------------------------------------------------------------------------------------------
const fetchNameCollectionsStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    });
};

const fetchNameCollectionsSuccess = ( state, action ) => {
    return updateObject( state, {
        nameCollections: action.nameCollections,
        loading: false
    });
};

const fetchNameCollectionsFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false 
    });
};

// --------------------------------------------------------------------------------------------------------------------------
// Main Reducer
// --------------------------------------------------------------------------------------------------------------------------
export const nameReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        //
        case FETCH_NAMEINFO_START: return fetchNameInfoStart( state, action );
        case FETCH_NAMEINFO_SUCCESS: return fetchNameInfoSuccess( state, action );
        case FETCH_NAMEINFO_FAIL: return fetchNameInfoFail( state, action );
        //
        //
        case FETCH_RECENTHISTORY_START: return fetchRecentHistoryStart( state, action );
        case FETCH_RECENTHISTORY_SUCCESS: return fetchRecentHistorySuccess( state, action );
        case FETCH_RECENTHISTORY_FAIL: return fetchRecentHistoryFail( state, action );
        //
        //
        case FETCH_HISTORY_START: return fetchHistoryStart( state, action );
        case FETCH_HISTORY_SUCCESS: return fetchHistorySuccess( state, action );
        case FETCH_HISTORY_FAIL: return fetchHistoryFail( state, action );
        //
        //
        case FETCH_VARIATIONS_START: return fetchVariationsStart( state, action );
        case FETCH_VARIATIONS_SUCCESS: return fetchVariationsSuccess( state, action );
        case FETCH_VARIATIONS_FAIL: return fetchVariationsFail( state, action );
        //
        //
        case FETCH_SONGS_START: return fetchSongsStart( state, action );
        case FETCH_SONGS_SUCCESS: return fetchSongsSuccess( state, action );
        case FETCH_SONGS_FAIL: return fetchSongsFail( state, action );
        //
        //
        case FETCH_TRENDS_START: return fetchTrendsStart( state, action );
        case FETCH_TRENDS_SUCCESS: return fetchTrendsSuccess( state, action );
        case FETCH_TRENDS_FAIL: return fetchTrendsFail( state, action );
        //
        //
        case FETCH_ORIGINS_START: return fetchOriginsStart( state, action );
        case FETCH_ORIGINS_SUCCESS: return fetchOriginsSuccess( state, action );
        case FETCH_ORIGINS_FAIL: return fetchOriginsFail( state, action );
        //
        //
        case FETCH_NAMECOLLECTIONS_START: return fetchNameCollectionsStart( state, action );
        case FETCH_NAMECOLLECTIONS_SUCCESS: return fetchNameCollectionsSuccess( state, action );
        case FETCH_NAMECOLLECTIONS_FAIL: return fetchNameCollectionsFail( state, action );
        //
        default: return state;
    }
};




