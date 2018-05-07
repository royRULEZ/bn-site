//Imports
import React, { Component } from 'react';
import styled from 'styled-components';


//CSS
const Main = styled.div`
`;

class NameView extends Component {   
    
    render () {
        return (
            <Main>
                Name: {this.props.name}
            </Main>
        );
    }
}

export default NameView;