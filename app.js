// import { add } from "nodemon/lib/rules/index.js";
// import { query } from "express";
import { collection, db, getDocs, limit, query } from "./firebaseConfig.js";
import { closeMobileNavFunc, showMobileNavFunc, showPosts } from "./utils.js";

showMobileNavFunc();
closeMobileNavFunc();

const recentPosts = document.getElementById("recent-posts");
showPosts(recentPosts, query(collection(db, "articles"), limit(3)));
  