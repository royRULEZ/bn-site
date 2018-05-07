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


/*

.link-row{
    @include standard_size(50px, 25px, $max_width: 1024px);
    border-top: 1px solid $color-lines;
    .link_row-title{
        width: 100%;
        font-size: 18px;
        padding: 10px 0;
        font-family: $Nixie;
        font-weight: 900;
        color: $color-text;
    } 
}
.random_names{
    width:50%;
    float:left;
    padding: 25px;
    box-sizing: border-box;
    .name{
        width: 25%;
        float: left;
        padding: 5px 0;
        a{
            text-decoration: underline;
            color: $color-links;
        }
        &.boy{
            a{
                color: darken($color-boy, 15%);
            }
        }
        &.girl{
            a{
                color: darken($color-girl, 15%);
            }
        }            
    }
}

<div id="link_row-names" class="link-row clearfix">
<div class="random_names clearfix">
    <div class="link_row-title">20 Unique Boy Names</div>
    <div class="name boy" v-for="b_name in boy_names_20" :key="b_name">
        <router-link :to="`/name?n=${b_name.name}`">{{b_name.name}}</router-link>
    </div>
</div>
<div class="random_names clearfix">
    <div class="link_row-title">20 Unique Girl Names</div>
    <div class="name girl" v-for="g_name in girl_names_20" :key="g_name">
        <router-link :to="`/name?n=${g_name.name}`">{{g_name.name}}</router-link>
    </div>
</div>            
</div>
*/