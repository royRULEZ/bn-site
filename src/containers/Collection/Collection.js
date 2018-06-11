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
            view = 
            <CollectionView
                collection={this.props.collection[0].name}
                description={this.props.collection[0].description}
                type={this.props.collection[0].type}
                id={this.props.collection[0].id}
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


/*
        let profiles = [
            {
                name: "Name1",
                bio: "The concept of the hero can be found in classical literature. It is the main or revered character in heroic epic poetry celebrated through ancient legends of a people, often striving for military conquest and living by a continually flawed personal honor code. The definition of a hero has changed throughout time." ,
                pic: '1'
            },
            {
                name: "Name2",
                bio: "The concept of the hero can be found in classical literature. It is the main or revered character in heroic epic poetry celebrated through ancient legends of a people, often striving for military conquest and living by a continually flawed personal honor code. The definition of a hero has changed throughout time." ,
                pic: '2'
            },
            {
                name: "Name3",
                bio: "The concept of the hero can be found in classical literature. It is the main or revered character in heroic epic poetry celebrated through ancient legends of a people, often striving for military conquest and living by a continually flawed personal honor code. The definition of a hero has changed throughout time." ,
                pic: '3'
            },
        ];
        let names = [
            {
                name: "Roy",
                gender: "M"
            },
            {
                name: "Samantha",
                gender: "F"
            },
            {
                name: "Carol",
                gender: "F"
            },
            {
                name: "Bob",
                gender: "M"
            },
            {
                name: "Jeff",
                gender: "M"
            },
            {
                name: "Bobby",
                gender: "M"
            },
            {
                name: "Jeffrey",
                gender: "M"
            }
        ];
*/