import React from 'react';
import ReactWordcloud from 'react-wordcloud';
 
const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
]

interface WordCloudProps {
    data: any; 
}
 
const Wordcloud: React.FC<WordCloudProps> = ({ data }) => {

  return (
  <div className='w-1/2 flex grid items-center justify-items-center bg-black'>
  <ReactWordcloud options={{colors:['blue']}}  words={words} />
  </div>
  )
}
export default Wordcloud;