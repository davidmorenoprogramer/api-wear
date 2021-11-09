const services = require('../services')

function isAuth(req,res,next){

    if (!req.headers.authorization){
        res.state(403).send({message:'no tienes autorizacion'})

    }

   services.decodeToken()
    .then(response =>{
        req.user = response
        next()
    })
    .catch(response =>{
        res.status(response.status)
    })
}

module.exports = isAuth