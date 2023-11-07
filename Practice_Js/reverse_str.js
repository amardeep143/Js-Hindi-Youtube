function reverseString(inputString) {
    // Split the string into an array of characters
    var characters = inputString.split('');
  
    // Reverse the array
    characters.reverse();
  
    // Join the characters back into a string
    var reversedString = characters.join('');
  
    return reversedString;
  }
  
  var input = "Abhi";
  var reversed = reverseString(input);
  console.log(reversed); // Output: "peed rama"
  