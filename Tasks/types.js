// Count types in an array
// types is fixed passed 4 of 4
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
