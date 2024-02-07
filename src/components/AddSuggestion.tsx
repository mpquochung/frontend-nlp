import React, { useState, useEffect } from "react";
import { fetchAddSugguestion } from '@/services/add-suggestion';

import { QuestionCircleOutlined, QuestionOutlined } from "@ant-design/icons";


interface SuggestboxProps {
  text: any; 
  clas: any;
  sent: any
};

const Suggestbox: React.FC<SuggestboxProps> = ({text,clas,sent})=>{

    const [result, setResult] = useState({status:false, information:""});
    const [correct, setCorrect] = useState("none");
    const [classification, setClassification] = useState(clas.indexOf(Math.max(...clas)));
    const [sentiment, setSentiment] = useState(sent.indexOf(Math.max(...sent)));

    useEffect(()=>{
      setCorrect("none")},[text]);


    const sumbitSuggestion = () => {
        setCorrect("true");
        console.log(text, classification, sentiment);
        fetchAddSugguestion("guest", text, classification, sentiment, setResult)
      };

    return(
      <div className="w-full h-full max-w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        {/* <div className="w_full bg-black">dd</div> */}
        <div className="flex justify-between items-center">
        <form>
          <div className="font-bold text-sm sm:text-base md:text-base lg:text-lg xl:text-lg mb-2">
            Is this classification good?

          </div>
          {correct === "none"?<>
          <button 
              onClick={()=>setCorrect("true")}
              type="button"
              className="bg-gray-800 mr-2 mb-1 hover:bg-green-100 text-white hover:text-black hover:transition-all font-bold py-1 px-6 rounded-xl"
            > Yes
            </button>
            <button 
              onClick={()=>setCorrect("false")}
              type="button"
              className="bg-gray-800 mb-1 hover:bg-red-100 text-white hover:text-black hover:transition-all font-bold py-1 px-6 rounded-xl"
            > No
          </button>
          </>:<></>}
          
            {
              correct==="true"?<div>Thanks for your suggestion</div>
              :<>
              {

                correct==="false"?<div className="w-full bg-zinc-100 rounded-lg shadow dark:bg-gray-800 p-3  my-2">
                      <div className="flex-col sm:flex-row w-full"><b>Your input</b><div>{text}</div></div>
                      <hr className="h-px mt-2 bg-gray-300 border-0 dark:bg-gray-700"></hr>
                      <div className="flex w-full flex-col items-stretch sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4">
                        <div>
                          <label  className="block mt-1 text-base font-medium text-gray-900 dark:text-white">Sentiment</label>
                          <select aria-label="sentiment" onChange={(e)=>{setSentiment(e.target.value);console.log(e.target.value)}} value={sentiment} id="sentiment" className="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            
                            <option value="0" >Neutral</option>
                            <option value="1" >Positive</option>
                            <option value="2">Negative</option>
                            <option value="3">Toxic</option>
                          </select>
                        </div>
                        <div>
                          <label  className="block mt-1 text-base font-medium text-gray-900 dark:text-white">Classification</label>
                          <select aria-label="classification" onChange={(e)=>{setClassification(e.target.value);console.log(e.target.value)}} value={classification} id="classification" className="bg-gray-50 my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            
                            <option value="0">Spam</option>
                            <option value="1" >News & Announcement</option>
                            <option value="2">Education</option>
                            <option value="3">Others</option>
                            <option value="4">Service</option>
                            <option value="5">Jobs & Internships</option>
                            <option value="6">Target Personal</option>
                            <option value="7">Target Social</option>
                            <option value="8">Help & Share</option>
                            <option value="9">Clubs & Events</option>
                          </select>
                        </div>
                      </div>

                      {
                        result.status ?
                        <div>Thanks for your suggestion</div>:
                        <button 
                          onClick={()=>submitSuggestion()}
                          type="button"

                          className="bg-gray-800 my-1 hover:bg-zinc-200 text-white hover:text-black font-bold py-2 px-5 rounded-xl"
                        > Submit

                        </button>
                      }

                      

                </div>:
                <div>Your contribution means alot to us</div>

              }
              </>
            }
        </form>
        </div>
        </div>
    )
}

export default Suggestbox;

