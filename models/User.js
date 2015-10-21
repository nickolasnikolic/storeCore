var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
    firstName:String,
    lastName: String,
    email:String
});

var User = mongoose.model('User', UserSchema);
