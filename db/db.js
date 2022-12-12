const mongoose = require ("mongoose")
require("dotenv").config()

const connect = async() => {
    try {
        await mongoose.connect(process.env.CONECTMONGO)
        console.log("Base de datos conectada")
    } catch {
        console.log("No se pudo conectar a la base de datos")
    }
}

module.exports = {connect}