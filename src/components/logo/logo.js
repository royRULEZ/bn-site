import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = styled(Link)`
    display: block;
    box-sizing: border-box;
    padding: 0 25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    background: linear-gradient(to right, #9998D6 0%, #7CBFE3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const logo = (props) => (
    <Main to="/">
        {props.children}
    </Main>
);

export default logo;