import React, { useState } from 'react'
import Bar from './compornent/AppBar'
import MyWeather from './compornent/myWeather'
import WeatherLog from './compornent/weatherLog'

// const [auth, setAuth] = useState(true);

function App() {
  return (
    <div>
      <Bar />
      <MyWeather />
      <WeatherLog />
    </div>
  )
}

export default App
