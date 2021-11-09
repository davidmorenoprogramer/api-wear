const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')


const userShema = new Schema({
    email : {type: String, unique:true, lowercase : true},
    name : String,
    password: String,
    signupDate : {type: Date, default: Date.now()},
    lastLogin : Date

})

//esta funcionalidad es propia de mongoose. Se activa antes de que se guarde el squema.
userShema.pre('save', (next)=> {

    let user = this
    // comprueba si el usuario no ha modificado su contraseña
    if (!user.isModified('password')) return next()
    bcrypt.genSalt(10,(err, salt)=>{

        if (err) return next(err)
        bcrypt.hash(user.password, salt, null, (err, hash)=>{
            if (err) return next(err)
            user.password = hash
            next()
        })

    })

})

userShema.method.gravatar = function() {
    if (this.email) return `https://gravatar.com/avatar/?s=200&d=retro`
    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}