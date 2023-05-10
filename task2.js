function fnReverse(str) {
  let strReverse = str.split('').reverse().join('');
  return strReverse;
}

module.exports = fnReverse;