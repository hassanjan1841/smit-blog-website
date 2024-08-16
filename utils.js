const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const mobileNav = document.getElementById("mobile-nav");

const mobileBurger = document.getElementById("mobile-burger");
const closeMobileNav = document.getElementById("close-mobile-nav");

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

export function loginSignupBtnRun() {
  const loginFormSignupBtn = document.getElementById("login-form-signup-btn");
  const signupFormLoginBtn = document.getElementById("signup-form-login-btn");
  const loginSignupBtn = document.querySelectorAll(".login-signup-button");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  document.addEventListener("click", (e) => {
    if (e.target.id === "login-form") {
      loginForm.classList.add("hidden");
    }
    if (e.target.id === "signup-form") {
      signupForm.classList.add("hidden");
    }
  });
  [loginFormSignupBtn, signupFormLoginBtn].forEach((btn) => {
    btn.addEventListener("click", (e) => {
      toggleForms();
    });
  });
  loginSignupBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      showLoginForm();
    });
  });
}
