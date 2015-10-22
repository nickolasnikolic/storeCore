var express = require('express');
var router = express.Router();

var users = [{firstName:'bill',lastName:'brother',email:'a@b.c'}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render( 'users', {users: users} );
});

router.get('/test', function(req,res,next){
  res.send('just a test, don\'t panic.');
});

module.exports = router;
