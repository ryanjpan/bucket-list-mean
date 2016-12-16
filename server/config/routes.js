console.log('loading routes');
var users = require('./../controllers/users.js');
var items = require('./../controllers/items.js');

module.exports = function(app){
    app.get('/users', users.index);
    app.get('/users/exclude/:id', users.indexExclude);
    app.post('/user', users.create);
    app.get('/user/:id', users.show);
    app.put('/item/:id', items.update);
    app.post('/item', items.create);

}
