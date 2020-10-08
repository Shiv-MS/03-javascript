
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
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabet_cap = alphabet.map(letter => letter.toUpperCase());

  // Make an array of special chars from String
  const special_characters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

  const pass_array = [];


  // Create a loop that goes until it hits the password_length and creates an array
  for (i = 0; i < prompts_from_user.password_length; i++) {
    var index = Math.floor(Math.random() * prompts_from_user.password_length);
    var digit = passArray[index];
    results.push(pass_array);
  }
  // Flatten the array
  console.log(special_characters)
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