import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Lahore",
    weather: "clear sky",
    temp: 29.12,
    feelsLike: 32.99,
    tempmax: 29.12,
    tempmin: 29.12,
    humidity: 70,
    })
    let updateinfo = (result)=>{
        setWeatherInfo(result)
    }
    return(

        <div>
            <h1>WeatherApp</h1>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}