//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// CSS
const Main = styled.div`
    border-top: 1px solid #EEE;
    width: 1024px;
    max-width 90%;
    margin: 2rem auto;
    display: flex;
`;
const Container = styled.div`
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    h2{
        display: block;
        width: 100%;
        font-size: 1.25rem;
        padding: 0;
        margin: .75rem 0;
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
    }
    @media (max-width: ${props => props.theme.phone}) {
        width: 100%;
        padding: 1rem 0;
        h2{
            text-align: center;
        }
    }
    @media (max-width: ${props => props.theme.tablet}) {
        padding: 2rem 0;
        text-align: center;
    }  
`;
const Origin = styled(Link)`
    width: 16.6667%;
    padding: .75rem 0;
    text-decoration: none;
    color: inherit;
    &:hover{
        text-decoration: underline;
    }
    @media (max-width: ${props => props.theme.phone}) {
        width: 25%;
        padding: .75rem 0;
        text-align: center;
    }
`;


// Component
class alphabet extends Component {   

    render () {
        //
        //TODO: Add Native American
        let oArr = ["African", "American", "Arabic", "Celtic", "Chinese", "Czech", "Danish", "Dutch", "Egyptian", "English", "Finnish", "French", "German", "Greek", "Hebrew", "Hungarian", "Irish", "Italian", "Japanese", "Latin", "Norse", "Polish", "Portuguese", "Russian", "Scandinavian", "Scottish", "Slavic", "Spanish", "Swedish", "Welsh", "Yiddish"];
        let origins = <p>Something went terribly wrong!</p>;
        origins = oArr.map( o => (
            <Origin key={o} to={"/collection/"+o+"-baby-names"}>{o}</Origin>
        ));

        //
        return (
            <Main>
                <Container>
                    <h2>Names by Origin</h2>
                    {origins}
                </Container>
            </Main>
        );
    }
}

export default alphabet;
