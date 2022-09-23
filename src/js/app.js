import * as flsFunctions from "./modules/testWebp.js"
flsFunctions.isWebp()


//? page replacing

window.addEventListener("load", () => {
  const mainNavLinks = document.querySelectorAll('.main-navbar__link')
  const pageHref = window.location.href
  console.log(mainNavLinks);
  mainNavLinks.forEach(item => {
    item.classList.remove('main-navbar__link_active')
  })
  mainNavLinks.forEach(item => {
    if (pageHref.includes(item.href)) {
      item.classList.add('main-navbar__link_active')
    }
  })
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