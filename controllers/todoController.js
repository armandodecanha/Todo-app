const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to the dabase
mongoose.connect('mongodb+srv://armandodc:010495a@myment-zclbd.mongodb.net/test?retryWrites=true&w=majority')

// Create a schema
const todoSchema = new mongoose.Schema({
  item: String
})

// Create a model
const Todo = mongoose.model('Todo', todoSchema);

const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app) {

app.get('/todo', function(req, res) {
    Todo.find({}, function(err, data){
        if (err) throw err;
        res.render('todo', {todos: data});
    })
});

app.post('/todo', urlencodedParser, function(req, res) {
    const newTodo = Todo(req.body).save(function(err, data){
        if (err) throw err;
        res.json(data);
    })
});
  
app.delete('/todo/:item', function(req, res) {
    Todo.find({item: req.params.item.replace(/\-/g, "")}).deleteOne(function(err, data){
        if (err) throw err;
        res.json(data); 
    });
});
};