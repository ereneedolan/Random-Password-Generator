// Assignment code here

  

var generateBtn = document.querySelectorAll('#generate');

  

function generatePassword() {}

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


// randomly select characters from all of the selected characters
// put them together

  
return "password"

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
