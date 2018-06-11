import React, { Component } from 'react';
import ExploreView from './Explore_view';


class Explore extends Component {   

    render () {

        let directGender = null;
        let directAlpha = null;

        console.log("Expore.js PROPS", this.props.location);
        if(this.props.location.direct){
            directGender =  this.props.location.direct.routeGender;
            directAlpha =  this.props.location.direct.routeAlpha;
        }

        return (
            <ExploreView directGender={directGender} directAlpha={directAlpha} />
        );
    }
}

export default Explore;