const express = require('express');

const routes = require('./src/routes');

const app = express();
const PORT = 3000;

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})
