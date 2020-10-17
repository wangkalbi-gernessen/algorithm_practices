/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function(area) {
  // Make a pair to make a rectangle 
  let main = [];
  let product;
  let pair;
  for(let i = 1; i <= area; i++){
    pair = [];
    if(area % i == 0){
      product = area / i;
      if(i >= product){
        pair.push(i);
        pair.push(product);
        main.push(pair);
      }
    }
  }
  return main[0];
}

console.log(constructRectangle(12));