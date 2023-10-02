const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, 'templates')

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
}) /*get envia a informacao*/ 

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})

/*
    http://localhost:3000/ ==> localhost é a maquina e :3000 é a porta que colocamos
*/ 