// Find key by value
// used for..of instead of for..in
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
