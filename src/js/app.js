import * as flsFunctions from "./modules/testWebp.js"
flsFunctions.isWebp()


//? page replacing

window.addEventListener("load", () => {
  const pageHref = window.location.href
  console.log(pageHref);
})

/*************** BURGER MENU **************************/ 

const openMobileMenuBtn = document.querySelector(".device-menu");
const headerMenu = document.querySelector(".header-nav");

openMobileMenuBtn.addEventListener("click", () => {
  if (openMobileMenuBtn.classList.contains("open")) {
    openMobileMenuBtn.classList.remove("open");
    headerMenu.classList.remove("active");
  } else {
    headerMenu.classList.add("active");
    openMobileMenuBtn.classList.add("open");
  }
})