import React from 'react'

export default function WeatherCard({ data }) {
  const icon = data.weather && data.weather[0]?.icon
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null

  return (
    <div className="card">
      <div className="card-header">
        <h2>{data.name}</h2>
        {iconUrl && <img src={iconUrl} alt={data.weather[0].description} />}
      </div>
      <div className="grid">
        <div className="grid-item">
          <div className="label">Condition</div>
          <div className="value">{data.weather?.[0]?.description ?? '-'}</div>
        </div>
        <div className="grid-item">
          <div className="label">Temperature</div>
          <div className="value">{Math.round(data.main?.temp)} °C</div>
        </div>
        <div className="grid-item">
          <div className="label">Feels Like</div>
          <div className="value">{Math.round(data.main?.feels_like)} °C</div>
        </div>
        <div className="grid-item">
          <div className="label">Humidity</div>
          <div className="value">{data.main?.humidity}%</div>
        </div>
        <div className="grid-item">
          <div className="label">Wind</div>
          <div className="value">{Math.round(data.wind?.speed)} m/s</div>
        </div>
        <div className="grid-item">
          <div className="label">Pressure</div>
          <div className="value">{data.main?.pressure} hPa</div>
        </div>
      </div>
      <div className="updated">Updated: {new Date().toLocaleTimeString()}</div>
    </div>
  )
}
