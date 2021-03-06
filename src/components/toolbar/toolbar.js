//======================================================================================================================
// Toobar
//======================================================================================================================
// Description:
// Top part of the page
//======================================================================================================================

import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../logo/logo';
import ToolbarItems from './toolbar_items';
import ToolbarSearch from './toolbar_search';

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
const SideBarToggle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 1rem 0 1rem;
    box-sizing: border-box;
    color: #444;
    @media (min-width: 769px) {
        display: none;
    }
    .burger{
        font-size: 2rem !important;
    }
    span{
        font-size: .75rem;
        
    }
`;

class Toolbar extends Component {   

    state = {
        displaySearch : false
    }

    ToolbarChangeHandler = () => {
        this.setState({ 
            displaySearch: !this.state.displaySearch
        });
    }

    render(){
        return(
            <Main>
                <Logo>Baby<br/>Namr</Logo>
                <ToolbarItems searchClick={this.ToolbarChangeHandler} />
                <ToolbarSearch display={this.state.displaySearch} searchClick={this.ToolbarChangeHandler} />
                <SideBarToggle
                    onClick={this.props.drawerToggleClicked}
                    >
                    <i className="fas fa-bars burger"></i>
                    <span>Menu</span>
                </SideBarToggle>
            </Main>
        )
    }
}

export default Toolbar;