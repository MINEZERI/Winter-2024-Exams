// Find key by value
// use 'use strict'; , 'const', 'let'
'use strict';

const find = (object, ...rest) => {
  const value = rest.pop(1);
  [];
  for (name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = find;
