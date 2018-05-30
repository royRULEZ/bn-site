//======================================================================================================================
// Toobar Search
//======================================================================================================================
// Description:
// Search for names within the site
//======================================================================================================================


//Imports
import React from 'react';
import styled from 'styled-components';

//Component
const ToolbarSearch = (props) => {

    //CSS
    const Main = styled.div`
        width: 100%;
        height: 100%;
        background-color: #FFF;
        position: absolute;
        top: 0;
        left: 0;
        display: ${props.display === true ? "block" : "none"};
    `;
    const Search = styled.input`
        border: 0;
        outline: 0;
        display: block;
        width: 768px;
        margin: 0 auto 0 auto;
        font-size: 2rem;
        padding: 1rem;
        box-sizing: border-box;
        height: 100%;
        background-color: #EEE;
        color: #FFF;
        font-family: ${props => props.theme.font_main};
    `;
    const Close = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
        cursor: pointer;
    `;

    console.log(props.display);

    return(
        <Main>
            <Search type="text"/>
            <Close onClick={props.searchClick}>X</Close>
        </Main>
    );
}

export default ToolbarSearch;