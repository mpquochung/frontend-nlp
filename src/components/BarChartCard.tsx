import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
interface BarChartCardProps {
  data: any; 
  sentiment: boolean;
}



const BarChartCard: React.FC<BarChartCardProps> = ({ data,sentiment }) => {
  const [dataSample, setDataSample] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 4,
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <div style = {{width:"550px"}} className="max-w-full w-full h-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">

      <div className="font-bold text-xl mb-2">{sentiment ? 'Sentiment' : 'Classification'}</div>
      <hr className="my-2 border-gray-200" /> 
        <Chart
          options={dataSample.options}
          series={dataSample.series}
          type="bar"
          width="500"
        />

    </div>
    
  );
}
export default BarChartCard;