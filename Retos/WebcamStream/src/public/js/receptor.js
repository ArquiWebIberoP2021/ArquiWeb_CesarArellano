let img = document.getElementById('play');
let socket = io();

socket.on('stream', (image) => {
  img.src = image;
});
