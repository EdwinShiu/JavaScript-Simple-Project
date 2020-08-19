

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
  const btn = question.querySelector(".question-btn");    // btn within the question
  btn.addEventListener("click", function() {
    questions.forEach(function(item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    })
    question.classList.toggle("show-text");               // add show-text to the question
  })
})



/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    btn.parentElement.parentElement.classList.toggle("show-text");
  })
});
*/
