export const translate = function () {
   const langDropBtn = document.querySelector('.top-navbar__lang-dropbtn'),
      langOptions = document.querySelectorAll('.top-navbar__lang-dropcontent'),
      langDropdown = document.querySelector('.top-navbar__lang-dropdown'),
      languages = {
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
         'main-big-title': {
            am: '"Սիրիուս Լոջիստիկս" ՍՊԸ - Ձեր վստահելի գործընկերը լոգիստիկայի աշխարհում',
            ru: 'ООО "Сириус Лоджистикс" - Ваш надежный партнер в мире логистики',
            en: '"Sirius Logistics" LLC - Your reliable partner in the world of logistics',
         },
         'our-services': {
            am: 'Մեր ծառայությունները',
            ru: 'НАШИ УСЛУГИ',
            en: 'Our services',
         },
         'our-services__subtitle': {
            am: 'Սիրիուս Լոջիստիկս-ն առաջարկում է լոգիստիկ ծառայությունների լայն ընտրանի․',
            ru: '"Сириус Лоджистикс" предлагает широкий спектр логистических услуг:',
            en: 'Sirius Logistics offers a wide range of logistics services:',
         },
         'backup-services': {
            am: 'պահեստային ծառայություններ',
            ru: 'СКЛАДСКИЕ УСЛУГИ',
            en: 'Warehousing services',
         }, 'groupage-cargo-transportation': {
            am: 'հավաքական բեռների փոխադրում',
            ru: 'ПЕРЕВОЗКИ СБОРНЫХ ГРУЗОВ',
            en: 'Groupage cargo transportation',
         }, 'company-name': {
            am: 'Սիրիուս Լոջիստիկս ՍՊԸ',
            ru: 'ООО «Сириус Логджистикс» ',
            en: 'Sirius Logistics LLC',
         },'address': {
            am: 'ՀՀ, ք․ Երևան, 0082, Բարձրաբերդի 27/1',
            ru: 'РА,Ереван, 0082, ул. Бардзраберд 27/1',
            en: 'RA, Yerevan, 0082, Bardzraberd str. 27/1',
         },'phone1': {
            am: 'Հեռ։ +374․43․470․370',
            ru: 'Тел. +374.43.470.370',
            en: 'Тел. +374.77.788.080',
         },'phone2': {
            am: 'Հեռ։ +374.77.788.080',
            ru: 'Tel. +374.43.470.370',
            en: 'Tel. +374.77.788.080',
         },'email': {
            am: 'Էլ․ փոստ։ ',
            ru: 'Эл. Почта: ',
            en: 'Email: ',
         },'work-time': {
            am: 'Աշխ․ ժամեր։ Երկ․-Ուրբ․։ 09։00-18։00',
            ru: 'Раб.часы: Пн.-Пт. 09:00-18:00',
            en: 'Working hours: Mon.-Fri. 09:00-18:00',
         },
         'name': {
            am: 'Անուն:',
            ru: 'Имя:',
            en: 'Name:',
         },
         'message': {
            am: 'Հաղորդագրություն:',
            ru: 'Сообщение:',
            en: 'Message:',
         },
         'submit-btn': {
            am: 'Ուղարկել',
            ru: 'Отправить',
            en: 'Send',
         },
         'about-info': {
            am: '"Սիրիուս Լոջիստիկս" ՍՊԸ-ն հիմնադրվել է 2022թ․-ին։ Ընկերության նպատակը իր հաճախորդներին որակյալ լոգիստիկ ծառայությունների մատուցումն է՝ անկախ դրանց տեսակից։',
            ru: 'ООО «Сириус Лоджистикс» основано в 2022 году. Цель компании – оказать своим клиентам качественные логистические услугы, независимо от их типа.',
            en: `"Sirius Logistics" LLC was founded in 2022. The company's goal is to provide its customers quality logistic services, regardless of their type.`,
         }, 'road-cargo-info1': {
            am: `Ցամաքային բեռնափոխադրումը իր մատչելիության, օպերատիվության, հուսալիության, ինչպես նաև ամբողջ աշխարհում ավտոճանապարհների
                  ճյուղավորված ցանցի շնորհիվ բեռնափոխադրման ամենաճանաչված տեսակներից մեկն է։`,
            ru: `Сухопутные грузаперевозки являются одним из самых популярных видов грузоперевозок благодаря своей доступности, оперативности, надежности, а также разветвленной сети автомобильных дорог по всему миру.`,
            en: `Road Cargo transportation is one of the most popular modes of transportation due to its accessibility, efficiency, reliability, and extensive network of highways around the world.
`,
         },
         'road-cargo-info2': {
            am: `Ցամաքային բեռնափոխադրումների աշխարհագրությունը․`,
            ru: `География сухопутных грузаперевозок.`,
            en: `Geography of road cargo transportation.`,
         },'road-cargo-info3': {
            am: `• ավտոմոբիլային բեռնափոխադրումներ դեպի ՌԴ, ԱՊՀ երկրներ և հակառակ ուղղությամբ`,
            ru: `• автомобильные грузоперевозки в РФ, страны СНГ и в обратном направлении`,
            en: `• road transportation to the Russian Federation, CIS countries and in the opposite direction
`,
         },'road-cargo-info4': {
            am: `• ավտոմոբիլային բեռնափոխադրումներ դեպի Եվրոպա և հակառակ ուղղությամբ`,
            ru: `• автомобильные грузоперевозки в и из Европы`,
            en: `• road transportation to and from Europe
`,
         },'road-cargo-info5': {
            am: `• ներքին բեռնափոխադրումներ Հայաստանի տարածքում`,
            ru: `• внутренние грузоперевозки по территории Армении`,
            en: `• internal cargo transportation in the territory of Armenia
`,
         }, 'road-cargo-info6': {
            am: `Մեր կողմից առաջարկվող ցամաքային բեռնափոխադրման ծառայությունները ներառում են`,
            ru: `Предлагаемые нами услуги по сухопутным перевозкам включают в себя:`,
            en: `Our road cargo services include:`,
         },'road-cargo-info7': {
            am: `• Ստանդարտ բեռների փոխադրում`,
            ru: `• Стандартные грузовые перевозки`,
            en: `• Standard freight`,
         }, 'road-cargo-info8': {
            am: `• Ջերմային ռեժիմ պահանջող բեռներ`,
            ru: `• Грузовые перевозки, требующие тепловой режим`,
            en: `• Loads requiring thermal regime`,
         },'road-cargo-info9': {
            am: `• Ջերմային ռեժիմ պահանջող բեռներ`,
            ru: `• Перевозка опасных грузов (ADR)`,
            en: `• Transportation of dangerous goods (ADR)`,
         },
      };


   // CHANGE LANGUAGE FUNCTION

   const getAllItems = function (params) {
      langDropBtn.querySelector('img').src = document.querySelector(`[data-value=${params}]`).querySelector('img').src
      for (let key in languages) {
         if (document.querySelector(`[data-lang=${key}]`)) {
            document.querySelectorAll(`[data-lang=${key}]`).forEach(item => item.innerText = languages[key][params])
         }
      }
   }

   if (!window.location.hash && !sessionStorage.getItem("language")) {
      window.location.hash = 'am';
   } else if (!window.location.hash && sessionStorage.getItem("language")) {
      window.location.hash = sessionStorage.getItem("language");
   }
   getAllItems(window.location.hash.slice(1).slice(0, 2))


   // language dropdown functions



   // ? language dropdown activeate functionality
   document.querySelector('body').addEventListener('click', (e) => {
      const activeClass = 'top-navbar__lang-dropdown_active';
      if (!langDropdown.classList.contains(activeClass)) {
         if (e.target === langDropBtn || e.target === langDropBtn.children[0]) {
            langDropdown.classList.add(activeClass)
         }
      } else {
         langDropdown.classList.remove(activeClass)
      }
   })
   // ? lang option click event
   langOptions.forEach(item => {
      item.addEventListener("click", (e) => {

         getCurrentLanguage(e)
      })
   })

   const getCurrentLanguage = function (e) {
      const value = e.currentTarget.dataset.value
      sessionStorage.setItem("language", value);
      window.location.hash = value
      getAllItems(value)
   }
}

