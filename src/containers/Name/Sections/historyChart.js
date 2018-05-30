//======================================================================================================================
// Class: History Chart
//======================================================================================================================
// Description:
//======================================================================================================================

// Imports
import React, { Component } from 'react';
import styled from 'styled-components';

import Template from './blank';
import Chart from '../../../components/charts/nameHistory';

//CSS
const Container = styled.div`
    padding: 1rem;
    box-sizing: border-box;
    height: 100%;
`;
// Component
class HistoryChart extends Component {   

    render () {
        return(
            <Template
                label="How popular is NAME?"
                width="50%"
                backgroundColor="#f5f5f5">
                <Container>
                    <Chart color="#DDD" girlColor="rgba(213, 97, 127, 0.9)"  />
                </Container>
            </Template>
        );
    }
}

export default HistoryChart;
