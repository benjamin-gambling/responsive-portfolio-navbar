import DOMHelpers from "./DOMs";

const {
  hamburgerMenu,
  collapseMenu,
  collapseBackground,
  hiddenItems,
} = DOMHelpers();

const collapseToggle = [collapseMenu, collapseBackground];

const toggleMenu = () => {
  collapseMenu.classList.contains("show") === false
    ? collapseToggle.forEach((e) => e.classList.add("show"))
    : collapseToggle.forEach((e) => e.classList.remove("show"));
};

const hiddenClasses = () => {
  screen.width < 875
    ? hiddenItems.forEach((item) => item.classList.add("show"))
    : hiddenItems.forEach((item) => item.classList.remove("show"));
};

const smallScreen = () => {
  hiddenClasses();
  collapseMenu.classList.add("collapse");
  hamburgerMenu.addEventListener("click", toggleMenu);
};

const bigScreen = () => {
  hiddenClasses();
  collapseMenu.classList.remove("collapse");
  collapseBackground.classList.remove("show");
  hamburgerMenu.removeEventListener("click", toggleMenu);
};

const screenWidth = () => (screen.width < 875 ? smallScreen() : bigScreen());

export default screenWidth;
