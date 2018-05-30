//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Template from './blank';

//CSS
const Main = styled.div`
//
`;

// Component
class Songs extends Component {   

    render () {

        const label = "What's "+ this.props.name +"'s song?";
        return(
            <Template
                label={label}
                width="25%">
                <Main>
                    Songs
                </Main>
            </Template>
        );
    }
}

export default Songs;







