import React, { Component } from 'react';
import ExploreView from './Explore_view';
import { Helmet } from "react-helmet";
import Aux from '../../hoc/Aux';

class Explore extends Component {   

    render () {

        let directGender = null;
        let directAlpha = null;

        //console.log("Expore.js PROPS", this.props.location);
        if(this.props.location.direct){
            directGender =  this.props.location.direct.routeGender;
            directAlpha =  this.props.location.direct.routeAlpha;
        }

        return (
            <Aux>
                <Helmet>
                    <title>Explore, Filter, and Browse Unique and Original Baby Names | BabyNamr</title>
                    <meta name="description" content="Use our intuitive explore tool to search through baby names segmented by their popularity. Don't pick the same name everyone else is picking. Find something special!" />
                    <meta name="keywords" content="baby names, naming your baby, boy name, girl name, find baby names, explore baby names, search baby names" />
                </Helmet>    
                <ExploreView directGender={directGender} directAlpha={directAlpha} />
            </Aux>
        );
    }
}

export default Explore;