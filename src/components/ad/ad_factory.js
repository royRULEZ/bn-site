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