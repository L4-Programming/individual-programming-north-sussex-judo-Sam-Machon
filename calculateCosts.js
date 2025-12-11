export function calculateCosts(data) {
  const { userName, userPlan, userWeight, userCompetitions, userCoaching } =
    data;

  const planCosts = {
    beginner: 25.0,
    intermediate: 30.0,
    elite: 35.0,
  };

  let coachingCost = (userCoaching * 9.5).toFixed(2);

  let competitionCost = (userCompetitions * 22).toFixed(2);

  let totalCost =
    planCosts[userPlan] +
    parseFloat(coachingCost) +
    parseFloat(competitionCost);

  const output = {
    totalCost: totalCost.toFixed(2),
    coachingCost,
    competitionCost,
  };

  return output;
}
