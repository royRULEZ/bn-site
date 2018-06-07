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

// TODO: Breaks on Sawyer

// Component
class Variations extends Component {   

    render () {

        let names = null;
        let namesArr = null;
        namesArr = this.props.variations.splice(0, 1);
        if ( !this.props.loading ) {
            names = this.props.variations.map( n => (
                <Name to={"/name/" + n.name} key={n.name}>{n.name}</Name>
            ) );
        }

        return(
            <Template
                label="Variations"
                width="25%"
                height="300px">
                <Main>
                    {names}
                </Main>
            </Template>
        );
    }
}

export default Variations;







