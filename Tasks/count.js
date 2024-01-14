// Sum all number values in dict
// removed unnecessary variable
'use strict';

const count = (obj) => {
  let sum = 0;
  for(let key of Object.keys(obj)){
    if (typeof obj[key] == 'number'){
      sum += obj[key];
    }
  }
  return sum;
};

module.exports = count;
