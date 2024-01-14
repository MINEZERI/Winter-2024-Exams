// Copy all values from dict except listed
// except fixed passed 5 of 5
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
