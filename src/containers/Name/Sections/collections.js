//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchNameCollections } from '../../../store/actions/index';

import Template from './blank';

//CSS
const Main = styled.div`
    padding: 1rem;
`;
const Collection = styled(Link)`
    padding: .5rem 0;
    display: block;
    font-size: 1rem;
    font-weight: 300;
    text-decoration: none;
    color: #444;
    color: ${props => props.theme.color_accent};
    border-bottom: 1px solid #EEE;
    &:last-child{
        border-bottom: none;
    }
    &:hover{
        text-decoration: underline;
    }
`;

// Component
class Collections extends Component {   

    componentDidMount () {
        this.props.onFetchNameCollections(this.props.name);
    }

    render () {

        const label = "Collections with '"+ this.props.name +"' in them?";

        let nameCollections = "We're still searching!";
        if(this.props.nameCollections[0]){
            nameCollections = this.props.nameCollections.map( nc => (
                <Collection key={nc.name} to={"/collection/"+nc.url}>
                    {nc.name}
                </Collection>
            ));
        }



        return(
            <Template
                label={label}
                width="25%"
                height="300px">
                <Main>
                    {nameCollections}
                </Main>
            </Template>
        );
    }
}

const mapStateToProps = state => {
    return {
        nameCollections: state.name.nameCollections,
        loading: state.name.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchNameCollections: (name) => dispatch ( fetchNameCollections(name) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Collections);







