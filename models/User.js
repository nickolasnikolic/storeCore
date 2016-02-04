var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    firstName:String,
    lastName: String,
    email:String
});

exports.User = mongoose.model('User', UserSchema);
