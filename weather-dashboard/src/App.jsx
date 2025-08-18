import React, { useEffect, useRef, useState } from 'react'
import WeatherCard from './WeatherCard.jsx'
import { fetchWeatherByCity } from './api.js'

export default function App() {
  const [city, setCity] = useState('Mumbai')
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const timerRef = useRef(null)

  async function load() {
    if (!city) return
    try {
      setLoading(true)
      setError('')
      const res = await fetchWeatherByCity(city)
      setData(res)
    } catch (e) {
      setError(e.message || 'Failed to fetch weather')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  function startAutoRefresh() {
    if (timerRef.current) clearInterval(timerRef.current)
    // auto-refresh every 60 seconds
    timerRef.current = setInterval(load, 60000)
  }

  useEffect(() => {
    load()
    startAutoRefresh()
    return () => timerRef.current && clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  return (
    <div className="container">
      <h1>Live Weather Dashboard</h1>
      <div className="controls">
        <input
          className="input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city (e.g., Mumbai)"
          onKeyDown={(e) => {
            if (e.key === 'Enter') load()
          }}
        />
        <button className="button" onClick={load} disabled={loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>

      {error && <div className="error">⚠️ {error}</div>}
      {data && <WeatherCard data={data} />}

      <p className="tip">
        Tip: Results refresh automatically every 60 seconds. Change the city and press Enter or click Get Weather.
      </p>
    </div>
  )
}
