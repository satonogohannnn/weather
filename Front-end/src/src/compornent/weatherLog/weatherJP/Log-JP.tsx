import React from 'react'

type props = {
  title: string,
  author: string,
  overview: string,
}

function LogJP(weather: any) {
  return (
    <div>
      <h5>{weather.title}</h5>
      <p>{weather.overview}</p>
      <p>{weather.author}</p>
    </div>
  )
}

export default LogJP
