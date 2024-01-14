// Copy all values from dict except listed
// delete useless code lines

'use strict';

const EXCEPT = (incomingvaluesarray, ...no) => {
  const intermediate_variable = Object.keys(incomingvaluesarray);
  intermediate_variable.forEach((Z) => {
    if (no.includes(Z)) {
      delete incomingvaluesarray[Z];
      return;
    } else {
      return;
      delete incomingvaluesarray[Z];
    }
  });
  return incomingvaluesarray;
};

module.exports = EXCEPT;
