// Imports
import React from 'react';
import styled from 'styled-components';


// -------------------------------------------------------------------------------------------------------------------------
// Rectangle Ad - 728x90
// -------------------------------------------------------------------------------------------------------------------------
export const Rectangle = (props) => {
    const RectangleAd = styled.div`
        background-color: #DDD;
        width: 728px;
        height: 90px;
        margin: 2rem auto;
    `;

    //    <RectangleAd></RectangleAd>
    return(
        ""
    );
}


// -------------------------------------------------------------------------------------------------------------------------
// Rockabye Ad - 728x90
// -------------------------------------------------------------------------------------------------------------------------
export const Rockabye = (props) => {
    const RectangleAd = styled.div`
        height: 90px;
        margin: 2rem auto 0 auto;
        width: 728px;
        display: none;
        @media (min-width: ${props => props.theme.tablet}) {
            display: block;
        }
    `;

    return(
        <RectangleAd>
            <a href="http://www.dpbolvw.net/click-8831924-13264687" target="_blank">
                <img src="http://www.awltovhc.com/image-8831924-13264687" width="728" height="90" alt="" border="0"/>
            </a>
        </RectangleAd>
    );
}


// -------------------------------------------------------------------------------------------------------------------------
// Big Banner Ad - 970x250
// -------------------------------------------------------------------------------------------------------------------------
export const BigBanner = (props) => {
    // CSS
    const Container = styled.div`
        width: 100%;
        padding: 25px 0;
        margin-bottom: 25px;
        background-color: #EEE;
        display: none;
    `;
    const Ad = styled.div`
        width: 970px;
        height: 250px;
        background-color: #444;
        margin: 0 auto;
    `;

    // Return
    /*
            <Container>
                <Ad />
            </Container>
    */
    return(
        ""
    );
}