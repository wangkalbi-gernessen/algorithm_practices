/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function(prices) {
  let result = [];
  for (let i = 0; i < prices.length; i++) {
    let matchCount = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) { 
        result.push(prices[i] - prices[j]);
        matchCount += 1;
        break;
      } 
    }
    if (matchCount === 0) {
      result.push(prices[i]);
    }
    matchCount = 0;
  } 
  return result;
};

console.log(finalPrices([10,1,1,6]));