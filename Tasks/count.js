// Sum all number values in dict
// use for..of instead of forEach

'use strict';

const count = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  for(let key of keys){
    const value = obj[key];
    if (typeof value == 'number') sum += value;
  }


  return sum;
};

module.exports = count;
