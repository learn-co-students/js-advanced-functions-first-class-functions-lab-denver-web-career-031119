const returnFirstTwoDrivers = function(drivers) {
  const firstTwo = [drivers[0], drivers[1]];
  return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
  const lastTwo = [drivers[drivers.length - 2], drivers[drivers.length - 1]];
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {return multiplier * fare;};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, firstOrLast) {
  return firstOrLast(drivers);
}
