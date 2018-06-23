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
    margin: 6rem auto;
    position: relative;
    height: 280px;
    background-color: #EEE;
`;
const Offers = styled.div`
    margin-right: 336px;
    padding: 25px;
    box-sizing: border-box;
    float: left;
    height: 280px;
    display: flex;
`;
const Ad = styled.div`
    width: 336px;
    height: 280px;
    background-color: #444;
    position: absolute;
    right: 0;
`;
const AmazonItem = styled(Link)`
    display: block;
    width: 32%;
    margin-right: 2%;
    padding: 20px;
    background-color: #FFF;
    border-bottom: 1px solid #EEE;
    transition: .3s cubic-bezier(.25,.8,.5,1);
    text-decoration: none !important;
    &:hover{
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        cursor: pointer;
    } 
    &:last-child{
        margin-right: 0;
    }
`;
    const AmazonDescription = styled.div`
        padding-top: .5rem;
        font-weight: 300;
        font-size: 1rem;
        padding-top: 10px;
    `;
    const AmazonPrice = styled.div`
        color: #709A42 !important;
        font-weight: 700;
        font-size: .75rem;
        padding-top: .25rem;
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
            height: 125px;
            width: 125px; 
            margin: 0 auto;
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
                <Offers>
                    {affiliates}
                </Offers>
                <Ad>
                    Ad
                </Ad>
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
