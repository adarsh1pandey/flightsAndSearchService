const {City} = require('../models/index');
const {Op} = require('sequelize');

class CityRepository{
    async createCity(name) {
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Something went wrong in the city repository ")
            throw {error}
        }
    }
    async deleteCity(cityId) {
        try{
            const result = await City.destroy({
                where:{
                    id: cityId,
                }
            })
            return result;
        }catch(error){
            console.log("Something went wrong in the city repository")
            throw {error}
        }
    }
    async updateCity (cityId, data) {
        try {
            
            // the below code is also going to work but will not return updated object
            // if we are using pgsql returning true can be used else not

            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // })

            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            console.log(city, "this is city guys  ")
            city.name = data.name;
            await city.save();
            return city;
            // return city;
        }catch(error){
            console.log("Something went wrong in the repository layer")
            throw {error}
        }

    }

    async getCity(cityId) {
        try{

            const city = await City.findByPk(cityId);
            
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error}
        }
    }
    async getAllCities(filter){
        try{
            if (filter.name){
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            console.log(cities, "this is all cities guys ")
            return cities;
        }catch(error){
            console.log("Something went wrong in the repository layer")
            throw {error}
        }
    }
}

module.exports = CityRepository;