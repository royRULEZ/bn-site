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
import { fetchVariations } from '../../../store/actions/index';

import Template from './blank';
import { Link } from 'react-router-dom';

//CSS
const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`;
const Name = styled(Link)`
    padding: .5rem 0;    
    width: 50%;
    font-size: 1rem;
    font-weight: 300;
    box-sizing: border-box;
    color: #444;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;

// TODO: Breaks on Sawyer

// Component
class Variations extends Component {   

    componentDidMount () {
        this.props.onFetchVariations(this.props.name);
    }

    render () {

        let names = "No Variations";
        let namesArr = null;
        namesArr = this.props.variations.splice(0, 1);
        if ( this.props.variations[0] ) {
            names = this.props.variations.map( n => (
                <Name to={"/name/" + n.name} key={n.name}>{n.name}</Name>
            ) );
        }

        return(
            <Template
                label="Variations"
                big_width="25%"
                tablet_width="50%"
                phone_width="100%"
                tablet_height="300px"
                phone_height="auto"
                >
                <Main>
                    {names}
                </Main>
            </Template>
        );
    }
}

const mapStateToProps = state => {
    return {
        variations: state.name.variations,
        loading: state.name.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchVariations: (name) => dispatch ( fetchVariations(name) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Variations);







