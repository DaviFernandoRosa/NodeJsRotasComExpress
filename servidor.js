const express = require('express')
const app = express()
const porta = process.env.PORT


app.get('/',(req,res)=>{
    res.send('Seja Bem vindo!')
})

app.get('/server',(req,res)=>{
    res.json({Teste:'Servidor rodando no Browser!'})
})

app.listen(porta || 3000,()=>{console.log('Servidor rodando.')})