export const metadata = {
  title: 'Dashboard',
  description: 'This is projects page.',
};
"use client";
import React, {useEffect} from 'react';

import Wordcloud from '@/components/dashboard/WordCloud';
import Treemap from '@/components/dashboard/Treemap';
import ColumnChart from '@/components/dashboard/ColumnChart';
import ListNumber from '@/components/dashboard/ListNumber';

import Title from '@/components/BigTitle';


const tempoverall = [
  {text:"Posts", data: 100},
  {text:"Comments", data: 200},
  {text:"Replies", data: 300},
  {text:"Reacts", data: 4000},
  {text:"Score", data: 2.5}
]

export default function ProjectsPage() {
  // useEffect(() => {
  //   // window is accessible here.
  //   console.log("window.innerHeight", window.innerHeight);
  // }, []);
  return (
  <>
      <Title data={{title:'Dashboard on Performance of Group A', align:'center'}} />
      <Treemap data={'hi'} title='Overall Performance'/>
      
      <Title data={{title:'Overall Performance', align:'start'}} />
      
      <ListNumber data={tempoverall} />
      <div className="flex flex-col items-stretch sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <ColumnChart data={'hi'} title='Something cool 1'/>
        <ColumnChart data={'hi'} title='Something cool 2' />
      </div>

      <Title data={{title:'Posts Analysis', align:'start'}} />
      
      <ListNumber data={tempoverall} />
      <div className="flex flex-col items-stretch sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <ColumnChart data={'hi'} title='Something cool 1'/>
        <ColumnChart data={'hi'} title='Something cool 2' />
      </div>

      <Title data={{title:'Comments & Replies Analysis', align:'start'}} />
      
      <ListNumber data={tempoverall} />
      <div className="flex flex-col items-stretch sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <ColumnChart data={'hi'} title='Something cool 1'/>
        <ColumnChart data={'hi'} title='Something cool 2' />
      </div>
    

    </>)
}
