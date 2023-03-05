import Chart from "react-apexcharts";
import "./setup.css";
import {score} from "./Quiz"

function Pentagon() {
  var options = {
    series: [{
    name: 'Series 1',
    data: score,
  }],
  xaxis: {
    categories: ['Power', 'Speed', 'Stamina', 'IQ', 'EQ'],
    labels: {
      style: {
          colors: ['#000000','#000000','#000000','#000000','#000000'],
          fontSize: '20px',
          fontWeight: 'bold',
      }
    },
  },
  fill: {
    colors:['#FF0000']
  },
  stroke:{
    colors:['#FF0000'],
    width:2
  },
  markers: {
    colors:['#FF0000']
 },
 width:600,
 height:600,
 responsive: [{
  breakpoint: 480,
  options: {
    width:100,
    height:100
  },
}]
  };

  return (
      <Chart
        options={options}
        series={options.series}
        type="radar"
        width={options.width}
        height={options.height}
        style={{float:"left"}}></Chart>
  );
}

export default Pentagon;
