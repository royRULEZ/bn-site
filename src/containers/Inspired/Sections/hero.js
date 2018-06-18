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
    width: 1100px;
    margin: 0 auto;
    max-width: 95%;
`;

// Component
class Hero extends Component {   

    componentDidMount () {
        this.props.onFetchHCollections();
    }

    render () {
        let collections = <Spinner/>;
        
        if(this.props.HCollections[0]){

            const Primary = styled.div`
                background-color: #EEE;
                width: 64%;
                height: 400px;
                float: left;
                margin-right: 1%;
                transition: .3s cubic-bezier(.25,.8,.5,1);
                background: url('${props => props.backgroundimage}') no-repeat center center; 
                background-size: cover;
                color: #FFF;
                font-size: 3rem;
                font-weight: 900;
                display: flex;
                text-align: center; 
                align-items: center;
                justify-content: center;
                &:hover{
                    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
                    cursor: pointer;
                }
            `;

            const Secondary = styled.div`
                width: 35%;
                height: 400px;
                float: left;
            `;
                const SecondaryItem = styled.div`
                    background-color: #EEE;
                    width: 100%;
                    height: 195px;
                    margin-bottom: 10px;
                    transition: .3s cubic-bezier(.25,.8,.5,1);
                    background: url('${props => props.backgroundimage}') no-repeat center center; 
                    background-size: cover;
                    color: #FFF;
                    font-size: 2rem;
                    font-weight: 900;
                    display: flex;
                    text-align: center; 
                    align-items: center;
                    justify-content: center;
                    &:hover{
                        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
                        cursor: pointer;
                    }
                `;

            collections = 
                <Aux>
                    <Primary to={"/collection/"+this.props.HCollections[0].url} backgroundimage={require('../../../assets/collections/'+this.props.HCollections[0].id+'.jpg')} >{this.props.HCollections[0].name}</Primary>
                    <Secondary>
                        <SecondaryItem to={"/collection/"+this.props.HCollections[1].url} backgroundimage={require('../../../assets/collections/'+this.props.HCollections[1].id+'.jpg')} >{this.props.HCollections[1].name}</SecondaryItem>
                        <SecondaryItem to={"/collection/"+this.props.HCollections[2].url} backgroundimage={require('../../../assets/collections/'+this.props.HCollections[2].id+'.jpg')} >{this.props.HCollections[2].name}</SecondaryItem>
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







