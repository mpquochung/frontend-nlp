import React from "react";
interface TitleProps {
    data: any;
   
}

const Title: React.FC<TitleProps> = ({ data }) => {
    return(
        <div className={`font-bold text-3xl xl:text-4xl w-full grid py-8 xl:py-10 justify-items-${data.align}`}>
           <h2> {data.title}</h2>
        </div>
    );
}

export default Title;