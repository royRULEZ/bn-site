
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

    return(
        <RectangleAd></RectangleAd>
    );
}

// -------------------------------------------------------------------------------------------------------------------------
// Footer Cluster of Amazon Ad + Square Ad
// -------------------------------------------------------------------------------------------------------------------------
export const OfferCluster = (props) => {
    const Main = styled.div`
        width: 1024px;
        max-width: 95%;
        margin: 6rem auto;
        position: relative;
        height: 280px;
        background-color: #EEE;
    `;
    const Offers = styled.div`
        margin-right: 336px;
        padding: 25px;
        box-sizing: border-box;
        float: left;
        height: 280px;
        display: flex;
        .amazon-item{
            width: 32%;
            margin-right: 2%;
            padding: 20px;
            background-color: #FFF;
            border-bottom: 1px solid #EEE;
            transition: .3s cubic-bezier(.25,.8,.5,1);
            &:hover{
                box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
                cursor: pointer;
            }             
            .photo{
                height: 125px;
                text-align: center;
                img{
                    height: 100%;
                    
                }
            }
            .description{
                font-weight: 300;
                font-size: 12px;
                padding-top: 10px;
            }
            .price{
                color: #709A42;
                font-weight: 700;
                font-size: 12px;
            }
            &:last-child{
                margin-right: 0;
            }
        } 
    `;
    const Ad = styled.div`
        width: 336px;
        height: 280px;
        background-color: #444;
        position: absolute;
        right: 0;
    `;
    return(
        <Main>
            <Offers>
                <div className="amazon-item">
                    <div className="photo">
                        <img src={require('../../assets/temp/amazon_1.jpg')}></img>
                    </div>
                    <div className="description">Gerber Baby Girls' 4 Pack Flannel Burp Cloths</div>
                    <div className="price">$10.99</div>
                </div> 
                <div className="amazon-item">
                    <div className="photo">
                        <img src={require('../../assets/temp/amazon_1.jpg')}></img>
                    </div>
                    <div className="description">Gerber Baby Girls' 4 Pack Flannel Burp Cloths</div>
                    <div className="price">$10.99</div>
                </div> 
                <div className="amazon-item">
                    <div className="photo">
                        <img src={require('../../assets/temp/amazon_1.jpg')}></img>
                    </div>
                    <div className="description">Gerber Baby Girls' 4 Pack Flannel Burp Cloths</div>
                    <div className="price">$10.99</div>
                </div> 
            </Offers>
            <Ad>
                Ad
            </Ad>
        </Main>
    );
}

// -------------------------------------------------------------------------------------------------------------------------
// Big Banner Ad
// -------------------------------------------------------------------------------------------------------------------------
export const BigBanner = (props) => {
    const Container = styled.div`
        width: 100%;
        padding: 25px 0;
        margin-bottom: 25px;
        background-color: #EEE;
    `;
    const Ad = styled.div`
        width: 970px;
        height: 250px;
        background-color: #444;
        margin: 0 auto;
    `;

    return(
        <Container>
            <Ad />
        </Container>
    );
}