function capitalize(str) {
  let strCapital = str.charAt(0).toUpperCase() + str.slice(1);
  return strCapital;
}

module.exports = capitalize;