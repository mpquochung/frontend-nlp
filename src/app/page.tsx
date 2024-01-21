"use client"
import { useState } from 'react';



export default function HomePage() {
  const [text, setText] = useState('');

  const handleChange = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    const accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNzA1MzE4NzUyLCJqdGkiOiIxZDU5YmM5Zi0zZWQ4LTQ4MDAtYjBlNS04ZWViOGVmZWEzM2UiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoicXVhbmdodW5nMkB5YWhvby5uZXQiLCJuYmYiOjE3MDUzMTg3NTIsImNzcmYiOiJkMTA3OWM3YS1mZjVhLTQwZjYtYmRjNC0xNTFhZGRlNmQxMzEiLCJleHAiOjE3MDU0MDUxNTJ9.bNCAur43-_DAfnnh_dj3VmHAOp5QLqfSGbrs6tDL5SU"; 
    const response = await fetch('http://192.168.0.198:8019/api/v1/model/predict/classification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken, 
      },
      body: JSON.stringify({ text: text }),
    });
    const data = await response.json();
    console.log(data.information);
  };

  

  return (
    <section className="mb-16 mt-0 space-y-8 md:mt-*">
        <h1 className="mt-12 text-center text-3xl font-bold">Test API</h1>
        <form onSubmit={handleChange} className="mb-16 mt-0 space-y-3 md:mt-20">
        <input 
          type="text" 
          id="first_name" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder='"Input: Dịch vụ tệ quá!" | "Trường rất đẹp" | "Khi nào có đợt tuyển sinh mới vậy?" | ....'
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
    </section>
  )
}
