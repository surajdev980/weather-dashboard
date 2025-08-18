# Live Weather Dashboard (Quick Start)

A simple, good-looking weather dashboard you can run locally in minutes.

## 1) Requirements
- Node.js (LTS) and npm installed
  - Check with: `node -v` and `npm -v`

## 2) Setup
1. Extract this zip.
2. Open a terminal in the extracted folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a **.env** file (in the project root) with your OpenWeatherMap API key:
   ```env
   VITE_OPENWEATHER_API_KEY=YOUR_API_KEY_HERE
   ```
   - Get a free key from: https://openweathermap.org/api

## 3) Run (Development)
```bash
npm run dev
```
- Open the URL shown in your terminal (usually http://localhost:5173)
- Try cities like: Mumbai, Delhi, London, New York

## 4) Build for Production (Optional)
```bash
npm run build
npm run preview
```

## 5) Notes
- **Auto-refresh:** the dashboard updates every 60 seconds.
- **Privacy:** Using the key in the frontend is OK for learning/demos. For production, you should add a backend (serverless function) to keep the key secret.
- **Change default city:** edit the initial state in `src/App.jsx`.

## 6) Troubleshooting
- If you see `Missing API key`, create `.env` and put your key as explained above.
- If you see a 401/404 from API, confirm the city spelling and that your key is active.
