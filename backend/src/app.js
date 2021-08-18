const express = require('express');
const cors = require('cors');
const imageRouter = require('./routes/imageRouter');

const app = express();

require('./config/dbseed')

app.use(cors())
app.use(express.json())

app.use('/api/v0/', imageRouter)

module.exports = app;