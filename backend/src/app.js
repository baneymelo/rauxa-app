const express = require('express');
const cors = require('cors');
const imageRouter = require('./routes/imageRouter');
const swaggerUI = require("swagger-ui-express");
//const swaggerJsDoc = require("swagger-jsdoc");
const swaggerDocument = require('../docs/openapi/swagger.json');

require('./config/dbseed')

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api-docs", swaggerUI.serve);
app.get('/api-docs', swaggerUI.setup(swaggerDocument))

app.use('/v1/', imageRouter)

module.exports = app;