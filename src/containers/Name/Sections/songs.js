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
import Spinner from '../../../components/spinner/spinner';

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

        let songs = <Spinner/>

        if(this.props.songs[0]){
            songs = this.props.songs.map( s => (
                <Container key={s.trackId}>
                    <div className="s-title">{s.trackCensoredName}</div>
                    <div className="s-artist">{s.artistName}</div>
                </Container>
            ));
        }

        //URL : trackViewUrl
        //Artwork : artworkUrl30

        const label = "What's "+ this.props.name +"'s song?";
        return(
            <Template
                label={label}
                big_width="25%"
                tablet_width="50%"
                phone_width="100%"
                tablet_height="300px"
                phone_height="auto"
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





