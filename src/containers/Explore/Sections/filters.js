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
                color: ${props => props.theme.color_accent} !important;
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
    @media (max-width: ${props => props.theme.phone}) {
        width: 100%;
    }
`;
const FilterObject = styled.div`
    padding: 1rem 0;
    @media (max-width: ${props => props.theme.phone}) {
        width: 50%;
    }
`;
const FilterObject_Popularity = styled.div`
    padding: 1rem 0;
`;
const FilterLabel = styled.div`
    font-size: .625rem;
    font-size: .5rem;
    padding-bottom: .3125rem;
    text-transform: uppercase;
    color: ${props => props.theme.color_accent};
`;
const BtnGroup = styled.div`
    //background-color: #EEE;
    //box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
`;
const GenderBtn = styled.button`
    border: none;
    width: 50%;
    background-color: #EEE
    color: ${props => props.theme.color_accent};
    font-size: 1rem;
    padding: .75rem;
    box-sizing: border-box;
    font-family: inherit;
    font-weight: 300;
    outline: none;
    cursor: pointer;
    &.active{
        background-color: ${props => props.theme.color_accent};
        color: #FFF;
    }
    &:first-child{
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
    }
    &:last-child{
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
    }
`;
const OtherFilters = styled.div`
    margin-top: 2rem;  
    background-color: #EEE;
    box-sizing: border-box;
    padding: 0 1rem;
    @media (max-width: ${props => props.theme.phone}) {
        display: flex;
        flex-direction: row;
    }
`;

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
        const popularities =  ['Popular','Unique','Uncommon','Rare','Obscure','Original','Forgotten'];
        const alphabet =  ['Clear','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        const lengths =  ['Clear','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
    
        return(
            <Main>
                <FilterObject_Popularity>
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
                </FilterObject_Popularity>
                
                <FilterLabel>Gender</FilterLabel>
                <BtnGroup>
                    <GenderBtn name="gender" value="F" onClick={() => this.props.gender("F")} className={this.props.g === "F" ? "active" : ""}>Girl</GenderBtn>
                    <GenderBtn name="gender" value="M" onClick={() => this.props.gender("M")} className={this.props.g === "M" ? "active" : ""}>Boy</GenderBtn>
                    {/*<GenderBtn name="gender" value="U" onClick={() => this.props.gender("U")} className={this.props.g === "U" ? "active" : ""}>Unisex</GenderBtn>*/}
                </BtnGroup>

                
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







