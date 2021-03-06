//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

//TODO FIX THIS

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../../../global/axios';

import Template from './blank';
import Spinner from '../../../components/spinner/spinner';

//CSS
const Main = styled.div`
    padding-top: 1rem;
`;
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
        axios.get("http://52.15.54.43:8088/google-autocomplete/"+this.props.name)
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
        
        let known = <Spinner/>;        
        const label = "What is '"+ this.props.name +"' best known for?";
        
        if(this.state.knownFor.length != 0){
            known = this.state.knownFor.map( k => (
                <Container key={k.mid}>
                    <div className="k-title">{k.title}</div>
                    <div className="k-type">{k.type}</div>
                </Container>
            ));
        }
        
        
        return(
            <Template
                label={label}
                big_width="25%"
                tablet_width="50%"
                phone_width="100%"
                height="300px">
                <Main>
                    {known}
                </Main>
            </Template>
        );
    }
}

export default Known;







