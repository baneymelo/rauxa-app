const { Sequelize } = require("sequelize");
const ImageModel = require("../models/Image");
const { RDS } = require('./config');

const Options = {
    host: RDS.ENDPOINT,
    port: RDS.DBPORT,
    logging: console.log,
    dialect: 'mysql',
    dialectOptions: {
        ssl: 'Amazon RDS'
      },
}

const sequelize = new Sequelize( RDS.DATABASE, RDS.USER, RDS.PASSWORD, Options)

const Image = ImageModel(sequelize, Sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log('DB Connected');
    })
    .catch(err => {
        console.log(err);
    })

module.exports =  {
    ImageSchema: Image
}