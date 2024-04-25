const express = require("express");
const app = express();
const magic = require('express-routemagic')
const port = 3000;

app.use(express.json());
magic.use(app)

app.listen(port, () => {
    console.log(`Zenith server listening on port ${port}`);
});
