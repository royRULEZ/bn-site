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

import { connect } from 'react-redux';
import { fetchHCollections } from '../../../store/actions/index';

import Spinner from '../../../components/spinner/spinner';

// CSS
const Main = styled.div`
    border-top: 1px solid #EEE;
    width: 1024px;
    max-width 90%;
    margin: 2rem auto;
    padding: 2rem;
    box-sizing: border-box;
    h2{
        display: block;
        width: 100%;
        font-size: 1.25rem;
        padding: 0;
        margin: .75rem 0;
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
    }
    @media (max-width: ${props => props.theme.phone}) {
        width: 100%;
        padding: 1rem 0 0 0;
        h2{
            text-align: center;
        }
    }
    @media (max-width: ${props => props.theme.tablet}) {
        padding: 2rem 0 0 0;
    }  
`;
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;



// Component
class Collections extends Component {   

    componentDidMount () {
        this.props.onFetchHCollections();
    }

    render () {

        const Collection = styled(Link)`
            width: 32.6666%;
            margin-bottom: 1%;
            height: 200px;
            font-size: 2rem;
            font-weight: 100;
            background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${props => props.backgroundimage}') no-repeat center center; 
            background-size: cover;
            boxing-sizing: border-box;
            color: #FFF;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            div{
                width: 100%;
                padding: .5rem;
                letter-spacing: -1px;
            }
            transition: .3s cubic-bezier(.25,.8,.5,1);
            &:hover{
                box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
                cursor: pointer;
                //text-decoration: underline;
            }
            @media (max-width: ${props => props.theme.phone}) {
                width: 49.5%;
                height: 180px;
                font-size: 1.5rem;
                
            }
        `;
        
        let collections = <Spinner/>;
        
        if ( !this.props.loading ) {
            collections = this.props.HCollections.map( hc => (
                <Collection key={hc.name} to={"/collection/"+hc.url} backgroundimage={require('../../../assets/collections/'+hc.id+'_400.jpg')}>
                    <div>{hc.name}</div>
                </Collection>
            ) )
        }
        //<img src={require('../../../assets/collections/4_s.jpg')}></img>
        return (
            <Main>
                <h2>Fresh Collections</h2>
                <Container>
                    {collections}
                </Container>
            </Main>
        );
    }
}


const mapStateToProps = state => {
    return {
        HCollections: state.home.HCollections,
        loading: state.home.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchHCollections: () => dispatch( fetchHCollections() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Collections);

