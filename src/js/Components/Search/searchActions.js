const axios = require('axios');
//const API_KEY = 'f919f4eb27b76a9da7c634271581a158';
const API_KEY = '74accdf828a6548309c02e7d2d6ca63f'; //Dylans API

const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export function addCity(city) {
    return {
        type: "ADD_CITY",
        payload: city
    }
}

export function updateSearch(input) {
    return {
        type: 'UPDATE_SEARCH',
        payload: input
    }
}

export function apiSearch(CityInput) {
    const req = axios.get(`${ROOT_URL}&q=${CityInput}`);
    return {
        type: 'API_SEARCH',
        payload: req
    }
}

export function updateHistory(city) {
    const date = Date.now()
    return {
    type: 'UPDATE_HISTORY',
    payload:  city, date 
    }
}
