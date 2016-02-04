var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    id:Number,
    title:String,
    price: Number,
    description:String,
    images:Array
});

exports.Product = mongoose.model('Product', ProductSchema);
