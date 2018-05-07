import React, { Component } from 'react';
import NameView from './Name_view';


class Name extends Component {   

    render () {
        return (
            <NameView name={this.props.match.params.n} />
        );
    }
}

export default Name;