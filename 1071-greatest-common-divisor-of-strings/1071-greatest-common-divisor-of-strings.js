var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  let max = (a, b) => (a % b === 0 ? b : max(b, a % b));
  let gcd = max(str1.length, str2.length);
  console.log(gcd);
  return str1.slice(0, gcd)
};