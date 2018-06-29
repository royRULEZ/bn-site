//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

//CSS
const Main = styled.article`
    max-width: 768px;
    width: 95%;
    margin: 0 auto;   
    .ht_description{
        line-height: 1.5rem;  
        padding: 0 .5rem 2rem .5rem;
        box-sizing: border-box;
        @media (min-width: ${props => props.theme.tablet}) {
            line-height: 1.5rem;  
            padding: 0;
        }  
    } 
`;
const Title = styled.h1`
    margin: 0;
    padding: 3rem 0;
    font-size: 3.5rem;
    line-height: 3.5rem;
    font-family: ${props => props.theme.font_nixie};
    text-align: center;
    font-weight: 100;
    background: linear-gradient(to right, #d5617f 0%, #4a7f98 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (min-width: ${props => props.theme.tablet}) {
        font-size: 4rem;
        line-height: 4rem;
    }
    @media (min-width: ${props => props.theme.big}) {
        padding: 4rem 0;
        font-size: 7.5rem;
        line-height: 7.5rem;
    }
`;
const EmailLink = styled.a`
    display: block;
    width: 200px;
    padding: 1rem 0;
    margin: 0 auto;
    text-align: center;
    color: #FFF;
    text-decoration: none;
    background-color: ${props => props.theme.color_purple};
    outline: 0;
    border: 0;
    margin-bottom: 2rem;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
`;

class Contact extends Component {   

    render () {
        return (
            <Main>
                <Title>Contact Us</Title>
                <div className="ht_description">
                    <EmailLink href="mailto:babynamr@gmail.com">Email Us</EmailLink>
                    Questions about the site? Send us an email and we'll try to get back to you as soon as possible.
                </div>
            </Main>
        );
    }
}


export default Contact;

