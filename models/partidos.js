const mongoose = require("mongoose")

const Schema = mongoose.Schema
const matchSchema = new Schema({
    equipo: {
        type: String,
        required: true,
    },
    estadio: {
        type: String,
        required: false
    },
    precioEntrada:{
    type: Number,
    required: false
    },
    ubicacionEstadio:{
        type: String,
        required: true
    },
    alojamiento:{
        type: Boolean,
        required: true
    }
})

const Match = mongoose.model("Match",matchSchema)
module.exports = {Match}