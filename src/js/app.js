import * as flsFunctions from "./modules/testWebp.js"
flsFunctions.isWebp()



window.addEventListener("load", () => {
  activeNavLinks('.main-navbar__link')
  activeNavLinks('.mobile-nav__link')
})

//? page replacing


const activeNavLinks = function (linkClass) {
  const mainNavLinks = document.querySelectorAll(linkClass)
  const pageHref = window.location.href
  const activeClass = linkClass.slice(1) + '_active'

  mainNavLinks.forEach(item => {
    item.classList.remove(activeClass)
  })
  mainNavLinks.forEach(item => {
    debugger;
    if (pageHref.includes(item.href)) {
      item.classList.add(activeClass)
    }
    else {
      mainNavLinks[0].classList.add(activeClass)
    }
  })
}


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