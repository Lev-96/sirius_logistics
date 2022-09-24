import * as flsFunctions from './modules/testWebp.js';
import {translate} from './modules/translate.js'
import { activeNavLinks } from './modules/activeNavLinks.js'


// check webp
flsFunctions.isWebp();

// make active nav links function
window.addEventListener('DOMContentLoaded',() => {
  activeNavLinks('.main-navbar__link');
  activeNavLinks('.burger-menu__link');
})

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
translate()
// ***************

const form = document.querySelector('#send-mail-form'),
      inputs = form.querySelectorAll('.field,.message-field'),
      nameInp = form.querySelector('#name'),
      emailInp = form.querySelector('#name'),
      messageInp = form.querySelector('#name'),
      formData = {}

inputs.forEach(inp => {
  inp.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value
  })
})

form.addEventListener('submit', e => {
  sendToMail(e)
})

const sendToMail = async function (e) {
  e.preventDefault();
  let response = await fetch('php/sendMail.php', {
    method: 'POST',
    body: formData
  });
  if (response.ok) {
    let result = await response.json();
    alert(result.message);
    formPreview.innerHTML = '';
    form.reset();
  } else {
    alert("Ошибка");
  }
}

// // Send messenge to gmail

// const form = document.forms["form"];
// const formArr = Array.from(form);
// const validFormArr = [];
// const button = form.elements["button"];

// formArr.forEach((el) => {
//   if (el.hasAttribute("data-reg")) {
//     el.setAttribute("is-valid", "0");
//     validFormArr.push(el);
//   }
// });

// form.addEventListener("input", inputHandler);
// form.addEventListener("submit", formCheck);

// function inputHandler({target}) {
//   if (target.hasAttribute("data-reg")) {
//     inputCheck(target);
//   }
// }

// function inputCheck(el) {
//   const inputValue = el.value;
//   const inputReg = el.getAttribute("data-reg");
//   const reg = new RegExp(inputReg);
//   if (reg.test(inputValue)) {
//     el.setAttribute("is-valid", "1");
//     el.style.border = "2px solid rgb(0, 196, 0)";
//   } else {
//     el.setAttribute("is-valid", "0");
//     el.style.border = "2px solid rgb(255, 0, 0)";
//   }
// }

// function formCheck(e) {
//   e.preventDefault();
//   const allValid = [];
//   validFormArr.forEach((el) => {
//     allValid.push(el.getAttribute("is-valid"));
//   });
//   const isAllValid = allValid.reduce((acc, current) => {
//     return acc && current;
//   });
//   if (!Boolean(Number(isAllValid))) {
//     alert("Заполните поля правильно!");
//     return;
//   }
//   formSubmit();
// }


// // async

// async function formSubmit() {
//   const data = serializeForm(form);
//   const response = await sendData(data);
//   if (response.ok) {
//     let result = await response.json();
//     alert(result.message);
//     formReset();
//   } else {
//     alert("Код ошибки: " + response.status);
//   }
// }

// function serializeForm(formNode) {
//   return new FormData(form);
// }

// async function sendData(data) {
//   return await fetch("send_mail.php", {
//     method: "POST",
//     body: data,
//   });
// }

// function formReset() {
//   form.reset();
//   validFormArr.forEach((el) => {
//     el.setAttribute("is-valid", 0);
//     el.style.border = "none";
//   });
// }