import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = (props) => { 

    let labels = []
    for(var i = 1880; i < 2018; i++){
        labels.push(i);
    }
    
    let dataArr = [];
    let dataTmpObj = {};
    for (var i = 0, len = props.dataset.length; i < len; i++) {
        dataTmpObj = {
            label: '# of occurences',
            fill: true,
            lineTension: 0,

            backgroundColor: props.dataset[i].color,
            
            borderColor: 'rgba(0,0,0,0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',

            pointBorderColor: props.dataset[i].color,
            pointBackgroundColor: props.dataset[i].color,
            pointBorderWidth: 4,
            
            pointHoverRadius: 5,
            pointHoverBackgroundColor: props.dataset[i].color,
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            
            pointRadius: 0,
            pointHitRadius: 10,
            
            data: props.dataset[i].data

        }
        dataArr.push(dataTmpObj);
        dataTmpObj = {};
    }
   
    const data = {
        labels: labels,
        datasets: dataArr,
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