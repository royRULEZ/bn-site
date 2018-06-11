//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';


//CSS
const Main = styled.div`
    width: 25%;
    height: 300px;
    padding: .25rem;
    box-sizing: border-box;
`;

const Label = styled.h2`
    margin: 0;
    font-size: .625rem;
    font-weight: 100;
    color: #FFF;
`;



// Component
class Rank extends Component {   

    render () {

        const Inner = styled.div`
            background-color: ${props => props.theme.color_girl};
            background-color: ${this.props.gender === "M" ? props => props.theme.color_boy : props => props.theme.color_girl};
            color: #FFF;
            width: 100%;
            height 100%;
            padding: .5rem;
            box-sizing: border-box;
            .r_rank{
                padding-top: 1.5rem;
                text-align: center;
                font-size: 4rem;
                font-weight: 900;
                div{
                    font-size: .75rem;
                    position: relative;
                    bottom: 5px;
                    font-weight: 100;
                }
            }
            .r_number{
                padding: 1rem 2rem; 
                font-size: .875rem;
                text-align: center;
                display: flex;
                justify-content: center;
                .r_num{
                    width: 50%;
                    font-size: 1.5rem;
                    div{
                        font-size: .75rem;
                    }
                    
                }
            }
            .r_sum{
                padding: 0rem 2rem; 
                font-size: .875rem;
                text-align: center;
                display: flex;
                justify-content: center;
                .r_num{
                    width: 100%;
                    font-size: 1.5rem;
                    div{
                        font-size: .75rem;
                    }
                    
                }
            }
        `;


        let occurrences = null;
        occurrences = this.props.occurrences.map( o => (
            <div key={o.Gender} className="r_num">
                {o.Occurrences.toLocaleString()}
                <div>{o.Gender}s last year</div>
            </div>
        ));

        let sum = null;
        sum = (
            <div className="r_num">
                {this.props.sum.toLocaleString()}
                <div>Babies named {this.props.name} since 1880</div>
            </div>
        );

        return(
            <Main>
                <Inner>
                    <Label>How unique is '{this.props.name}'?</Label>
                    <div className="r_rank">
                        #{this.props.rank.toLocaleString()}
                        <div>on our list of most common names from last year</div>
                    </div>
                    <div className="r_number">
                        {occurrences}
                    </div>
                    <div className="r_sum">
                        {sum}
                    </div>
                </Inner>
            </Main>
        );
    }
}

export default Rank;







