// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// Set arrays for characters, lower case, upper case, special, and numeric
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "$", "#", "%", "&", "+", "*", "-"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//When button is clicked, user is prompted for password criteria. 
document.getElementById("generate").onclick = function () {
    var length = prompt("How many characters does your password need to be? (Response must be between 8 and 128)")
    var upperAndLower = confirm("Do you need lowercase and uppercase letters?");
    var numericCharacter = confirm("Do you need a numeric character?");
    var specialCharacter = confirm("Do you need special characters? (!, #, $, etc.)");
};

//Generate a password using prompt answers 
//'abcdefghijklmnopqrstuvwxyz'.split('')

if (var upperAndLower = true) || (var numericCharacter = false) || (var specialCharacter = false)

if (var upperAndLower = true) || (var numericCharacter = true) || (var specialCharacter = false)

if (var upperAndLower = true) || (var numericCharacter = false) || (var specialCharacter = true)

if (var upperAndLower = true) || (var numericCharacter = true) || (var specialCharacter = true)

if (var upperAndLower = false) || (var numericCharacter = false) || (var specialCharacter = false)

if (var upperAndLower = false) || (var numericCharacter = true) || (var specialCharacter = false)

if (var upperAndLower = false) || (var numericCharacter = false) || (var specialCharacter = true)

if (var upperAndLower = false) || (var numericCharacter = true) || (var specialCharacter = true)
