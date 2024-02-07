import React from "react";

interface NumberProps {
    text: string;
    data: any;
}



const Number: React.FC<NumberProps> = ({ text,data }) => {
    return (
        <div className='flex flex-col bg-zinc-50 dark:bg-gray-900 rounded-lg shadow items-center justify-center  m-1'>
            <div className='text-4xl font-bold p-1 mb-1 mt-3'>{data}</div>
            <div className='text-xl md:text-lg  font-bold mb-3'>{text}</div>
            
        </div>
    )
}

export default Number;

