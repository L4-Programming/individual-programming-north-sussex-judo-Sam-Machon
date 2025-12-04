/* Refer to the README.md for instructions on what you need to do in this project */

let form = document.querySelector("form");

const canPlanCompete = {
  beginner: "no",
  intermediate: "yes",
  elite: "yes",
};

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

  let errors = {};

  // Helper function to add error messages
  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = { messages: [] };
    }
    errors[field].messages.push(message);
  }

  // Removing NAN from optional inputs
  if (isNaN(userCompetitions)) {
    userCompetitions = 0;
  }

  if (isNaN(userCoaching)) {
    userCoaching = 0;
  }

  // Is userCompetitions valid?
  if (canPlanCompete[userPlan] === "no" && userCompetitions > 0) {
    //alert(`${userPlan} cannot take part in competitions.`);
    addError(
      "competitions-entered",
      `${userPlan} cannot take part in competitions.`
    );

    //return;
  } else {
    if (userCompetitions > 30 || userCompetitions < 0) {
      //alert("Please enter a valid number of competitions.");
      addError(
        "competitions-entered",
        "Please enter a valid number of competitions."
      );

      //return;
    }
  }

  // Is userCoaching valid?
  if (userCoaching > 5 || userCoaching < 0) {
    //alert("A maximum of 5 hours of coaching is allowed.");
    addError(
      "private-coaching-hours",
      "Please enter a valid number of coaching hours. A maximum of 5 is allowed."
    );

    //return;
  }

  // Has a name been entered?
  if (userName === "") {
    //alert("Please enter your email address.");
    addError("athlete-name", "Please enter a name.");

    //return;
  }

  // Is userWeight valid?
  if (isNaN(userWeight) || userWeight < 50 || userWeight > 250) {
    //alert("Please enter a weight between 50kg and 250kg");
    addError("current-weight", "Please enter a weight between 50kg and 250kg");

    //return;
  }

  for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);
    if (inputElement) {
      inputElement.classList.add("error-input");
    }
    if (labelElement) {
      labelElement.classList.add("error-label");
    }
  }

  console.log({ errors });
});
