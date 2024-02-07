import React,{ useState, useEffect }  from "react";
import dynamic from "next/dynamic";
import theme from "@material-tailwind/react/theme";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ColumnChartProps {
  data: any; 
  title: string;
}

let sampledata = {
    series: [{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27]
  }, {
    name: 'PRODUCT C',
    data: [11, 17, 15, 15, 21, 14]
  }, {
    name: 'PRODUCT D',
    data: [21, 7, 25, 13, 22, 8]
  }],
  options:{
    chart: {
    // type: 'bar',
    
    height: 400,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
//   theme:{mode: 'dark'},
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 2,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 800,
            
           
          }
        }
      },
    //   theme: {
    //     mode:'dark'
    //   }
    },
  },
  
  xaxis: {
    // type: 'datetime',
    categories:['1','2','3','4','5','6'],
  
  },
  legend: {
    // position: 'right',
    offsetY: 40,
    colors: ['#fff']
  },
  fill: {
    opacity: 1
  }}
  };

export default function ColumnChart({data, title}: ColumnChartProps) {
    return(
        <div className="w-full h-full max-w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
            {/* <div className="flex justify-between items-center w-full"> */}
                <div className="font-bold text-xl  xl:text-2xl mb-2">{title}</div>
                <Chart className="text-gray-800 dark:text-black" options={sampledata.options}  series={sampledata.series} type="bar"   height={350} />
            {/* </div> */}
        </div>
    )

}