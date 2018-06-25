import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';
import Backdrop from '../backdrop/backdrop';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    @media (min-width: 768px){
        display: none;
    }
    &.Open {
        transform: translateX(0);
    }
    &.Close {
        transform: translateX(-100%);
    }
`;
const NavItem = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    display: block;
    font-size: 2rem;
    padding-bottom: 1rem;
    &:active, &.active{
        color: ${props => props.theme.color_purple};
    }
`;
const SearchBox = styled.div`
    border-top: 1px solid #EEE;
    margin-top: 1rem;
    padding-top: 1rem;
`;

const SideDrawer = (props) => {

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <Main className={props.open ? "Open" : "Close"}>
                <NavItem exact to="/" onClick={props.closed}>Home</NavItem>
                <NavItem exact to="/explore" onClick={props.closed}>Explore</NavItem>
                <NavItem exact to="/get-inspired" onClick={props.closed}>Get Inspired</NavItem>
                <NavItem exact to="/how-to-choose-a-baby-name" onClick={props.closed}>How To</NavItem>
                <SearchBox>
                    Search
                </SearchBox>
            </Main>
        </Aux>
    );
}

export default SideDrawer;