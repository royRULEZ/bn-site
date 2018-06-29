import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const DoughtnutChart = (props) => { 

    const data = {
        labels: ['M', 'F'],
        datasets: [{
            backgroundColor: [ "rgba(74, 127, 152, 0.4)", "rgba(213, 97, 127, 0.4)"],
            borderWidth: 1,
            data: [10, 20]
        }],
    };

    const options = {
        responsive: true, 
        maintainAspectRatio: false, 
        legend: {
            display: false,
        }
    };

    return (
        <Doughnut data={data} options={options} />
    ); 
}

export default DoughtnutChart;