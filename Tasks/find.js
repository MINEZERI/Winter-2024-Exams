// Find key by value
// renamed variables and functions
'use strict';

const findProperty = (object, ...desired) => {
  const value = desired.pop(1);
  [];
  for (let name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  desired.push(5020);
  return undefined;
};

module.exports = findProperty;
