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
    border-top: 1px solid #EEE;
    margin: 2rem auto 0 auto;
    padding: 0 0 2rem 0; 
`;
const ContainerTitle = styled.div`
    padding: 2rem 0;
    box-sizing: border-box;
    text-align: center;
    font-size: 1.25rem;
    font-family: ${props => props.theme.font_nixie};
    font-weight: 100;
`;
const Gifts = styled.div`
    display: flex;
    .n_gift{
        width: 24.25%;
        margin-right: 1%;
        .n_gift-photo{
            padding: 20px;
            background-color: #EEE;
            box-sizing: border-box;
            width: 100%;
            img{
                width: 100%;
                cursor: pointer;
            }
        }
        .n_gift-description{
            font-weight: 300;
            font-size: 1rem;
            padding: .25rem 0;
            
        }
        .n_gift-price{
            color: #709A42;
            font-weight: 700;
            font-size: 1rem;
        }
        &:last-child{
            margin-right: 0;
        }
    }
`;


// Component
class Personalized extends Component {   

    render () {
    
        const personalized = [
            {
                id: 1,
                name: 'Heart Pendant',
                src: "https://preview.personalizationmall.com/preview.iglx?igOutput=Jpg85&productid=12169&itemid=55695&value1=" + this.props.name,
                price: "$24.79"
            },
            {
                id: 2,
                name: 'Baby Bib',
                src: "https://preview.personalizationmall.com/preview.iglx?igOutput=Jpg100&productid=16821&itemid=48620&value1=Squiggles&value2=" + this.props.name,
                price: "$24.79"
            },
            {
                id: 3,
                name: 'Onesie',
                src: "https://preview.personalizationmall.com/preview.iglx?igOutput=Jpg85&productid=17645&itemid=47640&dropdownitemid=45470&value1=" + this.props.name,
                price: "$24.79"
            },
            {
                id: 4,
                name: 'Hat',
                src: "https://preview.personalizationmall.com/preview.iglx?igOutput=Jpg95&productid=17549&itemid=47227&dropdownitemid=46941&value1=Doodle&value2=Pink&value3=" + this.props.name,
                price: "$24.79"
            },
        ];
        const items = personalized.map( p => (
            <div key={p.id} className="n_gift">
                <div className="n_gift-photo"><img src={p.src} /></div>
                <div className="n_gift-description">Heart Pendant</div>
                <div className="n_gift-price">$24.79</div>
            </div>
        ));
    
        return(
            <Container>
                <ContainerTitle>
                    Personalized gifts for {this.props.name}
                </ContainerTitle>
                <Gifts>
                    {items}
                </Gifts>
            </Container>
        );
    }
}

export default Personalized;


