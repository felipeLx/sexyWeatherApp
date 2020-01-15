import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

import classes from './Weather.module.css';
import Woman from '../pictures/PicturesWoman.js';
// import cloud from '../../assets/pictures/cloud.jpg';
// import rain from '../../assets/pictures/rain.jpg';
// import clear from '../../assets/pictures/clear.jpg';
// import snow from '../../assets/pictures/snow.jpg';

const keyWords = ['cloudy', 'clouds', 'cloud', 'overcast', 'clear', 'snow', 'rain'];

const Weather = ({description, temp_min, temp_max, error, temperature, wind, local, humidity}) => {
    const [womanWeather, setWomanWeather] = useState(false);
    const [manWeather, setManWeather] = useState(true);
    
    let weatherState = '';

    const matchValues = () => {
        const weatherDescription = description.split(' ');
            for(let i=0; i < weatherDescription.length; i++) {
                if(keyWords.includes(weatherDescription[i])) {
                    weatherState = weatherDescription[i];
                } 
            }
            console.log(weatherState);
                switch(weatherState) {
                    case 'clear':
                        return <Woman elementType={weatherState} />;
                    case 'clouds':
                        return <Woman elementType={weatherState} />;
                    case 'snow':
                        return <Woman elementType={weatherState} />;
                    case 'rain':
                        return <Woman elementType={weatherState} />;
                    default:
                        return null;
                }
        }

    return (
        <div className={classes.Layout__&&`${weatherState}`}>
            <br />
            {local && <h1>{local}</h1>}
            <Table striped bordered hover responsive>
                <tbody>
                    <tr>
                        {temperature && <td>Temp: {temperature} ºC</td>}
                    </tr>    
                    <tr>
                        {description && <td>Conditions: {description}</td>}
                    </tr>
                    <tr>    
                        {temp_min && <td>Low: {temp_min} ºC</td>}
                    </tr>    
                    <tr>
                        {temp_max && <td>High: {temp_max} ºC</td>}
                    </tr>    
                    <tr>
                        {humidity && <td>Humidity: {humidity}%</td>}
                    </tr>    
                    <tr>
                        {wind && <td>Wind: {wind * 3.6} Km/h</td>}
                    </tr>    
                </tbody>
            </Table>
            {error && <p>{error}</p>}
            <div>
                {description && matchValues()}
            </div>
        </div>
        );
};

export default Weather;