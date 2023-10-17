const express = require("express");
const bodyParser = require('body-parser');
const {PORT} = require("./config/serverconfig");
const {City} = require('./models/index')
const CityRepository  = require('./repository/city-repository')


const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async () => {
        console.log(`server started at PORT number ${PORT}`)
        // await City.create({
        //     name: "New Delhi",
        // });
        const repo = new CityRepository();
        repo.createCity({name: "Varanasi"});
        console.log(City, "this is City guys")
    })
}

setupAndStartServer();