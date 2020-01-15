import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

import classes from './Weather.module.css';
import {picturesWclear, picturesWrain, picturesWcloud, picturesWsnow, picturesWclouds } from '../pictures/PicturesWoman.js';
import {picturesMan} from '../pictures/PicturesWoman.js';
// import cloud from '../../assets/pictures/cloud.jpg';
// import rain from '../../assets/pictures/rain.jpg';
// import clear from '../../assets/pictures/clear.jpg';
// import snow from '../../assets/pictures/snow.jpg';
// import few from '../../assets/pictures/wfcoulds.png'
// import mcloud from '../../assets/pictures/mcould.png';
// import mrain from '../../assets/pictures/mrain.png';
// import mclear from '../../assets/pictures/mclear.png';
// import msnow from '../../assets/pictures/msnow.jpeg';
// import mfew from '../../assets/pictures/mfclouds.png';

// const Woman = React.lazy(() => {
//     return import('../pictures/PicturesWoman.js');
// });
// const Man = React.lazy(() => {
//     return import('../pictures/PicturesMan.js');
// });
const keyWords = ['cloudy', 'few', 'cloud', 'overcast', 'clear', 'snow', 'rain'];

const Weather = ({description, temp_min, temp_max, error, temperature, wind, local, humidity}) => {
    const [manWeather, setManWeather] = useState(true);
    
    let weatherState = '';

    const matchValues = () => {
        const weatherDescription = description.split(' ');
            for(let i=0; i < weatherDescription.length; i++) {
                if(keyWords.includes(weatherDescription[i])) {
                    weatherState = weatherDescription[i];
                } 
            }
            if(manWeather) {
            console.log(weatherState);
                switch(weatherState) {
                    case ('clear'):
                        return {picturesWclear};
                    case('rain'):
                        return {picturesWrain};
                    case('cloud'):
                        return {picturesWcloud};
                    case('snow'):
                        return {picturesWsnow};
                    case('few'):
                        return {picturesWclouds};
                    default:
                        return null;
                        }
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