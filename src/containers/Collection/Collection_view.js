//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { Rectangle as Ad, OfferCluster} from '../../components/ad/ad_factory';
import Names from './Sections/names';
import Profiles from  './Sections/profiles';

import Aux from '../../hoc/Aux';

//CSS
const Main = styled.div`
    width: 1100px;
    max-width: 95%;
    margin: 0 auto;
    .c_descriptor{
        text-align: center;
        font-family: ${props => props.theme.font_nixie};
        font-size: 0.8rem;
    }
`;
const Name = styled.h1`
    text-align: center;
    font-size: 3rem;
    text-transform: capitalize;
    font-family: ${props => props.theme.font_nixie};
    padding: 0 0 1rem 0;
    font-weight: 100;
`;
const Hero = styled.div`
    width: 100%;
    height: 400px;
    background-position: center;
    background-size: cover;
    background-color: #444;
`;
const Description = styled.div`
    margin: 4rem auto;
    max-width: 768px;
    line-height: 1.5rem;
    div{
        padding-bottom: 1rem;
    }
`;


class CollectionView extends Component {   
    
    render () {

        console.log("TYPE", this.props.type);

        let names = <div>Waiting for Names</div>;
        if(this.props.type === "profiles"){
            names = <Profiles name={this.props.collection} id={this.props.id} />
        }else{
            names = <Names name={this.props.collection} id={this.props.id} />
        }

        return (
            <Aux>
                <Main>
                    <Ad />
                    <div className="c_descriptor">Collection</div>
                    <Name>{this.props.collection}</Name>
                    <Hero />
                    <Description>
                        <div className="c_descriptor">Background</div>
                        {this.props.description}
                    </Description>
                </Main>
                {names}
                <OfferCluster/>
            </Aux>
        );
    }
}

export default CollectionView;