var express = require('express');
var router = express.Router();

var model = require('../models/Product');

//create a product
router.post('/create', function(req, res, next) {
    var product = model.Product({
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        images: req.body.images
    });
    product.save(function(err, result){
        if(err) throw err;
        res.status(200).send(result);
    });
});


//modify a product
router.post('/update/:id', function(req, res, next){
    var product = model.Product();

    product.findOneAndUpdate({ _id: req.params.id }, {
        $set:{
            id: req.body.id,
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            images: req.body.images
        }
    }, function(err, result){
        if(err) throw err;
        res.status(200).send(result);
    });
})

//get a product
router.get('/:id', function(req,res,next){

    var product = model.Product();

    product.find({ _id: req.params.id }, function(err, result){
        if(err) throw err;
        res.status(200).send(result);
    });

});

//delete a product
router.post('/delete', function(req, res, next){
    var product = model.Product;

    product.findOneAndRemove({'_id': req.body.id }, function(err, result){
        if(err) throw err;
        res.status(200).send(result);
    });
});

module.exports = router;
