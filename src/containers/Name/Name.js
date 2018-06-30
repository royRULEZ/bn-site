import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import NameView from './Name_view';
import Spinner from '../../components/spinner/spinner';
import Aux from '../../hoc/Aux';
import NotFound from './NotFound/NotFound';

import { connect } from 'react-redux';
import { fetchNameInfo, fetchRecentHistory, fetchHistory, fetchTrends } from '../../store/actions/index';



class Name extends Component {   

    componentDidMount () {
        this.props.onFetchNameInfo(this.props.match.params.n);
        this.props.onFetchHistory(this.props.match.params.n);
    }

    // TODO: Fix, this is very hacky (I think)
    
    componentDidUpdate () {
        if(this.props.info[0]){
            if(this.props.info[0].name != this.props.match.params.n){
                
                this.props.onFetchNameInfo(this.props.match.params.n);
                this.props.onFetchHistory(this.props.match.params.n);
            }
        }
    }
    

    render () {
        
        //TODO - I don't like this. Feels Hacky. -- SOLUTION is to move everything to the components so each one loads and one component can't crash the whole system.
        let container = <Spinner/>;

        //if(this.props.info[0] === undefined){console.log("Didn't Find")}else{console.log("Found")}
        
        //if(this.props.info[0] === undefined){console.log("HEY")}
        console.log(this.props.nofind);
        let helmet = "";
        if(this.props.info[0] && this.props.history[0] && (this.props.info[0].name === this.props.match.params.n)){
            
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

            let meaning = "This name is so original, even we don't know what it means!";
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
                            trends={this.props.trends}
                            key={this.props.match.params.n}
                        />

            let gender_ = (gender === "F" ? "Girl" : "Boy");
            let meta_description = this.props.match.params.n + ": Discover the Meaning, Popularity, Origin, Celebrity Namesakes, Trending Data and more! Beautifully designed, BabyNamr is a different approach to the cluttered Baby Name website!";
            let meta_keywords = this.props.match.params.n + " baby name, baby names, baby "+{gender_}+" names, uncommon baby "+{gender_}+" names, uncommon baby names, unique "+{gender_}+" names, cute baby "+{gender_}+" names, nerdy baby "+{gender_}+" names, original baby "+{gender_}+" names";
            helmet = 
                <Helmet>
                    <title>{this.props.match.params.n} - {gender_} Name Meaning, Origin, and Popularity Statistics | BabyNamr</title>
                    <meta name="description" content={meta_description} />
                    <meta name="keywords" content={meta_keywords} />
                    <meta property="og:title" content={this.props.match.params.n+" - {gender_} Name Meaning, Origin, and Popularity Statistics | BabyNamr"} />
                    <meta property="og:description" content={meta_description} />
                    <meta property="og:url" content={"http://babynamr.com/name/"+this.props.match.params.n} />
                </Helmet>
            ;
        }else{
            helmet = 
            <Helmet>
                <title>We couldn't find it! | BabyNamr</title>
            </Helmet> 
            ;
            container = 
            <NotFound name={this.props.match.params.n} />
            ;          
        }

        return (
            <Aux>
                {helmet}
                {container}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        info: state.name.nameInfo,
        history: state.name.history,
        nofind: state.name.noFind,
        loading: state.name.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchNameInfo: (name) => dispatch( fetchNameInfo(name) ),
        onFetchHistory: (name) => dispatch ( fetchHistory(name) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Name);


