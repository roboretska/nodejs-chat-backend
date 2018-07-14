const mongoose = require("mongoose");
const config = require("../config");

const connection = mongoose.createConnection(config.uriMessage, config.opts);

module.exports.db = connection;
