
const { PORT } = require('./config/config');

const app = require('./app');

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})