// Code your solution in this file!
const returnFirstTwoDrivers = (function(driversArray) {
    return driversArray.slice(0, 2);
});

const returnLastTwoDrivers = (function(driversArray) {
    return driversArray.slice((driversArray.length-2), (driversArray.length));
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (function(someInteger) {
    return (function(fare) {
        return someInteger * fare;
    });
});

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = (function(driversArray, fn) {
    return fn(driversArray);
});
