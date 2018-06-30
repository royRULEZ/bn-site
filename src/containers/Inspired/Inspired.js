import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import InspiredView from './Inspired_view';
import Aux from '../../hoc/Aux';

class Inspired extends Component {   

    render () {
        return (
            <Aux>
                <Helmet>
                    <title>Be Inspired by unique and surprising Baby Name collections, themes, and origins | BabyNamr</title>
                </Helmet>
                <InspiredView />
            </Aux>
        );
    }
}

export default Inspired;