// Get month number
// month is fixed passed 7 of 7 

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
