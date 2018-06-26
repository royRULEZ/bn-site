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
    flex-direction: column;
    flex-wrap: nowrap;
    margin-bottom: 5rem;
    .c_Bio{
        width: 100%;
        height: auto;
        padding: 1rem;
        box-sizing: border-box;
        .c_Bio-name{
            font-size: 2rem;
        }
        .c_Bio-bio{
            padding-top: .25rem;
            font-size: .875rem;
            line-height: 1.25rem;
        }            
    }
    @media (min-width: ${props => props.theme.tablet}) {
        flex-wrap: wrap;
        flex-direction: row;
        margin-bottom: 4rem;
        .c_Bio{
            width: 50%;
            padding: 0 3rem 3rem 3rem;
            height: 350px;
            .c_Bio-bio{
                line-height: 1.5rem;
            }     
        } 
        &:nth-child(odd){
            flex-direction: row-reverse;
        }   
    }
    @media (min-width: ${props => props.theme.big_tablet}) {
        margin-bottom: 3rem;
        .c_Bio{
            padding: 3rem;
            .c_Bio-bio{
                line-height: 1.5rem;
            }     
        }
    }
`;
const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
`;
const FirstName = styled(Link)`
    color: ${props => props.theme.color_accent};
    text-decoration: underline;
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

        const ListPhoto = styled.div`
            width: 100%;
            height: 200px;
            background: url('${props => props.backgroundimage}') no-repeat center center; 
            background-size: cover;
            @media (min-width: ${props => props.theme.tablet}) {
                width: 50%;
                height: 275px;              
            }
            @media (min-width: ${props => props.theme.big_tablet}) {
                height: 350px;              
            }
        `;

        console.log(this.props.collectionProfiles);
        let profiles = <Spinner/>;
        // Array of Names
        profiles = this.props.collectionProfiles.map( p => (
            <ListItem key={p.id}>
                <ListPhoto backgroundimage={require('../../../assets/collections/profiles/'+this.props.id+'/'+p.image+'.jpg')}  />
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







