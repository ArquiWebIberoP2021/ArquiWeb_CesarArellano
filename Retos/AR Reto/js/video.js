// References
const marker = document.querySelector("a-marker");
const video = document.querySelector('#mivideo');
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

// Events

btn1.addEventListener("click", (e) => {
  video.muted = false;
});

btn2.addEventListener("click", (e) => {
  video.muted = true;
});

btn3.addEventListener("click", (e) => {
  video.pause();
});

btn4.addEventListener("click", (e) => {
  video.play();
});

marker.addEventListener("markerFound", (e) => {
  video.play();
});

marker.addEventListener("markerLost", (e)=>{
  video.pause();
});


