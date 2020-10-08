
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
function validate_inputs(prompts_from_user) {
  if (prompts_from_user.password_length > 8 && prompts_from_user.password_length < 128) {
    console.log("Length is valid")
  }
  // Given a user has answered all of the questions.
  // Make sure they have followed then following crieteria....
  if (Object.values(prompts_from_user).indexOf(true) > -1) {
    console.log("User input validated")
    gen_pass(prompts_from_user)
  }
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