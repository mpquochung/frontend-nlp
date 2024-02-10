import React  from "react";
import Number from "./Number";

interface ListNumberProps {
    data: any;
}

const ListNumber: React.FC<ListNumberProps> = ({ data }) => {
    
    /*
        Contain list of number will display in dashboard
        1. Number of Post
        2. Number of Comments
        3. Number of Replies
        4. Total React
        5. Score
    */
//    let len = data.length;
   //${Math.min(window.innerWidth,window.innerHeight)<600?Math.trunc(len/2):len}
    return (
        <>
            {
                data.length >=6?
                <div className={`flex w-full p-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2`}>
                {data.map((item:any,i:any) => (
                    <Number key={i} text={item.text} data={item.data} />
                ))}
                </div>:
                <div className={`flex w-full p-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow grid grid-cols-2 md:grid-cols-3  gap-2`}>
                {data.map((item:any,i:any) => (
                    <Number key={i} text={item.text} data={item.data} />
                ))}
                </div>
            }
        </>
        
    )}

export default ListNumber;