import React from 'react';

import cloud from '../../assets/pictures/cloud.jpg';
import rain from '../../assets/pictures/rain.jpg';
import clear from '../../assets/pictures/clear.jpg';
import snow from '../../assets/pictures/snow.jpg';
import few from '../../assets/pictures/wfclouds.png';

export const picturesWclear = () => {
    return <img src={clear} alt='clear' />;
};

export const picturesWrain = () => {
    return <img src={rain} alt='rain' />;
};

export const picturesWcloud = () => {
    return <img src={cloud} alt='cloud' />;
};

export const picturesWsnow = () => {
    return <img src={snow} alt='snow' />;
};

export const picturesWclouds = () => {
    return <img src={few} alt='few clouds' />;    
};