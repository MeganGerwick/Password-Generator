// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//When button is clicked, user is prompted for password criteria. Prompt asks length of password needed
document.getElementById("generate").onclick = function () {
    prompt("How many characters does your password need to be? (Response must be between 8 and 128)")
};


//Prompt asks for character types needed (lowercase, uppercase, numeric, and/or special characters)

//Generate a password 

