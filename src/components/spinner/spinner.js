import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    /*.spinner {*/
        width: 3rem;
        height: 3rem;
        margin: 2rem auto;
        background-color: #333;
    
        border-radius: 100%;  
        -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
        animation: sk-scaleout 1.0s infinite ease-in-out;
    /*}*/
    
    @-webkit-keyframes sk-scaleout {
        0% { -webkit-transform: scale(0) }
        100% {
        -webkit-transform: scale(1.0);
        opacity: 0;
        }
    }
    
    @keyframes sk-scaleout {
        0% { 
        -webkit-transform: scale(0);
        transform: scale(0);
        } 100% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
        opacity: 0;
        }
    }
`;

const Spinner = (props) => (
    <Main>
        {props.children}
    </Main>
);

export default Spinner;

