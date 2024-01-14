// Copy all values from dict except listed
// using for..of instead of forEach
'use strict';

const exception = (object, ...except) => {
  for(const key of Object.keys(object)){
    if(except.includes(key)){
      delete object[key];
    } 
  }
  return object;
};

module.exports = exception;
