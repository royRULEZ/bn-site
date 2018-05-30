//======================================================================================================================
// Toobar Items
//======================================================================================================================
// Description:
// Container for all of the navigation within the toolbar
//======================================================================================================================


//Imports
import React from 'react';
import styled from 'styled-components';

import ToolbarItem from './toolbar_item';

//Component
const ToolbarItems = (props) => {

    //CSS
    const Main = styled.ul`
        display: flex;
        flex-direction: row;
        align-content: space-between;
        padding-right: 5px;
        color: #444;
    `;

    return(
        <Main>
            <ToolbarItem text="Home" exact      link="/"                            ></ToolbarItem>
            <ToolbarItem text="Explore"         link="/explore"                     ></ToolbarItem>
            <ToolbarItem text="Get Inspired"    link="/get-inspired"                     ></ToolbarItem>
            <ToolbarItem text="How To"          link="/how-to-choose-a-baby-name"   ></ToolbarItem>
            {/*<ToolbarItem text="Gifts"           link="/gifts"                       ></ToolbarItem>*/}
            <ToolbarItem text="Search"          searchClick={props.searchClick}     ></ToolbarItem>
        </Main>
    );
}

export default ToolbarItems;