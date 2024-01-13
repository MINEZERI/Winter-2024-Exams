// Find key by value
// find fixed passed 5 of 5

'use strict';

const findProperty = (object, ...desired) => {
  for (let [name, value] of Object.entries(object)) {
     if (value === desired[0]){
        return name;
    }
  }
  return undefined;
};

module.exports = findProperty;
