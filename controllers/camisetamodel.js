const Camiseta = require('../models/camiseta');

const camiseta = require('../models/camiseta');

function getCamisetas (req, res){  

    Camiseta.find({}, (err, camisetas) => {
        if (err) return res.status(500).send({message: 'error al realizar la peticion'})
        if (!camisetas) return res.status(404).send({message: 'la camiseta no existe'})
        res.status(200).send({camisetas})
    })

}


function getCamiseta (req,res){
    let camisetaId = req.params.camisetaId 
    Camiseta.findById(camisetaId, (err, camiseta) => {
        if (err) return res.status(500).send({message: 'error al realizar la peticion'})
        if (!camiseta) return res.status(404).send({message: 'la camiseta no existe'})
        res.status(200).send({camiseta:camiseta})
    })


}




function updateCamiseta (req,res){

    let camisetaId = req.params.camisetaId
    let update = req.body
    console.log(update)
    Camiseta.findByIdAndUpdate(camisetaId, update, {new: true}, (err, updatecamiseta)=>{
        
        if (!camiseta) return res.status(404).send({message: 'la camiseta no existe'})
        if (err) res.status(500).send({message: 'error al actualizar la camiseta'})
        res.status(200).send({ camiseta: updatecamiseta})
        console.log(update)
    })

}
function deleteCamiseta (req,res){


    let camisetaId = req.params.camisetaId
    Camiseta.findById(camisetaId, (err, camiseta) => {
        if (err) return res.status(500).send({message: 'error al realizar la peticion'})
        if (!camiseta) return res.status(404).send({message: 'la camiseta no existe'})
        camiseta.remove(err => {
            if (err) res.status(500).send({message: 'error al borrar la camiseta'})
            res.status(200).send({message: 'la camiseta a sido borrada'})
        })

    })
}


function setCamiseta (req,res){

    
    let camiseta = new Camiseta()
    camiseta.tipo = req.body.tipo
    camiseta.color = req.body.color
    camiseta.estampado = req.body.estampado

    camiseta.save((err, camisetaStored) => {
        if (err) res.status(500).send({message: 'error al salvar en la base de datos'})
        res.status(200).send({camiseta: camisetaStored})
    })


}


module.exports = {
    getCamisetas,
    getCamiseta,
    updateCamiseta,
    deleteCamiseta,
    setCamiseta
}