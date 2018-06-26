//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

//CSS
const Main = styled.article`
    max-width: 640px;
    width: 95%;
    margin: 0 auto;   
    .ht_description{
        font-size: 1.125rem;
        line-height: 1.5rem;  
        margin-bottom: 2rem;  
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

class AboutUs extends Component {   

    render () {
        return (
            <Main>
                <Title>About Us</Title>
                <div className="ht_description">
                    As a website the specializes in baby names, we often get asked - How do I choose a name? As new parents it can be a daunting task. We interviewed countless couples and compiled some tips, some tricks, and some things to look out for. 
                </div>
                <div className="ht_description">
                    We've taken a different approach to creating a Baby Name website. We're focused on the uncommon, original, and unique names. It can be hard to select a name for your child that fits your aspirations and your family identity. We've designed a site to help you learn more about the names you’ve selected and discover that one name to fit your child best.
                </div>
            </Main>
        );
    }
}


export default AboutUs;

