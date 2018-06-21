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
import { fetchCollectionNames } from '../../../store/actions/index';


 // CSS
 const NamesContainer = styled.div`
    background-color: #f7f7f7;
    padding: 4rem 0;
    box-sizing: border-box;
`;
const Container = styled.div`
    width: 960px;
    max-width: 95%;
    margin: 0 auto;
    .c_Label{
        width: 100%;
        text-align: left;
        font-family: ${props => props.theme.font_nixie};
        font-size: 2rem;
    }
    display: flex;
    flex-wrap: wrap;
`;
const Name = styled(Link)`
    width: 25%;
    padding: 1.6rem 0;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    font-weight: 300;
    font-size: 1.5rem;
    color: inherit;
    &:hover{
        text-decoration: underline;
    }
    
`;

// Component
class CollectionNames extends Component {   

    componentDidMount () {
        this.props.onFetchCollectionNames(this.props.id);
    }

    render () {
   
        let names = <Spinner/>;
        if(this.props.collectionNames[0]){
            names = this.props.collectionNames.map( n => (
                <Name key={n.id} to={"/name/"+n.name} >
                    {n.name}
                </Name>
            ));
        }
        
        return(
            <NamesContainer>
                <Container>
                    {names}
                </Container>
            </NamesContainer>
        );
        
    }
}

const mapStateToProps = state => {
    return {
        collectionNames: state.collection.collectionNames,
        loading: state.collection.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCollectionNames: (id) => dispatch ( fetchCollectionNames(id) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(CollectionNames);







