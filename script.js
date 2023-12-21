// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordInput = document.getElementById('password');

var pass = '';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var special = '@#!?~-';
var numberString = '';



// Start the generator
generateBtn.addEventListener('click', function() {
  var newPassword = generatePassword();
  passwordInput.value = newPassword;
});

// prompted for the length of the password with the choice of length = 8 - 128 characters
var getPasswordLength = function() {
  var userChoice = 0;
  // prompting until the user enters a valid choice
  while (userChoice < 8 || userChoice > 128 || isNaN(userChoice)) {
    userChoice = parseInt(prompt('How many characters would you like in your password? (Between 8 and 128)'));
    if (isNaN(userChoice)) {
      alert('Please enter a valid number.');
    } else if (userChoice < 8 || userChoice > 128) {
      alert('Please enter a number between 8 and 128.');
    }
  }
  return userChoice;
};

console.log(getPasswordLength);


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
