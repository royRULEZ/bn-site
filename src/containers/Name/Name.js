import React, { Component } from 'react';
import styled from 'styled-components';
import NameView from './Name_view';

import { connect } from 'react-redux';
import { fetchNameInfo, fetchRecentHistory, fetchHistory, fetchVariations, fetchTrends } from '../../store/actions/index';


//CSS
const Spinner = styled.div`
`;

class Name extends Component {   

    componentDidMount () {
        this.props.onFetchNameInfo(this.props.match.params.n);
        this.props.onFetchRecentHistory(this.props.match.params.n);
        this.props.onFetchHistory(this.props.match.params.n);
        this.props.onFetchVariations(this.props.match.params.n);
    }

    //TODO Rerender the component from within.

    render () {
        
        //TODO - I don't like this. Feels Hacky. -- SOLUTION is to move everything to the components so each one loads and one component can't crash the whole system.
        let container = <Spinner/>;
        if(this.props.info[0] && this.props.recentHistory[0] && this.props.history[0] && this.props.variations[0]){
            
            //GENDER
            let gender = this.props.info[0].gender;
            let colorGender = this.props.info[0].gender;
            let sum = this.props.info[0].sum;

            //OCCURENCES
            let occurrencesArr = [];
            occurrencesArr = this.props.info.map( i => ({
                "Gender": i.gender === "M" ? "Boy" : "Girl",
                "Occurrences": i['2017']
            }));

            let meaning = "This name is so uncommon, we don't even know what it means yet!";
            if(this.props.info[0].meaning != ""){
                meaning = this.props.info[0].meaning;
            }
            
            container = <NameView 
                            name={this.props.match.params.n} 
                            meaning={meaning}
                            gender={gender}
                            sum={sum}
                            rank={this.props.info[0].rank_2017}
                            occurrences={occurrencesArr}
                            recentHistory={this.props.recentHistory}
                            history={this.props.history}
                            variations={this.props.variations}
                            trends={this.props.trends}
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


