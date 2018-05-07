//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';
import { Rectangle as Ad, OfferCluster} from '../../components/ad/ad_factory';
//CSS
const Main = styled.article`
    max-width: 768px;
    width: 95%;
    margin: 0 auto;   
    .ht_description{
        line-height: 1.5rem;    
    } 
`;
const Title = styled.h1`
    margin: 0;
    padding: 3rem 0 5rem 0;
    font-size: 7.5rem;
    line-height: 7.5rem;
    font-family: ${props => props.theme.font_nixie};
    text-align: center;
    font-weight: 100;
`;
const Section = styled.div`
    margin-top: 3rem;
    padding-right: 3rem;
    h2{
        font-family: $Muli;
        font-size: 24px;
        font-weight: 600;
        color: $color-accent-1;
        padding-bottom: 12.5px;
    }
    .ht-text{
        font-size: 18px;
        line-height: 28px;        
        margin-bottom: 10px;
    }
    .ht-quote{
        background-color: darken($color-background, 2%);
        border-bottom: 2px solid darken($color-background, 5%);
        padding: 25px;
        line-height: normal;
        margin: 0 0 25px 0;
        font-style: italic;
    }
`;

class HowToView extends Component {   

    render () {
        return (
            <Aux>
                <Main>
                    <Ad />
                    <Title>How to choose a baby name</Title>
                    <div className="ht_description">
                        As a website the specializes in baby names, we often get asked - How do I choose a name? As new parents it can be a daunting task. We interviewed countless couples and compiled some tips, some tricks, and some things to look out for. 
                    </div>

                    <Section>
                        <h2>1. Don't start by shutting down</h2>
                        <div class="ht-quote">
                            "I was so worried that my Husband would want the name of my ex for our son. I know it's completely unrealistic, but it had me so preoccupied"
                        </div>
                        <div class="ht-text">
                            Don't start with a list of no's just yet. It will be important to veto that horrible first date, embarassing ex, or just weird vibe you have wit have with a name. There's no need to rush into shutting each toher down. Start the name selection process open to the idea that you will find a name you both love. There's plenty of time for criteria and plenty of capability for your to use your veto power.
                        </div>
                    </Section>

                    <Section>
                        <h2>2. Do start simple</h2>
                        <div class="ht-text">
                            Don't start with a list of no's just yet. It will be important to veto that horrible first date, embarassing ex, or just weird vibe you have wit have with a name. There's no need to rush into shutting each toher down. Start the name selection process open to the idea that you will find a name you both love. There's plenty of time for criteria and plenty of capability for your to use your veto power.
                        </div>
                    </Section>

                    
                </Main>
                <OfferCluster />
            </Aux>
        );
    }
}


export default HowToView;

