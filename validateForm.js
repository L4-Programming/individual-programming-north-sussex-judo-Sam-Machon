export function displayErrors(errors) {
  //Runs through the error id's and finds their respective labels, then adds error styling
  for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);
    if (inputElement) {
      inputElement.classList.add("error-input");
    }
    if (labelElement) {
      labelElement.classList.add("error-label");
    }

    //Adds error message to div's
    let errorDiv = document.querySelector(`#${field}-error`);
    if (errorDiv) {
      errorDiv.classList.add("error-message");
      let ul = document.createElement("ul");

      errors[field].messages.forEach((message) => {
        let li = document.createElement("li");
        li.textContent = message;
        ul.appendChild(li);
      });

      errorDiv.innerHTML = ""; // Clear any existing content
      errorDiv.appendChild(ul);
    }
  }
}

//Queries all elements that have the error classes and removes them
function removeErrors() {
  let errorInputs = document.querySelectorAll(".error-input");
  errorInputs.forEach((input) => {
    input.classList.remove("error-input");
  });

  let errorLabels = document.querySelectorAll(".error-label");
  errorLabels.forEach((label) => {
    label.classList.remove("error-label");
  });

  let errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((div) => {
    div.classList.remove("error-message");
    div.innerHTML = "";
  });
}

export function validateForm({
  userName,
  userPlan,
  userWeight,
  userCompetitions,
  userCoaching,
}) {
  const canPlanCompete = {
    beginner: "no",
    intermediate: "yes",
    elite: "yes",
  };

  removeErrors();

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
      `${userPlan}s cannot take part in competitions.`
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
  if (userCoaching > 20 || userCoaching < 0) {
    //alert("A maximum of 5 hours of coaching is allowed.");
    addError(
      "private-coaching-hours",
      "Please enter a valid number of coaching hours. A maximum of 20 is allowed."
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
  if (isNaN(userWeight) || userWeight < 50 || userWeight > 300) {
    //alert("Please enter a weight between 50kg and 250kg");
    addError("current-weight", "Please enter a weight between 50kg and 300kg");

    //return;
  }

  // Returns early if there are any errors
  if (Object.keys(errors).length > 0) {
    displayErrors(errors);

    return false;
  }

  return {
    userPlan,
    userName,
    userCoaching: parseInt(userCoaching),
    userCompetitions: parseInt(userCompetitions),
    userWeight: parseInt(userWeight),
  };
}
