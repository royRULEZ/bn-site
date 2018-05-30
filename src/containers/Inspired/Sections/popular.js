//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

//CSS
const Main = styled.div`
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
    padding: 2rem 0;
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

const PopularItems = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;
    const PopularItem = styled.div`
        width: 24.25%;
        height: 200px;
        margin-right: 1%;
        margin-bottom: 1%;
        transition: .3s cubic-bezier(.25,.8,.5,1);
        background-color: #EEE;
        &:hover{
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
            cursor: pointer;
        }
        &:nth-child(4n){
            margin-right: 0;
        }
    `;

// Component
class Hero extends Component {   

    render () {
    return(
            /* Title: Recently Added Collections */
            <Main>
                <h2>Headline 2</h2>
                <PopularItems>
                    <PopularItem></PopularItem>
                    <PopularItem></PopularItem>
                    <PopularItem></PopularItem>
                    <PopularItem></PopularItem>
                    <PopularItem></PopularItem>
                    <PopularItem></PopularItem>
                    <PopularItem></PopularItem>
                    <PopularItem></PopularItem>
                </PopularItems> 
            </Main>  
        );
    }
}

export default Hero;







