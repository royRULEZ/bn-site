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
    margin: 25px auto 0 auto;
    padding: 0 0 25px 0; 
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
    .n_amazon{
        width: 15.8333%;
        margin-right: 1%;
        border: 1px solid #CCC;
        padding: 1rem;
        background-color: #FFF;
        box-sizing: border-box;
        .n_amazon_gift-photo{
            img{
                width: 100%;
            }
        }
        .n_amazon_gift-description{
            font-weight: 300;
            font-size: 14px;
            padding-top: 10px;
        }
        .n_amazon_gift-price{
            color: #709A42;
            font-weight: 700;
            font-size: 14px;
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
            height: 155px;
            width: 100%; 
            margin: 0 auto;
        `;

        let affiliates = <Spinner/>;
        console.log(this.props.afrow);
        if ( !this.props.loading ) {
            affiliates = this.props.afrow.map( a => (
                <div key={a.id} className="n_amazon">
                    <AmazonImage backgroundimage={a.image}/>
                    <div className="n_amazon_gift-description">{a.name}</div>
                    <div className="n_amazon_gift-price">${a.price.toFixed(2)}</div>
                </div> 
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


