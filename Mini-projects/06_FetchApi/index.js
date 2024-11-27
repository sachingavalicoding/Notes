/*  Navbar toggle  */

const menuBtn = document.querySelector("#menu");
const smNav = document.querySelector(".sm__nav");
menuBtn.addEventListener("click" , () => {
    smNav.classList.toggle("flex");
})