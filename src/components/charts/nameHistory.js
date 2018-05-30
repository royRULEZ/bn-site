import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = (props) => { 

    const data = {
        labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        datasets: [
            {
                label: '# of occurences',
                fill: true,
                lineTension: 0.3,

                backgroundColor: props.girlColor,
                
                borderColor: 'rgba(0,0,0,0)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
    
                pointBorderColor: props.girlColor,
                pointBackgroundColor: props.girlColor,
                pointBorderWidth: 4,
                
                pointHoverRadius: 5,
                pointHoverBackgroundColor: props.girlColor,
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                
                pointRadius: 1,
                pointHitRadius: 10,
                
                data: [65, 59, 80, 81, 56, 55, 40, 37, 32, 14, 20]
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
                    drawTicks: true,
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
                    drawTicks: true,
                },                
                ticks: { 
                    padding: 10,
                    fontColor: '#999'
                }
            }] 
        }  
    };

    return (
        <Line data={data} options={options} />
    ); 
}

export default LineChart;