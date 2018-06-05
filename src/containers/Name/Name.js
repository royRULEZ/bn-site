import React, { Component } from 'react';
import styled from 'styled-components';
import NameView from './Name_view';

import { connect } from 'react-redux';
import { fetchNameInfo, fetchRecentHistory, fetchHistory, fetchVariations } from '../../store/actions/index';


//CSS
const Spinner = styled.div`
`;

/*
[
    {
        "id": 22,
        "name": "Riley",
        "gender": "F",
        "occurrences": 7110,
        "rank": 22,
        "year": 2016,
        "syllables": 0,
        "meaning": "",
        "origin": "",
        "unisex": 1
    },
    {
        "id": 18982,
        "name": "Riley",
        "gender": "M",
        "occurrences": 1706,
        "rank": 222,
        "year": 2016,
        "syllables": 0,
        "meaning": "",
        "origin": "",
        "unisex": 1
    }
]
*/

class Name extends Component {   

    componentDidMount () {
        this.props.onFetchNameInfo(this.props.match.params.n);
        this.props.onFetchRecentHistory(this.props.match.params.n);
        this.props.onFetchHistory(this.props.match.params.n);
        this.props.onFetchVariations(this.props.match.params.n);
    }

    render () {
        
        //TODO - I don't like this. Feels Hacky.
        let container = <Spinner/>;
        if(this.props.info[0] && this.props.recentHistory[0] && this.props.history[0] && this.props.variations[0]){
            
            //GENDER
            let gender = this.props.info[0].unisex === 1 ? "U" : this.props.info[0].gender;
            let colorGender = this.props.info[0].gender;

            //OCCURENCES
            
            let occurrencesArr = [];
            occurrencesArr = this.props.info.map( i => ({
                "Gender": i.gender === "M" ? "Boy" : "Girl",
                "Occurrences": i['2017']
            }));
  
            

            container = <NameView 
                            name={this.props.match.params.n} 
                            gender={gender}
                            rank={this.props.info[0].rank_2017}
                            occurrences={occurrencesArr}
                            recentHistory={this.props.recentHistory}
                            history={this.props.history}
                            variations={this.props.variations}
                        />
        }

        return (
            container
        );
    }
}

const mapStateToProps = state => {
    return {
        info: state.name.nameInfo,
        recentHistory: state.name.recentHistory,
        history: state.name.history,
        variations: state.name.variations,
        loading: state.name.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchNameInfo: (name) => dispatch( fetchNameInfo(name) ),
        onFetchRecentHistory: (name) => dispatch ( fetchRecentHistory(name) ),
        onFetchHistory: (name) => dispatch ( fetchHistory(name) ),
        onFetchVariations: (name) => dispatch ( fetchVariations(name) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Name);
