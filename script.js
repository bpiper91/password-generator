// Assignment Code  -- stores button element with id #generate
var generateBtn = document.querySelector("#generate");









// Generate password
var generatePassword = function() {
  // Prompt for password length (min of 8 characters, max of 128)

  var getLength = function() {
    // Function to determine min and max password length
  }
    // Validate response

  // Prompt for character types (lower, upper, numeric, and special; at least one type must be chosen)

  var getTypes = function() {
    
    // Object to store character types
    var getTypes = {
      lower: TRUE,
      upper: TRUE,
      numeric: TRUE,
      special: TRUE
    };

    window.prompt("Do you want lowercase letters in your password?"); // Function to determine character types
  }
    // Validate response

  // Create random password of length and makeup specified

    // Create array of all possible characters
    var charList = []; // declare empty array
    // add lowercase letters to array
    if (getTypes.lower) {
      charList.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
    };
    // add uppercase letters to array
    if (getTypes.upper) {
      charList.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
    };
    // add numerals to array
    if (getTypes.numeric) {
      charList.push("0","1","2","3","4","5","6","7","8","9")
    };
    // add special characters to array
    if (getTypes.special) {
      charList.push("!","@","#","$","%","^","&","*","?","~","+")
    }
      // Use results from promptTypes() and promptLength()

      // If statement for each character type to add to array

    // For loop iterates over each character, randomly choosing from the array of options

  // Return password
  
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);