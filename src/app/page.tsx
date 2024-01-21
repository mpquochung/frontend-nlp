"use client"
import { useState } from 'react';
import { fetchClassification } from '@/utils/get-prediction';
import BarChartCard from '@/components/BarChartCard';



export default function HomePage() {
  const [text, setText] = useState('');
  const [data1, setData1] = useState(null);

  const handleChange = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    const result = await fetchClassification(text);
    setData1(result); // Set the state variable
    console.log(data1);
  };

  

  return (
    <section className="mb-16 mt-0 space-y-8 md:mt-*">
        <h1 className="mt-12 text-center text-3xl font-bold">Test API</h1>
        <form onSubmit={handleChange} className="mb-16 mt-0 space-y-3 md:mt-20">
        <input 
          type="text" 
          id="first_name" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder='Input: "Dịch vụ tệ quá!" | "Trường rất đẹp" | "Khi nào có đợt tuyển sinh mới vậy?" | ....'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required 
        />
        <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          > 
            Calculate 
        </button>
      </form>

      <BarChartCard data={data1} />
      
    </section>
  )
}
