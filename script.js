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

//When button is clicked, user is prompted for password criteria. 
document.getElementById("generate").onclick = function () {
    prompt("How many characters does your password need to be? (Response must be between 8 and 128)")
    confirm("Do you need lowercase and uppercase letters?");
    confirm("Do you need a numeric character?");
    confirm("Do you need special characters? (!, #, $, etc.)");
};


//Prompt asks for character types needed (lowercase, uppercase, numeric, and/or special characters)


//Generate a password 

