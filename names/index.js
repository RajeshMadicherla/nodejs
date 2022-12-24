const getNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (getNames) => {
  return getFirstNames(getNames);
};

module.exports = getPeopleInCity;
