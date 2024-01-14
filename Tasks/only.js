// Copy only listed values from dict
// change loop to for..of
'use strict';

const only = (object, ...copy) => {
  for (const key of Object.keys(object)) {
    if (!copy.includes(key)) {
      delete object[key];
    }
  }
  return object;
};

module.exports = only;
