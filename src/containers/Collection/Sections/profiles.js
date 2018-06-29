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
        .c_Bio-source{
            a{
                color: inherit;
                font-size: .75rem;
                color: ${props => props.theme.color_lightgrey};
                font-style: italic;
            }
        }        
    }
    @media (min-width: ${props => props.theme.tablet}) {
        flex-wrap: wrap;
        flex-direction: row;
        margin-bottom: 5rem;
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
        .c_Bio{
            padding: 3rem;
            .c_Bio-bio{
                line-height: 1.5rem;
            }     
        }
    }
`;
const Container = styled.article`
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
const InfoGraphic = styled.div`
    border-top: 1px solid #EEE;
    border-bottom: 1px solid #EEE;
    padding: 2rem 0;
    h2{
        text-align: center;
        font-family: ${props => props.theme.font_nixie};
    }
    img{
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 300px;
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
                <ListPhoto backgroundimage={"/images/profiles/"+this.props.id+"/"+p.image+".jpg"}  />
                
                <div className="c_Bio">
                    <div className="c_Bio-name">{p.sequence}. <FirstName to={"/name/"+p.firstname}>{p.firstname}</FirstName> {p.lastname}</div>
                    <div className="c_Bio-bio">{p.description} <span className="c_Bio-source">{p.source === "" ? "" : <a href={p.source} target="_blank">Bio Source</a>}</span></div>
                    
                </div>
            </ListItem>
        ));

        // Return
        return(
            <Container>
                {profiles}
                {this.props.infographic === 1 ?
                <InfoGraphic>
                    <h2>{this.props.name} Infographic</h2>
                    <img src={"/images/profiles/"+this.props.id+"/infographic.jpg"}  />
                </InfoGraphic>
                : "" }
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







