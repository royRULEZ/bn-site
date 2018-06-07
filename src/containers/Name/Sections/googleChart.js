//======================================================================================================================
// Class: History Chart
//======================================================================================================================
// Description:
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { fetchTrends } from '../../../store/actions/index';

import Template from './blank';
import Chart from '../../../components/charts/trends';

//CSS
const Container = styled.div`
    padding: 1rem;
    box-sizing: border-box;
    height: 100%;
`;
// Component
class GoogleChart extends Component {   

    componentDidMount () {
        this.props.onFetchTrends(this.props.name);
    }

    render () {
        
        let chart = "Loading...";
        if(this.props.trends[0]){
            const girlColor = "rgba(213, 97, 127, 0.8)";
            const boyColor = "rgba(74, 127, 152, 0.8)";
        
            let data_obj = [];
            let data_labels = [];
            const google_data = this.props.trends;
            for(var i = 0; i < google_data.length; i++){
                data_obj.push(google_data[i].value[0]);
                data_labels.push(google_data[i].formattedTime);
            }

            chart = <Chart dataset={data_obj} datalabels={data_labels} color="#DDD" chartcolor="#999"  />;

        }

        const label = "Google searches for '"+ this.props.name +"' since 2004";
        return(
            <Template
                label={label}
                width="100%"
                height="400px">
                <Container>
                    {chart}
                </Container>
            </Template>
        );
    }
}

const mapStateToProps = state => {
    return {
        trends: state.name.trends,
        loading: state.name.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTrends: (name) => dispatch ( fetchTrends(name) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(GoogleChart);
