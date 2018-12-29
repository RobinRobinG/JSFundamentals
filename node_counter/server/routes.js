var controller = require('./controllers');

module.exports = function(app){
    app.get('/', controller.home);
    app.post('/addtwo', controller.addtwo);
    app.post('/reset', controller.reset);
}