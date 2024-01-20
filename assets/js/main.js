const toggleColorTheme = document.querySelector("#toggle_color_theme");
const themeIcon = document.querySelector("#theme_icon");
const themedComponent = document.querySelectorAll(".themed__section");
const navItems = document.querySelectorAll(".nav__item");

/*===============TEXT TYPING EFFECT=================*/
let typedName = new Typed("#name", {
  strings: ["Omar Kebe"],
  backSpeed: 0,
  backDelay: 500,
  startDelay: 1000,
  typeSpeed: 50,
  loop: true,
});

let typedAMEA = new Typed("#amea", {
  strings: ["AMEA"],
  backSpeed: 0,
  backDelay: 600,
  startDelay: 1000,
  typeSpeed: 150,
  loop: true,
});

/*==================CHANGE THEME LIGHT TO DARK=====================*/
const dayNight = document.querySelector("#theme_icon");
toggleColorTheme.addEventListener("click", () => {
  dayNight.classList.toggle("fa-sun");
  dayNight.classList.toggle("fa-moon");
  themedComponent.forEach((theme) => {
    theme.classList.toggle("theme_toggled");
  });
});
window.addEventListener("load", () => {
  if (themedComponent[0].classList.contains("theme_toggled")) {
    dayNight.classList.add("fa-sun");
  } else {
    dayNight.classList.add("fa-moon");
  }
});
/*=================TOGGLE ACTIVE CLASS IN NAVBAR================*/
navItems.forEach((navItem) => {
  navItem.addEventListener("click", function () {
    navItems.forEach((nav) => {
      nav.classList.remove("active");
    });
    this.classList.add("active");
  });
});
