var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];

module.exports = function(app) {

app.get('/todo', function(req, res) {
    res.render('todo', {todos: data}); // data (array) is being passed through the view in this item (this property name)
});

app.post('/todo', function(req, res) {});
  
app.delete('/todo', function(req, res) {});

};