const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const camisetaShema = new Schema({
    tipo: String,
    color: String,
    estampado:String

})


module.exports = mongoose.model('Camiseta',camisetaShema);