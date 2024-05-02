import React, { useState } from 'react';
import { submitMessage } from '@/services/submit-contact';

function ContactForm() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);



  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();   
    setLoading(true);                            
    submitMessage(email, title, message, setLoading );    
  };


  const text = {
    title: "Get in Touch",
    data: ["We're always excited to hear from our users and welcome any feedback or inquiries. Whether you have questions about our platform, suggestions for improvement, or are interested in collaboration opportunities, please don't hesitate to reach out to us by email to the authors."],
    align: "start"
  };

  return (
    <div className={`w-full grid h-full max-w-full bg-white text-black rounded-lg shadow dark:text-white dark:bg-gray-800 p-4 my-4`}>
      <div className="pl-4 mb-4">
        <h1 className="font-bold text-2xl mb-4">{text.title}</h1>
        {text.data.map((paragraph, index) => (
          <p key={index} className='text-lg'>{paragraph}</p>
        ))}
      </div>

      <form className="w-full max-w-lg pl-4" onSubmit={handleChange}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="john@example.com"  onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="w-full px-3 mt-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white " id="title" type="text" placeholder="Subject" onChange={e => setTitle(e.target.value)}  />
          </div>
          <div className="w-full px-3 mt-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="content">
              Message
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="content" rows="10" placeholder="Message" onChange={e => setMessage(e.target.value)}></textarea>
          </div>
          <div className="w-full px-3 mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;