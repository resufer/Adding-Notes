let transferNote = (event, state, login) => {
  let noteName = event.nativeEvent.path[2].firstChild.firstChild.innerText;

  let currentLS = JSON.parse(localStorage.getItem(login));
  let notes = currentLS['during'];

  let necessaryNote = notes.filter(a => a.name === noteName);
  let remainingNotes = notes.filter(a => a.name !== noteName);

  if (state === 'completed') {
    necessaryNote[0].complete = new Date().toDateString();
  } else if (state === 'failed') {
    necessaryNote[0].fail = new Date().toDateString();
  }

  currentLS[state] = currentLS[state].concat(...necessaryNote);
  currentLS['during'] = remainingNotes;

  localStorage.setItem(login, JSON.stringify(currentLS));
};

export default transferNote;