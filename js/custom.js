const anchorHash = window.location.hash;
const navbar = document.querySelector("#sticky-nav-bar");
const navLinks = navbar.querySelectorAll(".uk-navbar-nav li a");
let activeNavLink;

if (anchorHash) {
    activeNavLink = navbar.querySelector("[href='" + anchorHash + "']")
    activeNavLink.classList.add('active')
}

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
        activeNavLink = navbar.querySelector(".uk-navbar-nav li a.nav-link.active");
        if (activeNavLink) {
            activeNavLink.classList.remove('active')
        }
        
        e.target.classList.add('active')
    })
});

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-bg-yellow");
  } else {
    navbar.classList.remove("navbar-bg-yellow");
  }
};
