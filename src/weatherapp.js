import React from 'react';
import './weatherapp.css';
import search_icon from './assets/search.png';
import cloud_icon from './assets/cloud.png';
import clear_icon from './assets/clear.png';
import rain_icon from './assets/rain.png';
import snow_icon from './assets/snow.png';
import drizzle_icon from './assets/drizzle.png';
import wind_icon from './assets/wind.png';
import humidity_icon from './assets/humidity.png';

const Weatherapp=()=> {
  let api_key="={your api_key}";
  const search=async()=>{
    const element=document.getElementsByClassName("cityInput");
    if(element[0].value==="")
    {
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response =await fetch(url);
    let data= await response.json();
    console.log(data);
    const humidity=document.getElementsByClassName("humidity-percent");
    const wind=document.getElementsByClassName("wind-rate");
    const temperature= document.getElementsByClassName("weather-temp");
    const location= document.getElementsByClassName("weather-location");
  
    humidity[0].innerHTML=data.main.humidity+"%";
    wind[0].innerHTML=data.wind.speed+"km/h";
    location[0].innerHTML=data.name;
    
    temperature[0].innerHTML=data.main.temp+"°C";


    const longitude=document.getElementsByClassName("longitude");
    const latitude=document.getElementsByClassName("latitude");
    console.log(longitude)
    console.log(latitude)
    longitude[0].innerHTML=data.coord.lon;
    latitude[0].innerHTML=data.coord.lat;
    let hf=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&lat=${latitude}&lon=${longitude}&appid=${api_key}`;
    let res =await fetch(hf);
    let dt= await res.json();
    console.log(dt);
  }
 
 

  return (
    <div className="container">
        <div className="navbar">
           <input type="text" className='cityInput' placeholder='Search'></input>
            <div className='search_icon' onClick={()=>{search()}}>
                <img src={search_icon} alt=""/>
            </div>
        </div>
            <div className="weather-image">
              <img src={cloud_icon} alt=""/>
            </div>
          
            <div className="weather-temp">24°c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
              <div className="element">
                <img src={humidity_icon}alt="" className="icon"/>
                <div className="data">
                  <div className="humidity-percent">64%</div>
                  <div className="text">Humidity</div>
                </div>
              </div>
              <div className='element'>
                <img src={wind_icon} alt="" className="icon"/>
                <div className='data'>
                  <div className='wind-rate'>18kmph</div>
                  <div className='text'>Wind Speed</div>
                </div>
              </div>
              <div className='longitude'>18kmph</div>
              <div className='latitude'>Wind Speed</div>
    </div>
      
    </div>
  )
}

export default Weatherapp;
