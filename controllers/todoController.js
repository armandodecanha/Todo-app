const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to the dabase
mongoose.connect('mongodb+srv://armandodc:010495a@myment-zclbd.mongodb.net/test?retryWrites=true&w=majority')

// Create a schema - this is like a blueprint
const todoSchema = new mongoose.Schema({
  item: String
}) // What kind of information MongoDB is going to expect. This is going to take an object as a parameter,
// and in this object we are kind of declare what our
// to-do items are going to look like.
// All those to-do items are just gonna have one property,
// and that property name is going to be item

// Model
const Todo = mongoose.model('Todo', todoSchema) // Todo is a model name wich is going to be stored as a
// collection on MongoDB. The second parameter is the schema we are basing this model on.
const itemOne = Todo({item: 'buy Flowers'}).save(function(err){ // We have created an item of type Todo. 
//When we save Todo and pass in an object wich it expects, it then returns an object to us with a save method on it.
  if (err) throw err;
  console.log('item saved');
})// We pass through the object that we want to provide wich is based on this schema.


var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}]; // Dummy data
const urlencodedParser = bodyParser.urlencoded({ extended: false }) // Middleware that we will run in the post request

module.exports = function(app) {

app.get('/todo', function(req, res) {
    res.render('todo', {todos: data}); // data (array) is being passed through the view in this item (this property name)
});

app.post('/todo', urlencodedParser, function(req, res) {
    data.push(req.body) // Added this data to that array
    res.json(data); // Send the data back to the front end
});
  
app.delete('/todo/:item', function(req, res) {
    data = data.filter(function(todo){ // Method called filter on the data (the array of objects)
        return todo.item.replace(/ /g, '-') !== req.params.item; // Returns a true (item remains on the array) or false (item comes out of the array)
    })
    res.json(data); // Send the data back to the front end
});

};