//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';
import { BigBanner as Ad, OfferCluster} from '../../components/ad/ad_factory';

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

/*

    
            
   
            
            <!-- Popular -->
            <div class="inspired-title">Popular Collections</div>
            <div id="inspire-populars" class="clearfix">
                <div class="inspire-popular"></div>
                <div class="inspire-popular"></div>
                <div class="inspire-popular"></div>
                <div class="inspire-popular"></div>
            </div>    
            
            <!-- Search -->
            <div id="inspire-search">
                <div class="inspired-title">All Collections</div>
                <v-card color="lighten-4" flat>
                    <v-toolbar class='elevation-0' id="inspire-toolbar">
                        <!--
                        <v-menu :nudge-width="100">
                            <v-toolbar-title slot="activator">
                                <span>View: <span class="view-filter">Top 100</span></span><v-icon>arrow_drop_down</v-icon>
                            </v-toolbar-title>
                            <v-list>
                            <v-list-tile v-for="item in coinFilter" :key="item" @click="">
                                <v-list-tile-title v-text="item"></v-list-tile-title>
                            </v-list-tile>
                            </v-list>
                        </v-menu>
                        -->
                        <v-text-field
                            append-icon="search"
                            label="Search Collections"
                            single-line
                            hide-details
                            v-model="search"
                            >
                        </v-text-field>   
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>filter_list</v-icon>
                        </v-btn>
                    </v-toolbar>
                </v-card>
            </div>
            
            <!-- Popular -->
            <div id="inspire-search" class="clearfix">
                <div class="inspire-content" v-for="collection in collections"></div>
            </div>

*/