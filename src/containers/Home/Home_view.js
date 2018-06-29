//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Hero from './Sections/hero';
import { Rockabye as Ad} from '../../components/ad/ad_factory';
import AmazonFour from '../../components/ad/amazonFour';
import RandomNames from './Sections/randomNames';
import Collections from './Sections/collections';
import Alphabet from './Sections/alphabet';
import Origins from './Sections/origin';

//CSS
const Main = styled.div`
`;
const PageInfo = styled.div`
    margin: 3rem auto 4rem auto;
    max-width: 768px;
    width: 95%;
    line-height: ${props => props.theme.text_lineheight};
    .h_InfoTitle{
        text-align: center;
        font-size: 1.75rem;
        color: ${props => props.theme.color_purple};
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
        padding-bottom: 1rem;
    }
    .h_Info{
        padding-top: 1rem;
        line-height: 1.6rem;
    }
    @media (max-width: ${props => props.theme.tablet}) {
        margin: 2rem auto;
        .h_InfoTitle{
            font-size: 1.5rem;
            padding-bottom: 0;
        }
        .h_Info{
            padding: 1rem 1rem 0 1rem;
            box-sizing: border-box;
            font-size: .875rem
            line-height: 1.5rem;
        }
    }
`;
class HomeView extends Component {   
    
    render () {
        return (
            <Main>
                <Hero />
                <Ad />
                <PageInfo>
                    <div className="h_InfoTitle">A Unique Name.</div>
                    <div className="h_Info">At BabyNamr, we've taken a different approach to creating a Baby Name website. We’re focused on the uncommon, original, and unique baby names. It’s hard to find a name for your child that fits your aspirations and your family identity. With that in mind, we set out to design a website help you select and discover that one perfect baby name that feels right.</div>
                </PageInfo>
                <Collections />
                <RandomNames />
                <Alphabet />
                <Origins />
                <AmazonFour />
            </Main>
        );
    }
}

export default HomeView;