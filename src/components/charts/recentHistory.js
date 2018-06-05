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
            
            pointRadius: 1,
            pointHitRadius: 10,
            
            data: props.dataset[i].data
        }
        dataArr.push(dataTmpObj);
        dataTmpObj = {};
    }
   
    console.log("ASDF", dataArr);
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

    console.log("PROPS BYE", props);

    return (
        <Line data={data} options={options} />
    ); 
}

export default LineChart;