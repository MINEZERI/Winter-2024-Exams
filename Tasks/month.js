// Get month number
// renamed identifiers

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
  const lenght = MONTHS.length;
  for (let index = 0; index < lenght; index++) {
    if (monthName.toLowerCase().startsWith(MONTHS[index])) return index + 1;
  }
  return -1;
};

module.exports = month;
