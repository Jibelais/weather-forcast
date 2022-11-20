import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForcast from "./components/WeatherForecast"

const weather = weatherData.map((ele, index)=>{
    return <WeatherForcast {...ele} key={index}/>

})

console.log(weather)

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>
         {weather}
      </section>
     
    </div>
   
  );
}
