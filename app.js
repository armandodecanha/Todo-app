const express = require('express');
//const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const todoController = require('./controllers/todoController')

const app = express();

// Connect to the dabase
//mongoose.connect('mongodb+srv://armandodc:010495a@myment-zclbd.mongodb.net/test?retryWrites=true&w=majority')

// Create a schema - this is like a blueprint
/*const todoSchema = new mongoose.Schema({
  item: String
})

// Model
const Todo = mongoose.model('Todo', todoSchema)
*/
// Set up template engine
app.set('view engine', 'ejs');

// Static files
app.use("/public", express.static(__dirname + '/public'));
//app.use(express.static('./public'));

// Fire controllers
todoController(app);

// Listen to port
app.listen(3000);
console.log('You are listening to port 3000');
// MVC: Model (data)
// View (what we sent to the user)
// Controller (controlls certain sections of the app, simply data manipulation)