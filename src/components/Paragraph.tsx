import React from "react";
interface ParagraphProps {
    data: any; 
   
}

const Paragraph: React.FC<ParagraphProps> = ({ data }) => {

    return (
        <div>
            <div className={`w-full grid h-full max-w-full bg-white text-black rounded-lg shadow dark:text-white dark:bg-gray-800 p-4 my-6 md:p-6 justify-items-${data.align}`}>
            {data.title !== ''? <div className={`w-full grid px-2 xl:py-2 justify-items-${data.align} `}>
                <div className=" max-w-max  font-bold text-lg  md:text-xl lg:text-2xl xl:text-2xl xl:mb-1">
                {data.title}
                </div>
            </div>:<></>}
            
                {data.data.map((item:any) => (
                    <div className={`w-full grid p-2  justify-items-${data.align} text-justify  text-base md:text-lg mb-2`} dangerouslySetInnerHTML={{ __html: "<div>"+item+"</div>" }}>
                    
                        </div>

                ))}
            </div>
        
            
            
        </div>
    );
}
export default Paragraph;