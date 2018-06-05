//======================================================================================================================
// Class: History Chart
//======================================================================================================================
// Description:
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Template from './blank';
import Chart from '../../../components/charts/recentHistory';

import axios from '../../../global/axios';

//CSS
const Container = styled.div`
    padding: 1rem 0 0 0;
    box-sizing: border-box;
    height 100%;
    position: relative;
`;
const Max = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    color: #999;
    font-size: .75rem;
    padding-bottom: 2px;
`;
// Component
class RecentHistory extends Component {   

    render () {
        
        let data = [];
        let dataObj = {};
        let dMax = null;
        let girlColor = "rgba(213, 97, 127, 0.8)";
        let boyColor = "rgba(74, 127, 152, 0.8)";
        let label = "How has '" + this.props.name + "' trended over the last 20 years?";

        if(this.props.recentHistory[0]){
            let dataTemp = null;
            dataTemp = Object.values(this.props.recentHistory[0]);
            dataTemp = dataTemp.slice(0, -2);
            dataObj.data = dataTemp;
            dataObj.gender = this.props.recentHistory[0].gender;
            dataObj.color = (this.props.recentHistory[0].gender === "M" ? boyColor : girlColor);
            data.push(dataObj);
            dataObj = {};
            dMax = Math.max(...dataTemp);
        }
        if(this.props.recentHistory[1]){
            let dataTemp = null;
            dataTemp = Object.values(this.props.recentHistory[1]);
            dataTemp = dataTemp.slice(0, -2);
            dataObj.data = dataTemp;
            dataObj.gender = this.props.recentHistory[1].gender;
            dataObj.color = (this.props.recentHistory[1].gender === "F" ? girlColor : boyColor);
            data.push(dataObj);
            dataObj = {};
        }

        console.log("Data Array", data);
        //console.log(this.props.recentHistory);
        
        return(
            <Template
                label={label}
                width="50%"
                height="300px"
                backgroundColor="#f5f5f5">
                <Container>
                    <Max>Max: {dMax.toLocaleString()}</Max>
                    <Chart gender={this.props.gender} dataset={data} color="#DDD" girlColor={girlColor} boyColor={boyColor}  />
                </Container>
            </Template>
        );
    }
}

export default RecentHistory;
