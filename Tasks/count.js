// Sum all number values in dict
// count fixed passed 6 of 6
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
