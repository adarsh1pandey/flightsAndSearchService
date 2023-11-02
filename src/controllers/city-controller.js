const {CityService} = require('../services/index');
const cityService = new CityService();

const create = async (req, res) => {
    try{
        const city = await cityService.createCity(req.body.name);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error,
        })
    }
}

const destroy = async (req, res) => {
    try{
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a city',
            err: error,
        })
    }
}

const get = async(req, res) => {
    try{
        const city = await cityService.deleteCity (req.params.id);
        console.log(city, "this is city guys");
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched a  city",
            err: {}
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get a city',
            err: error,
        })
    }
}

const update = async (req, res) => {
    try{
        const city = await cityService.updateCity(req.params.id, req.body.name);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched a  city",
            err: {}
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get a city',
            err: error,
        })
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities'
        });
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get all cities',
            err: error,
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}