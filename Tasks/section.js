// Split string into array by the first occurrence of separator
// rewrite unnecessary else statement
'use strict';

const sectionString = (sentence, separator) => {
  const index = sentence.indexOf(separator);
  if (index < 0 || separator === '') {
    return [sentence, ''];
  }
  return [
    sentence.slice(0, index),
    sentence.slice(index + separator.length)
  ];
};

module.exports = sectionString;
