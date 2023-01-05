const navbar = document.querySelector("#sticky-nav-bar");
const activeNavLink = navbar.querySelector(".uk-navbar-nav li.uk-active a");
const navLinks = navbar.querySelectorAll(".uk-navbar-nav li:not(.uk-active) a");
// const logo = navbar.querySelector("img");

window.onscroll = () => {
  if (window.scrollY > 700) {
    navbar.classList.add("navbar-bg-white");
    activeNavLink.style.color = "black";
    // logo.src = "assets/logo_yellow.svg";
    navLinks.forEach((navLink) => {
      navLink.classList.add("uk-text-muted");
    });
  } else {
    navbar.classList.remove("navbar-bg-white");
    activeNavLink.style.color = "white";
    // logo.src = "assets/logo_black.svg";
    navLinks.forEach((navLink) => {
      navLink.classList.remove("uk-text-muted");
      navLink.style.color = "black";
    });
  }
};
