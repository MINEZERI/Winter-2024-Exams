// Sum all number values in dict
// remove useless code

'use strict';

const count = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  keys.forEach((a) => {
    const value = obj[a];
    if (typeof value == 'number') sum += value;
  });
  return sum;
};

module.exports = count;
