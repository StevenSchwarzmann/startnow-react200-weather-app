/* eslint no-console: "off" */
const server = require('./server');
const express = require('express');
require('dotenv').config()

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
