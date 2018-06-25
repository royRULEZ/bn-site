import React from 'react';
import styled from 'styled-components';

import Logo from '../logo/logo';
import FooterItems from './footer_items';

const FooterContainer = styled.div`
    height: 20rem;
    background-color: #EEE;
    width: 100%;
    margin-top: 5rem;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: ${props => props.theme.phone}) {
        flex-direction: column;
    }
`;
const LogoContainer = styled.div`
    width: 25%;
    @media (max-width: ${props => props.theme.phone}) {
        width: 100%;
        text-align: center;
        margin-bottom: 1rem;
    }
`;

const Footer = (props) => {
    return(
        <FooterContainer>
            <LogoContainer><Logo>Baby<br/>Namr</Logo></LogoContainer>
            <FooterItems/>  
        </FooterContainer>
    );
}

export default Footer;