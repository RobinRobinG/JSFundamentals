const controller = require('./controllers')
module.exports = function(app){
    app.get('/', controller.showall);
    app.get('/new/:name', controller.add);
    app.get('/remove/:name', controller.remove);
    app.get('/:name', controller.show);
}