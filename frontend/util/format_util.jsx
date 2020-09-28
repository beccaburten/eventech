const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
};

// const MONTHS = {
//     0: 'JAN',
//     1: 'FEB',
//     2: 'MAR',
//     3: 'APR',
//     4: 'MAY',
//     5: 'JUNE',
//     6: 'JULY',
//     7: 'AUG',
//     8: 'SEP',
//     9: 'OCT',
//     10: 'NOV',
//     11: 'DEC',
// };

export const formatDate = (date) => {
    const daysOfWeek = {
        0: 'Sun',
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat',
    };
    const obj = new Date(date);
    const month = months[obj.getMonth()];
    const day = obj.getDate();
    const year = obj.getFullYear();
    const dayOfWeek = daysOfWeek[obj.getDay()];
    return `${dayOfWeek}, ${month} ${day}, ${year}`;
};

export const formatTime = (time) => {
    const obj = new Date(time);
    let hour = obj.getHours();
    let min = obj.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    if (hour > 12) hour = hour % 12;
    min = min < 10 ? '0' + min : min;
    // const timezone = obj.get???();
    return `${hour}:${min} ${ampm}`;
}


export const showPageMonth = (date) => {
    const obj = new Date(date);
    const month = months[obj.getMonth()];
    return (`${month}`
    )
};

export const showPageDay = (date) => {
    const obj = new Date(date);
    const day = obj.getDate();
    return (`${day}`
    )
};