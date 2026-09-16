const express = require('express')
const cors = require('cors')

const api = express()

api.use(cors())
api.use(express.json())

api.get('/', (request, response) => {
    response.status(200).json({
        "Nome": "PC Gamer ",
        "Preco": 10000,
        "Categoria": "Eletrônicos"
    })
})
api.listen(3000, () => {
    console.log('Api ta funcionando');
})