let canvas = document.querySelector('#preview');
// Pintar imagen de 2D
let context  = canvas.getContext('2d');
let btnEmit = document.querySelector('#btnEmit');
let btnStop = document.querySelector('#btnStop');
let btnScreenshot = document.querySelector('#btnScreenshot');

canvas.style.display = 'none';
canvas.width = 600;
canvas.height = 450;

context.width =  canvas.width;
context.height =  canvas.height;    

let socket = io();
let img = document.querySelector('#blackScreen');
let video = document.querySelector('#video');
video.style.display = 'none';

function publicarMensaje(status ,title, msg) {
  swal({
    type: status,
    title: title,
    html: msg,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok!'
  })
}

function loadWebcam(stream) {
  video.srcObject = stream;
  btnEmit.classList.add("disabled");
  btnStop.classList.remove("disabled");
  btnScreenshot.classList.remove("disabled");
  publicarMensaje("success", "Bien hecho", "Se comenzó a transmitir");
}

function errorWebcam() {
  publicarMensaje("error", "Ups...", "Cámara ha fallado, verifique los permisos de acceso");
}

function verVideo(video, context) {
  context.drawImage(video, 0, 0, context.width, context.height);
  socket.emit('stream', canvas.toDataURL('image/jpg'));
}

btnEmit.addEventListener('click', () => {
  // Obtener datos dependiendo del navegador.
  video.style.display = 'block';
  img.style.display = 'none';
  navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia)
  if(navigator.getUserMedia) {
    navigator.getUserMedia({video:true}, loadWebcam, errorWebcam);
  }
  let interval = setInterval(() => {
    verVideo(video,context);
  }, 0);
  
});

btnStop.addEventListener('click', () => {
  btnEmit.classList.remove("disabled");
  btnStop.classList.add("disabled");
  btnScreenshot.classList.add("disabled");
});

btnScreenshot.addEventListener('click', async () => {
  const image = canvas.toDataURL('image/jpg');
  const dataImage = JSON.stringify({
    image
  });
  try{

    let response = await fetch("http://localhost:3000/upload-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: dataImage
    });
    let data = await response.json();
    console.log(data);
  }catch(error){
    console.error("Ha ocurrido un error", error);
  }

  
})