function isPalindrome(word) {
  // Write your algorithm here

  //converting word to its reversed state
  const wordReverse = word.split("").reverse().join("").toLowerCase()

  //comparing if received word and previous word are alike then returning true or false
  if (wordReverse.toLowerCase() === word) {
    return true;
  }else{
    return false;
  }

}

/*
  Need to make a function `isPalindrome` that returns true if the input string is the same after I 
  reverse it and false  if the input string is not the same word after I reverse it. Exapmple, "mom"` in reverse is also
"mom"`, and `"racecar"` in reverse is also `"racecar"`, so my solution should return a boolean true.
*/

/* 
  Add your pseudocode here
  
  Assign a variable, then check if the word is equal to its reversed state,
    all in lowercase.
  If the word is same;
      return true
  if word is not the same, return false
*/


/*
  Add written explanation of your solution here
  1. Convert the string to its reverse word
  2. Make all be of the same case, lowercase.
  3. Check if conditions are true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("refer"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotor"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("deed"));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("peep"));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("cat"));




}

module.exports = isPalindrome;
