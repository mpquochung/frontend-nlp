import React,{useState} from "react";
interface ParagraphProps {
    data: any; 
   
}

/**
 * 
 * This component can be used to display a paragraph of text. It can be used to display a title and a paragraph of text.
 * It requires 2 props:
 * 1.   `title`: string - The title of the paragraph
 * 2.   `data`: string[] - The paragraph of text. Each paragraph is stored as an element in
 *      the array. The data is inserted via innerHTML, so it can contain HTML tags. If you 
 *      want to bold a text, simply wrap it in <b> tags.
 * Additionally, it can take an optional prop:
 * 3.   `show`: boolean - If set to false, the paragraph will be hidden.
 * 4.   `align`: string - The alignment of the paragraph. It can be set to 'start'(left), 'center' or 'end'(right).
 * 5.   `must_read`: boolean - If set to true, the paragraph will have a must read tag.
* Example: see text.ts at app/project
*/

const Paragraph: React.FC<ParagraphProps> = ({ data }) => {

    let hide = false;
    let must_read = false;
    let must_read_text = 'Must Read';
    // if (window.innerWidth < 600){
    //     must_read_text = 'Read';
    // }

    if (data.hasOwnProperty('show')) {
        hide = !data.show;
    }
    if (data.hasOwnProperty('align')){
        data.align = 'start';
    }
    if (data.hasOwnProperty('must_read')){
        must_read = data.must_read;
    }

    const [show, setShow] = useState(!hide);

    const triggerHide = ()=>{
        setShow(!show);
    }


    return (
        <div>
            <div className={`w-full grid h-full max-w-full bg-white text-black rounded-lg shadow dark:text-white dark:bg-gray-800 p-4 my-4 md:p-${show?"6":"2"} justify-items-${data.align}`}>
                
                {data.title !== ''? <div className={`w-full grid flex flex-col px-2 xl:py-2  justify-items-${data.align} gap-4`}>
                    <div className="flex font-bold float-root text-lg items-center  md:text-xl lg:text-2xl xl:text-2xl xl:mb-1 gap-5">
                        <div className={`${(hide || must_read)?'w-2/3':'w-full'} sm:w-max`}>
                            {data.title }
                        </div>
                        
                        <div className={`flex flex-col ${(hide || must_read)?'w-32 sm:w-40':'w-0'} md:flex-row gap-2 items-end`}>
                            {must_read?<div className="bg-red-500 max-w-max text-nowarp dark:bg-red-900 text-white text-sm font-medium inline-flex items-center px-2 py-0.5 rounded-lg">Must Read</div>:<></>}
                            <button type="button" onClick={triggerHide} className={`${hide?"visible":"invisible"} break-normal bg-gray-600 dark:bg-zinc-200 text-white dark:text-black text-sm font-medium inline-flex items-center px-2.5 py-0.5  rounded-lg dark:bg-grey-900 dark:text-black-300`}>{!show?"Show":"Hide"}</button>
                        </div>
                    </div>

                    
                </div>:<></>}
                    
                    {show? data.data.map((item:any, i:any) => (
                        <div key={i} id={i} className={`w-full grid p-2 justi  justify-items-${data.align} text-start sm:text-justify  text-base md:text-lg mb-2`} dangerouslySetInnerHTML={{ __html: "<div>"+item+"</div>" }}>
                        
                            </div>

                    )):<></>}
                </div>
            
                
            
        </div>
    );
}
export default Paragraph;