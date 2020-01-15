import React from 'react';

import cloud from '../../assets/pictures/cloud.jpg';
import rain from '../../assets/pictures/rain.jpg';
import clear from '../../assets/pictures/clear.jpg';
import snow from '../../assets/pictures/snow.jpg';

const PicturesWoman = props => {
    let inputElement = [];

    switch(props.elementType) {
        case ('clear'):
            inputElement = {clear};
            break;
        case('rain'):
            inputElement = {rain};
            break;
        case('cloud'):
            inputElement = {cloud};
            break;
        case('snow'):
            inputElement = {snow};
            break;
        default:
            inputElement = null;                
    }

    return {inputElement}
};

export default PicturesWoman;