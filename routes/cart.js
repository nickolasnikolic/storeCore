var express = require('express');
var router = express.Router();

var model = require('../models/Cart');

//create a cart
router.post('/create', function(req, res, next){
  var cart = new model.Cart({
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
  var cart = model.Cart();

  cart.findOneAndUpdate({ _id: req.params.id }, {
    $set:{
      products: req.body.products,
      updated: moment().format()
    }
  }, function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });
});

//get a user
router.get('/:id', function(req,res,next){

  var user = model.User();

  user.find({ _id: req.params.id }, function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });

});

//delete a user
router.post('/delete', function(req, res, next){
  var user = model.User;

  user.findOneAndRemove({'_id': req.body.id }, function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });
});

module.exports = router;
