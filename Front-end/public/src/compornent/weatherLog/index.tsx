import React from 'react'
import WeatherJP from './weatherJP'
import WeatherNT from './weatherNT'
import './style.css';

function weatherLog() {
  return (
    <>
      <div className='weather-aria'>
          <p>日本</p>
          <p>全国</p>
          {/*loginUserの地域を表示 */}
          <p>東北</p>
      </div>
      <WeatherJP />
    </>
  )
}

export default weatherLog
