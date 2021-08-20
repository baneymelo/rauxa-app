
const { PORT } = require('./config/config');

const app = require('./app');

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

module.exports = { app, server};