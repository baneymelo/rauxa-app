require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    RDS: {
        ENDPOINT: process.env.ENDPOINT,
        USER: process.env.DBUSER,
        PASSWORD: process.env.PASSWORD,
        DATABASE: process.env.DATABASE,
        DBPORT: process.env.DBPORT,
    },
    AWS: {
        ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
        SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
    }
}