//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';

import styled from 'styled-components';

// CSS
const Main = styled.div`
    border-top: 1px solid #EEE;
    width: 1024px;
    max-width 90%;
    margin: 2rem auto;
    display: flex;
`;
const Container = styled.div`
    padding: 2rem;
    box-sizing: border-box;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    h2{
        display: block;
        width: 100%;
        font-size: 1.25rem;
        padding: 0;
        margin: .75rem 0;
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
    }
`;

const Alpha = styled.div`
    width: 12.5%;
    padding: .5rem 0;
    text-decoration: underline;
    a{
        text-decoration: underline; 
    }
    &.girl{
        color: ${props => props.theme.color_girl};
    }
    &.boy{
        color: ${props => props.theme.color_boy};
    }
`;


// Component
class alphabet extends Component {   

    render () {
        //
        let alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        let girls = <p>Something went terribly wrong!</p>;
        let boys = <p>Something went terribly wrong!</p>;
        girls = alpha.map( a => (
            <Alpha className="girl" key={a}>{a}</Alpha>
        ));
        boys = alpha.map( a => (
            <Alpha className="boy" key={a}>{a}</Alpha>
        ));

        //
        return (
            <Main>
                <Container>
                    <h2>Search By Letter - Girls</h2>
                    {girls}
                </Container>
                <Container>
                    <h2>Search By Letter - Boys</h2>
                    {boys}
                </Container>
            </Main>
        );
    }
}

export default alphabet;
