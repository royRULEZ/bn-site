//======================================================================================================================
// Class: History Chart
//======================================================================================================================
// Description:
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from '../../../components/spinner/spinner';
import Template from './blank';
import Chart from '../../../components/charts/recentHistory';

import { connect } from 'react-redux';
import { fetchRecentHistory } from '../../../store/actions/index';

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

    componentDidMount () {
        this.props.onFetchRecentHistory(this.props.name);
    }


    render () {
        
        let data = [];
        let dataObj = {};
        let dMax = 0;
        let girlColor = "rgba(213, 97, 127, 0.8)";
        let boyColor = "rgba(74, 127, 152, 0.8)";
        let label = "How has '" + this.props.name + "' trended over the last 20 years?";

        let chart = <Spinner/>;
        if(this.props.recentHistory[0]){
        
            if(this.props.recentHistory[0].name === this.props.name){
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
                if(this.props.recentHistory[1].name  === this.props.name){
                    let dataTemp = null;
                    dataTemp = Object.values(this.props.recentHistory[1]);
                    dataTemp = dataTemp.slice(0, -2);
                    dataObj.data = dataTemp;
                    dataObj.gender = this.props.recentHistory[1].gender;
                    dataObj.color = (this.props.recentHistory[1].gender === "F" ? girlColor : boyColor);
                    data.push(dataObj);
                    dataObj = {};
                }
            }
            chart = <Chart gender={this.props.gender} dataset={data} color="#DDD" girlColor={girlColor} boyColor={boyColor}  />;
        }

        return(
            <Template
                label={label}
                big_width="50%"
                tablet_width="100%"
                phone_width="100%"
                phone_height="300px"
                height="300px"
                backgroundColor="#f5f5f5">
                <Container>
                    <Max>Max: {dMax.toLocaleString()}</Max>
                    {chart}
                </Container>
            </Template>
        );
    }
}

const mapStateToProps = state => {
    return {
        recentHistory: state.name.recentHistory,
        loading: state.name.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRecentHistory: (name) => dispatch ( fetchRecentHistory(name) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(RecentHistory);
