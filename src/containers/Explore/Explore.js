import React, { Component } from 'react';
import ExploreView from './Explore_view';


class Explore extends Component {   

    render () {

        let directGender = null;
        let directAlpha = null;
        if(this.props.location.state){
            directGender =  this.props.location.state.routeGender;
            directAlpha =  this.props.location.state.routeAlpha;
        }

        return (
            <ExploreView directGender={directGender} directAlpha={directAlpha} />
        );
    }
}

export default Explore;