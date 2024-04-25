const express = require("express");
const app = express();
const magic = require("express-routemagic");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

magic.use(app);

app.listen(port, () => {
    console.log(`Zenith server listening on port ${port}`);
});
