const jwt = require('jwt-simple')
const moment = require('moment') //para el control de fechas
const config = require('../configdb')

function createToken(user){
    const payload = {
        sub: user._id, //esto es una mala practica ya que es recomendable que esta id sea diferente a la de la base de datos, en este caso es la misma para agilizar-
        iat: moment().unix(), //registra la fecha en la que se ha creado el token
        exp: moment().add(14,'days').unix(), //expira en 14 DIAS
    }

    return jwt.encode(payload,config.SECRET_TOKEN)
}

function decodeToken(token){
    const decode = new Promise((resolve, reject) => {
        try {
            payload = jwt.decode(token, config.SECRET_TOKEN)
            if (payload.exp <= moment().unix()){
                resolve({status: 401, message: `el token ha expirado`})
            }
            resolve(payload.sub)
        } catch (error) {
            reject({status: 500, message: `invalid token`})
        }

    })
    return decode
}

module.exports = createToken