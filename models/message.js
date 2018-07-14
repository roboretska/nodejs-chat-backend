const mongoose = require('mongoose');
const dbname =require('../db/MessageConnection').db;

const MessageSchema = mongoose.Schema({

    senderId: String,
    receiverId: String,
    messageBody: String
});

const Message = dbname.model('Message', MessageSchema);

module.exports = Message;