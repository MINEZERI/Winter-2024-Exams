// Count types in an array
// simplify loop

'use strict';

const types = function (list) {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of list) {
    types[typeof element]++;
  }
  return types;
};

module.exports = types;
