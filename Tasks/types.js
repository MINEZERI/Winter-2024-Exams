// Count types in an array
// rename variables and functions 

'use strict';

const types = function (list) {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of list) {
    const elementType = typeof element;
    types[elementType]++;
  }
  return types;
};

module.exports = types;
