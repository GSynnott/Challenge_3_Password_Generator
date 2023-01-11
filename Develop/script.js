// Assignment code here
function generatePassword(){
  // console.log("here")
  var numCorrect = 0;
  var lCaseCorrect = 0;
  var uCaseCorrect = 0;
  var numericCharCorrect = 0;
  var specialCharCorrect = 0;
  var atLeastOneTrue = 0;
  do{
    var numCharPrompt = prompt("Please enter in the number of characters required for the password (8 min - 128 max):");
    var numChar = parseInt(numCharPrompt);
    // console.log(typeof(numChar))
    if (isNaN(numChar) === true){
      // console.log("elif 2")
      alert("Please only enter in a number between 8 and 128.");
      numCorrect = 0;
    } else if (numChar > 128){
      // console.log("elif 1")
      alert("Please only enter in a number between 8 and 128.");
      numCorrect = 0;
    } else if (numChar < 8){
      // console.log("if")
      alert("Please only enter in a number between 8 and 128.");
      numCorrect = 0;
    } else{
      // console.log("else")
      numCorrect = 1;
    }
  } while (numCorrect == 0);
  do{
    do{
      var lCaseChar = confirm("Do you want your password to include lowercase characters?\n('OK' = yes, 'Cancel' = no)");
      if (typeof(lCaseChar) !== "boolean"){
        alert("Please select 'OK' for yes or 'cancel' for no.");
        lCaseCorrect = 0;
      } else{
        lCaseCorrect = 1;
      }
    } while (lCaseCorrect == 0);

    do{
      var uCaseChar = confirm("Do you want your password to include uppercase characters?\n('OK' = yes, 'Cancel' = no)");
      if (typeof(uCaseChar) !== "boolean"){
        alert("Please select 'OK' for yes or 'cancel' for no.");
        uCaseCorrect = 0;
      } else{
        uCaseCorrect = 1;
      }
    } while (uCaseCorrect == 0);

    do{
      var numericChar = confirm("Do you want your password to include numeric characters?\n('OK' = yes, 'Cancel' = no)");
      if (typeof(numericChar) !== "boolean"){
        alert("Please select 'OK' for yes or 'cancel' for no.");
        numericCharCorrect = 0;
      } else{
        numericCharCorrect = 1;
      }
    } while (numericCharCorrect == 0);

    do{
      var specialChar = confirm("Do you want your password to include special characters?\n('OK' = yes, 'Cancel' = no)");
      if (typeof(specialChar) !== "boolean"){
        alert("Please select 'OK' for yes or 'cancel' for no.");
        specialCharCorrect = 0;
      } else{
        specialCharCorrect = 1;
      }
    } while (specialCharCorrect == 0);

    if (lCaseChar == false && uCaseChar == false && numericChar == false && specialChar == false){
      alert("Please select at least 1 type of character to be in your password.")
      atLeastOneTrue = 0;
    } else{
      atLeastOneTrue = 1;
    }
  } while (atLeastOneTrue == 0);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
