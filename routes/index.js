const express = require ("express")
const router = express.Router()
const {listadoPartidos, verPartido, crearPartido, index, vistaUnicaPartidos, editarPartido, eliminarPartido, apiExterna} = require("../controllers/indexController")
const {validarId} = require("../middlewares/validar")
const {check} = require ("express-validator")

//GET
router.get("/", index)
router.get("/ver-mis-partidos", verPartido)
router.get("/ver-mi-partido/:id", validarId, vistaUnicaPartidos)
router.get('/partidos-disponibles', listadoPartidos)

//POST
router.post('/crear-partidos',[
  check("equipo").not().isEmpty().withMessage("El campo Equipo es requerido.").isLength({min:4, max:15}).withMessage("El campo tiene que tener mas de 4 letras pero menos de 15."),
  check("ubicacionEstadio").not().isEmpty().withMessage("La ubicacion en el estadio es requerida."),
  check("alojamiento").not().isEmpty().withMessage("El campo alojamiento es requerido.")
] , crearPartido)

//PUT
router.put("/editar-partido/:id", validarId, [
  check("equipo").not().isEmpty().withMessage("El campo Equipo es requerido.").isLength({min:4, max:15}).withMessage("El campo tiene que tener mas de 4 letras pero menos de 15."),
  check("ubicacionEstadio").not().isEmpty().withMessage("La ubicacion en el estadio es requerida."),
  check("alojamiento").not().isEmpty().withMessage("El campo alojamiento es requerido.")
], editarPartido)

//DELETE
router.delete("/eliminar-partido/:id", validarId, eliminarPartido)

//API EXTERNA
router.get("/api-externa", apiExterna)

  module.exports = router