//======================================================================================================================
// Class: Imdb
//======================================================================================================================
// Description:
// Imdb Results
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from '../../../components/spinner/spinner';

import { connect } from 'react-redux';
import { fetchImdb } from '../../../store/actions/index';

import Template from './blank';

//CSS
const Main = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    @media (min-width: ${props => props.theme.big_tablet}) {
        padding: 1rem;
        flex-wrap: nowrap;
    }
`;
const Container = styled.div`
    width: 50%;
    padding: 1rem;
    box-sizing: border-box;
    height: 250px;
    overflow: hidden;
    .i-title{
        font-size: .875rem;
        padding-top: .5rem;
    }  
    .i-artist{
        font-size: .625rem;
        font-style: italic;
        font-weight: 100;
        color: #999;
    }
    @media (min-width: ${props => props.theme.big_phone}) {
        width: 25%;
        height: 280px;
        .i-title{
            font-size: 1rem;
        }  
        .i-artist{
            font-size: .75rem;
        }
    }
    @media (min-width: ${props => props.theme.big_tablet}) {
        width: 16.6666%;
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
                big_width="100%"
                tablet_width="100%"
                phone_width="100%"
                phone_height="auto"
                tablet_height="auto"
                >
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







