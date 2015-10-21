var express = require('express');
var router = express.Router();
require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(err, users, count){
    res.render( 'users', {users: users} );
  });
});
router.post('/',function(req, res){
  new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }).save(function(err, user, count){
    if(err){
      res.status(400).send('error saving new contact: ' + err );
    }
  });
});
module.exports = router;
