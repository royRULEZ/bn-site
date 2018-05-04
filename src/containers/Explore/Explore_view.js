//Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchAllNames } from '../../store/actions/index';

import Aux from '../../hoc/Aux';
import { BigBanner as Ad } from '../../components/ad/ad_factory';
import Name from './Sections/name';
import Filters from './Sections/filters';

//CSS
const Main = styled.div`
    width: 1200px;
    margin: 0 auto;
    max-width: 95%;
`;
const Headline = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    font-family: ${props => props.theme.font_nixie};
`;
const ExploreContainer = styled.div`
    display: flex;
`;
const AllNames = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
`;


class ExploreView extends Component {   
    
    componentDidMount () {
        this.props.onFetchAllNames();
    }

    render () {

        let names = <p>Something went terribly wrong!</p>;
        if ( !this.props.loading ) {
            names = this.props.allNames.map( n => (
                <Name key={n.name}>{n.name}</Name>
            ) )
        }

        return (
            <Aux>
                <Ad/>
                <Main>
                    <Headline>Find the unqiue name for your child</Headline>
                    <ExploreContainer>
                        <Filters />
                        <AllNames>
                            {names}
                        </AllNames>
                    </ExploreContainer>
                </Main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        allNames: state.explore.allNames
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchAllNames: () => dispatch( fetchAllNames() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(ExploreView);

