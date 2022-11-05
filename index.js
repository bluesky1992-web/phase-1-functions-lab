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
console.log(distanceTravelledInFeet(34, 24));

const calculatesFarePrice = (start, destination) => {
  const calc = distanceTravelledInFeet(start, destination);
  if(calc <=  400 ) {
    return 0
  } else if (calc > 400 && calc <= 2000) {
    return 2.56
  }  else if (calc > 2000 && calc < 2500) {
       return 25
  }
   else if (calc > 2500 ) {
    return 'cannot travel that far'
  }
};
console.log(calculatesFarePrice(40, 24));
