function hasTargetSum(array, target) {
  // Write your algorithm here
  let checkSum = 0
  for(let i = 0; i<array.length;i++){
    for(let j=i+1; j<array.length;j++){
      let sum = array[i] + array[j]
      if(sum === target){
        checkSum = 1
      }

    }


  }
  if(checkSum === 1){
    return true
  }else{
    return false
  }
  


}







/* 
  Write the Big O time complexity of your function here

  It is nested for loops so it is = O(n^2)
*/

/* 
  Add your pseudocode here
  
  loop through each element of the array
  add 2 elements together and check if they equal the sum
  return true if two numbers in the array add up to the sum


*/

/*
  Add written explanation of your solution here

  What I did was loop through the array one element at a time. 
  Then I would check the sum of each element added together
  If they did, I set a variable to 1 and after it iterates through the
  whole array, I would check and see if was set to 1, if yes I would return true


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
