const server = require("express").Router();
const { Videogame, Genero } = require('../db')
const axios = require('axios')
var Sequelize = require("sequelize");
const {API_KEY} = process.env;

const basePage1 = `https://api.rawg.io/api/games?key=${API_KEY}`;
const basePage2 = `https://api.rawg.io/api/games?key=${API_KEY}&page=2`;
const basePage3 = `https://api.rawg.io/api/games?key=${API_KEY}&page=3`;

//const baseParams = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;

// const baseNombre = `https://api.rawg.io/api/games?search=${name}`

let arrayDeDatos = [];

server.get("/", (req, res, next) => {
  let { name, limit, page } = req.query;

  if (name) {
    axios.get(`https://api.rawg.io/api/games?key=${API_KEY}?search=${name}`)
    .then((response)=>{
      res.send(response.data)
    })
    .catch(next)
  }

  if (limit && page) {
    let allVideogames = [];
    allVideogames = arrayDeDatos.slice(page, limit);
            res.send(allVideogames);
}
  //PRUEBA LLAMADO MÚLTIPLE

  // axios.all([
  //   axios.get(basePage1),
  //   axios.get(basePage2)
  // ])
  // .then(axios.spread((...responses)=>{
  //   const responseOne = responses[0]
  //   const responseTwo = responses[1]
  //   console.log(responseOne);
  //   console.log(responseTwo);
  // })
  // )


  axios.get(basePage3)
  .then(async (vg)=>{
    return await Promise.all(
        vg.data.results.map(j => {
          return ({
            id: j.id,
            nombre: j.name,
            descripcion: j.slug,
            fechaLanzamiento: j.released,
            rating: j.rating,
            plataformas: j.platforms[0]["platform"]["name"],
            vgImagen: j.background_image
          })
        })
    ).then(respuesta => {
      res.json(respuesta)
    })
  }).catch(next)

})

// server.get("/", (req, res, next) => {

//     let { name } = req.query;
//     if(name){
//         name = "%" + name + "%";
//         Videogame.findAll({
//       where: {
//         [Sequelize.Op.or]: [
//           {
//             nombre: {
//               [Sequelize.Op.iLike]: name,
//             },
//           },
//         ],
//       },
//     })
//       .then((vg) => {
//         res.json(vg);
//       })
//       .catch(next);
//     }
//     Videogame.findAll()
//     .then(juegos =>{
//         juegos.length > 0 ? res.json(juegos)
//         :
//         axios
//         .get(base)
//         .then(async juego => {
//             return await Promise.all(
//                 juego.data.results.map(j =>{
//                     return Videogame.create({
//                         nombre: j.name,
//                         descripcion: j.slug,
//                         fechaLanzamiento: j.released,
//                         rating: j.rating,
//                         plataformas: j.platforms,
//                         vgImagen: j.background_image
//                     })
//                 })
//             ).then(respuesta=>{
//                 res.json(respuesta)
//             })
//         })
//     }).catch(next)  
//   });


server.get('/:id', (req, res, next)=>{
  const id = req.params.id;
  axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    .then(vj => {
      console.log(vj.data);
      res.json(vj.data)
    }).catch(next)
    // Videogame.findByPk(id,{include: Genero})
    // .then(post =>{
    //     res.json(post)
    // }).catch(next)
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