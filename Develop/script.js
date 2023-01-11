// Assignment code here
function generatePassword(){
  //Variable declaration.
  var numCorrect = 0;
  var lCaseCorrect = 0;
  var uCaseCorrect = 0;
  var numericCharCorrect = 0;
  var specialCharCorrect = 0;
  var atLeastOneTrue = 0;
  var lCaseCharSet = "";
  var uCaseCharSet = "";
  var numericCharSet = "";
  var specialCharSet = "";
  var charSet = "";
  var retVal = "";
  //Ask for all the different attributes of the password to be generated and check that they are entered in correctly.
  do{
    //Get the length of the password.
    var numCharPrompt = prompt("Please enter in the number of characters required for the password (8 min - 128 max):");
    //Need to parseInt here due to the prompt returning a string.
    var numChar = parseInt(numCharPrompt);
    //Check if the value entered in to the prompt was correct (between 8 and 128 and a numeric value). If not, this repeats until a correct value is entered.
    //parseInt will return NaN if the user enters in a non-numeric value.
    if (isNaN(numChar) === true){
      alert("Please only enter in a number between 8 and 128.");
      numCorrect = 0;
    } else if (numChar > 128){
      alert("Please only enter in a number between 8 and 128.");
      numCorrect = 0;
    } else if (numChar < 8){
      alert("Please only enter in a number between 8 and 128.");
      numCorrect = 0;
    } else{
      numCorrect = 1;
    }
  } while (numCorrect == 0);
  //This do while loop is if the user decides to say no for all types of characters in the password. You can't generate a password without characters! :P
  do{
    //Checks if the user has selected 'OK' (yes) or 'Cancel' (no). If they somehow entered in or selected a third value, an alert pops up.
    do{
      var lCaseChar = confirm("Do you want your password to include lowercase characters?\n('OK' = yes, 'Cancel' = no)");
      if (typeof(lCaseChar) !== "boolean"){
        alert("Please select 'OK' for yes or 'cancel' for no.");
        lCaseCorrect = 0;
      } else{
        lCaseCorrect = 1;
      }
    } while (lCaseCorrect == 0);
    //Checks if the user has selected 'OK' (yes) or 'Cancel' (no). If they somehow entered in or selected a third value, an alert pops up.
    do{
      var uCaseChar = confirm("Do you want your password to include uppercase characters?\n('OK' = yes, 'Cancel' = no)");
      if (typeof(uCaseChar) !== "boolean"){
        alert("Please select 'OK' for yes or 'cancel' for no.");
        uCaseCorrect = 0;
      } else{
        uCaseCorrect = 1;
      }
    } while (uCaseCorrect == 0);
    //Checks if the user has selected 'OK' (yes) or 'Cancel' (no). If they somehow entered in or selected a third value, an alert pops up.
    do{
      var numericChar = confirm("Do you want your password to include numeric characters?\n('OK' = yes, 'Cancel' = no)");
      if (typeof(numericChar) !== "boolean"){
        alert("Please select 'OK' for yes or 'cancel' for no.");
        numericCharCorrect = 0;
      } else{
        numericCharCorrect = 1;
      }
    } while (numericCharCorrect == 0);
    //Checks if the user has selected 'OK' (yes) or 'Cancel' (no). If they somehow entered in or selected a third value, an alert pops up.
    do{
      var specialChar = confirm("Do you want your password to include special characters?\n('OK' = yes, 'Cancel' = no)");
      if (typeof(specialChar) !== "boolean"){
        alert("Please select 'OK' for yes or 'cancel' for no.");
        specialCharCorrect = 0;
      } else{
        specialCharCorrect = 1;
      }
    } while (specialCharCorrect == 0);
    //If the user selected 'Cancel' (no) for all the character types, this will cause the loop to repeat after the alert is displayed.
    if (lCaseChar == false && uCaseChar == false && numericChar == false && specialChar == false){
      alert("Please select at least 1 type of character to be in your password.");
      atLeastOneTrue = 0;
    } else{
      atLeastOneTrue = 1;
    }
  } while (atLeastOneTrue == 0);

  //Setting up the character sets for each true case.
  if (lCaseChar == true){
    lCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
  }
  if (uCaseChar == true){
    uCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numericChar == true){
    numericCharSet = "0123456789";
  }
  if (specialChar == true){
    specialCharSet = " !#$%&'()*+,./:;<=>?@[]^_`{|}~"; //backslash (\) and quotes (") not included as they cause the string to not work properly.
  }

  //Add all the character sets together into 1 string.
  charSet = lCaseCharSet + uCaseCharSet + numericCharSet + specialCharSet;
  for (var i = 0; i < numChar; ++i) {
    //Selects a random value from the charSet and adds it to the current return value
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
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
