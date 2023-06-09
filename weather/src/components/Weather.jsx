import React from "react";
import "./Weather.css"

export const Weather = ({data})=>{

    return(
       <div className="weatherdetails">
<div className="icons">
    <div className="wea">
        <img className="weat" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
    
    <p>{data.weather[0].main}</p>
    </div>
    <p className="temp">{data.main.temp.toFixed(0)}°C</p>
</div>


<div className="weatherdetails1">
    <p>Weather in {data.name}</p>
    <div id="p1">
        <p>{data.main.feels_like.toFixed(0)}°C</p>
        <p>Feels like</p>
    </div>
    <div id="p2">
        <p>{data.main.humidity.toFixed(0)}</p>
        <p>Humidity</p>
    </div>
    <div id="p3">
        <p>{data.wind.speed.toFixed(0)}MPH</p>
        <p>Winds</p>
    </div>
</div>

        </div>
    )
}