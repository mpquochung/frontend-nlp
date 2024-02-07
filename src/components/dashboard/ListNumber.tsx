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
   let len = data.length;
  
    return (
        <div className={`flex flex_col w_full p-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow grid grid-cols-2 md:grid-cols-${Math.round(len/2)} lg:grid-cols-${len}  gap-2`}>
            {data.map((item:any) => (
                <Number text={item.text} data={item.data} />
            ))}
        </div>
    )}

export default ListNumber;