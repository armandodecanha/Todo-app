const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to the dabase
mongoose.connect('mongodb+srv://armandodc:010495a@myment-zclbd.mongodb.net/test?retryWrites=true&w=majority')

// Create a schema - this is like a blueprint
const todoSchema = new mongoose.Schema({
  item: String
})

// Model
const Todo = mongoose.model('Todo', todoSchema);

// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}]; 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app) {

app.get('/todo', function(req, res) {
    // Get data from mongoDB and pass it to the view
    Todo.find({}, function(err, data){ /* (has a callback function) find method can seach out to a collection and find either all the items in that collection or a particular
        items in that collection. If we pass an empty object, we will get and retrieve all of the items in this Todo collection.
        If you want an especified item, we can write {item: 'buy flowers'} and it will find it in that collection (if it exists). */
        if (err) throw err;
        res.render('todo', {todos: data}); /* When we sayender a view, we are passing this object {todos: data}
        and we are using this 'data' variable, to pass through the view. Now we need to get the data from mongoDB itself.
        How do we do that? Specify wich model or collection we want to get from. And the model is there: Todo. */
    })
});

app.post('/todo', urlencodedParser, function(req, res) {
    // Get data from the view and add it to mongoDB
    const newTodo = Todo(req.body).save(function(err, data){ // Creating a newTodo item, and we are going to get the item from req.body because there's where we are passing it to.
        if (err) throw err;
        res.json(data);
    })
});// updated data, back to the view
  
app.delete('/todo/:item', function(req, res) {
    // Delete the requested item from mongoDB
    Todo.find({item: req.params.item.replace(/\-/g, "")}).deleteOne(function(err, data){/* Replacing the hyphens with a space,
        and then we are going to look for these in the Todo collection, we're going to find the item.
        We replace the hyphens with a space, because when it comes through as a URL, it has hyphen between the words, no spaces (omg <3)*/ 
        if (err) throw err;
        res.json(data); // Deletes it, then passes back the updated data.
    });
});
};