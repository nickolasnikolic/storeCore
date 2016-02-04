var express = require('express');
var router = express.Router();
var moment = require('moment');
var mongoose = require('mongoose');

var CartSchema = mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  products: [],
  created: Date,
  updated: Date
});


var Cart = mongoose.model('Cart', CartSchema);

//create a cart
router.post('/create', function(req, res, next){
  var cart = new Cart({
    owner: req.body.user,
    products: [],
    created: moment().format(),
    updated: moment().format()
  });

  cart.save(function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });

});

//modify a cart
router.post('/update/:id', function(req, res, next){
  Cart.findById(req.params.id, function(err, result){
    if(err) throw err;
    result.products.push({product:req.body.product, quantity: req.body.quantity });
    result.updated = moment().format();
    result.save(function(err, cartItem){
      console.log(cartItem);
      res.status(200).send(result);
    });
  });
});

//get a user
router.get('/:id', function(req,res,next){

  Cart.findById( req.params.id, function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });

});

//delete a user
router.post('/delete', function(req, res, next){
  Cart.findByIdAndRemove( req.body.id, function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });
});

module.exports = router;
