const axios = require('axios')
require('dotenv').config()
const nytController = {
    getArticlePlayer: async (name) => {
        let data;
        try{
            const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${name}&api-key=${process.env.NYTIMES_KEY}`
            const response = await axios.get(apiUrl)
            dados = response.data.response.docs[0]
            data = {
                sucess: true,
                abstract: dados.abstract,
                web_url: dados.web_url
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

module.exports = nytController