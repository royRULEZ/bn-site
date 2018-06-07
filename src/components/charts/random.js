import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = (props) => { 

    let dataArr = Object.values(props.data);
    dataArr = dataArr.slice(0, -2);

    const data = {
        labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
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
                
                data: dataArr
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