'use strict';

const { response } = require('express');
const mongoose = require('mongoose');
const User = require('../models/user')

function signUp(req, res){
    const user = new User({
        email: req.body.email ,
        name: req.body.name 
        // no se pone la contraseña ya que se guarda al crear un usuario. usando el hash
        //tampoco la fecha actual, lo hace automaticamente
    })
    user.save((err)=>{
        
        if (err) res.status(500).send({message:`error al crear el usuario: ${err}`})
        return res.status(500).send({token: service.createToken(user)})
    })
}

function signIn(req, res){
    User.find({email: req.body.email} , (err, user) =>{
        if (err) res.status(500).send({message:` ${err}`})
        if (!user) res.status(404).send({message:`este usuario no existe: ${err}`})
        req.user = user
        res.status(200).send({
            message: `logueado correctamente`,
            token: service.createToken(user)

        })
    }  )  
    
}

module.exports = {signUp,signIn}