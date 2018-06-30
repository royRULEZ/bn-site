//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';

import { Link } from 'react-router-dom';
import Spinner from '../../../components/spinner/spinner';

import { connect } from 'react-redux';
import { fetchHCollections } from '../../../store/actions/index';

//CSS
const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
    @media (min-width: ${props => props.theme.tablet}) {
        flex-direction: row;
    }
`;

// Component
class Hero extends Component {   

    componentDidMount () {
        this.props.onFetchHCollections();
    }

    render () {
        let collections = <Spinner/>;
        
        if(this.props.HCollections[0]){

            const Primary = styled(Link)`
                background-color: #EEE;
                width: 100%;
                height: 250px;
                float: left;
                margin-right: 1%;
                transition: .3s cubic-bezier(.25,.8,.5,1);
                background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('${props => props.backgroundimage}') no-repeat center center; 
                background-size: cover;
                color: #FFF;
                font-size: 2rem;
                font-weight: 100;
                display: flex;
                text-align: center; 
                align-items: center;
                justify-content: center;
                text-decoration: none; 
                box-sizing: border-box;
                &:hover{
                    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
                    cursor: pointer;
                }
                @media (min-width: ${props => props.theme.tablet}) {
                    width: 64%;
                    height: 400px;
                    font-size: 3rem;
                }
            `;

            const Secondary = styled.div`
                width: 100%;
                height: auto;
                margin-top: 10px;
                @media (min-width: ${props => props.theme.tablet}) {
                    margin-top: 0;
                    width: 35%;
                    height: 400px;
                }
            `;
                const SecondaryItem = styled(Link)`
                    background-color: #EEE;
                    width: 100%;
                    height: 195px;
                    margin-bottom: 10px;
                    transition: .3s cubic-bezier(.25,.8,.5,1);
                    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('${props => props.backgroundimage}') no-repeat center center; 
                    background-size: cover;
                    color: #FFF;
                    font-size: 2rem;
                    line-height: 2rem;
                    font-weight: 100;
                    display: flex;
                    text-align: center; 
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    &:hover{
                        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
                        cursor: pointer;
                    }
                `;

            collections = 
                <Aux>
                    <Primary to={"/collection/"+this.props.HCollections[0].url} backgroundimage={"/images/collections/"+this.props.HCollections[0].id+"_1100.jpg"} >{this.props.HCollections[0].name}</Primary>
                    <Secondary>
                        <SecondaryItem to={"/collection/"+this.props.HCollections[1].url} backgroundimage={"/images/collections/"+this.props.HCollections[1].id+"_1100.jpg"} >{this.props.HCollections[1].name}</SecondaryItem>
                        <SecondaryItem to={"/collection/"+this.props.HCollections[2].url} backgroundimage={"/images/collections/"+this.props.HCollections[2].id+"_1100.jpg"} >{this.props.HCollections[2].name}</SecondaryItem>
                    </Secondary>
                </Aux>
            ;
        }

        return(
                <Main>
                    {collections}
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

export default connect( mapStateToProps, mapDispatchToProps )(Hero);







