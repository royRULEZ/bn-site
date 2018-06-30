//Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';

import { connect } from 'react-redux';
import { fetchRandom } from '../../store/actions/index';

class Instagram extends Component {   

    componentDidMount () {
        this.props.onFetchRandom();
    }

    render () {
        const Main = styled.div`
            width: 400px;
            height: 400px;
            margin: 100px auto;
            background: url('${props => props.backgroundimage}') no-repeat center center; 
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
            @media (min-width: ${props => props.theme.tablet}) {
                width: 600px;
                height: 600px;
            }
        `;
        const Title = styled.div`
            color: #FFF;
            font-size: .6667rem;
            padding-top: 2rem;
            font-weight: 100;
            text-transform: uppercase;
            letter-spacing: .5rem;
            @media (min-width: ${props => props.theme.tablet}) {
                font-size: 1rem;
                letter-spacing: .75rem;
                padding-top: 3rem;
            }
        `;
        const Name = styled.div`
            color: #FFF;
            font-size: 6rem;
            letter-spacing -3px;
            font-family: ${props => props.theme.font_bitter};
            @media (min-width: ${props => props.theme.tablet}) {
                font-size: 9rem;
                letter-spacing -3px;
            }
        `;
        const Website = styled.div`
            color: #FFF;
            font-size: 1.3333rem;
            font-weight: 400;
            padding-bottom: 2rem;
            @media (min-width: ${props => props.theme.tablet}) {
                font-size: 2rem;
                padding-bottom: 3rem;
            }
        `;
        const Text = styled.textarea`
            margin: 100px auto 0 auto;
            width: 400px;
            display: block;
        `;

        const text_1 = "Name of the day: "+this.props.randomName.name+"\r" +
            "MEANING\r" +
            "Follow us for unique and uncommon baby names each day!\r\r" +
            "@babynamr #"+this.props.randomName.name+"\r"
        ;
        const text_2 = "#babynames #mom #babyfever #baby #babynamesuggestion #beautiful #girl #boy #itsagirl #itsaboy #child #children #childrens #cute #family #gorgeous #happy #kid #kids #mymid #myfamily #babyshower #babygirl #babyboy";
        return (
            <Aux>
                <Main backgroundimage={"/images/square/"+(Math.floor(Math.random() * 6) + 1)+".jpg"}>
                    <Title>Name of the Day</Title>
                    <Name>{this.props.randomName.name}</Name>
                    <Website>@BabyNamr  |  www.babynamr.com</Website>
                </Main>
                <Text rows="10" defaultValue={text_1}></Text>
                <Text rows="10" defaultValue={text_2}></Text>
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