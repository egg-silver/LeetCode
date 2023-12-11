var mergeAlternately = function (word1, word2) {
  let small = Math.min(word1.length, word2.length);
  var sum = '';
  for (let i = 0; i < small; i++) {
    sum += word1[i] + word2[i];
  }

  if (word1.length < word2.length) {
    sum += word2.slice(small);
  } else sum += word1.slice(small);

  return sum;
};