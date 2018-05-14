//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { Rectangle as Ad, OfferCluster} from '../../components/ad/ad_factory';
import { Profiles, Names } from './Sections/List_factory';

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

        let names = <div>Waiting for Names</div>;
        if(this.props.type === "profiles"){
            names = <Profiles data={this.props.data} />
        }else if(this.props.type === "names"){
            names = <Names data={this.props.data} />
        }else{
            names = <div>Something happened.</div>
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
                        The concept of the hero can be found in classical literature. It is the main or revered character in heroic epic poetry celebrated through ancient legends of a people, often striving for military conquest and living by a continually flawed personal honor code. The definition of a hero has changed throughout time. Merriam Webster dictionary defines a hero as "a person who is admired for great or brave acts or fine qualities.
                    </Description>
                </Main>
                {names}
                <OfferCluster/>
            </Aux>
        );
    }
}

export default CollectionView;