const mongoose = require('mongoose');
// const User = require("../models/user");
const dbname =require('../db/UserConnection').db;

const UserSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
});

const User = dbname.model('User', UserSchema);

module.exports = User;