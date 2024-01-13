// Find key by value
// fixed if statement and deleted useless conditions
'use strict';

const findProperty = (object, ...desired) => {
  for (let name in object) {
     if (object[name] === desired[0]){
        return name;
    }
  }
  return undefined;
};

module.exports = findProperty;
