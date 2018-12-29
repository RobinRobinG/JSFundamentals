const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dashboard',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

var PeopleSchema = new mongoose.Schema({
    name: {type: String, required:true, minlength: 3},
  }, {timestamps: true});
  
  module.exports = mongoose.model('People', PeopleSchema);
