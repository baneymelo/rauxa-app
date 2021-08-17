const express = require('express');
const cors = require('cors');

const app = express();

require('./config/dbseed')

app.use(cors())
app.use(express.json())

module.exports = app;