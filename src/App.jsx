import { useState } from 'react'
import Button from '@mui/material/Button';
import SearchBox from './SearchBox';
import './App.css'
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <WeatherApp/>
  )
}

export default App
