// Assignment Code  -- stores button element with id #generate
var generateBtn = document.querySelector("#generate");





// Global variable for desired password length -- default to 20
var charLength = 20

// Object to store character types needed for password -- default to using all types
var charTypes = {
  lower: true,
  upper: true,
  numeric: true,
  special: true
};



// Function to determine password length
var getLength = function() {
  var passwordLength = parseInt(window.prompt("How many characters would you like in your password? Please enter a number."));
  if (!Number.isInteger(passwordLength)) {    // validate integer
    console.log("Password length was not an integer.");
    window.alert("Please enter an integer.");
    getLength();
  } else if (passwordLength < 8) {
    console.log("Password length was too few characters.");
    window.alert("Passwords must be at least 8 characters long.");
    getLength();
  } else if (passwordLength > 128) {
    console.log("Password length was too many characters.");
    window.alert("Passwords must be no more than 128 characters.");
    getLength();
  } else {
    console.log("Password length: " + passwordLength + " characters");
    charLength = passwordLength;
  };
};

// Function to ask for lowercase letters
var getTypesLower = function() {
  var typesLower = window.prompt("Do you want lowercase letters in your password? Please enter YES or NO.");
  typesLower = typesLower.toLowerCase()
  if (typesLower === "yes") {
    console.log("Lowercase letters: YES");
    typesLower = true;
  } else if (typesLower === "no") {
    console.log("Lowercase letters: NO");
    typesLower = false;
  } else {
    console.log("Lowercase response was not yes or no.");
    window.alert("Please enter YES or NO.");
    getTypesLower();
  };
  charTypes.lower = typesLower;
};

// Function to ask for uppercase letters
var getTypesUpper = function() {
  var typesUpper = window.prompt("Do you want UPPERCASE letters in your password? Please enter YES or NO.");
  typesUpper = typesUpper.toLowerCase()
  if (typesUpper === "yes") {
    console.log("Uppercase letters: YES");
    typesUpper = true;
  } else if (typesUpper === "no") {
    console.log("Uppercase letters: NO");
    typesUpper = false;
  } else {
    console.log("Uppercase response was not yes or no.");
    window.alert("Please enter YES or NO.");
    getTypesUpper();
  };
  charTypes.upper = typesUpper;
};

// Function to ask for numerical characters
var getTypesNum = function() {
  var typesNum = window.prompt("Do you want numbers in your password? Please enter YES or NO.");
  typesNum = typesNum.toLowerCase()
  if (typesNum === "yes") {
    console.log("Numbers: YES");
    typesNum = true;
  } else if (typesNum === "no") {
    console.log("Numbers: NO");
    typesNum = false;
  } else {
    console.log("Numbers response was not yes or no.");
    window.alert("Please enter YES or NO.");
    getTypesNum();
  };
  charTypes.numeric = typesNum;
};

// Function to ask for numerical characters
var getTypesSpecial = function() {
  var typesSpecial = window.prompt("Do you want special characters in your password? Please enter YES or NO.");
  typesSpecial = typesSpecial.toLowerCase()
  if (typesSpecial === "yes") {
    console.log("Special characters: YES");
    typesSpecial = true;
  } else if (typesSpecial === "no") {
    console.log("Special characters: NO");
    typesSpecial = false;
  } else {
    console.log("Special characters response was not yes or no.");
    window.alert("Please enter YES or NO.");
    getTypesSpecial();
  };
  charTypes.special = typesSpecial;
};

// Function to ensure at least one character type is selected
var typesCheck = function () {
  while (!charTypes.lower && !charTypes.upper && !charTypes.numeric && !charTypes.special) {
    console.log("No character types selected.");
    window.alert("Your password must include at least one character type.");
    getTypesLower();
    getTypesUpper();
    getTypesNum();
    getTypesSpecial();
  };
  console.log("Ready to generate password.");
};


// Function to generate password
var generatePassword = function() {
  // Prompt for password length and character types and validate responses
  getLength();
  getTypesLower();
  getTypesUpper();
  getTypesNum();
  getTypesSpecial();
  typesCheck();

  // Create array of all possible characters
  var charList = []; // declare empty array
  // add lowercase letters to array
  if (charTypes.lower) {
    charList.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
  };
  // add uppercase letters to array
  if (charTypes.upper) {
    charList.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
  };
  // add numerals to array
  if (charTypes.numeric) {
    charList.push("0","1","2","3","4","5","6","7","8","9")
  };
  // add special characters to array
  if (charTypes.special) {
    charList.push("!","@","#","$","%","^","&","*","?","~","+")
  };
  // Now I have an array with all of the available characters
  
  // For loop iterates over each character slot, choosing a random option from the array each time

  var password = ""

  for (i=0; i < charLength; i++) {
    randomChar = charList[Math.floor(Math.random() * charList.length)];
    var password = password + randomChar;
  };
  return password;
};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);