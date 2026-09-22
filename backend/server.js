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
        categoria: 'Eletronicos'
    },

    {
        nome: 'Monitor Gamer',
        preco: 3000,
        categoria: 'Tablet'
    },

    {
        nome: 'Controle de Ps4',
        preco: 150,
        categoria: 'Acessorios'
    }

])

})

api.listen(3000, () => {

    console.log('api ta funcionando');

})