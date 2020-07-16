import screenWidth from "./window-size.js";

const navbar = (() => {
  window.onload = screenWidth();
  window.addEventListener("resize", screenWidth);
})();

export { navbar };
