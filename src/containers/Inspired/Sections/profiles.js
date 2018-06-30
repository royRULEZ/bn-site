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
    width: 100%;
    h2{
        display: block;
        width: 100%;
        font-size: 1.25rem;
        padding: 0;
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
        text-align: center;
    }
`;

const PopularItems = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
`;
    const PopularItem = styled.div`
        width: 24.25%;
        height: 150px;
        margin-right: 1%;
        margin-bottom: 1%;
        transition: .3s cubic-bezier(.25,.8,.5,1);
        background-color: #EEE;
        background: url('${props => props.backgroundimage}') no-repeat center center; 
        background-size: cover;
        &:hover{
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
            cursor: pointer;
        }
        &:nth-child(4n){
            margin-right: 0;
        }
    `;

// Component
class Eight extends Component {   

    render () {

        return(
                /* Title: Recently Added Collections */
                <Main>
                    <h2>New Profiles</h2>
                    <PopularItems>
                        <PopularItem backgroundimage={"/images/collections/17_400.jpg"}>1</PopularItem>
                        <PopularItem backgroundimage={"/images/collections/16_400.jpg"}>2</PopularItem>
                        <PopularItem backgroundimage={"/images/collections/2_400.jpg"}>3</PopularItem>
                        <PopularItem backgroundimage={"/images/collections/15_400.jpg"}>4</PopularItem>
                    </PopularItems> 
                </Main>  
            );
        }
    }

export default Eight;







