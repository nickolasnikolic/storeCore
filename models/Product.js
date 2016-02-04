var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    id:Number,
    title:String,
    price: Number,
    description:String,
    images:Array
});

ProductSchema.methods.findAll = function(cb){
    return this.model('Product').find({}, cb);
};

exports.Product = mongoose.model('Product', ProductSchema);
