import React from 'react';

import cloud from '../../assets/pictures/mcould.png';
import rain from '../../assets/pictures/mrain.png';
import clear from '../../assets/pictures/mclear.png';
import snow from '../../assets/pictures/msnow.jpeg';
import few from '../../assets/pictures/mfclouds.png';

export const picturesMan = props => {

        switch(props.elementType) {
            case ('clear'):
                return <img src={clear} alt='clear' />;
            case('rain'):
                return <img src={rain} alt='rain' />;
            case('cloud'):
                return <img src={cloud} alt='cloud' />;
            case('snow'):
                return <img src={snow} alt='snow' />;
            case('few'):
                return <img src={few} alt='few clouds' />;    
            default:
                return null;                
        }
};
