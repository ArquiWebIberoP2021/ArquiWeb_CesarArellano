// References
const modelObject = document.querySelector('#modelObject');
const model1 = document.querySelector("#btn1");
const model2 = document.querySelector("#btn2");
const model3 = document.querySelector("#btn3");
const model4 = document.querySelector("#btn4");
const model5 = document.querySelector("#btn5");

// Set model
modelObject.setAttribute("gltf-model","assets/models/car/scene.gltf");
modelObject.setAttribute("scale", ".5 .5 .5");
modelObject.setAttribute("rotation", "280 0 0");

// Events

model1.addEventListener("click", (e) => {
  modelObject.setAttribute("gltf-model","assets/models/car/scene.gltf");
  modelObject.setAttribute("scale", ".5 .5 .5");
  modelObject.setAttribute("rotation", "270 0 0");
});

model2.addEventListener("click", (e) => {
  modelObject.setAttribute("gltf-model","assets/models/halo/scene.gltf");
  modelObject.setAttribute("scale", "0.75 .75 .75");
  modelObject.setAttribute("rotation", "270 0 0");
});

model3.addEventListener("click", (e) => {
  modelObject.setAttribute("gltf-model","assets/models/link/scene.gltf");
  modelObject.setAttribute("scale", ".1 .1 .1");
  modelObject.setAttribute("rotation", "270 0 0");
});

model4.addEventListener("click", (e) => {
  modelObject.setAttribute("gltf-model","assets/models/microphone/scene.gltf");
  modelObject.setAttribute("scale", "1 1 1");
  modelObject.setAttribute("rotation", "270 0 0");
});

model5.addEventListener("click", (e) => {
  modelObject.setAttribute("gltf-model","assets/models/sea/scene.gltf");
  modelObject.setAttribute("scale", ".0025 .0025 .0025");
  modelObject.setAttribute("rotation", "270 0 0");
});