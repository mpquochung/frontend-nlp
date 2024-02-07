import React from "react";
interface TitleProps {
    data: any;
   
}

const Title: React.FC<TitleProps> = ({ data }) => {
    return(
        <div className={`font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl w-full grid py-8 xl:py-10 justify-items-${data.align}`}>
            {data.title}
        </div>
    );
}

export default Title;