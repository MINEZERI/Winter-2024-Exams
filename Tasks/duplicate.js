// Return an array without duplicates
// duplicate fixed passed 5 of 5

'use strict';
const duplicate = (string, number) => {
    let res = [];
    for (let index = 0; index < number; index++) {
      res[index] = string;
    }
    return res;
};

module.exports = duplicate;
