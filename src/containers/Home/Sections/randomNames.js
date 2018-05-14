//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNames } from '../../../store/actions/index';

import styled from 'styled-components';

// CSS
const Main = styled.div`
    border-top: 1px solid #EEE;
    width: 1024px;
    max-width 90%;
    margin: 2rem auto;
    display: flex;
`;
const NamesContainer = styled.div`
    padding: 2rem;
    box-sizing: border-box;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    h2{
        display: block;
        width: 100%;
        font-size: 1.25rem;
        padding: 0;
        margin: .75rem 0;
        font-family: ${props => props.theme.font_nixie};
        font-weight: 900;
    }
`;

const Name = styled.div`
    width: 25%;
    padding: .5rem 0;
    text-decoration: underline;
    a{
        text-decoration: underline; 
    }
    &.girl{
        color: ${props => props.theme.color_girl};
    }
    &.boy{
        color: ${props => props.theme.color_boy};
    }
`;


// Component
class randomNames extends Component {   

    componentDidMount () {
        this.props.onFetchNames();
    }

    render () {
        let gns = <p>Something went terribly wrong!</p>;
        let bns = <p>Something went terribly wrong!</p>;
        if ( !this.props.loading ) {
            gns = this.props.girlNames20.map( gn => (
                <Name className="girl" key={gn.name}>{gn.name}</Name>
            ) )
        }
        if ( !this.props.loading ) {
            bns = this.props.girlNames20.map( bn => (
                <Name className="boy" key={bn.name}>{bn.name}</Name>
            ) )
        }
        return (
            <Main>
                <NamesContainer>
                    <h2>20 Unique Girl Names</h2>
                    {gns}
                </NamesContainer>
                <NamesContainer>
                    <h2>20 Unique Boy Names</h2>
                    {bns}
                </NamesContainer>
            </Main>
        );
    }
}

const mapStateToProps = state => {
    return {
        girlNames20: state.home.girlNames20,
        boyNames20: state.home.boyNames20,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchNames: () => dispatch( fetchNames() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(randomNames);
