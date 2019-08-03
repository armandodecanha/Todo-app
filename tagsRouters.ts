import { Mongoose } from "mongoose";

/*
The Net Ninja v.1.01
const http = require('http');

const server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('Escuchando el puerto.')
// Acá vemos "Hey ninjas" en la web local
*/

/*
The Net Ninja v.1.02
const http = require('http');
const fs = require ('fs');

const server = http.createServer(function(req, res) {
  // The response object is a writable stream so we can write to it
  console.log('request was made: ' + req.url); // See the requests
  res.writeHead(200, { 'Content-Type': 'text/html' }); // 200 status ok, {what type of content we are reading}
  const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); // Listening to data going down the Stream, create a read stream and reads the contents of this file
  myReadStream.pipe(res); // We have taken that read stram and we piped it into right stream (the response stream) and we use them to send information to writable streams to the client, and ends the responde.
});

server.listen(3000, '127.0.0.1');
console.log('Escuchando el puerto.')
// Acá vemos la web .html local
*/

/*
The Net Ninja v.1.03
const http = require('http');
const fs = require ('fs');

const server = http.createServer(function(req, res) {
  // The response object is a writable stream so we can write to it
  console.log('request was made: ' + req.url); // See the requests
  res.writeHead(200, { 'Content-Type': 'application/json' }); // 200 status ok, {what type of content we are reading}
  const myObj = {
    name: 'Armando',
    job: 'Ninja',
    age: 29
  }; // Create an object that we want to send back as JSON
  res.end(JSON.stringify(myObj)); // Send data, back to the client (espera un string o un buffer) Necesitamos serialize el Json y crearlo en una cadena (string en formato JSON)
});

server.listen(3000, '127.0.0.1');
console.log('Escuchando el puerto.')
// Acá enviaremos un json sin usar streams, sólo usaremos el método end. Y veremos el json en la web.
*/

/*
The Net Ninja v.1.04
const http = require('http');
const fs = require ('fs');

const server = http.createServer(function(req, res) {
  // The response object is a writable stream so we can write to it
  console.log('request was made: ' + req.url); /* Whenever we make a request to the server, we are logging this to the console,
  and we are accessing to a property on the request object called 'url', y eso se logea en la consola cada vez y por tanto escuchamos
  qué está escribiendo el usuario cada vez en la barra de direcciones, se logea y podemos ver qué petición hacen, y eso lo podemos usar
  para ver qué petición hicieron y enviarles data dependiendo de esa petición*/
/*if(req.url === '/home' || req.url === '/'){
  // Si visitan al alguno de estos dos, se les enviará este index.html file
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);// We need a read stream para leer este archivo
  } else if(req.url === '/contact'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url === '/api/ninjas'){
    var ninjas = [{name: 'Armando', age: 24}, {name: 'Yoshi', age: 18}];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('Escuchando el puerto.')
// Acá crearemos rutas, home, /, /contact, /api/ninjas (con un json), y una ruta a la que acceda si no accede a ninguna de las existentes (error 404 page), atrapa todas las rutas a las que acceda el usuario, que no existan y los redirija a la web de error.
*/

/*
// The Net Ninja v.1.05 - Express package (helps with routing, templating and such)
const express = require('express'); // nodejs grab that module and return it to us right here
const app = express();// (set up our express app) with this, we access to all of the functionality that Express comes baked with (we fire the function express(), here)

app.get('/', function(req, res){
  // Respond to a get request  when we go to the root directory (what whe obtain when we write a url on the url bar) (next is another object added by new functionalities of express)
  res.send('this is the homepage');
});
app.get('/contact', function(req, res){
  res.send('this is the contact page');
});
app.listen(3000);
// Installation, set up app, requests, methos and routes of express.
*/

/*
// The Net Ninja v.1.06 - Express package (helps with routing, templating and such)
const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('this is the homepage');
});
app.get('/contact', function(req, res){
  res.send('this is the contact page');
});
app.get('/profile/:id', function(req, res){
  res.send('You requested to see profile with the ID of ' + req.params.id) // store this parameter in it, the parameter name is id in this case
})
app.listen(3000);
// Route parameters
*/

/*
// The Net Ninja v.1.07 - Express package (helps with routing, templating and such)
const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});
app.get('/profile/:id', function(req, res){
  res.send('You requested to see profile with the ID of ' + req.params.id) // store this parameter in it, the parameter name is id in this case
})
app.listen(3000);
// Templating engines
*/

/*
// The Net Ninja v.1.08 - Express package
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});
app.get('/profile/:name', function(req, res){
  const data = {age: 24, job: 'ninja'};
  res.render('profile', {person: req.params.name, data: data}); // store this parameter in it, the parameter name is id in this case
})
app.listen(3000);
// Templating engines, and using ejs to inyect dinamic data (js, json, etc)into index.html
*/

/*
// The Net Ninja v.1.09
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});
app.get('/profile/:name', function(req, res){
  const data = {age: 24, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data}); // store this parameter in it, the parameter name is id in this case
})
app.listen(3000);
// Templating engines, and using ejs to inyect dinamic data (js, json, etc) into index.html
// (In this case: <% data.hobbies.forEach(function(item){ %>
// <li><%= item %></li>
// <% })) %>
*/

/*
// The Net Ninja v.1.10
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});
app.get('/profile/:name', function(req, res){
  const data = {age: 24, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data}); // store this parameter in it, the parameter name is id in this case
})
app.listen(3000);
// Partial views (parts of the web that repeats in other routes)
*/

/*
// The Net Ninja v.1.11
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); // Middleware baked on Express (assets is the directory that contains the css, maps the css)
//app.use('/assets', function(req, res, next){// next: we use this middleware, so now, go to the other middleware
  console.log(req.url);
  next(); // next: end there, go to the other middleware
});//
// ^Middleware will fire, baked on Express (will be used in every request that has been made)
app.get('/', function(req, res){
  res.sendFile('index'); // on the views > partials ejs files
});
app.get('/contact', function(req, res){
  console.log() // Middleware
  res.sendFile('contact'); // on the views > partials ejs files
});
app.get('/profile/:name', function(req, res){
  const data = {age: 24, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data}); // store this parameter in it, the parameter name is id in this case
})
app.listen(3000);
// Middlewares and static files
*/

/*
// The Net Ninja v.1.12
const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Connect to the dabase
mongoose.connect('mongodb+srv://armandodc:010495a@myment-zclbd.mongodb.net/test?retryWrites=true&w=majority')

// Create a schema - this is like a blueprint
const todoSchema = new mongoose.Schema({
  item: String
}) // What MongoDB is going to expect. This is going to take an object as a parameter,
// and in this object we are kind of declare what our
// to-do items are going to look like.
// All those to-do items are just gonna have one property,
// and that property name is going to be item

// Model
const Todo = mongoose.model('Todo', todoSchema) // Todo is the model name wich is going to be stored as a collection on MongoDB.
// The second parameter is the schema we are basing this model on.
const itemOne = Todo({item: 'buy Flowers'}).save(function(err){
  if (err) throw err;
  console.log('item saved');
})// We pass through the object that we want to provide wich is based on this schema.

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); // Middleware baked on Express (assets is the directory that contains the css, maps the css)
//app.use('/assets', function(req, res, next){// next: we use this middleware, so now, go to the other middleware
  console.log(req.url);
  next(); // next: end there, go to the other middleware
});//
// ^Middleware will fire, baked on Express (will be used in every request that has been made)
app.get('/', function(req, res){
  res.sendFile('index'); // on the views > partials ejs files
});
app.get('/contact', function(req, res){
  console.log() // Middleware
  res.sendFile('contact'); // on the views > partials ejs files
});
app.get('/profile/:name', function(req, res){
  const data = {age: 24, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data}); // store this parameter in it, the parameter name is id in this case
})
app.listen(3000);
// Handling post requests, install body_parser, mongoose and save an item
*/


// The Net Ninja v.1.13
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const tagsControllers = require('../controllers/tagsController')

// Connect to the dabase
mongoose.connect('mongodb+srv://armandodc:010495a@myment-zclbd.mongodb.net/test?retryWrites=true&w=majority')

// Create a schema - this is like a blueprint
const todoSchema = new mongoose.Schema({
  item: String
})

// Model
const Todo = mongoose.model('Todo', todoSchema)

// Set up template engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('/public'));

// Fire controllers
tagsControllers(app);

// Listen to port
app.listen(3000);
console.log('You are listening to port 3000');
// MVC: Model (data), View (what we sent to the user), Controller (controlls certain sections of the app, simply data manipulation)
*/

/*const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Myment = require('../models/Sign_up');

router.get('/', (req, res) =>
  Myment.findAll()
    .then(myment => {
      console.log(myment);
      res.sendStatus(200);
    })
    .catch(err => console.log(err)),
);
*/

//module.exports = router;
/*
import { Router } from 'express';
import { TagsController } from '../controllers/tagsControllers';
import { TagsRepositories } from '../repositories/tagsRepositories';
*/

//const router: Router = Router();

/*router.get('/', (req, res) =>
  Myment.findAll()
    .then(myment => {
      console.log(myment);
      res.sendStatus(200);
    })
    .catch(err => console.log(err)),
);

module.exports = router;
*/

/*
router.post('/', (req, res) => {
  controller
    .handleAddRequest(req.body)
    .then(data => res.json(data))
    .catch();
});
*/

/*
router.get('/get-tags', (req, res) => {
  controller
    .handleRequest(req.body)
    .then(data => res.json(data))
    .catch();
});
*/
//module.exports = { router };
// export const TagsRouters: Router = router;
