//Imports
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';

import { connect } from 'react-redux';
import { fetchRandom } from '../../../store/actions/index';

const Main = styled.article`
    max-width: 768px;
    width: 95%;
    margin: 0 auto;   
    .ht_description{
        line-height: 1.5rem;  
        padding: 0 .5rem;
        box-sizing: border-box;
        @media (min-width: ${props => props.theme.tablet}) {
            line-height: 1.5rem;  
            padding: 0;
        }  
    } 
`;


class Instagram extends Component {   

    componentDidMount () {
        this.props.onFetchRandom();
        window.scroll(0,140);
    }

    render () {
        
        let container = "";
        if(this.props.randomName.name){
            container = 
            <Main>
                Couldn't Find that {this.props.name} ...
                There's a few things that could be at play here.
                1. No one has ever named thier kid with that name! 
                2. No one has named their child in the US that name (at least not that we have any any record for)

                However, we love data. Let's take a look at what we know about this name anyway!!
            </Main>
        ;
        }

        return (
            <Aux>
                <Helmet>
                    <title>Infographic</title>
                </Helmet>
                {container}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        randomName: state.home.randomName,
        loading: state.home.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRandom: () => dispatch ( fetchRandom() ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Instagram);