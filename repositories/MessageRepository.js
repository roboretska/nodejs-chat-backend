const connection = require("../db/UserConnection").db;
// const Repository = require("./generalRepository");
const model = require("../models/message");


module.exports.getAllMessages = function getAllMessages(senderId, receiverId) {
    const query = model.find({
        "senderId": senderId,
        "receiverId": receiverId
    });
    return query.exec();
};

module.exports.getMessage = function getMessage(id) {
    const query = model.findById(id);
    return query.exec();
};

module.exports.writeNewMessage = function writeNewMessage(senderId, receiverId, data) {
    console.log(data)
    const query = new model({
        'senderId': senderId,
        'receiverId': receiverId,
        'messageBody': data.messageBody
    });
    return query.save();
};

module.exports.editMessage = function editMessage(id, data) {
    console.log(data);
    const query = model.findByIdAndUpdate(id, {
        'messageBody': data.messageBody
    });
    return query.exec();
};

module.exports.deleteMessage = function deleteMessage(id) {
    const query = model.findByIdAndDelete(id);
    return query.exec();
};

module.exports.getUserChatmates = function getUserChatmates(id) {

    const query = model.aggregate([
        {'$match': {'$or': [{'senderId': id}, {'receiverId': id}]}},
        {'$project':{'senderId':1, 'receiverId':1, '_id':0,}},
    ]);
    // {_id: {'$cond': [{'senderId': id}, '$receiverId', '$senderId']}},
    // {_id: {'$cond': [{'senderId': id}, '$receiverId', '$senderId']}}}
    return query;
};