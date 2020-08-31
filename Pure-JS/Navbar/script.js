// check if show-links is in the class or not, if not add it

// classList - show/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  /*
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  }
  else {
    links.classList.add("show-links");
  }
  */
 links.classList.toggle("show-links");
});