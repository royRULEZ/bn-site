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

//CSS
const Main = styled.div`
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
`;
const Headline = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    font-family: ${props => props.theme.font_nixie};
`;
const Body = styled.div`
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
    display: flex;
    flex-direction: row;
`;

class InspiredView extends Component {   

    render () {
        return (
            <Aux>
                <Ad/>
                <Main>
                    <Headline>Get inspired by our unqiue collections</Headline>
                </Main>
                <Hero />
                <Body>
                    <List/>
                    <Popular/>
                </Body>
                <Origins/>                
                <OfferCluster/>
            </Aux>
        );
    }
}


export default InspiredView;