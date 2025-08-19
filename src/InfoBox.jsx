import "./InfoBox.css"
export default function InfoBox({info}){

return(
    <div className="WeatherCard">
        <h2 className="City">{info.city}</h2>
        <p className="Weather">{info.weather}</p>
        <p className="Temp">{info.temp}°C</p>
        <p className="feelsLike">Feels like {info.feelsLike}°C</p>
        <div className="box">
            <div className="box-item">
                <p className="head">{info.tempmax}°C</p>
                <p>Max</p>
            </div>
            <div className="box-item">
                <p className="head">{info.tempmax}°C</p>
                <p>Min</p>
            </div>
            <div className="box-item">
                <p className="head">{info.humidity}%</p>
                <p>Humidity</p>
            </div>
        </div>
    </div>
)}