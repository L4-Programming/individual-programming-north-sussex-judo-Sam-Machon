/* Refer to the README.md for instructions on what you need to do in this project */

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's name address as userName (string/text)
  let userName = document.querySelector("#athlete-name").value;
  // Store the user's plan as userPlan (string/text)
  let userPlan = document.querySelector(
    'input[name="training-plan"]:checked'
  ).value;
  // Store the user's weight as userWeight (number)
  let userWeight = parseInt(document.querySelector("#current-weight").value);

  let userCompetitions = parseInt(
    document.querySelector("#competitions-entered").value
  );

  let userCoaching = parseInt(
    document.querySelector("#private-coaching-hours").value
  );

  console.log(userName, userPlan, userWeight, userCompetitions, userCoaching);
});
