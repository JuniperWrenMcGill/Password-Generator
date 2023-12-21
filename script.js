// Assignment Code
var generateBtn = document.querySelector("#generate");
var pass = '';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var special = '@#!?~-';
var numberString = '';

// prompted for the length of the password with the choice of length = 8 - 128 characters

// promted to add lowercase characters

// promted to add uppercase characters

// prompted to add special characters

// prompter to add numbers 


// Write password to the #password input aka the password is displayed on the page 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
