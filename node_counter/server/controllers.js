module.exports = {
    home: function(req, res){
        if(req.session.counter === undefined){
            req.session.counter = 0;
        }
        else {
            req.session.counter ++;
        }
        res.render('index', {counter: req.session.counter});
    },
    addtwo: function(req, res){
        req.session.counter += 2;
        res.render('index', {counter: req.session.counter});
    },
    reset: function(req, res){
        req.session.counter = 0;
        res.render('index', {counter: req.session.counter});
    }
    
}