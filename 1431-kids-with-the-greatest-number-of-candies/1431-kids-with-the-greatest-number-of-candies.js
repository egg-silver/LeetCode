var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let arr = candies.map((a) => a + extraCandies);
  return arr.map((a) => {
    return a < max ? false : true;
  });
};