import"./hoisted.D58I9gma.js";document.addEventListener("astro:after-swap",e=>{const o=Number(localStorage.getItem("scrollPosition"));o&&window.scrollTo(0,o)});document.addEventListener("astro:page-load",e=>{localStorage.setItem("scrollPosition",null),document.querySelectorAll(".sidebar-link").forEach(t=>{t.addEventListener("click",l=>{localStorage.setItem("scrollPosition",window.scrollY.toString())})})});