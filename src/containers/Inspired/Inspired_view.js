//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';
import { BigBanner as Ad} from '../../components/ad/ad_factory';
import OfferCluster from '../../components/ad/offerCluster';

import Hero from './Sections/hero';
import Eight from './Sections/eight';
import Popular from './Sections/popular';
import List from './Sections/list';
import Origins from '../Home/Sections/origin';
import Profiles from './Sections/profiles';

//CSS
const Main = styled.div`
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
`;
const Headline = styled.h1`
    font-size: 1.5rem;
    padding: 1rem 0;
    font-weight: normal;
    font-family: ${props => props.theme.font_nixie};
    background: linear-gradient(to right, #d5617f 0%, #4a7f98 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (min-width: ${props => props.theme.big_phone}) {
        font-size: 4rem;
        text-align: center;
        max-width: 768px;
        margin-left: auto;
        margin-right: auto;
        
    }
`;
const Section = styled.div`
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
    display: flex;
    flex-direction: column;
    @media (min-width: ${props => props.theme.big_phone}) {
        flex-direction: row;
        margin-top: 5rem;
        padding-top: 3rem;
        border-top: 1px solid #DDD;
    }
`;

class InspiredView extends Component {   

    render () {
        return (
            <Aux>
                <Ad/>
                <Main>
                    <Headline>Be inspired by our unqiue collections</Headline>
                </Main>
                <Hero />
                <Section>
                    <List/>
                    <Popular/>
                </Section>
                {/*}
                <Section>
                    <Profiles />
                </Section>
                                
                <Origins/>                
                <OfferCluster/>
        */}
            </Aux>
        );
    }
}


export default InspiredView;