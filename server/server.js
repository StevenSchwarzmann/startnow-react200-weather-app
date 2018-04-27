const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather/:search', (req,res) => {
    axios.get(`api.openweathermap.org/data/2.5/weather?q=' + ${ req.params.location } +'&APPID=' + ${ process.env.API_KEY }`)
    .then( res => {
        return res.send(response.data)
    }).catch(err => res.status(500).send(err))
})


module.exports = app;