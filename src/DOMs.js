const DOMHelpers = () => {
  const hamburgerMenu = document.querySelector(".nav-toggle");
  const collapseMenu = document.querySelector(".nav-collapse");
  const collapseBackground = document.querySelector(".menu-open-background");
  const hiddenItems = document.querySelectorAll(".hidden");

  return {
    hamburgerMenu,
    collapseMenu,
    collapseBackground,
    hiddenItems,
  };
};

export default DOMHelpers;
