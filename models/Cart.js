var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CartSchema = mongoose.Schema({
    id:Number,
    created: Date,
    updated: Date,
    products:[]
});

var Cart = mongoose.model('Cart', CartSchema);
