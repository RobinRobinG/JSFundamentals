var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

//bring the the routes.js file from the server folder
require('./server/routes')(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("port 8000 is a magical kitty");
  })