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
import { fetchCollectionNames, changeCollectionNamesPage } from '../../../store/actions/index';
import { Pagination } from '../../../components/pagination/pagination';


 // CSS
 const NamesContainer = styled.div`
    background-color: #f7f7f7;
    padding: 2rem 0;
    box-sizing: border-box;
    margin-bottom: 1rem;
    @media (min-width: ${props => props.theme.tablet}) {
        padding: 4rem 0;
    }
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
    width: 50%;
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
    @media (min-width: ${props => props.theme.tablet}) {
        width: 25%;
    }
`;

// Component
class CollectionNames extends Component {   

    componentDidMount () {
        this.props.onFetchCollectionNames(this.props.id);
    }

    changePageHandler = (p) => {
        this.props.onChangeCollectionNamesPage(this.props.id, p);
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
                <Pagination
                        pageCount = {this.props.pageCount}
                        changePage = {this.changePageHandler}
                        page = {this.props.page}
                    />
            </NamesContainer>
        );
        
    }
}

const mapStateToProps = state => {
    return {
        collectionNames: state.collection.collectionNames,
        pageCount: state.collection.pageCount,
        page: state.collection.page,
        loading: state.collection.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCollectionNames: (id) => dispatch ( fetchCollectionNames(id) ),
        onChangeCollectionNamesPage: (id, page) => dispatch( changeCollectionNamesPage(id, page) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(CollectionNames);







