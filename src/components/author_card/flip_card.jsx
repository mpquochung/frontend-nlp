import './style.css';
import React from 'react';
  
function FlipCard( {data} ) {
    const imageUrl = data.url;
    return(
      <div className='flex justify-center content-center '>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundImage: `url(${imageUrl}) ` }}>
                </div>
                <div className="flip-card-back " style={{ backgroundImage: `url(${imageUrl}) `}}>
                    <div className=' backdrop-blur-md  h-full w-full rounded-2xl flex flex-col justify-center content-center'>
                      <p className="break-words bold text-3xl px-4 py-2 text-white" >{data.name}</p>
                      <p className="break-words text-lg px-2 py-2 text-white">{data.info}</p>
                      <p className="break-words text-lg px-2 py-1 text-white">{data.position}</p>
                      <p className="break-words text-lg px-2 py-1 text-white">{data.email}</p>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    );
  }
  
export default FlipCard;