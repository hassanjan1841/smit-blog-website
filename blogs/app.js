import { closeMobileNavFunc, showMobileNavFunc, showPosts } from "../utils.js";

showMobileNavFunc();
closeMobileNavFunc();

const allBlogPosts = document.getElementById("all-blogs");
showPosts(allBlogPosts);
