// Return an array without duplicates
// rename variables

'use strict';
const duplicate = (string, number) => {
  if (number <= 0) return [];
  else {
    let res = [];
    for (let index = 0; index < number; index++) {
      res[index] = string;
    }
    return res;
  }
};

module.exports = duplicate;
