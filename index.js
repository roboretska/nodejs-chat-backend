const express = require('express');
const bodyParser = require('body-parser');

const app=express();


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// const user = require('./routes/user');
// const message = require('./routes/message');
// const message = require('./routes/message');
//
// app.use('/user', user);
// app.use('/message', message);

const routs = require('./routes/routes')(app);

const server = app.listen(8000);
console.log('Server working on port 8000')