//Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchAllNames, changeGender, changePopularity, changeAlpha } from '../../store/actions/index';

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
    text-align: center;
    padding: 1rem 0;
`;
const ExploreContainer = styled.div`
    display: flex;
`;
const AllNames = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 1rem;
`;


class ExploreView extends Component {   

    state = {
        popularity: "Unique",
        gender: "F",
        alpha: "",
        length: ""
    }
    
    changeGenderHandler = (g) => {
        this.setState({ 
            gender: g
        });
        this.props.onChangeGender(this.state, g);
    }

    changePopularityHandler = (e) => {
        this.setState({ 
            popularity: e.value
        });
        this.props.onChangePopularity(this.state, e.value);
    }

    changeAlphaHandler = (a) => {
        let char = '';
        if(typeof a === 'object'){
            char = a.value;
        }else{
            char = a;
        }
        this.setState({ 
            alpha: char
        });
        this.props.onChangeAlpha(this.state, char);
    }

    changeLengthHandler = (l) => {
        this.setState({ 
            length: l.value
        });
    }

    componentDidMount () {
        this.props.onFetchAllNames(this.state);
        
        if(this.props.directGender){
            console.log("IN1");
            this.changeGenderHandler(this.props.directGender);
        }

        if(this.props.directAlpha){
            console.log("IN2", this.props);
            this.changeAlphaHandler(this.props.directAlpha);
        }
    
    }

    render () {

        let names = <p>Something went terribly wrong!</p>;
        if ( !this.props.loading ) {
            names = this.props.allNames.map( n => (
                <Name key={n.name}>{n.name}</Name>
            ))
        }
        
        return (
            <Aux>
                <Ad/>
                <Main>
                    <Headline>Search unique names for your child</Headline>
                    <ExploreContainer>
                        <Filters 
                            gender={this.changeGenderHandler}
                            g={this.state.gender}

                            popularity={this.changePopularityHandler}
                            p={this.state.popularity}
            
                            alpha={this.changeAlphaHandler}
                            a={this.state.alpha}

                            length={this.changeLengthHandler}
                            l={this.state.length}
                        />                        
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
        onFetchAllNames: (state) => dispatch( fetchAllNames(state) ),
        onChangeGender: (state, gender) => dispatch( changeGender(state, gender) ),
        onChangePopularity: (state, popularity) => dispatch( changePopularity(state, popularity) ),
        onChangeAlpha: (state, alpha) => dispatch( changeAlpha(state, alpha) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(ExploreView);

