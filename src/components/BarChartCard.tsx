import React, { useState, useEffect } from "react";
import { sortArrays } from "@/utils/array-to-dict";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface BarChartCardProps {
  data: any; 
  sentiment: boolean;
}


const BarChartCard: React.FC<BarChartCardProps> = ({ data,sentiment }) => {
  const [key, setKey] = useState<string[]>([]);
  const { keys, values } = sortArrays(key, data);

  useEffect(() => {
    if (sentiment) {
      setKey(['Neutral','Positive','Negative','Toxic']);
    } else {
      setKey(['Spam','News','Academic','Neutral','Service','Job & Recruitment','Personal target','Social Target','Help & Share','Club & Event']);
    }
  }, [data,sentiment]);

  let datasamp={
    options: {
      chart: {
        id: "basic-bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 4,
          colors: {
            ranges: [{
              from: 0,
              to: 100,
              color: '#212121'
            }],
          },
        },
      },
      dataLabels: {
        enabled: false, 
      },
      xaxis: {
        categories: keys,
      },
      grid: {
        show: false, 
      },
    },
    series: [
      {
        name: "Probability",
        data: values,
      },
    ],
  }

  return (
    <div style = {{width:"530px"}} className="max-w-full w-full h-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold text-xl mb-2">{sentiment ? 'Sentiment Analysis' : 'Topic Classification'}</div>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {sentiment ? 'Classify between Postive, Negative, Neutral, Toxic.' : 'Analyze the topic of the post and comment.'}
          </p>
        </div>
        
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            {sentiment ? '85% Accuracy' : '80% Accuracy'}
          </span>
        </div>
      </div>
      
      <hr className="my-2 border-gray-200" /> 
        <Chart
          options={datasamp.options}
          series={datasamp.series}
          type="bar"
          width="470"
        />
    </div>
    
  );
}
export default BarChartCard;