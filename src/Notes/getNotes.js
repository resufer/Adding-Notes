let getNotes = (type, login) => {
  let response = JSON.parse(localStorage.getItem(login))[type];
  return response;
};

export default getNotes;