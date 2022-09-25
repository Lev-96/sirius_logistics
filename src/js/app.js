import * as flsFunctions from './modules/testWebp.js';
import {
  translate
} from './modules/translate.js'
import {
  activeNavLinks
} from './modules/activeNavLinks.js'


// check webp
flsFunctions.isWebp();

// make active nav links function
window.addEventListener('DOMContentLoaded', () => {
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

const form = document.querySelector('#send-mail-form');

let isLoading = false;

const popup = document.querySelector('.popup')
const popupSuccess = document.querySelector('.popup__success')
const popupFail = document.querySelector('.popup__fail')
const popupLoading = document.querySelector('.popup__loading')
const popupBtn = document.querySelector('.popup__close-btn')
const popupBackdrop = document.querySelector('.popup__backdrop')
const popupActiveClass = 'popup__active'
const popupContentActiveClass = 'popup__content_active'

const classChange = function(element,activeClass,isRemove){
  isRemove ? element.classList.remove(activeClass) : element.classList.add(activeClass)
}

const closePopup = function() {
  classChange(popup,popupActiveClass,true)
  classChange(popupLoading,popupContentActiveClass,true)
  classChange(popupFail,popupContentActiveClass,true)
  classChange(popupSuccess,popupContentActiveClass,true)

}

popupBtn.addEventListener('click', ()=>{
  closePopup()
})

popupBackdrop.addEventListener('click', (e)=>{
  if(e.currentTarget == e.target){
    closePopup()

  }
})

// Fetch send

form.addEventListener('submit', e => {
  sendToMail(e)
})

const sendToMail = async function (e) {
  e.preventDefault();
  const formData = new FormData(form)
  debugger
  classChange(popup,popupActiveClass,false)
  classChange(popupLoading,popupContentActiveClass,false)

  try {

    let response = await fetch('./php/sendMail.php', {
      method: 'post',
      body: formData
    });
    if (response.ok) {
      let result = await response.json();
  classChange(popupLoading,popupContentActiveClass,true)
  classChange(popupSuccess,popupContentActiveClass,false)
      
      form.reset();
    } else {
  classChange(popupLoading,popupContentActiveClass,true)
  classChange(popupFail,popupContentActiveClass,false)
    }
  } catch (error) {
    console.log(error)
  classChange(popupLoading,popupContentActiveClass,true)
  classChange(popupFail,popupContentActiveClass,false)
  }
}