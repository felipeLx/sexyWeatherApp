import React from "react";
import { geolocated } from "react-geolocated";
import Geocode from 'react-geocode';
 
const Geolocation = props => {

    
    const address = () => {
        Geocode.fromLatLng(this.latitude, this.longitude).then(
            response => {
            const lat = response.results    
            const address = response.results[0].formatted_address;
            console.log(address);
            },
            error => {
            console.error(error);
            }
        );
    }
    
        return !props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : props.coords ? (
            <p lat={props.coords.latitude}  lon={props.coords.longitude}></p>
        ) : (          
            <div>Getting the location data&hellip; </div>
        );
    }
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geolocation);