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
