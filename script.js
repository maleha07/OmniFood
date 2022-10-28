console.log("Hello World");

const nm='maleha';
console.log(nm)

const h1 = document.querySelector(".heading-primary")
console.log(h1);

const yearEL = document.querySelector('.year');
const currentyear = new Date().getFullYear();
yearEL.textContent = currentyear;
// ******************************
const btnavel= document.querySelector("btn-mobile-nav");
const headel = document.querySelector(".header");

btnavel.addEventListener("click",function()
{
headel.classList.toggle("nav-open");
}
);

// MOBILE NAVIGATION
window.onload=function(){

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
}

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
  
  // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js