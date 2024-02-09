"use client";
// export const metadata = {
//   title: 'Dashboard',
//   description: 'This is projects page.',
// };

import React, {useState, useEffect} from 'react';


import Treemap from '@/components/dashboard/Treemap';
import ColumnChart from '@/components/dashboard/ColumnChart';
import ListNumber from '@/components/dashboard/ListNumber';

import Title from '@/components/BigTitle';
import Paragraph from '@/components/Paragraph';

import { fetchVisualization } from '@/services/get-data-vis';
import content from './text';



// Read the JSON file asynchronously

import {default as sampledata} from "./sample.json";



export default function ProjectsPage() {

  const [data, setData] = useState(sampledata);
  const [pageid, setPageid] = useState("none");
  const [loading, setLoading] = useState(false);
  const date_added ='2024-01-23';
  const duration ='2024-01-10';

  const submitSuggestion = () => {
    setLoading(true);
    console.log(pageid,date_added,duration);
    fetchVisualization(pageid,date_added,duration,setData,setLoading)
  };
  // useEffect(() => {
  //   // window is accessible here.
  //   console.log("window.innerHeight", window.innerHeight);
  // }, []);
  return (
  <>
    <div className='w-full grid h-full max-w-full bg-white text-black rounded-lg shadow dark:text-white dark:bg-gray-800 p-3 my-4 md:px-6'>
      <div className='visibility'>
        <form>
          <label  className="block mt-1 text-lg font-medium text-gray-900 dark:text-white">Choose the forums you want to analyze</label>
              
              <select aria-label="sentiment" onChange={(e)=>{setPageid(e.target.value);console.log(e.target.value)}}  id="page" className="w-full bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                
                <option value="1200430959969713" selected>GÓC THÔNG TIN NEU</option>
                {/* <option value="2325143364420467" >Nhóm thông tin sinh viên NEU</option>
                <option value="youthmedia.neu">Youth NEU Media</option> */}
                <option value="458674179735200">Trà đá VNU</option>
                <option value="161061105966625">Trà đá Bách Khoa</option>
                <option value="6320754357946327">Trà đá HNUE</option>
                <option value="tradahvnh">TRÀ ĐÁ 12 CHÙA BỘC</option>
              </select>

              {
          loading?
            <div  className="bg-gray-500 max-w-max hover:bg-gray-400 text-white font-bold py-2 my-1 px-5 rounded-2xl"> 
            Submit 
          </div>:
            <button 
            type="submit"
            onClick={submitSuggestion}
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-5 my-1 rounded-2xl"> 
            Submit   
          </button>
        }
          </form>
        </div>

      </div>
      
      <Paragraph data={content.text1}/>
      <Paragraph data={content.text2}/>

      <div className={`${loading?'hidden':'block'}`}>
        <Title data={{title:'Dashboard on Performance of '+data.information.page.name, align:'center'}} />
        <Treemap data={data.information.treemap} title='Overall Performance'/>
        
        <Title data={{title:'Overall Performance', align:'start'}} />
        
        <ListNumber data={data.information.general.general} />
        <div className="flex flex-col items-stretch sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <ColumnChart data={data.information.general.posts} title='Posts by Categories'/>
          <ColumnChart data={data.information.general.comments_and_replies} title="Responses per posts' catergories" />
        </div>
        <Paragraph data={content.text_overall}/>
        <Title data={{title:'Posts Analysis', align:'start'}} />
        
        <ListNumber data={data.information.posts.general} />
        <div className="flex flex-col items-stretch sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <ColumnChart data={data.information.posts.reacts} title="Reacts by Posts' Categories"/>
          <ColumnChart data={data.information.posts.top_posts_comments} title="Comments by Top 25% Posts' Categories" />
        </div>

        <Title data={{title:'Comments and Replies Analysis', align:'start'}} />
        <div className="flex flex-col items-stretch sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <ColumnChart data={data.information.comments_and_replies.replies} title="Replies by Comments' Categories"/>
          <ColumnChart data={data.information.comments_and_replies.top_comments} title="Replies by Top 20% Comments' Categories"/>
        </div>
      </div>
      <div className={`${loading?'flex':'hidden'} w-full text-center font-bold text-4xl grid h-full max-w-full bg-white text-black rounded-lg shadow dark:text-white dark:bg-gray-800 p-8 my-6 md:p-10`}>
                Loading ...
        </div>
    

    </>)
}
