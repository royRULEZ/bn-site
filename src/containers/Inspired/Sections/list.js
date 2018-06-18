//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Spinner from '../../../components/spinner/spinner';

import { connect } from 'react-redux';
import { fetchCollections } from '../../../store/actions/index';

//CSS
const Main = styled.div`
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
    padding: 2rem 0;
    h2{
        display: block;
        width: 100%;
        font-size: 1.25rem;
        padding: 0;
        margin: .75rem 0;
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
    }
`;

const ListContainer = styled.div`
    width: 100%;
    flex-direction: column;
    border: 1px solid #BBB;
`;
    const ListSearch = styled.input`
        border: 0;
        outline: 0;
        border-bottom: 2px solid #BBB;
        box-sizing: border-box;
        width: 100%;
        font-size: 1rem;
        padding: 1rem;
        background-color: #fafafa;
    `;
    const ListItems = styled.div`
        width: 100%;
        height: 618px;
        overflow-y: scroll;
        flex-direction: column;
    `;
        const ListItem = styled(Link)`
            display: block;
            width: 100%;
            padding: 1rem 0.5rem;
            border-bottom: 1px solid #DDD;
            text-decoration: none;
            color: inherit;
            &:hover{
                color: blue;
                cursor: pointer;
                text-decoration: underline;
            }
            &:last-child{
                border-bottom: none;
            }
        `;

// Component
class List extends Component {   

    componentDidMount () {
        this.props.onFetchCollections();
    }

    render () {
        let collections = <Spinner/>;        
        if(this.props.collections[0]){
            collections = this.props.collections.map( c => (
                <ListItem key={c.url} to={"/collection/"+c.url} >
                    {c.name}
                </ListItem>
            ));
        }

        return(
                /* Title: Recently Added Collections */
                <Main>
                    <h2>Headline 2</h2>
                    <ListContainer>
                        <ListSearch
                            placeholder="Search..."
                        />
                        <ListItems>
                            {collections}
                        </ListItems>
                    </ListContainer> 
                </Main>  
            );
        }
}

const mapStateToProps = state => {
    return {
        collections: state.collection.collections,
        loading: state.collection.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCollections: () => dispatch ( fetchCollections() ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(List);







