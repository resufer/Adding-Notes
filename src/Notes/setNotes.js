export let testNote = (values, type, login) => {
  let currentNotes = getData(type, login)[1];
  let chechNotes = currentNotes.filter(a => a.name === values.name);

  if (chechNotes.length) {
    return 'a note with the same name already exists'
  }
};


let setNotes = (values, type, login) => {
  let [currentData, currentNotes] = getData(type, login);

  let timeCreate = setTimeCreate();
  values.timeCreate = timeCreate;

  currentNotes.push(values);
  currentData[type] = currentNotes;
  localStorage.setItem(login, JSON.stringify(currentData));
};


let getData = (type, login) => {
  let currentData = JSON.parse(localStorage.getItem(login))
  let currentNotes = currentData[type];
  return [currentData, currentNotes];
}

export let setTimeCreate = () => {
  let currentTime = new Date();
  let allTime = Date.now();
  let timeZone = currentTime.toString().split(' ').slice(5, 6).join('').split('GMT')[1];

  if (timeZone[0] === '+') timeZone = Number(timeZone.slice(1, 3))
  else timeZone = Number(-timeZone.slice(1, 3))

  return {
    common: currentTime.toDateString(),
    allTime,
    timeZone
  }
}

export default setNotes;