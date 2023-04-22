const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const confirmDiv = document.querySelector(".confirm-div");
const errorText = document.createElement("p");
errorText.classList.add("error-text");
errorText.innerHTML = "&nbsp;";
confirmDiv.appendChild(errorText);


let passwordText = "";
let confirmText = "";

password.addEventListener("input", setPassword);

confirmPassword.addEventListener("input", setConfirm);

// set password variables
function setPassword(e) {
  passwordText = e.target.value;
  validatePassword(passwordText, confirmText);
}

function setConfirm(e) {
  confirmText = e.target.value;
  validatePassword(passwordText, confirmText);
}

//validate the passwords
function validatePassword(passwordText, confirmText) {
  // exit if a string is empty
  if (passwordText === "" || confirmText === "") return;

  if (passwordText !== confirmText) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    errorText.innerHTML = "Passwords do not match"
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    errorText.innerHTML = "&nbsp;";
  }
}
