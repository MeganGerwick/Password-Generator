// Assignment Code
var generateBtn = document.querySelector("#generate");
var userPasswordReq = []
var password = ''

// Write password to the #password input
/*function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
*/
// Create function for picking a random array
function getRandomArrayElement(userPasswordReq) {
    return userPasswordReq[Math.floor(Math.random() * userPasswordReq.length)];
}
// Set arrays for characters, lower case, upper case, special, and numeric
var lowercaseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var specialArray = ["!", "$", "#", "%", "&", "+", "*", "-"];
var numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(lowercaseArray)
console.log(getRandomArrayElement(lowercaseArray));



//Generate a password using prompt answers 
// Add event listener to generate button
document.getElementById("generate").addEventListener("click", function () {

    //User is prompted for password criteria. 

    var passwordLength = prompt("How many characters does your password need to be? (Response must be between 8 and 128)");
    var lower = confirm("Do you need lowercase letters?");
    var upper = confirm("Do you need uppercase letters?");
    var numericCharacter = confirm("Do you need a numeric character?");
    var specialCharacter = confirm("Do you need special characters? (!, #, $, etc.)");

    console.log(passwordLength);
    console.log(lower);
    console.log(upper);
    console.log(numericCharacter);
    console.log(specialCharacter);

    if (lower === true) {
        userPasswordReq = userPasswordReq.concat(lowercaseArray);
        console.log(userPasswordReq);
    }
    if (upper === true) {
        userPasswordReq = userPasswordReq.concat(uppercaseArray);
        console.log(userPasswordReq);
    }

    if (numericCharacter === true) {
        userPasswordReq = userPasswordReq.concat(numericArray);
        console.log(userPasswordReq);
    }
    if (specialCharacter === true) {
        userPasswordReq = userPasswordReq.concat(specialArray);
        console.log(userPasswordReq);
    }
    for (var i = 0; i < JSON.parse(passwordLength); i++) {
        password += getRandomArrayElement(userPasswordReq);
        console.log(i);
    }
    console.log(password);

    document.getElementById("password").value = password;
})


