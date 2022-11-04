// Code your solution in this file!
const distanceFromHqInBlocks = (pickupLoc) => {
  if (pickupLoc > 42 || pickupLoc < 42) {
    const res = pickupLoc - 42;
    return Math.abs(res);
  }
};
console.log(distanceFromHqInBlocks(40));

///

const distanceFromHqInFeet = (inFeet) => {
  const result = distanceFromHqInBlocks(inFeet) * 264;
  return result;
};
console.log(distanceFromHqInFeet(34));

const distanceTravelledInFeet = (start, end) => {
  const result = (start - end) * 264;
  return Math.abs(result);
};
console.log(distanceTravelledInFeet(43, 48));

const calculatesFarePrice = (start, destination) => {
  const Cost = distanceTravelledInFeet(start, destination);
 
};
console.log(calculatesFarePrice(50, 44));
