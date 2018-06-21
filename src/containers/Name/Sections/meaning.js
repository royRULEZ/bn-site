//======================================================================================================================
// Class: Meaning
//======================================================================================================================
// Description:
// Pulling from Wikipedia... :)
// Should probably put this into the DB in some sort of script...
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { fetchMeaning } from '../../../store/actions/index';

import Spinner from '../../../components/spinner/spinner';

//CSS
const Main = styled.div`
    padding-top: 1rem;
    overflow-y: scroll;
`;

// Component
class Meaning extends Component {   

    componentDidMount () {
        this.props.onFetchMeaning(this.props.name);
    }

    render () {
        let meaning = <Spinner/>
        if(this.props.meaning){
            meaning = this.props.meaning;
        }
        
        return(
            <Main>{meaning}</Main>
        );
    }
}

const mapStateToProps = state => {
    return {
        meaning: state.name.meaning,
        loading: state.name.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMeaning: (name) => dispatch ( fetchMeaning(name) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Meaning);





