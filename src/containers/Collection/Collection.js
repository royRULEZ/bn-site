import React, { Component } from 'react';
import styled from 'styled-components';
import CollectionView from './Collection_view';
import Aux from '../../hoc/Aux';
import Spinner from '../../components/spinner/spinner';

import { connect } from 'react-redux';
import { fetchCollection } from '../../store/actions/index';

class Collection extends Component {   

    componentDidMount () {
        this.props.onFetchCollection(this.props.match.params.c);
    }


    render () {

        let view = <Spinner/>; //TODO Fix
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

        }
        return (
           <Aux>
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