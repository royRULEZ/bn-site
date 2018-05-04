//======================================================================================================================
// Toobar
//======================================================================================================================
// Description:
// Top part of the page
//======================================================================================================================

import React from 'react';
import styled from 'styled-components';

import Logo from '../logo/logo';
import ToolbarItems from './toolbar_items';

const Main = styled.div`
    width: 100%;
    height: 80px;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    position: relative;
    z-index: 10;
`;

const Toolbar = (props) => {
    return(
        <Main>
            <Logo>Baby<br/>Namr</Logo>
            <ToolbarItems />
        </Main>
    );
}

export default Toolbar;