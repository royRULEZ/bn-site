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

import Template from './blank';

//CSS
const Main = styled.div`
    padding: 1rem;
`;
const Collection = styled(Link)`
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
class Collections extends Component {   

    render () {

        const label = "Collections with '"+ this.props.name +"' in them?";
        return(
            <Template
                label={label}
                width="25%"
                height="300px">
                <Main>
                    <Collection to="/">Famous People with a really long title</Collection>
                    <Collection to="/">Famous People with a really long title</Collection>
                </Main>
            </Template>
        );
    }
}

export default Collections;







