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
class GoogleChart extends Component {   

    render () {
        const label = "Google searches for '"+ this.props.name +"'";

        return(
            <Template
                label={label}
                width="100%">
                <Container>
                    <Chart color="#DDD" girlColor="rgba(136,135,202,0.9)"  />
                </Container>
            </Template>
        );
    }
}

export default GoogleChart;
