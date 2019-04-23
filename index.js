// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
} 

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
    return function(fare) {return fare * fareMultiplier;}
}

function fareDoubler(fare) {
    const fareFunction = createFareMultiplier(2);
    return fareFunction(fare);
}

function fareTripler(fare) {
    const fareFunction = createFareMultiplier(3);
    return fareFunction(fare);
}

function fetchSpecifiedDrivers(drivers, twoDrivers) {
    return twoDrivers(drivers);
}