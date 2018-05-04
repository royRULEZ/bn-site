import React from 'react';
import styled from 'styled-components';

const NavBarS = styled.div`
    height: 50px;
    background-color: red;
    width: 100%;
`;

const NavBar = (props) => {
    return(
        <NavBarS>
            NavBar
        </NavBarS>
    );
}

export default NavBar;