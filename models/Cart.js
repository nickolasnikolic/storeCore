var mongoose = require('mongoose');

var CartSchema = mongoose.Schema({
    id:Number,
    created: Date,
    updated: Date,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    products: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Product'} ]
});

CartSchema.methods.findAll = function (cb) {
    return this.model('Cart').find({}, cb);
};

exports.Cart = mongoose.model('Cart', CartSchema);
