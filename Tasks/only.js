// Copy only listed values from dict
// only fixed passed 7 of 7
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
