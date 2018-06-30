//Imports
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

import RecentHistory from './Infographic/history';
import MFChart from '../../components/charts/infographic_mf';
import Aux from '../../hoc/Aux';

import { connect } from 'react-redux';
import { fetchRandom } from '../../store/actions/index';

const Main = styled.div`
    width: 414px;
    height: 720px;
    //border-top: 10px solid #000;
    //border-bottom: 10px solid #000;
    margin: 50px auto;
    background-color: #EEE
    position: relative;
    padding: 0;
    box-sizing: border-box;
`;
const Title = styled.div`
    text-align: center;
    font-size: .5rem;
    letter-spacing: .5rem;
    padding-top: 1rem;
`;
const Name = styled.div`
    padding: 1rem 0;        
    text-align: center;
    font-family: ${props => props.theme.font_nixie};
    font-size: 3.5rem;
`;
const Axis = styled.div`
    font-size: .5rem;
    padding: .5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .des{
        color: #999;
    }
`;
const Ever = styled.div`
    padding-top: .5rem;
    text-align: center;
    .num{
        font-size: 1.5rem;
    }
    .des{
        font-size: .625rem;
    }
`;
const Numbers = styled.div`
    margin-top: 1rem;    
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
    border-left: .25rem solid #EEE;
    border-right: .25rem solid #EEE;
    text-align: center;
    div{
        width: 25%;
        padding: 1.5rem 1rem 1rem 1rem;
        background-color: rgba(255,255,255,0.5);
        border-right: .25rem solid #EEE;
        box-sizing: border-box;
        &:last-child{
            border-right: 0;
        }
        &.rank{
            font-size: 1.5rem;
            font-weight: 300;
            span{
                padding-top: 0;
                display: block;
                line-height: .75rem;
                font-size: .625rem;
                font-weight: 100;
            }
        }
        &.gender{
            padding: 1rem;
        }
    }
`;
const Footer = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 400;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-bottom: 1rem;
`;


class Instagram extends Component {   

    componentDidMount () {
        this.props.onFetchRandom();
        window.scroll(0,140);
    }

    render () {
        
        let infographic = "";
        //{this.props.randomName.name}
        console.log(this.props.randomName);
        if(this.props.randomName.name){
            infographic = 
            <Main>
                <Title>ALL ABOUT THE NAME</Title>
                <Name>{this.props.randomName.name}</Name>
                <RecentHistory name="Skyler" gender={this.props.randomName.gender} />
                <Axis>
                    <div>1997</div>
                    <div className="des">Last 20 years</div>
                    <div>2017</div>
                </Axis>
                <Ever>
                    <div className="num">60,464</div>
                    <div className="des">Babies named {this.props.randomName.name} since 1880</div>
                </Ever>
                <Numbers>
                    <div className="rank">
                        #243
                        <span>most common last year</span>
                    </div>
                    <div className="gender">
                        <MFChart />
                    </div>
                    <div>3</div>
                    <div>4</div>
                </Numbers>

                <Footer>www.babynamr.com</Footer>
            </Main>
        ;
        }

        return (
            <Aux>
                <Helmet>
                    <title>Infographic</title>
                </Helmet>
                {infographic}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        randomName: state.home.randomName,
        loading: state.home.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRandom: () => dispatch ( fetchRandom() ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Instagram);