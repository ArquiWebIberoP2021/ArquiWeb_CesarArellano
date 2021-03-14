let img = document.getElementById('play');
let socket = io();

btn.addEventListener('click', () => {
  let canvas = document.querySelector("");
});

socket.on('stream', (image) => {
  img.src = image;
});
