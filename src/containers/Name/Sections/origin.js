//======================================================================================================================
// Class: ___
//======================================================================================================================
// Description:
// 
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchOrigins } from '../../../store/actions/index';

import Template from './blank';

//CSS
const Main = styled.div`
    padding: 1rem;
`;
const Origin = styled(Link)`
    padding: .5rem 0;
    display: block;
    font-size: 1.25rem;
    font-weight: 300;
    text-decoration: none;
    color: #444;
    border-bottom: 1px solid #EEE;
    &:last-child{
        border-bottom: none;
    }
    &:hover{
        text-decoration: underline;
    }
`;

// Component
class Origins extends Component {   

    componentDidMount () {
        this.props.onFetchOrigins(this.props.name);
    }

    render () {

        let origins = "We haven't found it yet...";
        if(this.props.origins[0]){
            origins = this.props.origins.map( o => (
                <Origin key={o.name} to={"/collection/"+o.name}>
                    {o.name}
                </Origin>
            ));
        }
    
        const label = "Origin of '"+ this.props.name +"'";
        return(
            <Template
                label={label}
                width="25%"
                height="300px">
                <Main>
                    {origins}
                </Main>
            </Template>
        );
    }
}

const mapStateToProps = state => {
    return {
        origins: state.name.origins,
        loading: state.name.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrigins: (name) => dispatch ( fetchOrigins(name) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Origins);







