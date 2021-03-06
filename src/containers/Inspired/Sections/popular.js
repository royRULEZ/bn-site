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
import { fetchCollectionsPopular } from '../../../store/actions/index';

//CSS
const Main = styled.div`
    order: 0;
    width: 100%;
    padding: 1rem 0 0 0;
    box-sizing: border-box;
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
        order: 1;
        padding: 0 0;
        width: 1100px;
    }
`;

const PopularItems = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: ${props => props.theme.tablet}) {
        padding: 0 0 0 2rem;
    }
`;


// Component
class Popular extends Component {   

    componentDidMount () {
        this.props.onFetchCollectionsPopular();
    }

    render () {

        const PopularItem = styled(Link)`
            width: 49%;
            height: 160px;
            margin: 0 0 2% 0;
            background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${props => props.backgroundimage}') no-repeat center center; 
            background-size: cover;
            font-size: 1.5rem;
            line-height: 1.5rem;
            font-weight: 100;
            color: #FFF;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            padding: 1rem;
            box-sizing: border-box;
            &:nth-child(2n+1){
                margin: 0 2% 2% 0;
            }
        `;
        
        let popularItems = <Spinner/>        
        if(this.props.collectionpopular){
            popularItems = this.props.collectionpopular.map( i => (
                <PopularItem key={i.id} to={"/collection/"+i.url} backgroundimage={"/images/collections/"+i.id+"_400.jpg"}>{i.name}</PopularItem>
            ))
            
        }

        return(
                /* Title: Recently Added Collections */
                <Main>
                    <h2>Popular Baby Name Collections</h2>
                    <PopularItems>
                        {popularItems}
                    </PopularItems> 
                </Main>  
            );
        }
}


const mapStateToProps = state => {
    return {
        collectionpopular: state.collection.collectionpopular,
        loading: state.home.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCollectionsPopular: () => dispatch( fetchCollectionsPopular() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Popular);







