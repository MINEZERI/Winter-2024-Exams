// Copy all values from dict except listed
// renaming functions and variables

'use strict';

const exception = (object, ...except) => {
  const intermediateVariable = Object.keys(object);
  intermediateVariable.forEach((key) => {
    if (except.includes(key)) {
      delete object[key];
      return;
    } else {
      return;
      delete object[key];
    }
  });
  return object;
};

module.exports = exception;
