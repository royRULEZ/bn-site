//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../../../global/axios';

import Template from './blank';

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
        axios.get("http://localhost:8088/google-autocomplete/"+this.props.name)
            .then( res => {
                this.setState({
                    knownFor: res.data.default.topics
                });
            })
            .catch( err => {
                console.log('Error', err);
            });
    }


    render () {
        
        let known = <div>Loading...</div>;        
        if(this.state.knownFor.length != 0){
            known = this.state.knownFor.map( k => (
                <Container key={k.mid}>
                    <div className="k-title">{k.title}</div>
                    <div className="k-type">{k.type}</div>
                </Container>
            ));
        }
        const label = "What is '"+ this.props.name +"' best known for?";
        
        return(
            <Template
                label={label}
                width="25%">
                <Main>
                    {known}
                </Main>
            </Template>
        );
    }
}

export default Known;







