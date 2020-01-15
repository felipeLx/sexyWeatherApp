import React from 'react';

import cloud from '../../assets/pictures/mcould.png';
import rain from '../../assets/pictures/mrain.png';
import clear from '../../assets/pictures/mclear.png';
import snow from '../../assets/pictures/msnow.jpeg';
import few from '../../assets/pictures/mfclouds.png';

export const picturesMclear = () => {
    return <img src={clear} alt='clear' />;
};

export const picturesMrain = () => {
    return <img src={rain} alt='rain' />;
};

export const picturesMcloud = () => {
    return <img src={cloud} alt='cloud' />;
};

export const picturesMsnow = () => {
    return <img src={snow} alt='snow' />;
};

export const picturesMclouds = () => {
    return <img src={few} alt='few clouds' />;    
};
