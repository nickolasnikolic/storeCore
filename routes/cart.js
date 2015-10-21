var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //in the case of get
  //list the products in the collection
  res.render('products', {
    cartId: 1,
    products:[
    {id:1,title:'widget 1', price: 2.21, description:'This is a test description.'},
    {id:2,title:'widget 2', price: 2.21, description:'This is a test description.'},
    {id:3,title:'widget 3', price: 2.21, description:'This is a test description.'},
    {id:4,title:'widget 4', price: 2.21, description:'This is a test description.'}
  ]});
});

module.exports = router;
