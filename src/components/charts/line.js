import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = (props) => { 


    /*

    <line-chart :chart-data="GoogleChart_data" :options="{responsive: true, maintainAspectRatio: false, legend: { display: false }, scales:{yAxes:[{ticks:{suggestedMax:100,suggestedMin:0}}], xAxes:[{display:true, gridLines: {display: false}}]}}"></line-chart>
    var options = { 
    responsive: true, 
    maintainAspectRatio: false, 
    legend: { display: false },
    scales: { 
        yAxes: [{ 
            display: true,
            gridLines: {
                display: true 
            },
            ticks: {
                display: false
            }
        }], 
        xAxes: [{
            display: true,
            gridLines: {
                display: true 
            },  
        }] 
    } 
    this.History_data = {labels: years,"datasets":[{"label": "Boys ", "backgroundColor":"rgba(74,124,152,.9)", "borderColor": "rgba(0,0,0,0)","data":boyHistory},{"label": "Girls ", "backgroundColor":"rgba(213,97,127,.9)", "borderColor": "rgba(0,0,0,0)","data":girlHistory}]};
};


    */

    const data = {
        labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007'],
        datasets: [
            {
                label: '# of occurences',
                fill: false,
                lineTension: 0.1,

                backgroundColor: props.lineColor,
                
                borderColor: props.lineColor,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
    
                pointBorderColor: props.lineColor,
                pointBackgroundColor: props.lineColor,
                pointBorderWidth: 1,
                
                pointHoverRadius: 5,
                pointHoverBackgroundColor: props.lineColor,
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                
                pointRadius: 1,
                pointHitRadius: 10,
                
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ],
    };
    const options = {
        responsive: true, 
        maintainAspectRatio: false, 
        legend: {
            display: false,
        },
        scales: { 
            yAxes: [{ 
                gridLines: {
                    color: props.color,
                    drawTicks: false,
                    drawBorder: false,
                    zeroLineColor: props.color
                }, 
                ticks: { 
                    padding: 10,
                    fontColor: props.color,
                    display: false
                } 
            }], 
            xAxes: [{
                gridLines: {
                    color: props.color,
                    drawTicks: false,
                },                
                ticks: { 
                    padding: 10,
                    fontColor: '#7d7bc5'
                }
            }] 
        }  
    };

    return (
        <Line data={data} options={options} />
    ); 
}

export default LineChart;