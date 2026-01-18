export function calculateCategory(data) {
  const userWeight = data.userWeight;

  const weightCategory = {
    flyWeight: 66,
    lightWeight: 73,
    lightMiddleWeight: 81,
    middleWeight: 90,
    lightHeavyWeight: 100,
    heavyWeight: 250,
  };

  if (userWeight <= weightCategory.flyWeight) {
    const userCategory = "Flyweight";
    return userCategory;
  } else if (
    userWeight > weightCategory.flyWeight &&
    userWeight <= weightCategory.lightWeight
  ) {
    const userCategory = "Lightweight";
    return userCategory;
  } else if (
    userWeight > weightCategory.lightWeight &&
    userWeight <= weightCategory.lightMiddleWeight
  ) {
    const userCategory = "Light-MiddleWeight";
    return userCategory;
  } else if (
    userWeight > weightCategory.lightMiddleWeight &&
    userWeight <= weightCategory.middleWeight
  ) {
    const userCategory = "Middleweight";
    return userCategory;
  } else if (
    userWeight > weightCategory.middleWeight &&
    userWeight <= weightCategory.lightHeavyWeight
  ) {
    const userCategory = "Light-Heavyweight";
    return userCategory;
  } else if (userWeight > weightCategory.lightHeavyWeight) {
    const userCategory = "Heavyweight";
    return userCategory;
  }
}
