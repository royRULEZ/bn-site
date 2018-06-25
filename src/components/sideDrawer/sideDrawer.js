import React, { Component } from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';
import Backdrop from '../backdrop/backdrop';
import { NavLink, withRouter } from 'react-router-dom';

const Main = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 1rem;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
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
    margin-bottom: 1.5rem;
`;
const NavSeparator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #EEE;
    margin-bottom: 1rem;
`;
const Search = styled.input`
    border: 0;
    outline: 0;
    display: block;
    width: 100%;
    margin: 0;
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem;
    box-sizing: border-box;
    height: 100%;
    background-color: #f5f5f5;
    color: ${props => props.theme.color_purple};
    font-family: ${props => props.theme.font_main};
    &::placeholder { 
        color: #CCC;
        font-weight: 200;
    }
`;
const SearchButton = styled.button`
    background-color: ${props => props.theme.color_purple};
    width: 100%;
    padding: .5rem 0;
    margin-top: .25rem;
    outline: 0;
    border: 0;
    color: #FFF;
    font-size: 1rem;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);

`;

class SideDrawer extends Component {

    state = {
        inputValue: ''
    };

    onKeyPress = (e) => {
        if(e.key === 'Enter'){
            let name = e.target.value;
            name = name.charAt(0).toUpperCase() + name.slice(1);
            const url = '/name/'+name;
            this.props.history.push(url);
            this.props.closed();
        }
    }

    onButtonPress = () => {
        let name = this.state.inputValue;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        const url = '/name/'+name;
        this.props.history.push(url);
        this.props.closed();
    }

    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
      }

    render() {
        return(
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed} />
                <Main className={this.props.open ? "Open" : "Close"}>
                    <SearchBox>
                        <Search
                            type='text'
                            placeholder="Type Name here..."
                            autoFocus
                            onKeyPress={this.onKeyPress}
                            onChange={evt => this.updateInputValue(evt)}
                            />
                            <SearchButton
                                onClick={this.onButtonPress}
                            >Search</SearchButton>
                    </SearchBox>
                    <NavSeparator/>
                    <NavItem exact to="/" onClick={this.props.closed}>Home</NavItem>
                    <NavItem exact to="/explore" onClick={this.props.closed}>Explore</NavItem>
                    <NavItem exact to="/get-inspired" onClick={this.props.closed}>Get Inspired</NavItem>
                    <NavItem exact to="/how-to-choose-a-baby-name" onClick={this.props.closed}>How To</NavItem>
                    <NavSeparator/>
                    <NavItem exact to="/about" onClick={this.props.closed}>About Us</NavItem>
                    <NavItem exact to="/contact" onClick={this.props.closed}>Contact Us</NavItem>
                </Main>
            </Aux>
        );
    }
}

export default withRouter(SideDrawer);;