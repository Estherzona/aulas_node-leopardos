const express = require('express')
const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('estou utilizando o express')
})

