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

//CSS
const Main = styled(Link)`
    padding: 2rem 0 2rem 1rem;
    width: 25%;
    font-size: 1.5rem;
    font-weight: 300;
    box-sizing: border-box;
    text-decoration: none;
    color: #444;
    border-bottom: 1px dashed #EEE;
    &:hover{
        text-decoration: underline;
    }
    @media (max-width: ${props => props.theme.phone}) {
        padding: 1rem 0 1rem 0;
        width: 50%;
        text-align: center;
    }
`;

const Name = (props) => {    
    
    let linkURL = "/name/" + props.children;
    return(
        <Main
            to={linkURL}
        >
            {props.children}
        </Main>
    );
}


export default Name;







