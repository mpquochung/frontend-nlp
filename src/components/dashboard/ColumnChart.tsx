import React,{ useState, useEffect }  from "react";
import dynamic from "next/dynamic";
import theme from "@material-tailwind/react/theme";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ColumnChartProps {
  data: any; 
  title: string;
}



export default function ColumnChart({data, title}: ColumnChartProps) {
  let sampledata = {
    series: data,
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
  dataLabels:{
    enabled:false,
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
        hideOverflowingLabels: true,
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
    categories:['Spam','News','Education','Others','Service','Jobs','Personal','Social','Sharing','Events'],
  
  },

  colors: ['#779CAB', '#A2E8DD', '#5D4E6D', '#FF5964'],

  legend: {
    // position: 'right',
    offsetY: 40,
    colors: ['#fff']
  },
  fill: {
    opacity: 1
  }}
  };
    return(
        <div className="w-full h-full max-w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
            {/* <div className="flex justify-between items-center w-full"> */}
                <div className="font-bold text-xl  xl:text-2xl mb-2">{title}</div>
                <Chart className="text-gray-800 dark:text-black" options={sampledata.options}  series={sampledata.series} type="bar"   height={350} />
            {/* </div> */}
        </div>
    )

}