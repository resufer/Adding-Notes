let deleteIp = (login) => {
  let currentData = JSON.parse(localStorage.getItem(login));
  currentData.ip = '';
  localStorage.setItem(login, JSON.stringify(currentData));
};

export default deleteIp;