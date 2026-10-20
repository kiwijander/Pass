// Checks if a password is valid
function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }

  if (password.includes(" ")) {
    return false;
  }

  if (password.includes(username)) {
    return false;
  }

  return true;
}


// Elements from the page
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const showCheckbox = document.getElementById("show");
const result = document.getElementById("result")


// Check the password when the button is clicked
document.getElementById("check").addEventListener("click", function () {
  const valid = isValidPassword(passwordInput.value, usernameInput.value);

  result.textContent = valid ? "Valid password" : "Invalid password";
  result.className = valid ? "valid" : "invalid";
});

// Show or hide password
showCheckbox.addEventListener("change", function () {
  passwordInput.type = showCheckbox.checked ? "text" : "password";
});


// Quick tests
console.log(isValidPassword("qwerty12345", "sam"));
console.log(isValidPassword("sam_qwerty", "sam"));  
console.log(isValidPassword("qwerty", "sam"));  
console.log(isValidPassword("qwerty 12345", "sam"));