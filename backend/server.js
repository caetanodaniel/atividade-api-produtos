const express = require('express')
const cors = require('cors')

const api = express()

api.use(cors())
api.use(express.json())

api.get('/', (request, response) => {

response.status(200).json([

    {
        nome: 'Xbox One',
        preco: 2500,
        categoria: 'Eletronicos',
        imagem: "https://cdn.awsli.com.br/396/396949/produto/13435041/3ec6087634.jpg"
    },

    {
        nome: 'Monitor Gamer',
        preco: 3000,
        categoria: 'Tablet',
        imagem: "https://i.zst.com.br/thumbs/12/37/19/-1128564962.jpg"
    },

    {
        nome: 'Controle de Ps4',
        preco: 150,
        categoria: 'Acessorios',
        imagem: "https://m.media-amazon.com/images/I/61kwdPH8+xL._AC_UF1000,1000_QL80_.jpg"
    }

])

})

api.listen(3000, () => {

    console.log('api ta funcionando');

})