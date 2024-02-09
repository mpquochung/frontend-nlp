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

    const submitSuggestion = () => {
        console.log(text, classification, sentiment);
        fetchAddSugguestion("guest", text, classification, sentiment, setResult)
      };

    return(
      <form>
          <div>
            Is this result reasonable?
          </div>
          <button 
              onClick={()=>setCorrect("true")}
              type="button"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            > Yes
            </button>
            <button 
              onClick={()=>setCorrect("false")}
              type="button"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            > No
            </button>
            {
              correct==="true"?<>Thanks for your suggestion</>
              :<>
              {
                correct==="false"?<>
                      <div>Your label here</div>
                      <div>{text}</div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sentiment</label>
                      <select 
                        aria-label="sentiment" 
                        onChange={(e)=>{setSentiment(e.target.value);console.log(e.target.value)}} 
                        value={sentiment} id="sentiment" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="0" >Neutral</option>
                          <option value="1" >Positive</option>
                          <option value="2">Negative</option>
                          <option value="3">Toxic</option>
                      </select>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Sentiment </label>
                      <select 
                        aria-label="classification" 
                        onChange={(e)=>{setClassification(e.target.value);console.log(e.target.value)}} 
                        value={classification} id="classification" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="0">Spam</option>
                          <option value="1">News & Announcement</option>
                          <option value="2">Education</option>
                          <option value="3">Others</option>
                          <option value="4">Service</option>
                          <option value="5">Jobs & Internships</option>
                          <option value="6">Target Personal</option>
                          <option value="7">Target Social</option>
                          <option value="8">Help & Share</option>
                          <option value="9">Clubs & Events</option>
                      </select>
                      {
                        result.status ?
                        <div>Thanks for your suggestion</div>:
                        <button 
                          onClick={()=>submitSuggestion()}
                          type="button"
                          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        > 
                          Submit
                        </button>
                      }
                </>:
                <>Your contribution means alot to us</>
              }
              </>
            }
        </form>
    )
}

export default Suggestbox;

