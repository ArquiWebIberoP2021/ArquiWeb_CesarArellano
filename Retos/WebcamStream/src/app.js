const express = require('express');
const app = express();

// Creamos un servidor http a partir de la librería de Express
const http = require('http').Server(app);

// Para generar una comunicación vamos a trabajar con socket.io
const io = require('socket.io')(http);

//routes
app.use(require('./routes/webcamStreaming.routes'));

// Donde vamos a cargar los html con lo que vamos a trabajar.
app.use(express.static(__dirname + "/public"));

// Abra el socket
io.on('connection', (socket) => {
  socket.on('stream', (image) => {
    //Emitir el evento a todos sockets conectados.
    socket.broadcast.emit('stream',image);
  });
});

module.exports = http;

