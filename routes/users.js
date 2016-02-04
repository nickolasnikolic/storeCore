var express = require('express');
var router = express.Router();

var model = require('../models/User');

//create a user
router.post('/create', function(req, res, next) {
  var user = model.User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });
  user.save(function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });
});


//modify a user
router.post('/update/:id', function(req, res, next){
  var user = model.User();

  user.findOneAndUpdate({ _id: req.params.id }, {
    $set:{
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }
  }, function(err, result){
    if(err) throw err;
    res.status(200).send(result);
  });
})

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
