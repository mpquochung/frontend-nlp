import React from "react";
interface TitleProps {
    data: any;
   
}

/*
 * This component display a title. It requires 1 prop:
 * - title: string - The title to be displayed.
 * Additionally, it can take an optional prop:
 * - align: string - The alignment of the title. It can be set to 'start'(left), 'center' or 'end'(right).
 */

const Title: React.FC<TitleProps> = ({ data }) => {
    if (data.hasOwnProperty('align')){
        data.align = 'start';
    }

    return(
        <div className={`font-bold text-3xl xl:text-4xl w-full grid py-8 xl:py-10 justify-items-${data.align}`}>
           <h2> {data.title}</h2>
        </div>
    );
}

export default Title;