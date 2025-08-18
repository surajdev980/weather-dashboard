// Simple helper to call OpenWeatherMap Current Weather endpoint
export async function fetchWeatherByCity(city) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
  if (!apiKey) {
    throw new Error('Missing API key. Create a .env file with VITE_OPENWEATHER_API_KEY=your_key')
  }
  const url = new URL('https://api.openweathermap.org/data/2.5/weather')
  url.searchParams.set('q', city)
  url.searchParams.set('appid', apiKey)
  url.searchParams.set('units', 'metric')
  const res = await fetch(url.toString())
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`API error ${res.status}: ${text}`)
  }
  return res.json()
}
