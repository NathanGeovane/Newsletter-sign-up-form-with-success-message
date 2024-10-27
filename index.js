const submitBtn = document.querySelector(".form-btn");
const ctaPage = document.querySelector(".cta");
const errorMessage = document.querySelector(".error-message");
const successPage = document.querySelector(".success");
const successUserEmail = document.querySelector(".user-email");
const dismissBtn = document.querySelector(".success-btn");
const input = document.querySelector(".form-input");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail();
});
const oldErrorMessage = errorMessage.textContent;
function validateEmail() {
  const emailInput = document.querySelector(".form-input").value;
  console.log(emailInput);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(oldErrorMessage);
  if (emailPattern.test(emailInput)) {
    ctaPage.classList.add("hidden");
    successPage.classList.remove("hidden");
    successUserEmail.textContent = emailInput;
    dismissBtn.addEventListener("click", () => {
      location.reload();
    });
  } else {
    errorMessage.classList.remove("hidden");

    errorMessage.textContent = oldErrorMessage;
    input.classList.add("form-input--error");
    input.value = emailInput.replace("@", "#");
  }
  if (emailInput === "") {
    errorMessage.classList.remove("hidden");

    errorMessage.textContent = "Please enter a email";
  }
}

input.addEventListener("click", () => {
  input.classList.remove("form-input--error");
  errorMessage.classList.add("hidden");
});
