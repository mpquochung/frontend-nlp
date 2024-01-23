import React, { useState, useEffect } from "react";
import { sortArrays } from "@/utils/array-to-dict";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface BarChartCardProps {
  data: any; 
  data2: any;
  sentiment: boolean;
}


const BarChartCard: React.FC<BarChartCardProps> = ({ data,data2,sentiment }) => {
  const [key, setKey] = useState<string[]>([]);
  const [isactual, setIsActual] = useState(false);
  const op1 = sortArrays(key, data);
  const op2 = sortArrays(key, data2);
  useEffect(() => {
    if (sentiment) {
      setKey(['Neutral','Positive','Negative','Toxic']);
    } else {
      setKey(['Spam','News','Academic','Others','Service','Job & Recruitment','Personal target','Social Target','Help & Share','Club & Event']);
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
        categories: op1.keys,
      },
      grid: {
        show: false, 
      },
    },
    series: [
      {
        name: "Probability",
        data: op1.values,
      },
    ],
  }


  let datasamp2={
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
        categories: op2.keys,
      },
      grid: {
        show: false, 
      },
    },
    series: [
      {
        name: "Probability",
        data: op2.values,
      },
    ],
  }

  const change = () =>{
    
    setIsActual(!isactual);
   
    

  }
  return (
    <div className="w-full h-full max-w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
            {sentiment ? 'Sentiment Analysis' : 'Topic Classification'}
          </div>
          <p className="text-xs sm:text-sm md:text-base font-normal text-gray-500 dark:text-gray-400 ">
            {sentiment ? 'Classify between Postive, Negative, Neutral, Toxic.' : 'Analyze the topic of the post and comment.'}
          </p>
        </div>
        
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            {sentiment ? '85% Accuracy' : '80% Accuracy'}
          </span>
          {
            sentiment ? <></>:
            <button type="button" onClick={change} className="bg-black-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-grey-900 dark:text-black-300">{isactual?"Actual":"Modified"}</button>
            
          }
        </div>
      </div>
      {
        sentiment ? <>
          <hr className="my-2 border-gray-200" /> 
          <Chart
            options={datasamp.options}
            series={datasamp.series}
            
            type="bar"
            width="100%"
          />
        
          </>:<>{

            isactual ?<>

          <hr className="my-2 border-gray-200" /> 
          <Chart
            options={datasamp2.options}
            series={datasamp2.series}
            
            type="bar"
            width="100%"
          />
            
            </>:<>
            <hr className="my-2 border-gray-200" /> 
              <Chart
                options={datasamp.options}
                series={datasamp.series}
                
                type="bar"
                width="100%"
              />
            </>
          }
        
        </>

      }
      
    </div>
    
  );
}
export default BarChartCard;