var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    firstName:String,
    lastName: String,
    email:String
});

// assign a function to the "methods" object of our animalSchema
UserSchema.methods.findAll = function (cb) {
    return this.model('User').find({}, cb);
};

exports.User = mongoose.model('User', UserSchema);
