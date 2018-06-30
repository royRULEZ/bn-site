import React, { Component } from 'react';
import HowToView from './HowTo_view';
import { Helmet } from "react-helmet";
import Aux from '../../hoc/Aux';


class HowTo extends Component {   

    render () {
        return (
            <Aux>
                <Helmet>
                    <title>How to pick the perfect name for your baby | BabyNamr</title>
                    <meta name="description" content="Choosing the right baby name is both overwhelming and exciting. We’ve gathered ideas from countless couples and summarized them into 7 steps." />
                    <meta name="keywords" content="baby names, naming your baby, boy name, choosing a baby name, girl name, 7 steps to choose a baby name" />
                </Helmet>            
                <HowToView />
            </Aux>
        );
    }
}

export default HowTo;