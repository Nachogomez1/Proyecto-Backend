/*CODIGOS DE ESTADO HTTP */
// 100S (SOLICITUD INICIADA POR EL NAVEGADOR CONTINUA) - 200S (CODIGOS CON EXITO)
// 300S (REDIRECCIONAMIENTO) - 400S (ERROR DEL CLIENTE, PROBLEMA CON LA SOLICITUD)
// 500S (ERROR DEL SERVIDOR, ACEPTADOS PERO UN ERROR DEL SERVIDOR IMPIDIO QUE SE CUMPLA)

//200 OK - 201 CREADO
//404 NO ENCONTRO EL RECURSO SOLICITADO
//501 - NO IMPLEMENTADO 

const {Match} = require("../models/partidos")
const {validationResult} = require("express-validator")
const axios = require('axios');

const index = (req, res) =>{
    res.status(200).send("PROYECTO INTEGRADOR BACKEND :)")
}

const listadoPartidos = (req, res) =>{
    res.status(200).json({
        partido1: "Argentina vs Arabia Saudita",
        partido2: "Argentina vs Mexico",
        partido3: "Argentina vs Polonia",
        partido4: "Argentina vs Australia",
        partido5: "Argentina vs Paises Bajoes",
        partido6: "Argentina vs Croacia"
    })
}

const vistaUnicaPartidos = async(req, res) =>{
    const item = await Match.findById(req.params.id)
    res.status(200).json({item})
}

const crearPartido = async(req, res) =>{
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new Match(req.body)
            await item.save()
            res.status(201).json({item})
        } else {
            res.status(501).json({err})
        }
    } catch (error) {
        res.status(501).json({error})
    }
}

const verPartido = async (req, res) => {
    const items = await Match.find()
    res.status(200).json({items})
}

const editarPartido = async(req,res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
        await Match.findByIdAndUpdate(req.params.id,req.body)
        res.status(201).json({msg: "Se actualizo el partido con exito"})
    } else {
        res.status(501).json({err})
    }
    } catch (error) {
        res.status(501).json({error})
    }
}

const eliminarPartido = async(req,res) => {
    const item = await Match.findByIdAndDelete(req.params.id)
    res.status(204).json({msg: "El siguiente partido fue eliminado: ", item})
}

const apiExterna = async (req,res) => {
    try {
        const doc = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    res.status(200).json({data: doc.data, status: doc.status})
    } catch (error) {
        res.json({data: error.response.data, status: error.response.status})
    }
}

module.exports = {listadoPartidos, crearPartido, verPartido, vistaUnicaPartidos , editarPartido, eliminarPartido,apiExterna, index}