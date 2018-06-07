//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { fetchSongs } from '../../../store/actions/index';

import Template from './blank';

//CSS
const Main = styled.div`
    padding-top: 1rem;
    overflow-y: scroll;
`;
const Container = styled.div`
    padding: .375rem .25rem;
    .s-title{
        font-size: 1rem;
    }  
    .s-artist{
        font-size: .75rem;
        font-style: italic;
        font-weight: 100;
        color: #999;
    }
`;

// Component
class Songs extends Component {   

    componentDidMount () {
        this.props.onFetchSongs(this.props.name);
    }

    render () {

        let songs = this.props.songs.map( s => (
            <Container key={s.trackId}>
                <div className="s-title">{s.trackCensoredName}</div>
                <div className="s-artist">{s.artistName}</div>
            </Container>
        ));

        //URL : trackViewUrl
        //Artwork : artworkUrl30

        const label = "What's "+ this.props.name +"'s song?";
        return(
            <Template
                label={label}
                width="25%"
                height="300px"
                scroll="scroll">
                <Main>
                    {songs}
                </Main>
            </Template>
        );
    }
}

const mapStateToProps = state => {
    return {
        songs: state.name.songs,
        loading: state.name.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSongs: (name) => dispatch ( fetchSongs(name) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Songs);





