var People = require('./models.js');

module.exports ={
    showall: function(req, res){
        People.find({}, function(err, data) {
          if(err) {
            console.log("Returned error", err);
            res.json({message: "Error", error: err});
          } else { 
            res.json({message: "Success", data: data});
          }
        })
    },
    show: function(req, res){
        const showone = req.params.name;
        People.findOne({ name: showone }, function(err, data) {
            if(err) {
              console.log("Returned error", err);
              res.json({message: "Error", error: err});
            } else { 
              res.json({message: "Success", data: data});
            }
        })
    },
    add: function(req, res) {
        const newpeople = req.params.name;
        const people = new People({ name: newpeople });
        people.save(function(err, data) {
          if(err) {
              console.log("Returned error", err);
              res.json({message: "Error", error: err});
          } else {
              res.json({message: "Success", data: data});
          }
        });
    },
    remove: function(req, res) {
        const removepeople = req.params.name;
        People.remove({ name:removepeople }, function(err, data){
          console.log("RECORD DELETED");
          res.json({message: "Delete", data: data});
        })
    }
} //end of module.exports