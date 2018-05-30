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
                        <h2>1. Don't start with a list of no's</h2>
                        <div className="ht-quote">
                            "I got hung up on worrying about names that didn't end up mattering"
                        </div>
                        <div className="ht-text">
                            Don't start with a list of no's just yet. It will be important to veto that horrible first date, embarassing ex, or just weird vibe you have wit have with a name. There's no need to rush into shutting each toher down. Start the name selection process open to the idea that you will find a name you both love. There's plenty of time for criteria and plenty of capability for your to use your veto power.
                        </div>
                    </Section>

                    <Section>
                        <h2>2. Do start simple</h2>
                        <div className="ht-quote">
                            "We had more or less decided on a boy and girl name before we were married. It just came up naturally. Now, the kids after number 1 and 2 were a totally different story!"
                        </div>
                        <div className="ht-text">
                            Many of the couples we interviewed came to a decision about a name without much fanfare. They had a family name or a personal favorite that they had been loosely planning for most of their life. Take some time to separately compile a list of family names, personal favorites, and other sentimental names. Then, share these with each other. Take some time to tell the story of each name. In some cultures, multiple names enable family or religous traditions to continue. Additionally, some couples opt out of a middle name to enable the family name to be kept after marraige.  
                        </div>
                    </Section>

                    <Section>
                        <h2>3. Create a neutral list</h2>
                        <div className="ht-quote">
                            "We had a piece of paper on our fridge. Whenever we thought of a name we liked, we put it on there. It helped us think about how names sounded and how they look."
                        </div>
                        <div className="ht-text">
                            The neutral list is a place to hold names while you're exploring others. Rather than keeping these in your head, have them out where you can see them every day. This will help you to think about the name in a variety of circumstances. The netral list isn't reserved for names you will absolutely use, it's just a place for names you'll consider. Don't rank them or order them - keep it simple. Also, don't require any explanations. If you find a name interesting, funny, or if the name resonates with something in you, put it on the list. This will help you maintain a healthy list of names without worrying about being anchored on a single name.
                        </div>
                    </Section>

                    <Section>
                        <Ad />
                    </Section>

                    <Section>
                        <h2>4. A Namesake</h2>
                        <div className="ht-quote">
                            "Our family comes from a long line of Catholics. It was important to us that our kids inherit some aspect of that faith."
                        </div>
                        <div className="ht-text">
                            Namesakes are a critical part of considering a name. We take inspiration and draw strength from our identities. 
                        </div>
                    </Section>

                    <Section>
                        <h2>5. Vote</h2>
                        <div className="ht-quote">
                            "Quote"
                        </div>
                        <div className="ht-text">
                            Voting. 
                        </div>
                    </Section>

                    <Section>
                        <h2>6. Print them out and live with them</h2>
                        <div className="ht-quote">
                            "We had our final few names written in dry erase on our bathroom mirror. It was SUPER useful to have them in front of us every day. We realized that we really didn't like the sound of one of the names."
                        </div>
                        <div className="ht-text">
                            This is probably our favorite idea in this list. Nothing beats living with a name for a while. And there's almost nothing better than printing it out and putting it somewhere where you have to look at it every day. 
                        </div>
                    </Section>

                    <Section>
                        <Ad />
                    </Section>

                    <Section>
                        <h2>7. Choose</h2>
                        <div className="ht-quote">
                            "We had two names picked for our baby girl pretty early on. It was actually pretty useful for us to wait a bit before deciding. We could live with names. Eventually we found something we love and a name that is crazily fitting for our girl."
                        </div>
                        <div className="ht-text">
                            We recommend using this list a reference, not as a step-by-step guide to selecting the right name. Hopefully you gain some inspiration from these ideas. When it comes down to selecting a name we recommend that you decide on a final short list and take your time. Live with the names for a few weeks and then make your decision.
                        </div>
                    </Section>

                    <Section>
                        <h2>Bonus. Multiple Names </h2>
                        <div className="ht-quote">
                            "My husband wanted to name our daughter after his Mother. It just never felt right. That, and it sounded kind of wierd. We ended up using it as a middle name and we both love it."
                        </div>
                        <div className="ht-text">
                            In many cultures middle names or multiple religious and family names enable people to ease the tension of name selection. Sometimes it's easier to save that awkward, but important, name for a middle name."
                        </div>
                    </Section>


                </Main>
                <OfferCluster />
            </Aux>
        );
    }
}


export default HowToView;

