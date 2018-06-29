import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = (props) => { 

    let dataArr = [];
    let dataTmpObj = {};
    for (var i = 0, len = props.dataset.length; i < len; i++) {
        dataTmpObj = {
            label: '# of occurences',
            fill: true,
            lineTension: 0.3,

            backgroundColor: props.dataset[i].color,
            
            borderColor: props.dataset[i].color,
            borderWidth: "1px",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',

            pointBorderColor: 'rgba(0,0,0,0)',
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderWidth: 0,
            
            pointRadius: 0,
            pointHitRadius: 0,
            
            data: props.dataset[i].data
        }
        dataArr.push(dataTmpObj);
        dataTmpObj = {};
    }
   
    const data = {
        labels: ['1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
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
                    display: true,
                    color: '#e0e0e0',
                    drawTicks: false,
                    drawBorder: false,
                    zeroLineColor: props.color
                }, 
                ticks: { 
                    display: false,
                    padding: 10,
                    fontColor: props.color,
                } 
            }], 
            xAxes: [{
                gridLines: {
                    display: true,
                    color: '#e0e0e0',
                    drawTicks: false,
                },                
                ticks: { 
                    display: false,
                    padding: 10,
                    fontColor: '#BBB'
                }
            }] 
        }  
    };

    return (
        <Line data={data} options={options} />
    ); 
}

export default LineChart;