const express = require('express');
const api = express.Router();
const auth = require('../middleware/auth')
var bodyParser = require('body-parser');

const app = express()
const CamisetaController = require('../controllers/camisetamodel')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse application/json
app.use(bodyParser.json())

api.get('/product', CamisetaController.getCamisetas)
api.get('/product/:camisetaId', CamisetaController.getCamiseta)
api.post('/product', urlencodedParser, CamisetaController.setCamiseta)
api.delete('/product/:camisetaId', CamisetaController.deleteCamiseta)
api.put('/product/:camisetaId', urlencodedParser,CamisetaController.updateCamiseta )
api.get('/private', auth, function (req,res){} )


module.exports = api;