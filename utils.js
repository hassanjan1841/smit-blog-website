import { collection, db, getDocs, limit } from "./firebaseConfig.js";

const mobileNav = document.getElementById("mobile-nav");

const mobileBurger = document.getElementById("mobile-burger");
const closeMobileNav = document.getElementById("close-mobile-nav");

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

export function showPosts(
  postsContainer,
  queryPara = collection(db, "articles")
) {
  postsContainer.innerHTML = "";

  getDocs(queryPara)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data);

        postsContainer.innerHTML += `<div class="p-4 md:w-1/3">
              <div
                class="h-full border-2 border-gray-800 rounded-lg overflow-hidden"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="${data.image}"
                  alt="blog"
                />
                <div class="p-6">
                  <h2
                    class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
                  >
                    ${data.category}
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    ${data.title}
                  </h1>
                  <p class="leading-relaxed mb-3">
                  ${data.description}
                  </p>
                  <div class="flex items-center flex-wrap">
                    <a id="${doc.id}"
                      class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 learnMore"
                      >Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span
                      class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800"
                    >
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle></svg
                      >1.2K
                    </span>
                    <span
                      class="text-gray-500 inline-flex items-center leading-none text-sm"
                    >
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                        ></path></svg
                      >6
                    </span>
                  </div>
                </div>
              </div>
            </div>`;
      });
    })
    .then(() => {
      const learnMoreButtons = document.querySelectorAll(".learnMore");
      learnMoreButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const id = e.target.id;
          localStorage.setItem("articleId", id);
          window.location.href = "/singleBlog/index.html";
        });
      });
    });
}
