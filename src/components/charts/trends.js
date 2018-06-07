import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = (props) => { 
    
    const data = {
        labels: props.datalabels,
        datasets: [
          {
            label: '% search interest',
            fill: true,
            lineTension: 0,
    
            backgroundColor: 'rgba(0,0,0,0)',
            
            borderColor: props.chartcolor,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
    
            pointBorderColor: props.chartcolor,
            pointBackgroundColor: props.chartcolor,
            pointBorderWidth: 4,
            
            pointHoverRadius: 5,
            pointHoverBackgroundColor: props.chartcolor,
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            
            pointRadius: 0,
            pointHitRadius: 10,
            
            data: props.dataset
          }
        ]
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
                    display: false
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