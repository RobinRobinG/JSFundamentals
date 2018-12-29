// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var app = express();
// Set static folder for html and css files.
app.use(express.static(__dirname + "/static"));
// Set location for ejs views
app.set('views', __dirname + '/views');
// set the view engine to ejs
app.set('view engine', 'ejs');

//cats page
app.get('/cats', function (req, res) {
  res.render('cats')
})

//details page
app.get('/:name', function (req, res) {
var cats_array = [
  {name: "cuddlecat", food: "noodle", age: 3, sleep: ["anywhere"], img:"images/cat4.jpg"}, 
  {name: "hungrycat", food: "pizza", age: 1, sleep:["under the couch","by the fireplace"], img:"images/cat3.jpg"}, 
  {name: "sleepycat", food: "hamburger", age: 2, sleep:["by the fireplace"], img:"images/cat1.jpg"},
  {name: "jellycat", food: "jelly beans", age: 4, sleep: ["on your computer"], img:"images/cat2.jpg"}
];
var selected_cat = req.params.name;
  res.render('details', {cats:cats_array,cat_name:selected_cat});
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("port 8000 is a magical kitty");
})