//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Spinner from '../../../components/spinner/spinner';

//CSS
const Main = styled.div`
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
    padding: 2rem 0;
    box-sizing: border-box;
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

const PopularItems = styled.div`
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
`;
    const PopularItem = styled.div`
        width: 49%;
        background-color: #EEE;
        height: 160px;
        margin: 0 0 2% 0;
        &:nth-child(2n+1){
            margin: 0 2% 2% 0;
            background-color: #F00;
        }
    `;

// Component
class Popular extends Component {   

    render () {

        let popularItems = <Spinner/>
        popularItems = 
            <PopularItem/>
        ;

        return(
                /* Title: Recently Added Collections */
                <Main>
                    <h2>Headline 2</h2>
                    <PopularItems>
                        {popularItems}
                        <PopularItem/>
                        <PopularItem/>
                        <PopularItem/>
                        <PopularItem/>
                        <PopularItem/>
                        <PopularItem/>
                        <PopularItem/>
                    </PopularItems> 
                </Main>  
            );
        }
}

export default Popular;







