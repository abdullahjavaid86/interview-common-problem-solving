// trap water problem

function trapWater(elevation) {
  const length = elevation.length;
  let leftPosition = 0;
  let rightPosition = length -1;
  let leftMaximum = 0;
  let rightMaximum = 0;
  let trapped = 0;

  while (leftPosition <= rightPosition) {
    if (elevation[leftPosition] <= elevation[rightPosition]) {
      if (elevation[leftPosition] >= leftMaximum) {
        leftMaximum = elevation[leftPosition];
      } else {
        trapped += (leftMaximum - elevation[leftPosition]);
      }
      leftPosition++;
    } else {
      if (elevation[rightPosition] >= rightMaximum) {
        rightMaximum = elevation[rightPosition];
      } else {
        trapped += (rightMaximum - elevation[rightPosition]);
      }
      rightPosition--;
    }
  }

  return trapped;
}

// Test cases
const query1 = [2, 0, 2];
const query2 = [3, 0, 2, 0, 4];
const query3 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trapWater(query1)); // Output: 2
console.log(trapWater(query2)); // Output: 7
console.log(trapWater(query3)); // Output: 6