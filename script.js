const surveyForm = document.getElementById("survey-form");
const description = document.getElementById("description");
const breakLine = document.getElementById("form-break-line");

surveyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  surveyForm.hidden = true;
  breakLine.hidden = true;

  description.textContent =
    "Thank you for submitting the survey! Just a heads-up, this doesn’t actually send your answers anywhere. It’s only a simulation since this is my first project for this certification. Thanks for checking it out!";
});
description.classList.add("thank-you-message");
