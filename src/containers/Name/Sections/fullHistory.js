//======================================================================================================================
// Class: Full History Chart
//======================================================================================================================
// Description:
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Template from './blank';
import Chart from '../../../components/charts/fullHistory';

import axios from '../../../global/axios';

//CSS
const Container = styled.div`
    padding: 1rem 0 0 0;
    box-sizing: border-box;
    height: 100%;
    position: relative;
`;
const Max = styled.div`
    position: absolute;
    color: #999;
    font-size: .75rem;
`;
// Component
class RecentHistory extends Component {   

    render () {
        
        /*
        let data1 = [];
        let d1Max = null;
        let data2 = [];
        let girlColor = "rgba(213, 97, 127, 0.9)";
        let boyColor = "rgba(74, 127, 152, 0.9)";
        let label = "How has '" + this.props.name + "' trended since the year 1880?";

        if(this.props.gender != "U"){
            data1 = Object.values(this.props.history[0]);
            data1 = data1.slice(0, -3);
            d1Max = Math.max(...data1);
        }
        */

        let data = [];
        let dataObj = {};
        let dMax = 0;
        const girlColor = "rgba(213, 97, 127, 0.8)";
        const boyColor = "rgba(74, 127, 152, 0.8)";
        const label = "How has '" + this.props.name + "' trended since the year 1880?";

        if(this.props.history[0]){
            let dataTemp = null;
            dataTemp = Object.values(this.props.history[0]);
            dataTemp = dataTemp.slice(0, -6);
            dataObj.data = dataTemp;
            dataObj.gender = this.props.history[0].gender;
            dataObj.color = (this.props.history[0].gender === "M" ? boyColor : girlColor);
            data.push(dataObj);
            dataObj = {};
            dMax = Math.max(...dataTemp);
            
        }
        if(this.props.history[1]){
            let dataTemp = null;
            dataTemp = Object.values(this.props.history[1]);
            dataTemp = dataTemp.slice(0, -6);
            dataObj.data = dataTemp;
            dataObj.gender = this.props.history[1].gender;
            dataObj.color = (this.props.history[1].gender === "F" ? girlColor : boyColor);
            data.push(dataObj);
            dataObj = {};
        }
        
        return(
            <Template
                label={label}
                width="100%"
                height="450px"
                backgroundColor="#FFFFFF">
                <Container>
                    <Max>(Max: {dMax})</Max>
                    <Chart gender={this.props.gender} dataset={data} color="#f6f6f6" girlColor={girlColor} boyColor={boyColor}  />
                </Container>
            </Template>
        );
    }
}

export default RecentHistory;
