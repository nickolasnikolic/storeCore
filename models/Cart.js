var mongoose = require('mongoose');

var CartSchema = mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    products: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Product', quantity: Number} ],
    created: Date,
    updated: Date
});


exports.Cart = mongoose.model('Cart', CartSchema);
