/*  Navbar toggle  */

const menuBtn = document.querySelector("#menu");
const smNav = document.querySelector(".sm__nav");
menuBtn.addEventListener("click" , () => {
    smNav.classList.toggle("flex");
})

smNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click" , ()=> {
        smNav.classList.toggle("flex");
    })
})