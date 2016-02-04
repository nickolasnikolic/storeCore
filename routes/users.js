var express = require('express');
var router = express.Router();

var model = require('../models/User');

/* POST  users listing. */
router.post('/', function(req, res, next) {
  var user = model.User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });
  user.save(function(err, result){
    if(err) throw err;
    res.redirect('/users');
  });
});

router.get('/', function(req,res,next){

  var user = model.User();

  user.findAll(function(err, result){
    if(err) throw err;
    res.render('users', {users: result});
  });

});

module.exports = router;
