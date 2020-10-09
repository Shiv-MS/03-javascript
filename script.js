
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


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
function gen_pass(crieteria) {
  prompt_user()
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabet_cap = alphabet.map(letter => letter.toUpperCase());

  // Make an array of special chars from String
  const special_characters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

  const pass_array = [];


  // Create a loop that goes until it hits the password_length and creates an array
  for (var i = 0; i < prompts_from_user; i++) {
    
  }
  // Flatten the array
}


// WHEN prompted for password criteria
// THEN I choose lowercase, uppercase, numeric, and/or special characters
function prompt_user() {
  var include_number = confirm("Do you want numbers in your password?");
  var include_special = confirm("Do you want special characters?");
  var include_uppercase = confirm("Do you want uppercase letters?");
  var include_lowercase = confirm("Do you want lowercase letters?");

  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var requested_length = prompt("How long do you need this password?")

  validate_inputs({})
}



// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  gen_pass()

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
