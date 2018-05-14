//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { fetchNames } from '../../../store/actions/index';

import styled from 'styled-components';

// CSS
const Main = styled.div`
    border-top: 1px solid #EEE;
    width: 1024px;
    max-width 90%;
    margin: 2rem auto;
    display: flex;
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
`;
const Collections = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Collection = styled.div`
    margin-top: 1%;
    width: 32.6666%;
    margin-right:1%;
    float: left;
    background-color: #333;
    &:nth-child(3n+1){
        margin-right:0;
    }
`;


// Component
class collections extends Component {   

    componentDidMount () {
        //this.props.onFetchNames();
    }

    render () {
        
        let collections = <div>Something went terribly wrong!</div>;
        /*
        if ( !this.props.loading ) {
            gns = this.props.girlNames20.map( gn => (
                <Name className="girl" key={gn.name}>{gn.name}</Name>
            ) )
        }
        */
        return (
            <Main>
                <h2>Fresh Collections</h2>
                <Collections>
                    {collections}
                </Collections>
            </Main>
        );
    }
}

/*
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
*/
export default collections;

/*

    padding: 25px;   
    .collection{
        margin-top: 1%;
        width: 32.6666%;
        margin-right:1%;
        float: left;
        background-color: #FFF;
        &:nth-child(3n+1){
            margin-right:0;
        }
        .collection-picture{
            width:100%;
            height: 200px;
            text-align: left;
            color: $color-white;
            text-transform: capitalize;
            font-weight: 900;
            font-size: 28px;
            line-height: 28px;
            background: #EEE url('assets/images/collections/winter.jpg');
            background-position: center;
            background-size: cover;
            //display: table-cell;
            vertical-align: middle;
            box-sizing: border-box;
            padding: 50px 25px 25px 25px;
            transition: .3s cubic-bezier(.25,.8,.5,1);
            &:hover{
                box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
                cursor: pointer;
            } 
            .collection-names{
                text-align: left;
                font-size: 14px;
                padding: 25px 5px 0 0;
                font-weight: 700;
                span::after{
                    content: ','
                }
                span:last-child::after{
                    content: ''
                }                
            }
        }
        .collection-link{
            padding:3px 0 20px 0;
            text-align: center;
            button{
                background-color: $color-uni;
                color: $color-white;
                text-transform: capitalize;
                font-weight: 600;
            }
        }
    }



        <!-- Collections -->
        <div id="link_row-collections" class="link-row clearfix">
            <div class="link_row-title">Fresh Collections</div>            
            <!-- Collection -->
            <div v-for="collection in collections" class="collection">
                <div class="collection-picture" :style="{ backgroundImage: `url('/static/images/collections/winter.jpg')` }">
                    Winter
                    <div class="collection-names clearfix">
                        <span>Christopher</span>
                        <span>Scott</span>
                        <span>Steve</span>
                        <span>...</span>
                    </div>  
                </div>
            </div> 
        </div>
        <!-- /Collections -->   
*/