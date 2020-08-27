

document.addEventListener("keydown", function(event) {
  event.preventDefault();
  keyClass = getKeyClass(event.keyCode);
  removeClassToKey(keyClass, "released");
  addClassToKey(keyClass, "pressed");
})

document.addEventListener("keyup", function(event) {
  event.preventDefault();
  keyClass = getKeyClass(event.keyCode);
  removeClassToKey(keyClass, "pressed");
  addClassToKey(keyClass, "released");
})

function getKeyClass(keyCode) {
  return `.k${keyCode}`;
}

function addClassToKey(keyClass, state) {
  const pressedKey = document.querySelectorAll(keyClass);
  pressedKey.forEach(element => element.classList.add(state));
}

function removeClassToKey(keyClass, state) {
  const pressedKey = document.querySelectorAll(keyClass);
  pressedKey.forEach(element => element.classList.remove(state));
}