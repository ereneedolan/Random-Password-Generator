// Assignment code here

// var generateBtn = document.querySelectorAll('#generate');



function generatePassword() {

  //Data

  //we need different sets of characters (use variables) - maybe strings or arrays, string give us the benefit of using indices to target things at different positions
  //number
  //ordered list to store use arrays and strings for indices and randomly select things
  //lowercase character
  // uppercase characters
  // special characters
  // number of character
  // whether they chose numbers, lowercase, uppercase or special characters



  //how many characters do you want to use? some number
  // do you want to use numbers? yes or no
  // do you want to use lowercase characters? yes or no
  // do you want to use uppercase characters? yes or no
  // do you want to use special characters? yes or no

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var uppercaseResponse = confirm("Do you want to use uppercase letters in your password?")

  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var lowercaseResponse = confirm("Do you want to use lowercase letters in your password?")

  var specialChacters = " !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\""
  var specialCharactersResponse = confirm("Do you want to use special characters in your passwor?")

  var number = "1234567890"
  var numberResponse = confirm("Do you want to use numbers in your password?")

  var charactersForPassword = ""

  if (uppercaseResponse === true) {
    charactersForPassword = uppercase + charactersForPassword
  }
  if (lowercaseResponse === true) {
    charactersForPassword = lowercase + charactersForPassword
  }
  if (specialCharactersResponse === true) {
    charactersForPassword = specialChacters + charactersForPassword
  }
  if (numberResponse === true) {
    charactersForPassword = number + charactersForPassword
  }

  var lengthOfPassword = prompt("Please choose a password length between 8 and 128 characters")
  if (!(lengthOfPassword >= 8) && !(lengthOfPassword <= 128)) {
    alert("Your password needs to be between 8-128 characters long")
    return
  }

function getRandomInt(max) {
    return Math.floor(Math.random() * lengthOfPassword - 1);
}

for (let i = 0; i < .length; i++) {
  text += cars[i] + "<br>";
}
  
var finishedPassword = ""


// get a random number generated from math random, math floor and then put in loop, add results from charactersForPasswordcharat to variable finished password then return that
charactersForPassword.charAt()



  // randomly select characters from all of the selected characters
  // put them together


  return finishedPassword
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
