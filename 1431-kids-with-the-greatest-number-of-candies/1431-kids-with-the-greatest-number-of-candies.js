var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let arr = candies.map((a) => a + extraCandies);
  return arr.map((a) => {
    return a < max ? false : true;
  });
};

//더 효율적인 방법
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map(a => a + extraCandies >= max);
};
