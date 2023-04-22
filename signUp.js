const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

let passwordText = "";
let confirmText = "";

password.addEventListener("input", setPassword);

confirmPassword.addEventListener("input", setConfirm);

function validatePassword(passwordText, confirmText) {
  if (passwordText === "" || confirmText === "") return;

  if (passwordText !== confirmText) {
    console.log("Passwords don't match");
  } else {
    console.log("Passwords match!")
  }
}

function setPassword(e) {
  passwordText = e.target.value;
  validatePassword(passwordText, confirmText);
}

function setConfirm(e) {
  confirmText = e.target.value;
  validatePassword(passwordText, confirmText);
}
