const connection = require("../db/UserConnection").db;
// const Repository = require("./generalRepository");
const model = require("../models/user");



module.exports.getAll = function getAll() {
    const query = model.find();
    return query.exec();
};

module.exports.getUser = function getUser(id) {
    const query = model.findById(id);
    return query.exec();
};

module.exports.createUser = function createUser(data) {
    const query = new model({
        name: data.name,
        username: data.username,
        email: data.email,
        phone: data.phone
    });
    return query.save();
};

module.exports.updateUserInfo = function updateUserInfo(id, data) {
    const query = model.findByIdAndUpdate(id,{name: data.name,
                username: data.username,
                email: data.email,
                phone: data.phone});
    return query.exec();
};

module.exports.deleteUser = function deleteUser(id) {
    const query = model.findByIdAndDelete(id);
    return query.exec();
};


