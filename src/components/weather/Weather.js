import React from 'react';

import classes from './Weather.module.css';
import cloud from '../../assets/pictures/cloud.jpg';
import rain from '../../assets/pictures/rain.jpg';
import clear from '../../assets/pictures/clear.jpg';
import snow from '../../assets/pictures/snow.jpg';

const keyWords = ['cloudy', 'clouds', 'cloud', 'overcast', 'clear', 'snow', 'rain'];

const Weather = ({description, lat, lon, error, temperature, props}) => {
    
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
                        return <img src={clear} alt="clear" />;
                    case 'clouds':
                        return <img src={cloud} alt="cloud" />;
                    case 'snow':
                        return <img src={snow} alt="snow" />;
                    case 'rain':
                        return <img src={rain} alt="rain" />;    
                    default:
                        return null;
                }
        }

        // let cssName = ".Layout--" + weatherState.toString();
    return (
        <div className={classes.Layout}>
            {lat && lon && <p>{lat}, {lon}</p>}
            {temperature && <p>{temperature} ºC</p>}
            {description && <p>Conditions: {description}</p>}
            {error && <p>{error}</p>}
            <div>
                {description && matchValues()}
            </div>
        </div>
    );
};

export default Weather;