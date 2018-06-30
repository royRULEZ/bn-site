import React, { Component } from 'react';
import styled from 'styled-components';
import CollectionView from './Collection_view';
import Aux from '../../hoc/Aux';
import Spinner from '../../components/spinner/spinner';
import { Helmet } from "react-helmet";

import { connect } from 'react-redux';
import { fetchCollection } from '../../store/actions/index';

class Collection extends Component {   

    componentDidMount () {
        this.props.onFetchCollection(this.props.match.params.c);
    }


    render () {

        let view = <Spinner/>; //TODO Fix
        let helmet = "";
        if(this.props.collection[0]){

            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = new Date(this.props.collection[0].date_added);
            let published = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear(); 
            
            view = 
            <CollectionView
                collection={this.props.collection[0].name}
                description={this.props.collection[0].description}
                type={this.props.collection[0].type}
                id={this.props.collection[0].id}
                url={this.props.collection[0].url}
                key={this.props.collection[0].id}
                infographic={this.props.collection[0].infographic}
                published={published}
            />;

            let meta_description = this.props.collection[0].name + " | Whether it's an origin, icon, or theme, we've taken great time to curate unique and original collections of iconic namesakes.";
            let meta_keywords = this.props.collection[0].name + ", baby name collection, baby name origins, baby name themes";
            helmet =  
                <Helmet>
                    <title>{this.props.collection[0].name} | BabyNamr</title>
                    <meta name="description" content={meta_description} />
                    <meta name="keywords" content={meta_keywords} />
                    <meta property="og:title" content={this.props.collection[0].name +" | BabyNamr"} />
                    <meta property="og:description" content={meta_description} />
                    <meta property="og:url" content={"http://babynamr.com/collection/"+this.props.collection[0].url} />
                    <meta property="og:image" content={"/images/collections/"+this.props.collection[0].id+"_1100.jpg"} />
                </Helmet> 
            ;

        }
        return (
           <Aux>
               {helmet}
               {view}
           </Aux>
        );
    }
}


const mapStateToProps = state => {
    return {
        collection: state.collection.collection,
        loading: state.collection.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCollection: (url) => dispatch( fetchCollection(url) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Collection);