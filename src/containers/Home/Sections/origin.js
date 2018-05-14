//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

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
`;

const Origin = styled.div`
    width: 16.6667%;
    padding: .75rem 0;
    text-decoration: underline;
    a{
        text-decoration: underline; 
    }
`;


// Component
class alphabet extends Component {   

    render () {
        //
        let oArr = ["African", "American", "Arabic", "Celtic", "Chinese", "Czech", "Danish", "Dutch", "Egyptian", "English", "Finnish", "French", "German", "Greek", "Hebrew", "Hungarian", "Irish", "Italian", "Japanese", "Latin", "Native American", "Norse", "Polish", "Portuguese", "Russian", "Scandinavian", "Scottish", "Slavic", "Spanish", "Swedish", "Welsh", "Yiddish"];
        let origins = <p>Something went terribly wrong!</p>;
        origins = oArr.map( o => (
            <Origin key={o}>{o}</Origin>
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
