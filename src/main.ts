if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", getNavbarHeight);
  } else {
    getNavbarHeight();
  }
}
function getNavbarHeight() {
  const navToggle = document.querySelector<HTMLElement>(".nav-toggle");
  const links = document.querySelector<HTMLElement>(".nav-links");
  const linksContainer =
    document.querySelector<HTMLElement>(".links-container");

  if (!navToggle || !links || !linksContainer) {
    console.warn("Navbar elements not found");
    return;
  }
  navToggle.addEventListener("click", function () {
    const linksHeight = links.scrollHeight;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
    } else {
      linksContainer.style.height = "0px";
    }
  });
}
