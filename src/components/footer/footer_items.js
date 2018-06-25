//======================================================================================================================
// Toobar Items
//======================================================================================================================
// Description:
// Container for all of the navigation within the toolbar
//======================================================================================================================


//Imports
import React from 'react';
import styled from 'styled-components';

import ToolbarItem from '../toolbar/toolbar_item';
import { NavLink } from 'react-router-dom';

//Component
const FooterItems = (props) => {

    //CSS
    const Main = styled.ul`
        display: flex;
        flex-direction: row;
        align-content: space-between;
        padding-right: 1rem;
        color: #444;
        width: 25%;
        @media (max-width: ${props => props.theme.phone}) {
            padding-right: 0;
            padding-bottom: 1rem;
            width: 80%;
        }
    `;
    const NavItem = styled(NavLink)`
        text-decoration: none;
        color: inherit;
        display: block;
        font-size: 1rem;
        padding-bottom: .75rem;
        &:active, &.active{
            color: ${props => props.theme.color_purple};
        }
    `;
    const NavGroup = styled.div`
        width: 50%;
        height: auto;
    `;

    return(
        <Main>
            <NavGroup>
                <NavItem exact to="/" onClick={props.closed}>Home</NavItem>
                <NavItem exact to="/explore" onClick={props.closed}>Explore</NavItem>
                <NavItem exact to="/get-inspired" onClick={props.closed}>Get Inspired</NavItem>
                <NavItem exact to="/how-to-choose-a-baby-name" onClick={props.closed}>How To</NavItem>
            </NavGroup>
            <NavGroup>
                <NavItem exact to="/about" onClick={props.closed}>About Us</NavItem>
                <NavItem exact to="/contact" onClick={props.closed}>Contact Us</NavItem>
                {/*<NavItem exact to="/privacy" onClick={props.closed}>Privacy</NavItem>*/}
            </NavGroup>
        </Main>
    );
}

export default FooterItems;