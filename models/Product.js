var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = mongoose.Schema({
    id:Number,
    title:String,
    price: Number,
    description:String,
    images:Array
});

var Product = mongoose.model('Product', ProductSchema);
