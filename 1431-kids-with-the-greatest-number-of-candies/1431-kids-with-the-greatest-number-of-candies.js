var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map(a => a + extraCandies >= max);
};
