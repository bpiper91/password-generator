// Assignment Code  -- stores button element with id #generate
var generateBtn = document.querySelector("#generate");





// Global variable for desired password length -- default to 20
var charLength = 20

// Object to store character types needed for password -- default to using all types
var charTypes = {
  lower: TRUE,
  upper: TRUE,
  numeric: TRUE,
  special: TRUE
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
    getLenth();
  } else {
    console.log("Password length: " + passwordLength + "characters");
    charLength = passwordLength;
  };
};

// Function to ask for lowercase letters
var getTypesLower = function() {
  var typesLower = window.prompt("Do you want lowercase letters in your password? Please enter YES or NO.");
  typesLower = typesLower.toLowerCase()
  if (typesLower === "yes") {
    console.log("Lowercase letters: YES");
    typesLower = TRUE;
  } else if (typesLower === "no") {
    console.log("Lowercase letters: NO");
    typesLower = FALSE;
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
    typesUpper = TRUE;
  } else if (typesUpper === "no") {
    console.log("Uppercase letters: NO");
    typesUpper = FALSE;
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
    typesNum = TRUE;
  } else if (typesNum === "no") {
    console.log("Numbers: NO");
    typesNum = FALSE;
  } else {
    console.log("Numbers response was not yes or no.");
    window.alert("Please enter YES or NO.");
    getTypesNum();
  };
  charTypes.numeric = typesNum;
};

// Function to ask for numerical characters
var getTypesSpecial = function() {
  var typesSpecial = window.prompt("Do you want numbers in your password? Please enter YES or NO.");
  typesSpecial = typesSpecial.toLowerCase()
  if (typesSpecial === "yes") {
    console.log("Special characters: YES");
    typesSpecial = TRUE;
  } else if (typesSpecial === "no") {
    console.log("Special characters: NO");
    typesSpecial = FALSE;
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
  console.log("Character type issue resolved.");
};













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);