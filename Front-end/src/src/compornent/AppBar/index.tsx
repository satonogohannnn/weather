import React, { useState } from 'react'
import './index.css';
import LoginIcon from '@mui/icons-material/Login';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import sunny from './weatherImage/sunny-group.png';
import Graph from './graph';

type props = {
    auth: boolean,
}



// const navigate = useNavigate();

function Bar() {
  return (
    <header>
        <div className='header-bar'>
            <p>ホーム</p>
            <p>マイページ</p>
        </div>
        <div className='header-time'>
          {/* <p>{getDate()}</p> */}
        </div>
        <div className='header-img'>
          <img src={sunny}></img>
        </div>
        <div className='weather-graph'>
          <Graph />
        </div>
        <div className='header-slider'>
          <p>日本</p>
          <p>全国</p>
          <p>東北</p>
        </div>
    </header>
  )
}

export default Bar;
