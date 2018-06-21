//======================================================================================================================
// Class: Imdb
//======================================================================================================================
// Description:
// Imdb Results
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/spinner/spinner';

import { connect } from 'react-redux';
import { fetchImdb } from '../../../store/actions/index';

import Template from './blank';

//CSS
const Main = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
`;
const Container = styled.div`
    width: 16.6666%;
    padding: 1rem;
    box-sizing: border-box;
    height: 280px;
    overflow: hidden;
    .i-title{
        font-size: 1rem;
        padding-top: .5rem;
    }  
    .i-artist{
        font-size: .75rem;
        font-style: italic;
        font-weight: 100;
        color: #999;
    }
`;

// Component
class Imdb extends Component {   

    componentDidMount () {
        this.props.onFetchImdb(this.props.name);
    }

    render () {

        const label = "Actors & Films";
        const Image = styled.div`
            width: 100%x;
            height: 150px;
            background: url('${props => props.backgroundimage}') no-repeat top center; 
            background-size: cover;
        `;
        const NoImage = styled.div`
            width: 100%x;
            height: 150px;
            background-color: #888;
        `;

        let imdb = <Spinner/>
        console.log(this.props.imdb);
        // i[image, w h]
        if(this.props.imdb[0]){
            imdb = this.props.imdb.map( i => (
                <Container key={i.id}>
                    {i.i ? <Image backgroundimage={i.i[0]}/> : <NoImage/>}
                    <div className="i-title">{i.l}</div>
                    <div className="i-artist">{i.s}</div>
                </Container>
            ));
        }      
        
        return(
            <Template
                label={label}
                width="100%"
                height="325px">
                <Main>
                    {imdb}
                </Main>
            </Template>
        );
    }
}

const mapStateToProps = state => {
    return {
        imdb: state.name.imdb,
        loading: state.name.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchImdb: (name) => dispatch ( fetchImdb(name) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Imdb);







