import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = (props) => { 

    let labels = []
    for(var i = 1880; i < 2018; i++){
        labels.push(i);
    }
    
    // TODO Make this color work
    let color = "";
    switch (props.gender) {
        case 'U':
            color = props.boyColor;
            break;
        case 'M':
            color = props.boyColor;
            break;
        case 'F':
            color = props.girlColor;
            break;
      }

    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of occurences',
                fill: true,
                lineTension: 0,

                backgroundColor: color,
                
                borderColor: 'rgba(0,0,0,0)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
    
                pointBorderColor: color,
                pointBackgroundColor: color,
                pointBorderWidth: 4,
                
                pointHoverRadius: 5,
                pointHoverBackgroundColor: color,
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                
                pointRadius: 0,
                pointHitRadius: 10,
                
                data: props.data
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