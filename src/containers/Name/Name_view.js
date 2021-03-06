//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { Rectangle as Ad} from '../../components/ad/ad_factory';
import OfferCluster from '../../components/ad/offerCluster';
import Rank from './Sections/rank';
import RecentHistory from './Sections/recentHistory';
import GoogleChart from './Sections/googleChart';
import Variations from './Sections/variations';
import Known from './Sections/knownFor';
import Song from './Sections/songs';
import Collections from './Sections/collections';
import Origin from './Sections/origin';
import Personalized from './Sections/personalized';
import Amazon from '../../components/ad/affiliateRow';
import FullHistory from './Sections/fullHistory';
import Imdb from './Sections/imdb';


//CSS
const Main = styled.div`
`;
const Description = styled.div`
    padding: 1rem 0 0 0;
    font-weight: 100;
    margin: 0 auto;
    width 768px;
    max-width: 95%;
    text-align: center;
    @media (min-width: ${props => props.theme.tablet}) {
        padding: 0;
    }
`;
const Info = styled.main`
    width: 1200px;
    max-width: 95%;
    margin: 2rem auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: ${props => props.theme.tablet}) {
        margin: 4rem auto 0 auto;
    }
`;



class NameView extends Component {   

    render () {

        const Name = styled.h1`
            padding: 2rem 0 0 0;;
            margin: 0;
            text-align: center;
            font-size: 3rem;
            text-transform: capitalize;
            font-family: ${props => props.theme.font_nixie};
            font-weight: 100;
            color: ${this.props.gender === "M" ? props => props.theme.color_boy : props => props.theme.color_girl};
            @media (min-width: ${props => props.theme.tablet}) {
                font-size: 7rem;
            }
        `;

        return (
            <Main>
                <Ad />
                <Name>{this.props.name}</Name>
                {/*<Description>{this.props.meaning}</Description>*/}
                <Info>
                    <Rank name={this.props.name} rank={this.props.rank} occurrences={this.props.occurrences} gender={this.props.gender} sum={this.props.sum} />
                    <Known name={this.props.name} />
                    <RecentHistory name={this.props.name} gender={this.props.gender} />
                    
                    <FullHistory name={this.props.name} gender={this.props.gender} history={this.props.history}  />    
    
                    <Imdb name={this.props.name} />
                    <Origin name={this.props.name} />
                    <Variations name={this.props.name} />
                    <Song name={this.props.name} /> 
                    <Collections name={this.props.name} />

                    <GoogleChart name={this.props.name}/>

                    <Personalized name={this.props.name} />

                    <Amazon name={this.props.name} />

                    <OfferCluster />

                    
                </Info>
            </Main>
        );
    }
}

export default NameView;