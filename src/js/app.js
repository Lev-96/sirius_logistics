import * as flsFunctions from './modules/testWebp.js';
flsFunctions.isWebp();

window.addEventListener('load', () => {
  activeNavLinks('.main-navbar__link');
  activeNavLinks('.header-menu-item');
});

//? page replacing

const activeNavLinks = function (linkClass) {
  const mainNavLinks = document.querySelectorAll(linkClass);
  const pageHref = window.location.href;
  const activeClass = linkClass.slice(1) + '_active';

  mainNavLinks.forEach((item) => {
    item.classList.remove(activeClass);
  });
  mainNavLinks.forEach((item) => {
    if (pageHref.includes(item.href)) {
      item.classList.add(activeClass);
    }
  });
  if (!pageHref.includes('html')) {
    mainNavLinks[0].classList.add(activeClass);
  }
};

/*************** BURGER MENU **************************/

const openMobileMenuBtn = document.querySelector('.burgers-btn');
const headerMenu = document.querySelector('.burger-menu');

openMobileMenuBtn.addEventListener('click', () => {
  if (openMobileMenuBtn.classList.contains('open')) {
    openMobileMenuBtn.classList.remove('open');
    headerMenu.classList.remove('active');
  } else {
    headerMenu.classList.add('active');
    openMobileMenuBtn.classList.add('open');
  }
});

// translate

const languages = {
  'home': {
    am: 'գլխավոր',
    ru: 'главное',
    en: 'home',
  },
  'about-us': {
    am: 'մեր մասին',
    ru: 'О НАС',
    en: 'ABOUT US',
  },
  'road-cargo-transportation': {
    am: 'ցամաքային բեռնափոխադրումներ',
    ru: 'СУХОПУТНЫЕ ГРУЗАПЕРЕВОЗКИ',
    en: 'Road Cargo Transportation',
  },
  'air-cargo-transportation': {
    am: 'օդային բեռնափոխադրումներ',
    ru: 'ВОЗДУШНЫЕ 	ГРУЗАПЕРЕВОЗКИ',
    en: 'Air Cargo Transportation',
  },
  'sea-freight-transportation': {
    am: 'ծովային բեռնափոխադրումներ',
    ru: 'МОРСКИЕ ГРУЗАПЕРЕВОЗКИ',
    en: 'Sea freight Transportation',
  },
  'costums-clearance-service': {
    am: 'մաքսային ձեվակերպումներ',
    ru: 'ТАМОЖЕННОЕ ОФОРМЛЕНИЕ ',
    en: 'Customs clearance service',
  },
  'contact': {
    am: 'կապ',
    ru: 'КОНТАКТЫ',
    en: 'CONTACT',
  },
};

// CHANGE LANGUAGE FUNCTION
// getAllItems(window.location.hash.slice(1).slice(0,2))

function getAllItems(params) {
  for (let key in languages) {
    if (document.querySelector(`[data-lang=${key}]`)) {
      document.querySelector(`[data-lang=${key}]`).innerText =
        languages[params][key];
    }
  }
}

if (!window.location.hash) {
  window.location.hash = window.navigator.language;
}

// language dropdown functions

const langDropBtn = document.querySelector('.top-navbar__lang-dropbtn'),
  langOptions = document.querySelectorAll('.top-navbar__lang-dropcontent'),
  langDropdown = document.querySelector('.top-navbar__lang-dropdown');
let langValue = 'am';

langDropBtn.addEventListener('click', () => {
  langDropdown.classList.add('top-navbar__lang-dropdown_active');
});

window.addEventListener('click', (e) => {
  if (e.target === langDropBtn || e.target === langDropBtn.children[0]) {
    langDropdown.classList.contains('top-navbar__lang-dropdown_active') ?
      langDropdown.classList.add('top-navbar__lang-dropdown_active') :
      langDropdown.classList.remove('top-navbar__lang-dropdown_active');
  } else {
    if (langDropdown.classList.contains('top-navbar__lang-dropdown_active')) {
      langDropdown.classList.remove('top-navbar__lang-dropdown_active');
    }
  }
});




// Send messenge to gmail

const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];

formArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0");
    validFormArr.push(el);
  }
});

form.addEventListener("input", inputHandler);
form.addEventListener("submit", formCheck);

function inputHandler({
  target
}) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.setAttribute("is-valid", "1");
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.setAttribute("is-valid", "0");
    el.style.border = "2px solid rgb(255, 0, 0)";
  }
}

function formCheck(e) {
  e.preventDefault();
  const allValid = [];
  validFormArr.forEach((el) => {
    allValid.push(el.getAttribute("is-valid"));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return acc && current;
  });
  if (!Boolean(Number(isAllValid))) {
    alert("Заполните поля правильно!");
    return;
  }
  formSubmit();
}


// async

async function formSubmit() {
  const data = serializeForm(form);
  const response = await sendData(data);
  if (response.ok) {
    let result = await response.json();
    alert(result.message);
    formReset();
  } else {
    alert("Код ошибки: " + response.status);
  }
}

function serializeForm(formNode) {
  return new FormData(form);
}

async function sendData(data) {
  return await fetch("send_mail.php", {
    method: "POST",
    body: data,
  });
}

function formReset() {
  form.reset();
  validFormArr.forEach((el) => {
    el.setAttribute("is-valid", 0);
    el.style.border = "none";
  });
}