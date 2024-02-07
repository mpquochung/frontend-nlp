import React,{ useState, useEffect }  from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface TreeMapProps {
  data: any;
  title: string; 
}
let sampledata = {series: [
    {
      name: 'Desktops',
      data: [
                {
                x: 'ABC',
                y: 10
                },
                {
                x: 'DEF',
                y: 60
                },
                {
                x: 'XYZ',
                y: 41
                }
            ]
            },
            {
            name: 'Mobile',
            data: [
                {
                x: 'ABCD',
                y: 10
                },
                {
                x: 'DEFG',
                y: 20
                },
                {
                x: 'WXYZ',
                y: 51
                },
                {
                x: 'PQR',
                y: 30
                },
                {
                x: 'MNO',
                y: 20
                },
                {
                x: 'CDE',
                y: 30
                }
            ]
            }
        ],
        options: {
            legend: {
            show: false
            },
            chart: {
                id:"treemap",
                height: 350,
           
            
            },
            title: {
          
            },
            
        },
    
        };
const Treemap: React.FC<TreeMapProps> = ({ data, title }) => {
    return(
            <div className="w_full bg-white dark:bg-gray-800 rounded-lg shadow grid items-center justify-items-center p-3 xl:py-4">
                <div className="font-bold  text-xl xl:text-3xl">{title}</div>
                <Chart className="w-full lg:w-11/12 xl:w-10/12 flex"  options={sampledata.options} series={sampledata.series} type="treemap"  />
            </div>
    )

}

export default Treemap;