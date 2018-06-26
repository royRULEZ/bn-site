// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchAdCluster } from '../../store/actions/index';
import Spinner from '../../components/spinner/spinner';

// CSS
const Main = styled.div`
    width: 1024px;
    max-width: 95%;
    margin: 3rem auto;
    height: auto;
    background-color: #EEE;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem;    
    box-sizing: border-box;    
    @media (min-width: ${props => props.theme.big_tablet}) {
        margin: 6rem auto;
        position: relative;
    }
    h2{
        display: block;
        width: 100%;
        font-size: 1.25rem;
        padding: 0;
        margin: .75rem 0;
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
        text-align: center;
    }
`;
const AmazonItem = styled(Link)`
    display: block;    
    width: 49.5%;
    margin:0 1% 1% 0;
    padding: 1rem;
    background-color: #FFF;
    border-bottom: 1px solid #EEE;
    text-decoration: none !important;
    box-sizing: border-box;
    text-align: center;
    &:nth-child(2n+1){
        margin-right: 0;
    }
    @media (min-width: ${props => props.theme.big_tablet}) {
        width: 23.5%;
        margin-right: 2%;
        transition: .3s cubic-bezier(.25,.8,.5,1);
        text-align: left;
        height: 250px;
        &:hover{
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
            cursor: pointer;
        } 
        &:nth-child(3){
            margin-right: 2%;
        }
        &:last-child{
            margin-right: 0;
        }  
    }
`;
    const AmazonDescription = styled.div`
        padding-top: .75rem;
        font-weight: 300;
        font-size: 1rem;
        font-family: ${props => props.theme.font_nixie};
        color: #444;
        @media (min-width: ${props => props.theme.big_tablet}) {
            padding-top: 1rem;
        }
    `;
    const AmazonPrice = styled.div`
        color: #709A42 !important;
        font-weight: 700;
        font-size: .875rem;
        padding-top: .5rem;
        font-weight: 200;
    `;

// -------------------------------------------------------------------------------------------------------------------------
// Footer Cluster of Amazon Ad + Square Ad
// -------------------------------------------------------------------------------------------------------------------------
class OfferCluster extends Component {   

    componentDidMount () {
        this.props.onFetchAdCluster();
    }

    render () {

        const AmazonImage = styled.div`
            background: url('${props => props.backgroundimage}') no-repeat center center; 
            background-size: cover;
            display: block;
            height: 100px;
            width: 100px; 
            margin: 0 auto;
            @media (min-width: ${props => props.theme.tablet}) {
                height: 125px;
                width: 125px;  
            }
        `;

                
        let affiliates = <Spinner/>;
        if ( !this.props.loading ) {
            affiliates = this.props.adcluster.map( a => (
                <AmazonItem
                    key={a.id}
                    to={a.link} 
                    target="_blank"
                    >
                    <AmazonImage backgroundimage={a.image}/>
                    <AmazonDescription>{a.name}</AmazonDescription>
                    <AmazonPrice>${a.price.toFixed(2)}</AmazonPrice>
                </AmazonItem> 
            ))
        }

        // Return
        return(
            <Main>
                <h2>Unique Baby Gifts from Amazon</h2>
                {affiliates}
            </Main>
        );
    }
}

const mapStateToProps = state => {
    return {
        adcluster: state.affiliate.adcluster,
        loading: state.affiliate.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchAdCluster: () => dispatch( fetchAdCluster() ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(OfferCluster);
