//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { Rectangle as Ad} from '../../components/ad/ad_factory';
import OfferCluster from '../../components/ad/amazonFour';
import Names from './Sections/names';
import Profiles from  './Sections/profiles';

import Aux from '../../hoc/Aux';
import Spinner from '../../components/spinner/spinner';

//CSS
const Main = styled.div`
    width: 1100px;
    max-width: 95%;
    margin: 0 auto;
    padding-top: 2rem;
    .c_descriptor{
        text-align: center;
        font-family: ${props => props.theme.font_nixie};
        font-size: 0.8rem;
        color: ${props => props.theme.color_lightgrey};
    }
`;

class CollectionView extends Component {   
    
    render () {

        const Hero = styled.div`
            width: 100%;
            height: 200px;
            background: url('${props => props.backgroundimage}') no-repeat center center; 
            background-size: cover;
            @media (min-width: ${props => props.theme.tablet}) {
                height: 500px;
            }
        `;
        const Name = styled.h1`
            text-align: center;
            font-size: ${(props => props.size)-1};
            text-transform: capitalize;
            font-family: ${props => props.theme.font_nixie};
            ${this.props.type != 'origin' ? "padding: 0 0 0 0;" : "padding-top: 1rem"};
            ${this.props.type != 'origin' ? "" : "margin: 0"};
            font-weight: 100;
            @media (min-width: ${props => props.theme.tablet}) {
                font-size: ${props => props.size};
            }
        `;
        const Published = styled.div`
            width: 100%;
            text-align: center;
            font-size: .75rem;
            color: ${props => props.theme.color_lightgrey};
            font-style: italic;
            padding-bottom: 1rem;
        `;
        const Description = styled.div`
            margin: 2rem auto;
            max-width: 768px;
            line-height: 1.25rem;
            font-size: .875rem;
            @media (min-width: ${props => props.theme.tablet}) {
                ${this.props.type != 'origin' ? "margin: 4rem auto;" : "margin: 2rem auto 4rem auto;"};
                font-size: 1rem;
                line-height: 1.5rem;
                div{
                    padding-bottom: 1rem;
                }
            }
        `;

        let names = <Spinner/>;
        if(this.props.type === "profiles"){
            names = <Profiles id={this.props.id} name={this.props.collection} infographic={this.props.infographic} />
        }else{
            names = <Names url={this.props.url} id={this.props.id} />
        }

        let size = (this.props.type === 'origin' ? "6rem" : "3rem");
 
        console.log(this.props.infographic);
        return (
            <Aux>
                <Main>
                    <div className="c_descriptor">{this.props.type === 'origin' ? "Origin" : "Collection"}</div>
                    <Name size={size}>{this.props.collection}</Name>
                    <Published>{this.props.published}</Published>
                    {this.props.type != 'origin' ?  <Hero backgroundimage={"/images/collections/"+this.props.id+"_1100.jpg"} /> : "" }
                    <Description>
                        <div className="c_descriptor">Description</div>
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

/*

INSERT INTO `babynamr`.`collection`
(
`name`,
`description`,
`type`,
`url`,
`date_added`,
`featured`)
VALUES(
"15 Iconic Male Fashion Designers",
"Description",
"profiles",
"15-iconic-male-fashion-designers",
CURRENT_TIMESTAMP,
0);


*/