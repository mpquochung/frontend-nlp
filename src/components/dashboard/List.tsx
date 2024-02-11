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
    rank: number;
    group: string;
}

interface ListProps{
    data:any;
    col:number;
    title:string;
    group:string;
}

const Line: React.FC<LineProps> = ({data,col,rank, group}) => {

    var theme = "bg-zinc-50 dark:bg-gray-900 hover:bg-zinc-200";
    let tone_light = [800,'200','100','50'];
    let tone_dark  = [0,'800','900','900'];

        if (rank === 0) theme = "bg-sky-800 dark:bg-rose-700 hover:bg-sky-900 text-white";
        if (rank === 1) theme = "bg-sky-200 dark:bg-rose-900 hover:bg-sky-300 ";
        if (rank === 2) theme = "bg-sky-100 dark:bg-rose-950 hover:bg-sky-300 ";
        if (rank === 3) theme = "bg-sky-50 dark:bg-gray-900 hover:bg-sky-200 ";
        if (rank === 4) theme = "bg-sky-50 dark:bg-gray-900 hover:bg-sky-100 ";
    


    return (
        <div className={`flex h-14 my-2 w-full ${theme}  rounded-md shadow flex-row px-1`}>
            
            <div className={`${col===6?'w-5/12 md:w-4/12':'w-1/2 md:w-4/12'} px-1 md:p-0  text-lg font-semibold overflow-hidden h-14  flex flex-col content-center justify-center`}>
                
                    
                         
                        <div className="text-left p-1  hover:bg-zinc-400 hover:bg-opacity-20 rounded-md">
                            
                            {
                                data.user_id === 'andanh0bit'?'Anonymous':
                                <a  href={`https://www.facebook.com/profile.php?id=${data.user_id}`} target="_blank">{data.user_id}</a>
                            }
                        </div>
                        
                        
                    
                    
                
            </div>
            <div className={`${col===6?'w-1/6':'w-1/4'} md:w-2/12 text-lg font-bold h-14 p-1  flex flex-col content-center justify-center`}>
                {   
                col === 6 && data.user_id !== 'andanh0bit'?
                <a  href={`https://www.facebook.com/groups/${group}/user/${data.user_id}/`} target="_blank" className="text-center p-1 rounded-md  hover:bg-zinc-400 hover:bg-opacity-20">{data.count}</a>:
                <div className="text-center">{data.count}</div>}
            </div>
            { col === 6?
                <div className={`w-1/4 md:w-1/12 text-lg font-bold h-14 p-1 flex flex-col content-center justify-center`}>
                    <div className="text-center">{data.react}</div>
                </div>:<></>}
            <div className={`hidden w-1/3 md:flex h-14  flex flex-col content-center justify-center`}>
                <div className="text-center">{data.topic}</div>
            </div>
            <div className={`${col===6?'w-1/6':'w-1/4'}  md:w-${col==6?'2':'2'}/12 text-lg font-bold h-14 p-1 flex flex-col content-center justify-center`}>
                <div className="text-center">{data.score}</div>
            </div>
            
        </div>
    )
}


const List : React.FC<ListProps> = ({data,col,title, group}) => {

    
    const [show, setShow] = useState(false);

    const triggerShow = ()=>{
        setShow(!show);
    }

    return(

        <>
            
            <div className="flex flex-col w-full px-3 py-2  bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="font-bold text-xl  md:text-2xl mb-2">{title}</div>
                <div className="flex h-10 mb-3 mt-1 w-full bg-zinc-300 dark:bg-gray-700 hover:bg-zinc-400 rounded-md shadow flex-row px-2">
                    <div className={`${col===6?'w-5/12':'w-1/2'} sm:w-4/12 text-lg font-bold h-10 p-2 flex flex-col content-center justify-center`}>
                        <div className="text-left">
                            UID
                        </div>
                    </div>
                    <div className={`${col===6?'w-1/6':'w-1/4'} md:w-2/12 text-lg font-bold h-10 p-1 flex flex-col content-center justify-center`}>
                        <div className="text-center">{col===6?'Posts':'Comments'}</div>
                    </div>
                    {col === 6?
                    <div className={`w-1/4 md:w-1/12 text-lg font-bold h-10 p-1 flex flex-col content-center justify-center`}>
                        <div className="text-center">Reacts</div>
                    </div>:<></>}
                    
                        <div className={`hidden w-4/12 md:flex text-lg font-bold h-10 p-1 flex flex-col content-center justify-center`}>
                            <div className="text-center">Topic</div>
                        </div>
                    <div className={`${col===6?'w-1/6':'w-1/4'} md:w-2/12 text-lg font-bold h-10  flex flex-col content-center justify-center`}>
                        <div className={`text-${col===6?'left':'center'}`}>Score</div>
                    </div>
                    
                </div>
                {
                    show? data.slice(0,15).map((item:any,i:any) => (
                        <Line key={i} rank={i} data={item} col={col} group={group} />
                    )):
                    data.slice(0,6).map((item:any,i:any) => (
                        <Line key={i} rank={i} data={item} col={col} group={group} />
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