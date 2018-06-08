//======================================================================================================================
// Toobar Search
//======================================================================================================================
// Description:
// Search for names within the site
//======================================================================================================================


//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { withRouter } from 'react-router-dom'


const Search = styled.input`
    border: 0;
    outline: 0;
    display: block;
    width: 100%;
    margin: 0;
    font-size: 2rem;
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
const Close = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
`;




//Component
class ToolbarSearch extends Component {

    onKeyPress = (e) => {
        if(e.key === 'Enter'){
            const url = '/name/'+e.target.value;
            this.props.history.push(url);
            this.props.searchClick();
        }
    }

    render() {

        //CSS
        const Main = styled.div`
            width: 100%;
            height: 100%;
            background-color: #FFF;
            position: absolute;
            top: 0;
            left: 0;
            display: ${this.props.display === true ? "block" : "none"};
        `;

        const Search_ = withRouter(({ history }) => (
            <Search
              type='text'
              placeholder="Type Name and Press Enter..."
              autoFocus
              onKeyPress={this.onKeyPress}
            />
          ));
        
        return(
            
            <Main>
                <Search_ />
                <Close onClick={this.props.searchClick}><i className="fas fa-times"></i></Close>
            </Main>
        );
    }
}

export default  withRouter(ToolbarSearch);


        /*
        const Button = withRouter(({ history }) => (
            <button
              type='button'
              onClick={() => { history.push('/new-location') }}
            >
              Click Me!
            </button>
          ));
        */