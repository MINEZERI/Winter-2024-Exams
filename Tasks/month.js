// Get month number
// remove useless code

const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

month = (monthName) => {
  for (let index = 0; index < MONTHS.length; index++) {
    if (monthName.toLowerCase().startsWith(MONTHS[index])) return index + 1;
  }
  return -1;
};

module.exports = month;
