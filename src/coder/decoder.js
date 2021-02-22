let decoder = (str, count = 11) => {
  if (count === 11) {
    str = str.slice(1, str.length - 1)
  } else if (count === 0) {
    return str
  }

  let arr = str.split('').map(a => String.fromCodePoint(a.codePointAt() - 1));
  let newStr = arr.reverse().join('');
  return count <= 0 ? newStr : decoder(newStr, --count);
};

export default decoder;