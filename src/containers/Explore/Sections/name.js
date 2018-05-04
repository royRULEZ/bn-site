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
    padding: 40px 30px;
    width: 20%;
    font-size: 28px;
    font-weight: 400;
    box-sizing: border-box;
    text-decoration: underline;
    a{
        color: #444;
        &:hover{
            text-decoration: underline;
        }
    }
    border-bottom: 1px dashed #EEE;
`;

const Name = (props) => {     
    return(
        <Main>
            {props.children}
        </Main>
    );
}


export default Name;







