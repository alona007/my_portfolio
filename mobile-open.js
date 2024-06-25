document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".mobile-open-btn");
  const closeBtn = document.querySelector(".mobile-menu-close-btn");
  const mobileMenuContainer = document.querySelector(".mobile-menu-container");
  const menuLinks = document.querySelectorAll(".mobile-menu-nav-link");
  const noScroll = document.querySelector("html");

  function openMobileMenu() {
    mobileMenuContainer.classList.remove("close");
    mobileMenuContainer.classList.add("open");
    noScroll.classList.add("no-scroll");
  }

  function closeMobileMenu() {
    mobileMenuContainer.classList.remove("open");
    mobileMenuContainer.classList.add("close");
    noScroll.classList.remove("no-scroll");
  }

  openBtn.addEventListener("click", openMobileMenu);
  closeBtn.addEventListener("click", closeMobileMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });
});
