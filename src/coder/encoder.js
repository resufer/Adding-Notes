let encoder = (str, count = 11) => {
  if (count === 0) return String.fromCodePoint(Math.floor(Math.random() * 70 + 65))
    + str +
    String.fromCodePoint(Math.floor(Math.random() * 70 + 65));

  let arr = str.split('').map(a => String.fromCodePoint(a.codePointAt() + 1));
  let newStr = arr.reverse().join('');

  return count <= 0 ? newStr : encoder(newStr, --count);
};

export default encoder;