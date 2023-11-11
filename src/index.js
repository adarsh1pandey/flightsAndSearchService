const express = require("express");
const bodyParser = require('body-parser');
const {PORT} = require("./config/serverconfig");
const ApiRoutes = require('./routes/index');

const db = require('./models/index')


const {Airport, City} = require('./models/index') 

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', ApiRoutes  )

    app.listen(3000 ,async () => {
        console.log(`server started at PORT number 3000`);
        // const airports = await Airport.findAll({include:[{ model: City}]});
        // console.log(airports, "this is all airports");
        // const airports = await City.findAll({
        //     where: {
        //         id: 9
        //     }, 
        //     include: [{
        //         model: Airport
        //     }]
        // })

        // const result = db.sequelize.sync({alter: true});

        const city = await City.findOne({
            where: {
                id: 30,
            }
        })
        console.log(city, "this is city guys ")
    })
}

setupAndStartServer();