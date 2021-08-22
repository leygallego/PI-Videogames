const server = require("express").Router();
const { Genero } = require('../db')

server.post('/', (req, res, next)=>{
    const { nombre } = req.body
    Genero.create({
        nombre: nombre
    }).then(dieta=>{
        res.json(dieta)
    }).catch(next)
})

server.get('/', (req, res, next)=>{
    Genero.findAll()
    .then(dieta =>{
        res.json(dieta)
    }).catch(next)
})

module.exports =server