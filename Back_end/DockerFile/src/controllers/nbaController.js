const axios = require('axios')
require('dotenv').config()

const nbaController = {
    getPlayerByName: async (name) => {
        let data;
        try{
        const config = {
            params: {search: name},
            headers: 
            { 
                'X-RapidAPI-Key': process.env.NBA_KEY,
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        }

        const response = await axios.get(
            `https://api-nba-v1.p.rapidapi.com/players`,
            config
        )
        datas = response.data.response[0]

        data = {
            sucess: true,
            name: datas.firstname + ' ' + datas.lastname,
            height: datas.height.meters,
            weight: datas.weight.kilograms,
            country: datas.birth.country,
            age: calcAge(datas.birth.date)
        }

        return data
    }
    catch(error){

        //Filtra mensagem de erro da API
        data = {
            sucess: false
        }
        return data;
    }
    }
}

function calcAge(date){
    var birthDate = new Date(date);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    return age;
}

module.exports = nbaController