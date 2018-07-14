module.exports = {
    dbnameUsers: "user",
    uriUser: "mongodb://localhost:27017/users",
    dbnameMessage: "message",
    uriMessage: "mongodb://localhost:27017/message",
    opts: {
        useNewUrlParser: true,
        auto_reconnect: true,
        poolSize: 40
}
};