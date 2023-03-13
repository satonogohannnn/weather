import React from 'react'
import './index.css';

const sunny: number = 9;
const cloudy: number = 4;
const rainny: number = 3;
const lightning: number = 2;



export const Graph = () => {
  return (
    <div className='weather-bar'>
      <div className='sunny'></div>
      <div className='cloudy'></div>
      <div className='rainny'></div>
      <div className='lightning'></div>
    </div>
  )
}

export default Graph;