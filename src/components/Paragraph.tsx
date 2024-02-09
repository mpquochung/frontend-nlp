import React,{useState} from "react";
interface ParagraphProps {
    data: any; 
   
}

const Paragraph: React.FC<ParagraphProps> = ({ data }) => {

    let hide = false;
    if (data.hasOwnProperty('show')) {
        hide = !data.show;
    }

    const [show, setShow] = useState(!hide);

    

    const triggerHide = ()=>{
        setShow(!show);
    }


    return (
        <div>
            <div className={`w-full grid h-full max-w-full bg-white text-black rounded-lg shadow dark:text-white dark:bg-gray-800 p-4 my-6 md:p-${show?"6":"2"} justify-items-${data.align}`}>
                
                {data.title !== ''? <div className={`w-full grid flex flex-col px-2 xl:py-2  justify-items-${data.align} gap-4`}>
                    <div className="flex font-bold text-lg items-center md:text-xl lg:text-2xl xl:text-2xl xl:mb-1">
                    {data.title}
                    <button type="button" onClick={triggerHide} className={`${hide?"visible":"invisible"} bg-gray-800 text-white text-sm font-medium inline-flex items-center px-2.5 py-0.5 ml-4 lg:ml-6 rounded-lg dark:bg-grey-900 dark:text-black-300`}>{!show?"Show":"Hide"}</button>
                    </div>

                    
                </div>:<></>}
                    
                    {show? data.data.map((item:any, i:any) => (
                        <div key={i} id={i} className={`w-full grid p-2  justify-items-${data.align} text-justify  text-base md:text-lg mb-2`} dangerouslySetInnerHTML={{ __html: "<div>"+item+"</div>" }}>
                        
                            </div>

                    )):<></>}
                </div>
            
                
            
        </div>
    );
}
export default Paragraph;