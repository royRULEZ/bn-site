//======================================================================================================================
// Class: Personalized Gifts
//======================================================================================================================
// Description:
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchAFRow } from '../../store/actions/index';
import Spinner from '../../components/spinner/spinner';


//CSS
const Container = styled.div`
    width: 100%;
    border-top: 1px solid #DDD;
    margin: 1.5rem auto 0 auto;
    padding: 0 0 1.5rem 0; 
`;
const ContainerTitle = styled.div`
    padding: 2rem 0;
    box-sizing: border-box;
    text-align: center;
    font-size: 1.25rem;
    font-family: ${props => props.theme.font_nixie};
    font-weight: 100;
`;
const AmazonItems = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (min-width: ${props => props.theme.big_tablet}) {
        flex-wrap: nowrap;
        padding: 1rem;
        box-sizing: border-box;
    }
`;
const AmazonItem = styled(Link)`
    width: 49.5%;
    margin-right: 1%;
    margin-bottom: 1%;
    border: 1px solid #CCC;
    padding: 1rem;
    background-color: #FFF;
    box-sizing: border-box;
    text-decoration: none !important;
    .n_amazon_gift-description{
        font-weight: 300;
        font-size: 1rem;
        padding: .5rem 0;
        color: #444;
        font-family: ${props => props.theme.font_nixie};
    }
    .n_amazon_gift-price{
        color: #709A42;
        font-weight: 100;
        font-size: .875rem;
        padding-top: .25rem;
    }
    &:nth-child(even){
        margin-right: 0;
    }
    @media (min-width: ${props => props.theme.tablet}) {
        width: 32.6666%;
        &:nth-child(even){
            margin-right: 1%;
        }
        &:nth-child(3){
            margin-right: 0;
        }
        &:last-child{
            margin-right: 0;
        }
    }
    @media (min-width: ${props => props.theme.big_tablet}) {
        width: 15.8333%;
        .n_amazon_gift-description{
            padding: 1rem 0;
        }
        &:nth-child(3){
            margin-right: 1%;
        }
        &:last-child{
            margin-right: 0;
        }
    }
`;
// Component
class AffiliateRow extends Component {   

    componentDidMount () {
        this.props.onFetchAFRow();
    }

    render () {
    
        const AmazonImage = styled.div`
            background: url('${props => props.backgroundimage}') no-repeat center center; 
            background-size: cover;
            display: block;
            height: 100px;
            width: 100px; 
            margin: 0 auto;
            @media (max-width: ${props => props.theme.phone}) {
                height: 125px;
                width: 125px;  
            }
        `;

        let affiliates = <Spinner/>;
        if ( !this.props.loading ) {
            affiliates = this.props.afrow.map( a => (
                <AmazonItem key={a.id} to={a.link} target="_blank" >
                    <AmazonImage backgroundimage={a.image}/>
                    <div className="n_amazon_gift-description">{a.name}</div>
                    <div className="n_amazon_gift-price">${a.price.toFixed(2)}</div>
                </AmazonItem> 
            ))
        }

        return(
            <Container>
                <ContainerTitle>
                    Popular baby gifts on Amazon
                </ContainerTitle>
                <AmazonItems>
                    {affiliates}
                </AmazonItems>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        afrow: state.affiliate.afrow,
        loading: state.affiliate.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchAFRow: () => dispatch( fetchAFRow() ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(AffiliateRow);


