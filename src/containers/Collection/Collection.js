import React, { Component } from 'react';
import CollectionView from './Collection_view';


class Collection extends Component {   
    
    render () {

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

        return (
            <CollectionView
                collection={this.props.match.params.c}
                type="names"
                data={names}
            />
        );
    }
}

export default Collection;