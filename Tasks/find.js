// Find key by value
// removed useless variables and code rows
'use strict';

const findProperty = (object, ...desired) => {
  for (let name in object) {
    if (object[name] !== desired[0]) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  return undefined;
};

module.exports = findProperty;
