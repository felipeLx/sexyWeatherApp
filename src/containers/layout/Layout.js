import React, { useState } from 'react';

import Weather from '../../components/weather/Weather';
import classes from './Layout.module.css';

const Layout = () => {
    const [weather, setWeather] = useState([]);

    const APIKEY = '92b3106c3e65a153964c760a41a887c9';

    async function fetchData(e) {
        e.preventDefault();
        const lat = 139; //e.target.elements.lat.value;
        const lon = 35; //e.target.elements.lon.value;
        try{
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APIKEY}`)
            .then(res => res.json())
            .then(data => data);
            console.log(apiData);
            // if(lat && lon) {
            //     setWeather({
            //         data: apiData,
            //         lat: apiData.lat,
            //         lon: apiData.lon,
            //         description: apiData.weather[0].description,
            //         temperature: (apiData.main.temp - 273.15).toFixed(2),
            //         error: ""
            //     });
            // } else {
            //     setWeather({
            //         data: '',
            //         city: '',
            //         country: '',
            //         description: '',
            //         temperature: '',
            //         error:"Not possible to identify the location"
            //     });
            // }
        } catch(err) {
            alert(err.message);
        }
    };


    return (
            <div className={classes.Layout}>
                <button onClick={fetchData}>Check the weather condition</button>
                <hr />
                    <Weather 
                        lat={weather.lat}
                        lon={weather.lon}
                        description={weather.description}
                        temperature={weather.temperature}
                        error={weather.error}
                    />
            </div>
    );
};

export default Layout;