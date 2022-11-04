// Code your solution in this file!
const distanceFromHqInBlocks = (pickupLoc) => {
  if (pickupLoc > 42) {
    let res = pickupLoc - 42;
    return res;
  } else if (pickupLoc < 42) {
    let res = pickupLoc - 42;
    return Math.abs(res); // translate the negative number into a numbers without minus sign
  }
};
console.log(distanceFromHqInBlocks(40));

const distanceFromHqInFeet = (inFeet) => {
  const result = distanceFromHqInBlocks(inFeet) * 264;
  return result;
};
console.log(distanceFromHqInFeet(40))