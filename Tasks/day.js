// Get day number
// Passed 5 of 5, code is refactored

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const parseDay = (dayName) => {
    for (let index=0; index < DAYS.length; index++) {
        if (dayName.startsWith(DAYS[index])) {
            return index + 1;
        }
    }
    return -1;
};

module.exports = parseDay;
