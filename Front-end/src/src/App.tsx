import React, { useState } from 'react'
import Bar from './compornent/AppBar'
import MyWeather from './compornent/myWeather'
import WeatherLog from './compornent/weatherLog'
import { Fab } from '@mui/material'
import { Add } from '@mui/icons-material'

// const [auth, setAuth] = useState(true);

function App() {
  return (
    <div>
      <Bar />
      <MyWeather />
      <WeatherLog />
      <Fab size="large" color="secondary" aria-label="add">
        <Add />
      </Fab>
    </div>
  )
}

export default App
