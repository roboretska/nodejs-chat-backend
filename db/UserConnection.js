    const mongoose = require("mongoose");
    const config = require("../config");

    const connection = mongoose.createConnection(config.uriUser, config.opts);

    module.exports.db = connection;
