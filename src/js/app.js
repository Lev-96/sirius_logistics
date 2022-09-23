import * as flsFunctions from "./modules/testWebp.js"
flsFunctions.isWebp()



window.addEventListener("load", () => {
  activeNavLinks('.main-navbar__link')
  activeNavLinks('.header-menu-item')
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
    if (pageHref.includes(item.href)) {
      item.classList.add(activeClass)
    }

  })
  if (!pageHref.includes('html')) {
    mainNavLinks[0].classList.add(activeClass)
  }
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



// translate


const languages = {
  'home': {
    am: 'գլխավոր',
    ru: 'главное',
    en: 'home'
  },
  'about-us': {
    am: 'մեր մասին',
    ru: 'О НАС',
    en: 'ABOUT US'
  },
  'road-cargo-transportation': {
    am: 'ցամաքային բեռնափոխադրումներ',
    ru: 'СУХОПУТНЫЕ ГРУЗАПЕРЕВОЗКИ',
    en: 'Road Cargo Transportation'
  },
  'air-cargo-transportation': {
    am: 'օդային բեռնափոխադրումներ',
    ru: 'ВОЗДУШНЫЕ 	ГРУЗАПЕРЕВОЗКИ',
    en: 'Air Cargo Transportation'
  },
  'sea-freight-transportation': {
    am: 'ծովային բեռնափոխադրումներ',
    ru: 'МОРСКИЕ ГРУЗАПЕРЕВОЗКИ',
    en: 'Sea freight Transportation'
  },
  'costums-clearance-service': {
    am: 'մաքսային ձեվակերպումներ',
    ru: 'ТАМОЖЕННОЕ ОФОРМЛЕНИЕ ',
    en: 'Customs clearance service'
  },
  'contact': {
    am: 'կապ',
    ru: 'КОНТАКТЫ',
    en: 'CONTACT'
  },

}


// CHANGE LANGUAGE FUNCTION
// getAllItems(window.location.hash.slice(1).slice(0,2))

function getAllItems(params) {
  for (let key in languages) {
    if (document.querySelector(`[data-lang=${key}]`)) {
      document.querySelector(`[data-lang=${key}]`).innerText = languages[params][key]
    }
  }
}


if (!window.location.hash) {
  window.location.hash = window.navigator.language
}



// language dropdown functions

const langDropBtn = document.querySelector('.top-navbar__lang-dropbtn'),
  langOptions = document.querySelectorAll('.top-navbar__lang-dropcontent'),
  langDropdown = document.querySelector('.top-navbar__lang-dropdown')
let langValue = 'am'


langDropBtn.addEventListener('click', () => {
  langDropdown.classList.add('top-navbar__lang-dropdown_active')
})

window.addEventListener('click', (e) => {
  if (e.target === langDropBtn || e.target === langDropBtn.children[0]) {
    langDropdown.classList.contains('top-navbar__lang-dropdown_active') ? langDropdown.classList.add('top-navbar__lang-dropdown_active') : langDropdown.classList.remove('top-navbar__lang-dropdown_active')

  } else {
    if (langDropdown.classList.contains('top-navbar__lang-dropdown_active')) {
      langDropdown.classList.remove('top-navbar__lang-dropdown_active')
    }

  }
})