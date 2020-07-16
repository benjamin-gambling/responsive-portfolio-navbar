import screenWidth from "./window-size.js";

window.onload = screenWidth();
window.addEventListener("resize", screenWidth);
