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
import { fetchRandom } from '../../../store/actions/index';

import LineChart from '../../../components/charts/random';

import bck_img from '../../../assets/hero_bck.jpg';


//CSS
const Main = styled.div`
    display: flex;
    @media (max-width: ${props => props.theme.phone}) {
        flex-direction: column;
    }
`;
const HeroNames = styled.div`
    width: 100%;
    order: 1;
    padding: 1rem;
    height: auto;
    text-align: center;
    box-sizing: border-box;
    background-color: #c3c2e4;
    .Name{
        font-size: 2.5rem;
        padding: 0 0 .75rem 0;
        font-family: ${props => props.theme.font_nixie};
        color: #8887ca;
    }
    .Graph{
        width: 100%;
        height: 150px;
    }
    .SectionTitle{
        font-size: .5rem;
        font-weight: 500;
        color: #8887ca;
    }
    .Info{
        padding-top:1rem;
        font-size: .75rem;
        color: #7d7bc5;
    }  
    @media (min-width: ${props => props.theme.tablet}) {
        order: 0;
        width: 40%;
        padding: 2rem;
        text-align: left;
        .SectionTitle{
            font-size: .75rem;
        }
        .Name{
            padding: 1rem 0;
        }

    }
    @media (min-width: ${props => props.theme.big}) {
        height: 550px;
        padding: 6.5rem 7rem;
        .Graph{
            width: 400px;
            height: 200px;
        }
        .Name{
            font-size: 4rem;
            padding: 1rem 0;
        }
    }
`;
// 9493CF, c3c2e4 - Purple
// 6DC5A6, 83CCB2 - Green
/*
    width: 40%;
    height: 550px;
    padding: 6.25rem 7rem;
    box-sizing: border-box;
    background-color: #c3c2e4;
    .SectionTitle{
        font-weight: 500;
        font-size: .75rem;
        color: #8887ca;
    }
    .Name{
        font-family: ${props => props.theme.font_nixie};
        font-size: 4rem;
        color: #8887ca;
        padding: 1rem 0;
    }
    .Graph{
        width: 400px;
        height: 200px;
    }
    .Info{
        padding-top:1rem;
        font-size: .75rem;
        color: #7d7bc5;
    }
    order: 0;
    @media (max-width: ${props => props.theme.big}) {
        width: 100%;
        order: 1;
        padding: 1rem;
        height: auto;
        text-align: center;
        .Name{
            font-size: 2.5rem;
            padding: 0 0 .75rem 0;
        }
        .Graph{
            width: 100%;
            height: 150px;
        }
        .SectionTitle{
            font-size: .5rem;
        }
    }
*/
const HeroMenu = styled.div`
    width: 100%;
    order: 0;
    padding: 2rem 1rem;
    height: auto;
    text-align: center;
    box-sizing: border-box;
    background-color: #9493CF;  
    .Title{
        font-size: 3rem;
        font-weight: 900;
        letter-spacing: -1px;
        color: #FFF;
    }
    .Description{
        margin-top: 1rem;
        font-weight: 100;
        font-size: 1rem;
        color: #FFF;
    }
    .Circles{
        display: flex;
        justify-content: center;
    }
    @media (min-width: ${props => props.theme.tablet}) {
        width: 60%;
        padding: 2rem;
        order: 1;
        text-align: left;
        .Title{
            font-size: 3rem;
        }
        .Description{
            margin-top: 2rem;
            font-weight: 100;
            font-size: 1.25rem;
        }
        .Circles{
            justify-content: left;
        }
    }   
    @media (min-width: ${props => props.theme.big}) {
        height: 550px;
        padding: 100px;
        .Title{
            font-size: 5rem;
        }
        .Description{
            font-size: 1.5rem;
        }
    }
`;
/*
    width: 60%;
    height: 550px;
    padding: 100px;
    box-sizing: border-box;
    background-color: #9493CF;
    .Title{
        color: #FFF;
        font-size: 5rem;
        font-weight: 900;
        letter-spacing: -1px;
    }
    .Description{
        color: #FFF;
        margin-top: 2rem;
        font-weight: 100;
        font-size: 1.5rem;
    }
    .Circles{
        display: flex;
    }
    order: 1;
    @media (max-width: ${props => props.theme.big}) {
        width: 100%;
        order: 0;
        padding: 2rem 1rem;
        height: auto;
        text-align: center;
        .Title{
            font-size: 3rem;
        }
        .Description{
            margin-top: 1rem;
            font-weight: 100;
            font-size: 1rem;
        }
        .Circles{
            display: flex;
            justify-content: center;
        }
    }
*/
const Circle = styled(Link)`
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    width: 100px;
    height: 100px;
    margin-top: 2rem;
    margin-right: 2rem;
    border-radius: 50%;
    text-align: center;
    color: #FFF;
    font-weight: 400;
    font-size: 18px;
    line-height: 100px;
    cursor: pointer;
    background-color: #FFF;  
    color: #6DC5A6;   
    text-decoration: none;
    &.Boy{
        color: ${props => props.theme.color_boy};
    }
    &.Girl{
        color: ${props => props.theme.color_girl};
    }
    &.Unisex{
        color: #a19587
    }
    &:hover{
        box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
    }
    @media (max-width: ${props => props.theme.tablet}) {
        &:last-child{
            margin-right: 0;
        }
    }
`;
const MoreInfo = styled(Link)`
    color: inherit;
    @media (max-width: ${props => props.theme.tablet}) {
        display: none
    }
`;
const NameLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;

// Component
class Hero extends Component {   

    componentDidMount () {
        this.props.onFetchRandom();
    }

    render () {

        return(
            
            <Main>
                <HeroNames>
                    <div className="SectionTitle">Random Name</div>
                    <div className="Name"><NameLink to={"/name/"+this.props.randomName.name}>{this.props.randomName.name}</NameLink></div>
                    <div className="Graph">
                        <LineChart data={this.props.randomName} color="#a09fd4" lineColor="#FFFFFF"  />
                    </div>
                    <div className="Info">
                        <div>
                            Popularity: {this.props.randomName['2017'] ? this.props.randomName['2017'].toLocaleString() : ""} babies named {this.props.randomName.name} last year.
                            <div><MoreInfo to={"/name/"+this.props.randomName.name}>Learn more about the name '{this.props.randomName.name}'</MoreInfo></div>
                        </div>
                    </div>

                </HeroNames>
                <HeroMenu>
                    <div className="Title">BabyNamr</div>
                    <div className="Description">
                        A different kind of baby name site. Through data we help you discover, find and explore unique and uncommon names for your child.
                    </div>
                    <div className="Circles">
                        <Circle to={{ pathname: '/explore', direct: { routeGender: "F" }}} className="Girl">Girl</Circle>
                        <Circle to={{ pathname: '/explore', direct: { routeGender: "M" }}} className="Boy">Boy</Circle>
                        {/*<Circle to={{ pathname: '/explore', state: { routeGender: "U" }}} className="Unisex">Unisex</Circle>*/}
                    </div>

                </HeroMenu>
            </Main>
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

export default connect( mapStateToProps, mapDispatchToProps )(Hero);







