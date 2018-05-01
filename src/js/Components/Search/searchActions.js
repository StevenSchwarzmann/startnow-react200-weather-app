const axios = require('axios');
const API_KEY = 'f919f4eb27b76a9da7c634271581a158';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export function updateSearch(CityInput) {
    const req = axios.get(`${ROOT_URL}&q=${CityInput}`);
    return {
        type: 'UPDATE_SEARCH',
        payload: req
    }
}

export function addHistory(city) {
    const date = Date.now()
    return {
    type: 'ADD_HISTORY',
    payload:  city, date 
    }
}
