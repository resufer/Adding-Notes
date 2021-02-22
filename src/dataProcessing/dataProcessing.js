import encoder from '../coder/encoder';
import decoder from '../coder/decoder';
import { getIp } from '../checkIp';

let dataProcessing = async (data) => {
  let dataInLS = { password: '', ip: '', during: [], completed: [], failed: [] }
  let response = { success: '', errorMessage: '' }

  if (data.sign === 'signUp') {
    if (localStorage.getItem(data.login)) {
      response.success = false;
      response.errorMessage = 'This login already exists';
      return response
    }

    let resultErrorProcessing = errorProcessing(data.password, data.password2)
    if (!resultErrorProcessing) {
      dataInLS.password = encoder(data.password);
      if (data.remember) {
        dataInLS.ip = await getIp();
        localStorage.setItem(data.login, JSON.stringify(dataInLS));
        response.success = true
      } else {
        localStorage.setItem(data.login, JSON.stringify(dataInLS));
        response.success = true
      }
    } else {
      response.success = false
      response.errorMessage = resultErrorProcessing
    }

  } else if (data.sign === 'signIn') {
    let currentDara = JSON.parse(localStorage.getItem(data.login));
    if (currentDara) {
      if (data.password === decoder(currentDara.password)) {
        if (data.remember) {
          currentDara.ip = await getIp();
          localStorage.setItem(data.login, JSON.stringify(currentDara));
        }
        response.success = true
      } else {
        response.success = false
        response.errorMessage = 'Incorrect login or password';
      }
    } else {
      response.success = false
      response.errorMessage = 'Incorrect login or password';
    }
  }

  return response
};


let errorProcessing = (pas1, pas2) => {
  let error = '';
  if (pas1 !== pas2) {
    error = 'passwords dont match'
  }
  else if (pas1.length < 6) {
    error = 'password must contain more characters'
  }
  else if (characterValidation(pas1)) {
    error = 'characters can only be a-Z and 0-9'
  }

  return error;
}

function characterValidation(str) { // 48 - 0, 57 - 9; A - 65, z - 122
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i].codePointAt() >= 48 && arr[i].codePointAt() <= 57) || (arr[i].codePointAt() >= 65 && arr[i].codePointAt() <= 122)) {
      return false
    }
  }
  return true
}


export default dataProcessing;