// Copy all values from dict except listed
// upgrading if statement

'use strict';

const exception = (object, ...except) => {
  Object.keys(object).forEach((key) => {
    if (except.includes(key)) {
      delete object[key];
    }
  });
  return object;
};

module.exports = exception;
