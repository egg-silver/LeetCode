var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  let max = (a, b) => (a % b === 0 ? b : max(b, a % b));
  let gcd = max(str1.length, str2.length);
  console.log(gcd);
  return str1.slice(0, gcd)
};


// 유클리드 더 명확히 사용
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';

  // Euclid의 알고리즘을 사용하여 최대공약수를 찾는 함수
  let gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

  // 두 문자열의 길이에 대한 최대공약수를 계산
  let gcdLength = gcd(str1.length, str2.length);

  // 최대공약수 길이만큼의 문자열을 반환
  return str1.slice(0, gcdLength);
};
