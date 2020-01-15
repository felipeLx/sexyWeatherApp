import React, { useState } from 'react';

import Weather from '../../components/weather/Weather';
import { geolocated } from "react-geolocated";
import classes from './Layout.module.css';
import { GAPI } from "../../../request";

const Layout = props => {
    const [weather, setWeather] = useState([]);
    const [screenOpen, setScreenOpen] = useState(false);
    let lat = '';
    let lon = '';
    
    async function fetchData(e) {
        e.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
          }
          function getPosition(position) {
              lat = position.coords.latitude;
              lon = position.coords.longitude;
            console.log(position.coords.latitude, position.coords.longitude);
          }
        
        try{
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${GAPI}`)
            .then(res => res.json())
            .then(data => data);
            console.log(apiData);
            if(lat && lon) {
                setScreenOpen(!screenOpen);
                setWeather({
                    data: apiData,
                    description: apiData.weather[0].description,
                    temperature: (apiData.main.temp - 273.15).toFixed(2),
                    temp_min: (apiData.main.temp_min - 273.15).toFixed(2),
                    temp_max: (apiData.main.temp_max - 273.15).toFixed(2),
                    humidity: apiData.main.humidity,
                    wind: apiData.wind.speed,
                    local: apiData.name,
                    error: ""
                });
            } else {
                setWeather({
                    data: '',
                    description: '',
                    temperature: '',
                    temp_min: '',
                    temp_max: '',
                    humidity: '',
                    wind: '',
                    local: '',
                    error:"Not possible to identify the location"
                });
            }
        } catch(err) {
            alert(err.message);
        }
    };

    return (
            <div className={classes.Layout}>
                <button onClick={fetchData}>Check the weather condition</button>
                <hr />
                    {screenOpen && <Weather 
                        description={weather.description}
                        temperature={weather.temperature}
                        temp_min={weather.temp_min}
                        temp_max={weather.temp_max}
                        humidity={weather.humidity}
                        wind={weather.wind}
                        local={weather.local}
                        error={weather.error}
                    />}
            </div>
    );
};

export default  geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Layout);