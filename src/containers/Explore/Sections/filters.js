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
`;
const FilterContainer = styled.div`
    width: 100%;
    border-bottom:1px solid #444;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #EEE;
    margin-bottom: 5px;
`;
const FilterLabel = styled.div`
    font-size: .625rem;
    padding-bottom: .3125rem;
    text-transform: uppercase;
`;


class Filters extends Component {   

    createOptions = (arr) => {
        const arrOpts = [];
        arr.forEach(function(item, index, array) {
            arrOpts.push({
                value: item,
                label: item
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
                <FilterLabel>Popularity</FilterLabel>
                <Select
                    clearable={false}
                    searchable={false}
                    name="popularity"
                    value={this.props.p}
                    onChange={this.props.popularity}
                    options={this.createOptions(popularities)}
                />
                <FilterLabel>Gender</FilterLabel>
                <button name="gender" value="M" onClick={() => this.props.gender("M")}>Male</button>
                <button name="gender" value="M" onClick={() => this.props.gender("F")}>Female</button>
                {this.props.g}

                <FilterLabel>A-Z</FilterLabel>
                <Select
                    clearable={false}
                    searchable={false}
                    name="alpha"
                    value={this.props.a}
                    onChange={this.props.alpha}
                    options={this.createOptions(alphabet)}
                />

                <FilterLabel>Length</FilterLabel>
                <Select
                    clearable={false}
                    searchable={false}
                    name="length"
                    value={this.props.l}
                    onChange={this.props.length}
                    options={this.createOptions(lengths)}
                />

            </Main>
        );
    }
}

export default Filters;







