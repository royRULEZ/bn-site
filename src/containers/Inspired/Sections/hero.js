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
    display: flex;
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
`;

const Primary = styled.div`
    background-color: #EEE;
    width: 64%;
    height: 400px;
    float: left;
    margin-right: 1%;
    transition: .3s cubic-bezier(.25,.8,.5,1);
    &:hover{
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        cursor: pointer;
    }
`;
const Secondary = styled.div`
    width: 35%;
    height: 400px;
    float: left;
    .gi_s_item{
        background-color: #EEE;
        width: 100%;
        height: 195px;
        margin-bottom: 10px;
        transition: .3s cubic-bezier(.25,.8,.5,1);
        &:hover{
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
            cursor: pointer;
        }
    }
`;

// Component
class Hero extends Component {   

    render () {
    return(
            /* Title: Recently Added Collections */
            <Main>
                <Primary />
                <Secondary>
                    <div className="gi_s_item"></div>
                    <div className="gi_s_item"></div>
                </Secondary>
            </Main>  
        );
    }
}

export default Hero;







