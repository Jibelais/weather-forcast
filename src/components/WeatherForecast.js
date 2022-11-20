import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherForcast = (props) => {
    return(
        <div className="weather">
           <WeatherIcon img = {props.img}/>
           <WeatherData {...props}/>
        </div>
    
    )
}

export default WeatherForcast