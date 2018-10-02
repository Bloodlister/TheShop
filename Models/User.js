const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 5;

const UserSchema = new mongoose.Schema({
    user: { type: String, unique: [true, "Username is already taken"] },
    password: { type: String },
    email: { type: String, unique: [true, "Email is already taken"] }
});

UserSchema.path('password').validate(function(password) {
    return password && password.length >= 6;
}, 'Minimum 6 characters');

UserSchema.path('user').validate(function(username) {
    return username && username.length >= 6;
}, 'Minimum 6 characters.');

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        this.password = hash;
        next();
    })
});

module.exports = mongoose.model('User', UserSchema);