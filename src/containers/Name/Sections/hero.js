//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import LineChart from '../../../components/charts/line';

import bck_img from '../../../assets/hero_bck.jpg';


//CSS
const Main = styled.div`
    display: flex;
`;
const HeroNames = styled.div`
    width: 50%;
    height: 550px;
    padding: 100px;
    box-sizing: border-box;
    background-color: #c3c2e4;
    .SectionTitle{
        font-weight: 100;
        font-size: .66rem;
        color: #8887ca;
        text-transform: uppercase;
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
`;
// 9493CF, c3c2e4 - Purple
// 6DC5A6, 83CCB2 - Green
const HeroMenu = styled.div`
    width: 50%;
    height: 550px;
    padding: 100px;
    box-sizing: border-box;
    background-color: #9493CF;
        /*131, 204, 178
        background: 
            linear-gradient(
                rgba(0, 0, 0, 0.45), 
                rgba(0, 0, 0, 0.45)
            ),
            url(${bck_img});
        background-repeat: no-repeat;
        background-size: cover;
        */
    .Title{
        color: #FFF;
        font-size: 4rem;
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
        .Circle{
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
            &.Boy{
                color: ${props => props.theme.color_boy};
            }
            &.Girl{
                color: ${props => props.theme.color_girl};
            }
            &.Unisex{
                color: #a19587
            }
        }
    }
`;
// Component
class Hero extends Component {   

    render () {
        return(
            <Main>
                <HeroNames>
                    <div className="SectionTitle">Random Name</div>
                    <div className="Name">Adalyn</div>
                    <div className="Graph">
                        <LineChart color="#a09fd4" lineColor="#FFFFFF"  />
                    </div>
                    <div className="Info">
                        <div>
                            Popularity:
                            2,176 baby girls were named Adalyn last year.
                        </div>
                        <div>
                            Google Trends:
                            Catwoman: Fictional character, 
                            Selina Jen: Taiwanese singer
                        </div>
                    </div>

                </HeroNames>
                <HeroMenu>
                    <div className="Title">BabyNamr</div>
                    <div className="Description">
                        A different kind of baby name site. Through data we help you discover, find and explore unique and uncommon names for your child.
                    </div>
                    <div className="Circles">
                        <div className="Circle Boy">Boy</div>
                        <div className="Circle Girl">Girl</div>
                        <div className="Circle Unisex">Uni</div>
                    </div>

                </HeroMenu>
            </Main>
        );
    }
}

export default Hero;







