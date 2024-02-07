"use client";
import { useState, useEffect } from 'react';
import { fetchClassification } from '@/services/get-prediction';
import BarChartCard from '@/components/BarChartCard';
import Suggestionbox from '@/components/AddSuggestion'
import Title from '@/components/BigTitle';
import Paragraph from '@/components/Paragraph';

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

  const modelcard ={title:'Model Card',
                    data:["This application showcases the utilization of transfer learning with <b>BERT</b> in a multi-task model. Initially, the model has three different heads for three distinct tasks, one for <b>sentiment analysis</b>, one for <b>text-classification</b> and one for an unsupervised mask language model <b>(MLM)</b> task. The <b>MLM</b> head will only be used during the training process. Through this model architecture and training approach, we've achieved remarkable results, closely matching current state-of-the-art (SOTA) models for Vietnamese text classification and sentiment analysis, all within a single model.","As this model is still in the development phase, it's important to note that the predictions may not be entirely accurate, and there may be undetected bugs present. However, we are actively working to refine and improve its performance to ensure the best possible outcomes for our users."],
                    align:'start'}

  const modified = {
    title:'Modified Result',
    data:['In text classification tasks, the <b>Others</b> label often presents ambiguity. As a result, we have chosen to deactivate this label when the frequency of the second-highest label meets a predefined threshold. To view the unaltered predictions, you can simply click on the <b>Modified</b> button.'],
    aligin:'start'
  }

  return (
    <>
    <section className="mb-16 mt-0 space-y-8 md:mt-*">  
        <Title data={{title: "Sentiment Analysis and Text Classification", align: "center"}}/>
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
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl"
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
        result.status && text===lastText ?
        <Suggestionbox text={lastText} clas={result.information.actual} sent={result.information.sentiment}/>
        :
        <>Feel free to try</>
      }
    </section>
    <Paragraph data={modelcard}/>
    <Paragraph data={modified}/>
    </>
  )
}
