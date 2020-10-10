
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

function validate_inputs(prompts_from_user, key_value) {
  // Given a user has answered all of the questions.
  // Make sure they have followed then following crieteria....
  if (Object.values(prompts_from_user).indexOf(key_value) > -1) {
    alert("Valid Inputs, running pass gen")
    gen_pass(prompts_from_user)
  } else {
    alert("Found an answer not answered. Please try again.")
  }
}


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
function gen_pass(crieteria) {
  const lower = "abcdefghijklmnopqrstuvwxyz".split("");
  const upper = lower.map(letter => letter.toUpperCase());
  // Make an array of special chars from String
  const special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
  const number = "0123456789".split("");
  const inputs = {
    lower: lower, upper: upper, special: special, number: number
  }

  let valid_choices = Object.keys(crieteria).filter(choice => crieteria[choice] == true)


  const pass_array = [];
  const pass_length = parseInt(crieteria.requested_length)
  for (let i = 0; i < pass_length; i++) {
    let random_valid_choice = valid_choices[Math.floor(Math.random() * valid_choices.length)]
    let random_input = inputs[random_valid_choice]
    pass_array.push(random_input[Math.floor(Math.random() * random_input.length)])
  }
  document.getElementById("password").innerHTML = pass_array.join("")



  // Create a loop that goes until it hits the password_length and creates an array
  // Flatten the array
}


// WHEN prompted for password criteria
// THEN I choose lowercase, uppercase, numeric, and/or special characters
function prompt_user(user) {


  var include_number = confirm("Do you want numbers in your password?");
  var include_special = confirm("Do you want special characters?");
  var include_uppercase = confirm("Do you want uppercase letters?");
  var include_lowercase = confirm("Do you want lowercase letters?");

  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var requested_length = prompt("How long do you need this password?")

  if (requested_length >= 8 && requested_length <= 128) {
    console.log("Length is valid")
  } else {
    alert("Length is not valid. Please try again.")
    prompt_user(user)
  }
  validate_inputs({ requested_length: requested_length, number: include_number, special: include_special, upper: include_uppercase, lower: include_lowercase }, true)

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
generateBtn.addEventListener("click", prompt_user);
