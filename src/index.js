const express = require("express");
const bodyParser = require('body-parser');
const {PORT} = require("./config/serverconfig");
const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', ApiRoutes  )

    app.listen(3000 ,() => {
        console.log(`server started at PORT number 3000`)
    })
}

setupAndStartServer();