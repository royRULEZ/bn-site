import React from 'react';
import styled from 'styled-components';

import Logo from '../logo/logo';
import ToolbarItems from '../toolbar/toolbar_items';

const FooterContainer = styled.div`
    height: 20rem;
    background-color: #EEE;
    width: 100%;
    margin-top: 5rem;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Footer = (props) => {
    return(
        <FooterContainer>
            <Logo>Baby<br/>Namr</Logo>
            <ToolbarItems/>  
        </FooterContainer>
    );
}

export default Footer;