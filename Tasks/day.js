// Get day number
// Change identifiers names

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const parseDay = (dayName) => {
    let index;
    for (index = 0; index < DAYS.length; index++) {
        if (dayName.startsWith(DAYS[index].toLowerCase())) {
            return index + 1;
        }
    }
    return -1;
};
