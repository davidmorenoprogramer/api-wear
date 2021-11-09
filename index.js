'use strict'

const express = require('express')
const mongoose = require('mongoose')
const configdb = require('./configdb')
const api = require('./Routers/Rutas')
const app = express()
app.use('/api',api)

mongoose.connect(configdb.db,(err,res)=>{
    if (err) throw err
    console.log('conexion a la base de datos establecida')
    app.listen(configdb.port, ()=> {    
    })
})

