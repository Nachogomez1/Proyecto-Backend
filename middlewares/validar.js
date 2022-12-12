const {Match} = require ("../models/partidos")

const validarId = async (req, res, next) =>{
    try {
            const item = await Match.findById(req.params.id)
        if (item!== null) {
            next()
        } else {
        res.status(500).json({msg: "El id es incorrecto"})
    }
    } catch (error) {
        res.status(500).json({error})
    }

}

module.exports = {validarId}