var controller = require('./controllers');

module.exports = function(app){
    app.get('/', controller.home);
    app.post('/addSurvey', controller.addSurvey);
    app.get('/result', controller.result);
}