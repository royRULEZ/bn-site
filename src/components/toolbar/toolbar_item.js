//======================================================================================================================
// Toobar Item
//======================================================================================================================
// Description:
// Container for each item in the toolbar
//======================================================================================================================

// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
//
import styled from 'styled-components';

// Component
const ToolbarItem = (props) => {

    const Main = styled.li`
        list-style: none;
        padding: 0 20px;
    `;
    const NavItem = styled(NavLink)`
        text-decoration: none;
        color: inherit;
        &:active, &.active{
            color: ${props => props.theme.color_purple};
        }
    `;
    const Search = styled.span`
        cursor: pointer;
    `;

    let navlink = null;
    
    if(props.text === "Search"){
        navlink =
            <Main>
                <Search onClick={props.searchClick}>
                    Search
                </Search>
                
                {/*<i className="fas fa-search fa-fw"></i>*/}
            </Main>;
    }else{
        navlink =
            <Main>
                <NavItem
                    exact={props.exact}
                    to={props.link}
                >
                    {props.text}
                </NavItem>
            </Main>;
    }

    return(
        navlink 
    );
}

export default ToolbarItem;
