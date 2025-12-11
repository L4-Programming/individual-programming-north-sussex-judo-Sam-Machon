import { calculateCosts } from "./calculateCosts.js";
import { calculateCategory } from "./calculateCategory.js";
import { validateForm } from "./validateForm.js";

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
  // Store the user's number of competitions as userCompetitions (number)
  let userCompetitions = parseInt(
    document.querySelector("#competitions-entered").value
  );
  // Store the user's private coaching hours as userCoaching (number)
  let userCoaching = parseInt(
    document.querySelector("#private-coaching-hours").value
  );

  const result = validateForm({
    userName,
    userPlan,
    userWeight,
    userCompetitions,
    userCoaching,
  });

  console.log({ result });

  if (result) {
    const output = calculateCosts(result);
    const userCategory = calculateCategory(result);
    console.log(output);
    console.log(userCategory);
  }
});
