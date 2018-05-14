//======================================================================================================================
// Class: randomGNames
//======================================================================================================================
// Description:
// 20 Random Girl names from the Sever
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

//CSS
const Main = styled.div`
    width: 20%;
    .select-primary{
        .Select-control{
            border: none;
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
            border-radius: 2px;
            height: 42px;
        }
        .Select-arrow-zone{
            .Select-arrow{
                border-color: #FFF transparent transparent;
                border-style: solid;
                border-width: 5px 5px 2.5px;
            }
            &:hover{
                .Select-arrow{
                    border-color: #FFF transparent transparent;
                    border-style: solid;
                    border-width: 5px 5px 2.5px;
                }
            }
        }
        &.is-open{
            .Select-arrow-zone{
                .Select-arrow{
                    border-color: transparent transparent #FFF;
                    border-style: solid;
                    border-width: 2.5px 5px 5px;
                }
            }
        }
        //Options
        .Select-option{
            background-color: #FFF !important;
            padding: .625rem .625rem;
            &:hover{
                color: red !important;
            }
            &.is-selected {
            }
            &.is-focused {
                
            }
            &.is-disabled {
            }
        }
        .Select-menu-outer{
            background-color: red !important;
        }
        .option-primary{
            background-color: ${props => props.theme.color_accent};
            span{
                color: #FFF !important;
            }
        }
        .Select-value {
            line-height: 40px !important;
        }
    }
`;
const FilterObject = styled.div`
    padding: 1rem 0;
`;
const FilterLabel = styled.div`
    font-size: .625rem;
    font-size: .5rem;
    padding-bottom: .3125rem;
    text-transform: uppercase;
    color: ${props => props.theme.color_accent};
`;

const OtherFilters = styled.div`
    margin-top: 2rem;  
    background-color: #EEE;
    box-sizing: border-box;
    padding: 0 1rem;
`;
/*
const FilterContainer = styled.div`
    width: 100%;
    border-bottom:1px solid #444;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #EEE;
    margin-bottom: 5px;
`;
*/

class Filters extends Component {   

    createOptions = (arr) => {
        const arrOpts = [];
        arr.forEach(function(item, index, array) {
            arrOpts.push({
                value: item,
                label: item,
                className:"option-primary"
            })
        });
        return arrOpts;
    }

    render () {

        //Create Options
        const popularities =  ['Popular','Unique','Uncommon','Rare','Obscure','Original'];
        const alphabet =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        const lengths =  ['2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
    
        return(
            <Main>
                <FilterObject>
                    <FilterLabel>Popularity</FilterLabel>
                    <Select
                        clearable={false}
                        searchable={false}
                        name="popularity"
                        value={this.props.p}
                        onChange={this.props.popularity}
                        options={this.createOptions(popularities)}
                        className="select-primary"
                    />
                </FilterObject>
                
                <FilterLabel>Gender</FilterLabel>
                <button name="gender" value="M" onClick={() => this.props.gender("M")}>Male</button>
                <button name="gender" value="M" onClick={() => this.props.gender("F")}>Female</button>
                {this.props.g}

                <OtherFilters>
                    <FilterObject>
                        <FilterLabel>A-Z</FilterLabel>
                        <Select
                            clearable={false}
                            searchable={false}
                            name="alpha"
                            value={this.props.a}
                            onChange={this.props.alpha}
                            options={this.createOptions(alphabet)}
                        />
                    </FilterObject>


                    <FilterObject>
                        <FilterLabel>Length</FilterLabel>
                        <Select
                            clearable={false}
                            searchable={false}
                            name="length"
                            value={this.props.l}
                            onChange={this.props.length}
                            options={this.createOptions(lengths)}
                        />
                    </FilterObject>

                </OtherFilters>

            </Main>
        );
    }
}

export default Filters;







