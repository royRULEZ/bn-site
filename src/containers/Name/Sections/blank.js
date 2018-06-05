// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

const Label = styled.h2`
    margin: 0;
    font-size: .625rem;
    font-weight: 100;
    color: #777;
    font-family: ${props => props.theme.font_nixie};
`;
// Component
class Template extends Component {   

    render () {
        //CSS
        const Main = styled.div`
            width: ${this.props.width};
            height: ${this.props.height};
            padding: .25rem;
            box-sizing: border-box;
        `;
        const Inner = styled.div`
            background-color: ${this.props.backgroundColor ? this.props.backgroundColor : "#f5f5f5"};
            width: 100%;
            height 100%;
            padding: .5rem;
            box-sizing: border-box;
        `;


        return(
            <Main>
                <Inner>
                    <Label>{this.props.label}</Label>
                    {this.props.children}
                </Inner>
            </Main>
        );
    }
}

export default Template;







