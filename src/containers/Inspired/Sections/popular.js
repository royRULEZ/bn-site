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
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
    padding: 2rem 0;
    box-sizing: border-box;
    h2{
        display: block;
        width: 100%;
        font-size: 1.25rem;
        padding: 0 1rem;
        margin: .75rem 0;
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
    }
`;

const PopularItems = styled.div`
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
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
            background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('${props => props.backgroundimage}') no-repeat center center; 
            background-size: cover;
            font-size: 1.5rem;
            line-height: 1.5rem;
            font-weight: 700;
            color: #FFF;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            &:nth-child(2n+1){
                margin: 0 2% 2% 0;
            }
        `;
        
        let popularItems = <Spinner/>        
        if(this.props.collectionpopular){
            popularItems = this.props.collectionpopular.map( i => (
                <PopularItem key={i.id} to={"/collection/"+i.url} backgroundimage={require('../../../assets/collections/'+i.id+'_400.jpg')}>{i.name}</PopularItem>
            ))
            
        }

        return(
                /* Title: Recently Added Collections */
                <Main>
                    <h2>Popular Collections</h2>
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







