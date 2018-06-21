//https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Aaron&format=json

//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import wiki from 'wikijs';

import Template from './blank';
import Spinner from '../../../components/spinner/spinner';

//CSS
const Main = styled.div`
    padding-top: 1rem;
`;
//TODO Make this scrollable in case you get lots of words
const Container = styled.div`
    padding: .375rem .25rem;
    .k-title{
        font-size: 1rem;
    }  
    .k-type{
        font-size: .75rem;
        font-style: italic;
        font-weight: 100;
        color: #999;
    }
`;
// Component
class Known extends Component {   

    state = {
        knownFor: []
    }

    componentDidMount () {
        axios.get("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Aaron&format=json")
            .then( res => {
                console.log(res);
                /*
                this.setState({
                    knownFor: res.data.default.topics
                });
                */
            })
            .catch( err => {
                console.log('Error', err);
            });
    }


    render () {

        //wiki.find('luke skywalker').then(page => console.log(page.title));
        //console.log("HE");
        
        let known = <Spinner/>;        
        const label = "What is '"+ this.props.name +"' best known for?";
        
        
        
        return(
            <Template
                label={label}
                width="25%"
                height="300px">
                <Main>
                    {known}
                </Main>
            </Template>
        );
    }
}

export default Known;







