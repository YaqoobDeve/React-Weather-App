# 🌤️ Weather App

A modern, responsive Weather App built with **React**, **Material UI**, and the **OpenWeather API**.  
It allows users to search for any city and instantly view real-time weather conditions including temperature, humidity, feels-like, and more.

---

## ✨ Features
- 🔍 **City Search** – Enter any city name to fetch live weather data.  
- 🌡️ **Real-time Weather Info** – Current temperature, min/max, humidity, and weather description.  
- 🎨 **Beautiful UI** – Styled with **Material UI** + custom CSS for a premium feel.  
- ⚡ **Fast & Responsive** – Compact search box with live results.  
- 🛠️ **Built with React Hooks** (`useState`) for clean state management.  

---

## 🚀 Tech Stack
- **Frontend:** React (Vite or CRA), Material UI (MUI)
- **Styling:** Custom CSS + MUI components
- **API:** [OpenWeather API](https://openweathermap.org/api)

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YaqoobDeve/weather-app.git
   cd weather-app
Install dependencies

bash
Copy
Edit
npm install
Get your API key

Sign up at OpenWeather

Replace the API_KEY inside SearchBox.jsx with your own key:

js
Copy
Edit
const API_KEY = "your_api_key_here";
Run the app

bash
Copy
Edit
npm run dev
Open http://localhost:5173 (Vite default) in your browser.

📂 Project Structure
css
Copy
Edit
weather-app/
│
├── src/
│   ├── components/
│   │   ├── SearchBox.jsx
│   │   ├── InfoBox.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
🔑 Example API Response
json
Copy
Edit
{
  "main": {
    "temp": 27.5,
    "feels_like": 29.1,
    "temp_min": 25.0,
    "temp_max": 30.0,
    "humidity": 65
  },
  "weather": [
    { "description": "clear sky" }
  ],
  "name": "Lahore"
}
🙌 Author
👤 Yaqoob Tariq

GitHub: YaqoobDeve

Email: yaqoobdeve@gmail.com

Twitter: @me_yaqoob

📝 License
This project is open source and free to use.
Feel free to fork and enhance it!
