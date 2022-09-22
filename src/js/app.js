import * as flsFunctions from "./modules/testWebp.js"
flsFunctions.isWebp()


//? page replacing

window.addEventListener("load", () => {
   const pageHref = window.location.href 
   console.log(pageHref);
})