//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Hero from './Sections/hero';
import { Rectangle as Ad} from '../../components/ad/ad_factory';
import OfferCluster from '../../components/ad/offerCluster';
import RandomNames from './Sections/randomNames';
import Collections from './Sections/collections';
import Alphabet from './Sections/alphabet';
import Origins from './Sections/origin';

//CSS
const Main = styled.div`
`;
const PageInfo = styled.div`
    margin: 4rem auto;
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
`;
class HomeView extends Component {   
    
    render () {
        return (
            <Main>
                <Hero />
                <Ad />
                <PageInfo>
                    <div className="h_InfoTitle">A Unique Name.</div>
                    <div className="h_Info">We've taken a different approach to building a Baby Name website. We're focusing on the uncommon, original, and unique names. It's hard to choose a name for your child that fits your aspirations and your family identity. There are the names that are a little more original and unique - the names that fit your child.</div>
                </PageInfo>
                <Collections />
                <RandomNames />
                <Alphabet />
                <Origins />
                <OfferCluster />
            </Main>
        );
    }
}

export default HomeView;