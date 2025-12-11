export function calculateCosts(data) {
  const planCosts = {
    beginner: 25.0,
    intermediate: 30.0,
    elite: 35.0,
  };

  const weightCategory = {
    flyWeight: 66,
    lightWeight: 73,
    lightMiddleWeight: 81,
    middleWeight: 90,
    lightHeavyWeight: 100,
    heavyWeight: 250,
  };

  let coachingCost = (userCoaching * 9.5).toFixed(2);

  let competitionCost = (userCompetitions * 22).toFixed(2);

  let totalCost = planCost[data.userPlan] + coachingCost + competitionCost;

  const output = { totalCost, coachingCost, competitionCost };
}
