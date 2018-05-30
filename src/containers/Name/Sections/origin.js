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

import Template from './blank';

//CSS
const Main = styled.div`
    padding: 1rem;
`;
const Origin = styled(Link)`
    padding: 0 0 .5rem 0;
    display: block;
    font-size: 1.25rem;
    font-weight: 300;
    text-decoration: none;
    color: #444;
    &:hover{
        text-decoration: underline;
    }
`;

// Component
class Origins extends Component {   

    render () {

        const label = "Origin of '"+ this.props.name +"'";
        return(
            <Template
                label={label}
                width="25%">
                <Main>
                    <Origin to="/">Scottish</Origin>
                    <Origin to="/">Irish</Origin>
                </Main>
            </Template>
        );
    }
}

export default Origins;







