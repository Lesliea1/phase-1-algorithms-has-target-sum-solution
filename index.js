function hasTargetSum(array, target) {
  // iterrate through the array
  for (let i=0; i< array.length; i++) {
    //for current num, identify complement that adds to the 
      const complement = target - array[i]
    // iterrate through rest of array
      for (let j = i + 1; j < array.length; j++){
    // check if any number is our complement
    // is so, return true
        if (array[j] === complement) return true 
      }
  }
  // if i reach end of array, return false

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  hasTargetSum([22,19,4,6,30], 25)
  iterate through each number in the array, for the num identify a complement that adds to the 
  target. 
  check if any number is our complement
  if so, return true

  if the emd of the array, return false


  make a function has targetSum that checks if two numbers from array
  adds up to some target. For ex, if i have an array [1,2,3,4]
  and if target is 6 i should return true because 2 and 4 add to 6 
  for each number check if there's another number that adds to target. 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
