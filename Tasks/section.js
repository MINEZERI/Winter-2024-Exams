// Split string into array by the first occurrence of separator
// use 'use strict'; , 'const', 'let'
// renaming
'use strict';

const sectionString = (sentence, separator) => {
  const index = sentence.indexOf(separator);
  if (index < 0 || separator == '') {
    return [sentence, ''];
  } else {
    return [sentence.slice(0, index), sentence.slice(index + separator.length)];
  }
};

module.exports = sectionString;
