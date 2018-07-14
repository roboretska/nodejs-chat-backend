const user = require("./user");
const message = require("./message");


module.exports = function(app) {
    app.use("/users", user);
    app.use('/message', message);
};