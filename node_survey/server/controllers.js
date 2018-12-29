module.exports = {

    home: function(req, res){
        data = {
            location: ['Chicago', 'San Jose', 'Seattle', 'Bellevue'],
            language: ['Python', 'JavaScript', 'C#', 'C++' ],
        }
        res.render('index', {data: data});
    },
    
    addSurvey: function(req, res){
        req.session.name = req.body.name;
        req.session.location = req.body.location;
        req.session.language = req.body.language;
        req.session.comment = req.body.comment;
        res.redirect('/result');
    },

    result: function(req, res){
        data = {
            name: req.session.name,
            location: req.session.location,
            language: req.session.language,
            comment: req.session.comment,
        }
        res.render('result', {result: data});
    }
};