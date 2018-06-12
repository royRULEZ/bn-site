//Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchAllNames, changeGender, changePopularity, changeAlpha, changeLength, changePage } from '../../store/actions/index';

import Aux from '../../hoc/Aux';
import { BigBanner as Ad } from '../../components/ad/ad_factory';
import Name from './Sections/name';
import Filters from './Sections/filters';

import Spinner from '../../components/spinner/spinner';
import { Pagination } from '../../components/pagination/pagination';

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
    margin-bottom: 2rem;
`;
const AllNames = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 1rem;
`;

class ExploreView extends Component {   

    
    changeGenderHandler = (g) => {
        this.props.onChangeGender(this.props.bundle, g);
    }

    changePopularityHandler = (e) => {
        this.props.onChangePopularity(this.props.bundle, e.value);
    }

    changeAlphaHandler = (a) => {
        let char = '';
        typeof a === 'object' ? char = a.value : char = a;
        char === "Clear" ? char = "" : "";
        this.props.onChangeAlpha(this.props.bundle, char);
    }

    changeLengthHandler = (l) => {
        l.value === "Clear" ? l.value = "" : "";
        this.props.onChangeLength(this.props.bundle, l.value);
    }

    changePageHandler = (p) => {
        this.props.onChangePage(this.props.bundle, p);
    }

    componentDidMount () {
        this.props.onFetchAllNames(this.props.bundle);
        
        if(this.props.directGender){
            console.log("Direct Gender");
            this.changeGenderHandler(this.props.directGender);
        }

        if(this.props.directAlpha){
            console.log("Direct Gender", this.props);
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
                            g={this.props.bundle.gender}

                            popularity={this.changePopularityHandler}
                            p={this.props.bundle.popularity}
            
                            alpha={this.changeAlphaHandler}
                            a={this.props.bundle.alpha}

                            length={this.changeLengthHandler}
                            l={this.props.bundle.length}
                        />                        
                        <AllNames> 
                            {names}
                        </AllNames>
                    </ExploreContainer>
                    <Pagination
                        pageCount = {this.props.pageCount}
                        changePage = {this.changePageHandler}
                        page = {this.props.bundle.page}
                    />
                </Main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    
    let bundle = {
        "gender": state.explore.gender,
        "popularity": state.explore.popularity,
        "alpha": state.explore.alpha,
        "length": state.explore.length,
        "page": state.explore.page,
    }

    return {
        allNames: state.explore.allNames,
        pageCount: state.explore.pageCount,
        bundle: bundle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchAllNames: (state) => dispatch( fetchAllNames(state) ),
        onChangeGender: (bundle, gender) => dispatch( changeGender(bundle, gender) ),
        onChangePopularity: (bundle, popularity) => dispatch( changePopularity(bundle, popularity) ),
        onChangeAlpha: (bundle, alpha) => dispatch( changeAlpha(bundle, alpha) ),
        onChangeLength: (bundle, length) => dispatch( changeLength(bundle, length) ),
        onChangePage: (bundle, page) => dispatch( changePage(bundle, page) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(ExploreView);

