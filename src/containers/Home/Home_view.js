//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Hero from './Sections/hero';
import { Rectangle as Ad, OfferCluster} from '../../components/ad/ad_factory';
import RandomNames from './Sections/randomNames';

//CSS
const Main = styled.div`
`;
const PageInfo = styled.div`
    margin: 4rem auto;
    max-width: 768px;
    width: 95%;
    line-height: ${props => props.theme.text_lineheight};
    div{
        text-align: center;
        font-size: 28px;
        color: ${props => props.theme.color_purple};
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
        padding-bottom: 1rem;
    }
`;
class HomeView extends Component {   
    
    render () {
        return (
            <Main>
                <Hero />
                <Ad />
                <PageInfo>
                    <div>A Unique Name.</div>
                    We've taken a different approach to building a Baby Name website. We're focusing on the uncommon, original, and unique names. It's hard to choose a name for your child that fits your aspirations and your family identity. There are the names that are a little more original and unique - the names that fit your child.
                </PageInfo>
                <RandomNames />
                <OfferCluster />
            </Main>
        );
    }
}

export default HomeView;