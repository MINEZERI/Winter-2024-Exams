// Copy only listed values from dict
// use 'use strict'; , 'const', 'let'

'use strict';

const only = (object, ...copy) => {
  Object.keys(object).forEach((key) => {
    if (!copy.includes(key)) {
      delete object[key];
    }
  });
  return object;
};

module.exports = only;
