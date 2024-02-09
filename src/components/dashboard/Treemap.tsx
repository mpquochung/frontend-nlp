import React,{ useState, useEffect }  from "react";
import dynamic from "next/dynamic";
import { tooltip } from "@material-tailwind/react";
import { text } from "stream/consumers";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface TreeMapProps {
  data: any;
  title: string; 
}

const Treemap: React.FC<TreeMapProps> = ({ data, title }) => {
    let sampledata = {series: data,
            options: {
                legend: {
                show: true
                },
                distributed: true,
                chart: {
                    id:"treemap",
                    height: 350,
               
                    
                },
               

                dataLabels: {
                    enabled: true,
                    position:'top',
                    style: {
                        fontSize: '30px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                        colors: ['#fff']
                    },
                    offsetY: 0,
                },
                

                tooltip:{
                    enable:true,
                    onDatasetHover: {
                        highlightDataSeries: true,
    
                    },
                    z: {
                        formatter: undefined,
                        title: 'Type: '
                    },
                    fixed: {
                        enabled: true,
                        position: 'topRight',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    
                },
                title: {
              
                },
                
            },
        
            };
    return(
            <div className="w_full bg-white dark:bg-gray-800 rounded-lg shadow grid items-center justify-items-center p-3 xl:py-4">
                <div className="font-bold  text-xl xl:text-3xl">{title}</div>
                <Chart className="flex w-full lg:w-11/12 "  options={sampledata.options} series={sampledata.series} type="treemap"  />
            </div>
    )

}

export default Treemap;