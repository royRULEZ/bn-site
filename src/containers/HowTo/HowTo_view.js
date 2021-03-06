//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';
import OfferCluster from '../../components/ad/amazonFour';

//CSS
const Main = styled.article`
    max-width: 768px;
    width: 95%;
    margin: 0 auto;   
    .ht_description{
        line-height: 1.5rem;  
        padding: 0 .5rem;
        box-sizing: border-box;
        @media (min-width: ${props => props.theme.tablet}) {
            line-height: 1.5rem;  
            padding: 0;
        }  
    } 
`;
const Title = styled.h1`
    margin: 0;
    padding: 3rem 0;
    font-size: 3rem;
    line-height: 3rem;
    font-family: ${props => props.theme.font_nixie};
    text-align: center;
    font-weight: 100;
    background: linear-gradient(to right, #d5617f 0%, #4a7f98 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (min-width: ${props => props.theme.tablet}) {
        padding: 3rem;
        font-size: 4rem;
        line-height: 4rem;         
    }
    @media (min-width: ${props => props.theme.big_tablet}) {
        padding: 3rem 0 5rem 0;
        font-size: 6.5rem;
        line-height: 6.5rem;         
    }
`;

let girlColor = "rgba(213, 97, 127, 0.8)";
let boyColor = "rgba(74, 127, 152, 0.8)";

const Section = styled.div`
    margin-top: 3rem;
    h2{
        font-size: 1.25rem;
        font-weight: 600;
        padding-bottom: .875rem;
    }
    .ht-text{
        font-size: 1rem;
        line-height: 1.5rem;
        padding-right: 1rem;
        box-sizing: border-box;
    }
    .ht-quote{
        padding: .5rem 1rem 1rem 1rem;
        margin-bottom: 1rem;
        font-style: italic;
    }
    @media (min-width: ${props => props.theme.tablet}) {
        padding-right: 3rem;
        h2{
            font-size: 1.5rem;
        }
        .ht-quote{
            padding: .5rem 1.5rem 1rem 1.5rem;
            margin-bottom: 1.5rem;
            font-style: italic;
        }
        .ht-text{
            font-size: 1.125rem;
            line-height: 1.75rem;        
            margin-bottom: 1rem;
        }
    }
`;

class HowToView extends Component {   

    render () {
        return (
            <Aux>
                <Main>
                    <Title>7 Steps for choosing the perfect baby name</Title>
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
                        <h2>4. A Namesake</h2>
                        <div className="ht-quote">
                            "Our family comes from a long line of Catholics. It was important to us that our kids inherit some aspect of that faith."
                        </div>
                        <div className="ht-text">
                            Namesakes are a critical part of considering a name. We take inspiration and draw strength from our identities. Namesakes can come from relatives, inspirational figures and personal heros. Namesakes can inspire us to achieve more and to better remember who we are. Sometimes choosing a namesake can be simple - a specific origin or religious name. At other times, it can be difficult to select which ancestor or family member to name a child after. We recommend listing out namesakes you’re interested in, not tied to.
                        </div>
                    </Section>

                    <Section>
                        <h2>5. Vote</h2>
                        <div className="ht-quote">
                            "Voting actually took some of the pressure off. It helped us get down to a list of just a few names. Much more productive."
                        </div>
                        <div className="ht-text">
                            Voting can get messy. We recommend creating limits and using a point system. However you decide to vote (highlighters, spreadsheets, colored notes, smoke signals…) remember that the vote is just helping you understand preference and general direction. It doesn’t mean you have to choose the name which averaged out the highest - it’s just helpful to know where you both stand. 
                        </div>
                    </Section>

                    <Section>
                        <h2>6. Print them out and live with them</h2>
                        <div className="ht-quote">
                            "We had our final few names written in dry erase on our bathroom mirror. It was SUPER useful to have them in front of us every day. We realized that we really didn't like the sound of one of the names."
                        </div>
                        <div className="ht-text">
                            This is probably our favorite idea in this list. Nothing beats living with a name for a while. And there's almost nothing better than printing it out and putting it somewhere where you have to look at it every day. We recommend printing the name out combined with the last name of the child. Then post these around your home in places like a bathroom mirror or on the refrigerator. After a couple of weeks you might find that some names no longer hold the same place they once did and that others now just “feel right”.
                        </div>
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
                            In many cultures middle names or multiple religious and family names enable people to ease the tension of name selection. Sometimes it's easier to save that awkward sounding (but also very important) name for a middle name. Middle names are also great for those names you know that your Mother-in-Law will be proud to see continued in the family.
                        </div>
                    </Section>

        


                </Main>
                <OfferCluster />
            </Aux>
        );
    }
}


export default HowToView;

