export function displayResults(result, output, userCategory) {
  let results = document.querySelector("#output");
  console.log(output);
  console.log(userCategory);

  results.innerHTML = `
    <dl>
      <dt>Athlete Name</dt>
      <dd>${result.userName}</dd>

      <dt>Costs:</dt>
      <dd>Competition Entry Cost £${output.competitionCost}</dd>
      <dd> Private Coaching Cost £${output.coachingCost}</dd>

      <dt>Total Cost for the Month</dt>
      <dd>£${output.totalCost}</dd>

      <dt>Weight Category</dt>
      <dd>${userCategory}</dd>

  `;
}
