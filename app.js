const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const mobileNav = document.getElementById("mobile-nav");
const loginSignupBtn = document.querySelectorAll(".login-signup-button");
const loginFormSignupBtn = document.getElementById("login-form-signup-btn");
const signupFormLoginBtn = document.getElementById("signup-form-login-btn");

const mobileBurger = document.getElementById("mobile-burger");
const closeMobileNav = document.getElementById("close-mobile-nav");

[loginFormSignupBtn, signupFormLoginBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    toggleForms();
  });
});

document.addEventListener("click", (e) => {
  if (e.target.id === "login-form") {
    loginForm.classList.add("hidden");
  }
  if (e.target.id === "signup-form") {
    signupForm.classList.add("hidden");
  }
});

loginSignupBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    showLoginForm();
  });
});

export function toggleForms() {
  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
}

export function showLoginForm() {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
  mobileNav.classList.add("hidden");
}

export function showMobileNavFunc() {
  mobileBurger.addEventListener("click", (e) => {
    mobileNav.classList.remove("hidden");
  });
}

export function closeMobileNavFunc() {
  closeMobileNav.addEventListener("click", (e) => {
    mobileNav.classList.add("hidden");
  });
}
showMobileNavFunc();
closeMobileNavFunc();

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target[2].innerHTML =
    "<div class='flex justify-center items-center'><div class='loader'></div></div>";
  setTimeout(() => {
    loginForm.classList.add("hidden");
    showNotification("Login successful");
    e.target[2].innerHTML = "Login";
  }, 2000);
});

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

export function showNotification(message) {
  const modal = document.getElementById("notification-modal");
  const notificationMessage = document.querySelector("#notification-modal p");
  notificationMessage.innerHTML = message;

  modal.classList.remove("translate-x-[120%]");
  modal.classList.add("translate-x-[0%]");

  // Automatically hide after 2 seconds
  setTimeout(() => {
    hideNotification();
  }, 2000);
}
export function hideNotification() {
  const modal = document.getElementById("notification-modal");
  modal.classList.add("translate-x-[120%]");
  modal.classList.remove("translate-x-[0%]");
}
