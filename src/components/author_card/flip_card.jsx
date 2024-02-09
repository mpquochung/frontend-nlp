import './style.css';
import React from 'react';
  
function FlipCard( {data} ) {
    const imageUrl = data.url;
    return(
      <>
      <div className="flip-card">
            <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundImage: `url(${imageUrl}) ` }}>
                </div>
                <div className="flip-card-back" style={{ backgroundImage: `url(${imageUrl}) ` }}>
                    <p className="title">{data.name}</p>
                    <p className="info">{data.info}</p>
                    <p className="info">{data.position}</p>
                </div>
            </div>
        </div>
      </>
    );
  }
  
export default FlipCard;