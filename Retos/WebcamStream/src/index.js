const express = require('express'); // Framework de NodeJS que nos permite montar un servidor Web para nuestra aplicación rápidamente.
const app = express();
const { writeFile } = require("fs");
const cors = require("cors"); // Permiso de peticiones.
const bodyParser = require("body-parser");
const uniqid = require("uniqid");
// Configuración del proyecto
app.set('appName','Webcam Stream Project'); // Nombre del proyecto
app.set('port', process.env.PORT || 3000); // Si hay un puerto asignado lo pondrá, si no utilizará el 3000.

// Creamos un servidor http a partir de la librería de Express
const http = require('http').Server(app);


app.use(cors());// Uso del middleware (permitir acceso a backend a cualquiera).

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

// Para generar una comunicación entre el emisor y el receptor, vamos a trabajar con socket.io (Es un Websocket que permite comunicación bidireccional (full duplex)).
// Usado en Microsoft Office, Trello.
const io = require('socket.io')(http);

// Especificamos el uso de rutas (también podrían ser dependencias).
app.use(require('./routes/webcamStreaming.routes'));

// Indicamos donde vamos a cargar los archivos html con los trabajaremos.
app.use(express.static(__dirname + "/public"));

// Endpoint para subir la imagen
app.post("/upload-image", (req, res) => {
  let base64Data = req.body.image.replace(/^data:image\/png;base64,/, "");
  let destination = `./src/public/images/${ uniqid() }.png`;
  writeFile(destination, base64Data, 'base64', function(err) {
    if(err){
      console.log(err);
      res.status(500).json({
        ok: "false"
      })
    }else{
      res.status(200).json({
        ok: "true"
      })
    }
  });  
});

// Generamos un evento para abrir una conexión multicanal del socket
// connection nombre reservado
io.on('connection', (socket) => {
  // Habilitamos evento de stream.
  socket.on('stream', (image) => {
    //Enviamos la imagen con el evento stream a todos los sockets conectados.
    socket.broadcast.emit('stream',image);
    
  });
});

http.listen(app.get('port'), () => {
  console.log('Servidor en el puerto 3000');
});
