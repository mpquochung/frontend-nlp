import React, {useState} from "react";

interface LineProps{
    data:{
        user_id: string;
        count: number;
        score: number;
        topic: string;
        react: number | undefined;
    };
    col: number;
}

interface ListProps{
    data:any;
    col:number;
    title:string;
}

const Line: React.FC<LineProps> = ({data,col}) => {




    return (
        <div className="flex h-14 my-2 w-full bg-zinc-50 hover:bg-zinc-200 rounded-md shadow flex-row px-2">
            
            <div className={`w-4/12 text-lg font-semibold h-14 p-2 flex flex-col content-center justify-center`}>
                <div className="text-left">
                    {
                        data.user_id === 'andanh0bit'? 'Anonymous':
                        <a href={`https:\\\\www.facebook.com\\profile.php?id=${data.user_id}`}>{data.user_id}</a>
                    }
                    
                </div>
            </div>
            <div className={`w-2/12 text-lg font-bold h-14 p-1 flex flex-col content-center justify-center`}>
                <div className="text-center">{data.count}</div>
            </div>
            { col === 6?
                <div className={`w-1/12 text-lg font-bold h-14 p-1 flex flex-col content-center justify-center`}>
                    <div className="text-center">{data.react}</div>
                </div>:<></>}
            <div className={`w-4/12 h-14  flex flex-col content-center justify-center`}>
                <div className="text-center">{data.topic}</div>
            </div>
            <div className={`w-${col==6?'1':'2'}/12 text-lg font-bold h-14 p-1 flex flex-col content-center justify-center`}>
                <div className="text-center">{data.score}</div>
            </div>
            
        </div>
    )
}


const List : React.FC<ListProps> = ({data,col,title}) => {

    
    const [show, setShow] = useState(false);

    const triggerShow = ()=>{
        setShow(!show);
    }

    return(

        <>
            
            <div className="flex flex-col w-full px-3 py-2  bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="font-bold text-xl  md:text-2xl mb-2">{title}</div>
                <div className="flex h-10 mb-3 mt-1 w-full bg-zinc-300 hover:bg-zinc-400 rounded-md shadow flex-row px-2">
                    <div className={`w-5/12 md:w-4/12 text-lg font-bold h-10 p-2 flex flex-col content-center justify-center`}>
                        <div className="text-left">
                            UID
                        </div>
                    </div>
                    <div className={`w-0 md:w-2/12 text-lg font-bold h-10 p-1 flex flex-col content-center justify-center`}>
                        <div className="text-center">{col===6?'Posts':'Comments'}</div>
                    </div>
                    {col === 6?
                    <div className={`w-0 md:w-1/12 text-lg font-bold h-10 p-1 flex flex-col content-center justify-center`}>
                        <div className="text-center">Reacts</div>
                    </div>:<></>}
                    
                        <div className={`w-0 md:w-4/12 text-lg font-bold h-10 p-1 flex flex-col content-center justify-center`}>
                            <div className="text-center">Topic</div>
                        </div>
                    <div className={`w-0 md:w-${col===6?'1/12':'2/12'} text-lg font-bold h-10  flex flex-col content-center justify-center`}>
                        <div className={`text-${col===6?'left':'center'}`}>Score</div>
                    </div>
                    
                </div>
                {
                    show? data.map((item:any,i:any) => (
                        <Line key={i} data={item} col={col} />
                    )):
                    data.slice(0,6).map((item:any,i:any) => (
                        <Line key={i} data={item} col={col} />
                    ))
                }
                {
                    data.length > 6?
                    <button type="button" onClick={triggerShow} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-5 my-1 rounded-xl"> 
                        {show?"Hide":"Show More"}
                    </button>:
                    <></>
                }

            </div>
        </>
    )
}
export default List;