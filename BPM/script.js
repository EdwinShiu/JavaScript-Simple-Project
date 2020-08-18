let bpm = 0;
let counter = 0;
let initialize = false;
let startTime;
let endTime;
let press = 0;

const value = document.querySelector("#value");
const btn = document.querySelector(".btn");

btn.addEventListener('click', function(event) {
  if (event.currentTarget.classList.contains("reset")) {
    bpm = 0;
    counter = 0;
    initialize = false;
    press = 0;
    value.textContent = bpm;
    event.stopPropagation();
  }
});

document.body.addEventListener('click', function(e) {
  counter++;
  if (!initialize) {
    startTime = new Date().getTime();
    initialize = true;
  }
  else {
    endTime = new Date().getTime();
    press++;
    bpm = Math.round(press * 1000 * 60/ (endTime - startTime));
  }
  value.textContent = bpm;
})