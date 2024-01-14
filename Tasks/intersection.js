// Find an intersection of two dictionaries
// upgrading condition operator


'use strict';

const intersection = function intersection(object1, object2) {
  for (const attributeName of Object.keys(object1)) {
    if (object1[attributeName] !== object2[attributeName]) {
      delete object1[attributeName];
    }
  }
  return object1;
};

module.exports = intersection;
