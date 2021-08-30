const server = require("express").Router();
const { Videogame, Genero } = require('../db')
const axios = require('axios')
var Sequelize = require("sequelize");
const {API_KEY} = process.env;

const base = `https://api.rawg.io/api/games?key=${API_KEY}`

server.get("/", (req, res, next) => {

    let { name } = req.query;
    if(name){
        name = "%" + name + "%";
        Videogame.findAll({
      where: {
        [Sequelize.Op.or]: [
          {
            nombre: {
              [Sequelize.Op.iLike]: name,
            },
          },
        ],
      },
    })
      .then((vg) => {
        res.json(vg);
      })
      .catch(next);
    }
    Videogame.findAll()
    .then(juegos =>{
        juegos.length > 0 ? res.json(juegos)
        :
        axios
        .get(base)
        .then(async juego => {
            return await Promise.all(
                juego.data.results.map(j =>{
                    return Videogame.create({
                        nombre: j.name,
                        descripcion: j.slug,
                        fechaLanzamiento: j.released,
                        rating: j.rating,
                        plataformas: j.platforms,
                        vgImagen: j.background_image
                    })
                })
            ).then(respuesta=>{
                res.json(respuesta)
            })
        })
    }).catch(next)  
  });


server.get('/:id', (req, res, next)=>{
    const {id} = req.params
    Videogame.findByPk(id,{include: Genero})
    .then(post =>{
        res.json(post)
    }).catch(next)
})

server.post('/', (req, res, next)=>{
    const { nombre, descripcion, fechaLanzamiento, rating, plataformas, vgImagen } = req.body
    Videogame.create({
        nombre: nombre,
        descripcion: descripcion,
        fechaLanzamiento: fechaLanzamiento,
        plataformas: plataformas,
        rating: rating,
        vgImagen: vgImagen,
    }).then(video=>{
        res.json(video)
    }).catch(next)
})


module.exports = server