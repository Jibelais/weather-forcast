import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";
//since you are using the spread operator on props here, it is a good idea to keep props and not use the destructing, nice work!!!
const WeatherForcast = (props) => {
    return(
        <div className="weather">
           <WeatherIcon img = {props.img}/>
           <WeatherData {...props}/>
        </div>
    
    )
}

export default WeatherForcast