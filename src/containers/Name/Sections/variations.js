//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

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

// Component
class Variations extends Component {   

    render () {

        let namesArr = ["Isabella", "Isabelle", "Isabel", "Isabela", "Isabell", "Isabellah", "Isabellarose", "Isabellagrace", "Isabele", "Isabellamarie"];
        let names = <p>Oops</p>;
        if ( !this.props.loading ) {
            names = namesArr.map( n => (
                <Name to="/" key={n}>{n}</Name>
            ) )
        }

        return(
            <Template
                label="Variations"
                width="25%">
                <Main>
                    {names}
                </Main>
            </Template>
        );
    }
}

export default Variations;






