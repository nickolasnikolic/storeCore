var express = require('express');
var router = express.Router();
require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(err, users, count){
    res.render( 'users', {users: users} );
  });
});

module.exports = router;
