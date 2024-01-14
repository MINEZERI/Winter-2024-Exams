// Copy all values from dict except listed
// removing unnecessary variables

'use strict';

const exception = (object, ...except) => {
  Object.keys(object).forEach((key) => {
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
