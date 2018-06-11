//======================================================================================================================
// Class: ___
//======================================================================================================================
// Description:
// 
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/spinner/spinner';

import { connect } from 'react-redux';
import { fetchCollectionProfiles } from '../../../store/actions/index';


// CSS
const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    .c_Photo{
        float: left;
        width: 50%;
        height: 350px;
        background-color: #444;
    }
    .c_Bio{
        float: left;
        width: 50%;
        height: 350px;
        padding: 3rem;
        box-sizing: border-box;
        .c_Bio-name{
            font-size: 2rem;
        }
        .c_Bio-bio{
            padding-top: .25rem;
            font-size: .875rem;
            line-height: 1.5rem;
        }            
    }
    &:nth-child(odd){
        flex-direction: row-reverse;
    }
`;
const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
`;
const FirstName = styled(Link)`
    color: ${props => props.theme.color_accent};
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;

// Component
class CollectionProfiles extends Component {   

    componentDidMount () {
        this.props.onFetchCollectionProfiles(this.props.id);
    }

    render () {

        console.log(this.props.collectionProfiles);
        let profiles = <Spinner/>;
        // Array of Names
        profiles = this.props.collectionProfiles.map( p => (
            <ListItem key={p.id}>
                <div className="c_Photo"></div>
                <div className="c_Bio">
                    <div className="c_Bio-name"><FirstName to={"/name/"+p.firstname}>{p.firstname}</FirstName> {p.lastname}</div>
                    <div className="c_Bio-bio">{p.description}</div>
                </div>
            </ListItem>
        ));

        // Return
        return(
            <Container>
                {profiles}
            </Container>
        );


    }
}

const mapStateToProps = state => {
    return {
        collectionProfiles: state.collection.collectionProfiles,
        loading: state.collection.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCollectionProfiles: (id) => dispatch ( fetchCollectionProfiles(id) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(CollectionProfiles);







