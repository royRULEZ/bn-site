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
    order: 1;
    width: 100%;
    padding: 1rem 0 2rem;
    box-sizing: border-box;
    border-top: 5px solid #DDD;
    border-bottom: 5px solid #DDD;
    margin: 1rem 0;
    h2{
        display: block;
        width: 100%;
        font-size: 1.25rem;
        padding: 0 1rem;
        margin: .75rem 0;
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
        box-sizing: border-box;
    }
    @media (min-width: ${props => props.theme.tablet}) {
        order: 0;
        padding: 2rem 0;
        width: 1100px;
        margin: 0 auto;
        max-width: 95%;
        border: none;
        margin: 0;
    }
`;

const ListContainer = styled.div`
    width: 100%;
    flex-direction: column;
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
        height: 300px;
        overflow-y: scroll;
        flex-direction: column;
        @media (min-width: ${props => props.theme.tablet}) {
            height: 618px;
        }
    `;
        const ListItem = styled(Link)`
            display: block;
            width: 100%;
            padding: 1rem 1rem;
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

    listTypeHandler = (e) => {
        console.log(e.target.value);
        this.props.onFetchCollections(e.target.value);
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
                <Main>
                    <h2>Search Collections</h2>
                    <ListContainer>
                        <ListSearch
                            placeholder="Search..."
                            onKeyUp={this.listTypeHandler}
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
        onFetchCollections: (a) => dispatch ( fetchCollections(a) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(List);







