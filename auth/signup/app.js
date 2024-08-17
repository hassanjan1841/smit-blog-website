import { closeMobileNavFunc, showMobileNavFunc } from "../../utils.js";

showMobileNavFunc();
closeMobileNavFunc();

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target[6].innerHTML =
    "<div class='flex justify-center items-center'><div class='loader'></div></div>";
  setTimeout(() => {
    e.target[6].innerHTML = "Sign up";
    signupForm.classList.add("hidden");
    showNotification("Account created successfully");
  }, 2000);
});
