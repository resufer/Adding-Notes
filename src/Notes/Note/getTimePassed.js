import { setTimeCreate } from '../setNotes';

let getTimePassed = (name, state, login) => {
  let initialNote = JSON.parse(localStorage.getItem(login))[state].filter(a => a.name === name)[0];
  if (state === 'during') {
    let initialTimeCreate = initialNote.timeCreate;
    let timeNow = setTimeCreate();
    let secondsPassed = timeNow.allTime - initialTimeCreate.allTime + (timeNow.timeZone - initialTimeCreate.timeZone) * 3600000;
    let date = difference(secondsPassed / 1000);
    return 'Passed: ' + date.days + ' days ' + date.hours + ' hours ' + date.minutes + ' minutes';
  } else if (state === 'completed') {
    return 'Completed: ' + initialNote.complete;
  } else if (state === 'failed') {
    return 'Failed: ' + initialNote.fail
  }
};

export default getTimePassed;


let difference = (num) => {
  let [second, hour, day] = [60, 3600, 86400];
  let date = { days: 0, hours: 0, minutes: 0 };
  let sign; //time zone accounting

  if (num < 0) {
    num = Math.abs(num);
    sign = true;
  }

  for (; num >= second;) {
    if (num >= day) {
      ++date.days;
      num -= day;
    } else if (num >= hour) {
      ++date.hours;
      num -= hour;
    } else if (num >= second) {
      ++date.minutes;
      num -= second;
    }
  }

  if (sign) {
    for (let key in date) date[key] = -date[key]
  }

  return date
}