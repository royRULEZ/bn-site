//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { Rectangle as Ad, OfferCluster } from '../../components/ad/ad_factory';
import Rank from './Sections/rank';
import RecentHistory from './Sections/recentHistory';
import GoogleChart from './Sections/googleChart';
import Variations from './Sections/variations';
import Known from './Sections/knownFor';
import Song from './Sections/songs';
import Collections from './Sections/collections';
import Origin from './Sections/origin';
import Personalized from './Sections/personalized';
import Amazon from './Sections/amazon';
import FullHistory from './Sections/fullHistory';


//CSS
const Main = styled.div`
`;
const Name = styled.h1`
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 6rem;
    text-transform: capitalize;
    font-family: ${props => props.theme.font_nixie};
    font-weight: 100;
    color: ${props => props.theme.color_girl};
`;
const Description = styled.div`
    padding: 0 0 4rem 0;
    font-weight: 100;
    margin: 0 auto;
    width 768px;
    max-width:: 95%;
    text-align: center;
`;
const Info = styled.main`
    width: 1200px;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;



class NameView extends Component {   

    render () {

        const Name = styled.h1`
            padding: 2rem 0 0 0;;
            margin: 0;
            text-align: center;
            font-size: 7rem;
            text-transform: capitalize;
            font-family: ${props => props.theme.font_nixie};
            font-weight: 100;
            color: ${this.props.gender === "M" ? props => props.theme.color_boy : props => props.theme.color_girl};
        `;

        return (
            <Main>
                <Ad />
                <Name>{this.props.name}</Name>
                <Description>{this.props.meaning}</Description>
                <Info>
                    <Rank name={this.props.name} rank={this.props.rank} occurrences={this.props.occurrences} gender={this.props.gender} sum={this.props.sum} />
                    <Known name={this.props.name} />
                    <RecentHistory name={this.props.name} gender={this.props.gender} recentHistory={this.props.recentHistory} />
                    
                    <FullHistory name={this.props.name} gender={this.props.gender} history={this.props.history}  />    
    
                    <Origin name={this.props.name} />
                    {/*<Variations name={this.props.name} variations={this.props.variations} />*/}
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