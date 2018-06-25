//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

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
    background: linear-gradient(to right, #d5617f 0%, #4a7f98 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

let girlColor = "rgba(213, 97, 127, 0.8)";
let boyColor = "rgba(74, 127, 152, 0.8)";

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

class AboutUs extends Component {   

    render () {
        return (
            <Main>
                <Ad />
                <Title>How to choose a baby name</Title>
                <div className="ht_description">
                    As a website the specializes in baby names, we often get asked - How do I choose a name? As new parents it can be a daunting task. We interviewed countless couples and compiled some tips, some tricks, and some things to look out for. 
                </div>

                <Section>
                    <h2>1. Don't start with a list of no's</h2>
                    <div className="ht-quote">
                        "I got hung up on worrying about names that we never even considered. I was wasting all of this energy on a name that we didn't even consider."
                    </div>
                    <div className="ht-text">
                    Don't start with a list of no's... just yet. While it will be important to veto that horrible first date, forget the awful ex, the awkward initial or phonetic combo, or just avoid the weird vibe you have with a name. When coming up with new ideas, shutting down options is the worst way to start. We recommend that you start the name selection process open to the idea that you will find a name you both love. There's plenty of time for criteria and plenty of capability for your to use your veto power. So don’t worry about names your partner won’t love, focus on names you’ll love.
                    </div>
                </Section>
            </Main>
        );
    }
}


export default AboutUs;

