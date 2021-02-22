export let checkIp = async () => {
  let currentIp = await getIp();

  let arrIp = [];
  let arrKeys = [];
  for (let key in localStorage) {
    if (typeof localStorage[key] !== 'function' && key !== 'length') {
      arrIp.push(localStorage[key]);
      arrKeys.push(key);
    }
  }
  arrIp = arrIp.map(a => JSON.parse(a)).map(a => a.ip);

  let result = arrIp.indexOf(currentIp);
  if (result > -1) {
    return [true, arrKeys[result]]
  } else return [false, null]
}

export let getIp = async () => {
  let ownIp;
  ownIp = await fetch('https://ipapi.co/json/').then(d => d.json()).then(d => ownIp = d.ip);
  return ownIp;
}