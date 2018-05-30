//======================================================================================================================
// Class: Personalized Gifts
//======================================================================================================================
// Description:
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';


//CSS
const Container = styled.div`
    width: 100%;
    border-top: 1px solid #DDD;
    margin: 25px auto 0 auto;
    padding: 0 0 25px 0; 
`;
const ContainerTitle = styled.div`
    padding: 2rem 0;
    box-sizing: border-box;
    text-align: center;
    font-size: 1.25rem;
    font-family: ${props => props.theme.font_nixie};
    font-weight: 100;
`;
const AmazonItems = styled.div`
    display: flex;
    .n_amazon{
        width: 15.8333%;
        margin-right: 1%;
        border: 1px solid #CCC;
        padding: 1rem;
        background-color: #FFF;
        box-sizing: border-box;
        .n_amazon_gift-photo{
            img{
                width: 100%;
            }
        }
        .n_amazon_gift-description{
            font-weight: 300;
            font-size: 14px;
            padding-top: 10px;
        }
        .n_amazon_gift-price{
            color: #709A42;
            font-weight: 700;
            font-size: 14px;
        }
        &:last-child{
            margin-right: 0;
        }
    }
`;

// Component
class Amazon extends Component {   

    render () {
    
        const itemsArr = [1,2,3,4,5,6];
        const items = itemsArr.map( i => (
            <div key={i} className="n_amazon">
                <div className="n_amazon_gift-photo">
                    <img src={require('../../../assets/temp/amazon_1.jpg')}></img>
                </div>
                <div className="n_amazon_gift-description">Gerber Baby Girls' 4 Pack Flannel Burp Cloths</div>
                <div className="n_amazon_gift-price">$10.99</div>
            </div> 
        ));



        return(
            <Container>
                <ContainerTitle>
                    Popular baby gifts on Amazon
                </ContainerTitle>
                <AmazonItems>
                    {items}
                </AmazonItems>
            </Container>
        );
    }
}

export default Amazon;


