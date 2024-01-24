"use client";
import { useState, useEffect } from 'react';
import { fetchClassification } from '@/services/get-prediction';
import BarChartCard from '@/components/BarChartCard';
import Suggestionbox from '@/components/AddSuggestion'

let temp_re = {
  status:false,
  information: {
    sentiment: [],
    classification: [],
    actual:[]
  },
}

export default function HomePage() {
  const [text, setText] = useState('');
  const [result,setResult] = useState(temp_re);
  const [lastText, setLastText] = useState('');

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text !== lastText) {
      fetchClassification(text, setResult);
      setLastText(text);
    } 
  };

  return (
    <section className="mb-16 mt-0 space-y-8 md:mt-*">  
        <h1 className="mt-12 text-center text-3xl font-bold">Sentiment Analysis and Topic Classification</h1>
        <form onSubmit={handleChange} className="mb-16 mt-0 space-y-3 md:mt-20">
        <input 
          type="text" 
          id="first_name" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder='Input: "Dịch vụ tệ quá!" | "Trường rất đẹp" | "Khi nào có đợt tuyển sinh mới vậy?" | ...'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required 
        />
        <button 
          type="submit"
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        > 
          Calculate 
        </button>
        {result.status ?
        <>
          <div className="flex flex-col items-stretch sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <BarChartCard data={result.information.sentiment} data2={result.information.sentiment} sentiment = {true}/>
            <BarChartCard data={result.information.classification} data2={result.information.actual} sentiment = {false}/>
          </div>
          
        </>
          
          :<div></div>
        }
      </form>
      {
        result.status?
        <Suggestionbox text={text} clas={result.information.actual} sent={result.information.sentiment}/>
        :
        <>Feel free to try</>
      }
    </section>
  )
}
